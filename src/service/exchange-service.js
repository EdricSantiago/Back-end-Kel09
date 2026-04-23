const exchangeRepository = require('../repository/exchange-repository');

const getExchangeRates = async () => {
    const { usdData, eurData } = await exchangeRepository.getExchangeRates();
    return {
        date: usdData.date,
        rates: {
            USD_to_IDR: usdData.rates.IDR,
            EUR_to_IDR: eurData.rates.IDR,
        },
    };
};

module.exports = { 
    getExchangeRates 
};