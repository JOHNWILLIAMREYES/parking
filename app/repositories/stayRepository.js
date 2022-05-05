const stayRepository = module.exports;
const DB = require('../utils/DB');

stayRepository.createStay = (stay) => DB('stay').insert(stay).returning('*');
stayRepository.listStays = () => DB('stay').select('*');
stayRepository.listStaysForLicensePLate = (licensePlate) => DB('stay').select('*').where('vehicle', licensePlate);
stayRepository.updateStay = (idStay, stay) => DB('stay').update(stay).where('idstay', idStay).returning('*');