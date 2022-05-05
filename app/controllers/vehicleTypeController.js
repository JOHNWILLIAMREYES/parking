const vehicleTypeController = module.exports;
const vehicleTypeService = require('../services/vehicleTypeService');

vehicleTypeController.createvehicleType = async (req, res, next) => {
    console.log('Create Vehicle Type');
    const { body } = req;
    try {
        return vehicleTypeService.createvehicleType(body)
            .then((response) => res.send(response))
            .catch((error) => next(console.log(`error catch : ${error.message}`)));
    } catch (error) {
        console.log(`error : ${error.message}`);
    }
};
vehicleTypeController.listVehicleTypes = async (req, res) => {
    return vehicleTypeService.listVehicleTypes().then((response) => res.send(response));
};