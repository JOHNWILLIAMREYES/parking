const stayService = module.exports;
const crypto = require('crypto');
const stayRepository = require('../repositories/stayRepository');
const vehicleTypeService = require('../services/vehicleTypeService');
const vehicleService = require('../services/vehicleService');

stayService.checkin = async (vehicle) => {
    const newStay = {
        idStay: crypto.randomBytes(16),
        checkin: new Date().getTime(),
        checkout: null,
        duration: 0.0,
        cost: 0.0,
        vehicle,
        stage: 'Open'
    }
    try {
        await stayRepository.createStay(newStay);
        return { message: 'Success' };
    } catch (error) {
        return { message: `Error al crear el ingreso -${error}` };
    }
};
stayService.checkout = async (vehicle) => {
    const stays = await stayRepository.listStaysForLicensePLate(vehicle);
    let currentStay = stays.find(r => r.stage === 'Open');
    const { typeVehicle } = await vehicleService.getvehicleForLicensePlate(vehicle);
    const { minuteCost } = await vehicleTypeService.getvehicleTypeForName(typeVehicle);
    const checkoutTime = new Date().getTime();
    const duration = Math.ceil((checkoutTime - currentStay.checkin) / 60000);
    const cost = duration * minuteCost;
    currentStay.stage = 'Closed';
    currentStay.checkout = checkoutTime;
    currentStay.duration = duration;
    currentStay.cost = cost;

    await stayRepository.updateStay(currentStay.idStay, currentStay);
    if (typeVehicle === 'No Residente') {
        return { message: `La estancia fue de ${duration} minutos, el valor a pagar es : ${cost}` };
    } else {
        return { message: `La estancia fue de ${duration} minutos, se acumulará el total del mes` };
    }
};
stayService.liststays = async () => {
    return stayRepository.listStays()
};
stayService.getstayForLicensePlate = async (licensePlate) => {
    return stayRepository.listStaysForLicensePLate(licensePlate);
};
