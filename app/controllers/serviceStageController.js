const serviceStageController = module.exports;
const serviceStageService = require('../services/serviceStageService');

serviceStageController.createServiceStage = async (req, res, next) => {
    console.log('Create Stage');
    const { body } = req;
    try {
        return serviceStageService.createStageService(body)
            .then((response) => res.send(response))
            .catch((error) => next(console.log(`error catch : ${error.message}`)));
    } catch (error) {
        console.log(`error : ${error.message}`);
    }
};
serviceStageController.listServiceStages = async (req, res) => {
    return serviceStageService.listStages().then((response) => res.send(response));
}