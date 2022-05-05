const stageServiceRepository = module.exports;
const DB = require('../utils/DB');

stageServiceRepository.createStageService = (stage) => DB('servicestage').insert(stage).returning('*');
stageServiceRepository.countStageService = (nameStage) => DB('servicestage').count({ count: '*' }).where('nameStage', nameStage).first();
stageServiceRepository.listStages = () => DB('servicestage').select('*');
