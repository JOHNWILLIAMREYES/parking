const express = require('express');
const router = express.Router();
const stageServiceController = require('./controllers/serviceStageController');
const vehicleTypeController = require('./controllers/vehicleTypeController');
const vehicleController = require('./controllers/vehicleController');
const stayController = require('./controllers/stayController');

//Routes StageServiceF
router.post('/stage-service/create', stageServiceController.createServiceStage);
router.get('/stage-service/list', stageServiceController.listServiceStages);

// Routes VehicleType
router.post('/vehicle-type/create', vehicleTypeController.createvehicleType);
router.get('/vehicle-type/list', vehicleTypeController.listVehicleTypes);

// Routes Vehicle
router.post('/vehicle/create', vehicleController.createvehicle);
router.get('/vehicle/list', vehicleController.listVehicles);
router.get('/vehicle/list-for-type/:typeVehicle', vehicleController.listVehiclesForType);
router.get('/vehicle/get-vehicle/:licensePlate', vehicleController.listVehicleForLicensePLate);

// Routes Stay
router.post('/stay/checkin', stayController.checkIn);
router.post('/stay/checkout', stayController.checkOut);
router.get('/stay/list', stayController.listStays);

module.exports = router;