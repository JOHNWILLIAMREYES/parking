const stayService = module.exports;
const stayRepository = require('../repositories/stayRepository');
const vehicleTypeService = require('../services/vehicleTypeService');
const vehicleService = require('../services/vehicleService');

stayService.checkIn = async (vehicle) => {
    const newStay = {
        idStay: generateId(8),
        checkin: new Date(),
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
stayService.checkOut = async (vehicle) => {
    const stays = await stayRepository.listStaysForLicensePLate(vehicle);
    let currentStay = stays.find(r => r.stage === 'Open');
    const { typeVehicle } = await vehicleService.getvehicleForLicensePlate(vehicle);
    const { minuteCost } = await vehicleTypeService.getvehicleTypeForName(typeVehicle);
    const checkoutTime = new Date();
    const duration = Math.ceil((checkoutTime.getTime() - currentStay.checkin.getTime()) / 60000);
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
stayService.listStays = async () => {
    return stayRepository.listStays();
};
stayService.getStayForLicensePlate = async (licensePlate) => {
    return stayRepository.listStaysForLicensePLate(licensePlate);
};
function generateId(n) {
    var add = 1,
      max = 12 - add;
  
    if (n > max) {
      return generate(max) + generate(n - max);
    }
  
    max = Math.pow(10, n + add);
    var min = max / 10; // Math.pow(10, n) basically 
    var number = Math.floor(Math.random() * (max - min + 1)) + min;
  
    return ("" + number).substring(add);
  }
