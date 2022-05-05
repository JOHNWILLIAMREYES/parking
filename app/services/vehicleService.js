const vehicleService = module.exports;
const vehicleRepository = require('../repositories/vehicleRepository');

vehicleService.createVehicle = async (vehicle) => {
    const {
        licensePlate = null,
        typeVehicle = null
    } = vehicle;
    const { count } = await vehicleRepository.countVehicle(licensePlate);
    if (licensePlate && typeVehicle && count === 0) {
        await vehicleRepository.createVehicle(vehicle);
        return { message: 'Success' };
    }
    return { message: 'Failed - exist in Bd or missed any field' };

};

vehicleService.listvehicles = async () => {
    return vehicleRepository.listVehicles();
};

vehicleService.listvehiclesForVehicleType = async (typeVehicle) => {
    return vehicleRepository.listVehiclesForType(typeVehicle);
};

vehicleService.getvehicleForLicensePlate = async (licensePlate) => {
    return vehicleRepository.getVehicleForLicensePlate(licensePlate);
};