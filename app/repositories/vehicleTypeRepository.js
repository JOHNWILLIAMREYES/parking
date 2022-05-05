const vehicleTypeRepository = module.exports;
const DB = require('../utils/DB');

vehicleTypeRepository.createVehicleType = (type) => DB('vehicletype').insert(type).returning('*');
vehicleTypeRepository.countVehicleType = (nameType) => DB('vehicletype').count({ count: '*' }).where('nameType', nameType).first();
vehicleTypeRepository.listVehicleType = () => DB('vehicletype').select('*');
vehicleTypeRepository.getVehicleType = (nameType) => DB('vehicletype').select('*').where('nameType', nameType).first();
