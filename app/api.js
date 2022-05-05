const express = require('express');
const router = express.Router();
const stageServiceController = require('./controllers/serviceStageController');
const vehicleTypeController = require('./controllers/vehicleTypeController');
const vehicleController = require('./controllers/vehicleController');


//Routes StageServiceF
router.post('/stageService/create', stageServiceController.createServiceStage);
router.get('/stageService/list', stageServiceController.listServiceStages);

// Routes VehicleType
router.post('/vehicleType/create', vehicleTypeController.createvehicleType);
router.get('/vehicleType/list', vehicleTypeController.listVehicleTypes);

// Routes Vehicle
router.post('/vehicle/create', vehicleController.createvehicle);
router.get('/vehicle/listVehicles', vehicleController.listVehicles);
router.get('/vehicle/listVehiclesForType/:typeVehicle', vehicleController.listVehiclesForType);
router.get('/vehicle/getVehicle/:licensePlate', vehicleController.listVehicleForLicensePLate);

// Routes Stay


module.exports = router;