const vehicleController = module.exports;
const vehicleService = require('../services/vehicleService');

vehicleController.createvehicle = async (req, res, next) => {
    console.log('Create Vehicle');
    const { body } = req;
    try {
        return vehicleService.createVehicle(body)
            .then((response) => res.send(response))
            .catch((error) => next(console.log(`error catch : ${error.message}`)));
    } catch (error) {
        console.log(`error : ${error.message}`);
    }
};
vehicleController.listVehicles = async (req, res) => {
    return vehicleService.listvehicles().then((response) => res.send(response));
};
vehicleController.listVehiclesForType = async (req, res, next) => {
    const { typeVehicle } = req.params;
    return vehicleService.listvehiclesForVehicleType(typeVehicle).then((response) => res.send(response));
};
vehicleController.listVehicleForLicensePLate = async (req, res, next) => {
    const { licensePlate } = req.params;
    return vehicleService.getvehicleForLicensePlate(licensePlate).then((response) => res.send(response));
};