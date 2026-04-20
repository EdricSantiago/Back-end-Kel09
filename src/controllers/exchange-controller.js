const exchangeService = require('../service/exchange-service');
  
const getExchangeRates = async (req, res, next) => {
    try {
        const result = await exchangeService.getExchangeRates();
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};
  
module.exports = {
  getExchangeRates
};