const vehicleRepository = module.exports;
const DB = require('../utils/DB');

vehicleRepository.createVehicle = (vehicle) => DB('vehicle').insert(vehicle).returning('*');
vehicleRepository.countVehicle = (licensePlate) => DB('vehicle').count({ count: '*' }).where('licensePlate', licensePlate).first();
vehicleRepository.getVehicleForLicensePlate = (licensePlate) => DB('vehicle').select('*').where('licensePlate', licensePlate).first();
vehicleRepository.listVehiclesForType = (typeVehicle) => DB('vehicle').select('*').where('typeVehicle', typeVehicle);
vehicleRepository.listVehicles = () => DB('vehicle').select('*');
