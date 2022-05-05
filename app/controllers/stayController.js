const stayController = module.exports;
const stayService = require('../services/stayService');

stayController.checkIn = async (req, res, next) => {
    console.log('Create Stay');
    const { body: { vehicle } } = req;
    try {
        return stayService.checkIn(vehicle)
            .then((response) => res.send(response))
            .catch((error) => next(console.log(`error catch : ${error.message}`)));
    } catch (error) {
        console.log(`error : ${error.message}`);
    }
};
stayController.checkOut = async (req, res, next) => {
    console.log('Create checkout');
    const { body: { vehicle } } = req;
    try {
        return stayService.checkOut(vehicle)
            .then((response) => res.send(response))
            .catch((error) => next(console.log(`error catch : ${error.message}`)));
    } catch (error) {
        console.log(`error : ${error.message}`);
    }
};
stayController.listStays = async (req, res) => {
    return stayService.listStays().then((response) => res.send(response));
};