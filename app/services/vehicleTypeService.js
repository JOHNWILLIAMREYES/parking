const vehicleTypeService = module.exports;
const vehicleTypeRepository = require('../repositories/vehicleTypeRepository');

vehicleTypeService.createvehicleType = async (vehicleType) => {
    const {
        nameType = null,
        minuteCost = null
    } = vehicleType;
    console.log(vehicleType);
    const { count } = await vehicleTypeRepository.countVehicleType(nameType);
    if (nameType && minuteCost >= 0 && count === 0) {
        await vehicleTypeRepository.createVehicleType(vehicleType);
        return { message: 'Success' };
    }
    return { message: 'Failed - exist in Bd or missed any field' };

};

vehicleTypeService.listVehicleTypes = async () => {
    return vehicleTypeRepository.listVehicleType();
};
vehicleTypeService.getvehicleTypeForName = async (nameType) => {
    return vehicleTypeRepository.getVehicleType(nameType);
};