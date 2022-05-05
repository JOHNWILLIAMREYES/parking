const stageServiceService = module.exports;
const stageServiceRepository = require('../repositories/serviceStageRepository');

stageServiceService.createStageService = async (stageService) => {
    const {
        nameStage = null
    } = stageService;
    const { count } = await stageServiceRepository.countStageService(nameStage);
    if (nameStage && count === 0) {
        await stageServiceRepository.createStageService(stageService);
        return { message: 'Success' };
    }
    return { message: 'Failed - exist in Bd or missed any field' };

};

stageServiceService.listStages = async () => {
    return stageServiceRepository.listStages();
}