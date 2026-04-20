const getExchangeRates = async () => {
    const [usdRes, eurRes] = await Promise.all([
        fetch('https://api.frankfurter.app/latest?from=USD&to=IDR'),
        fetch('https://api.frankfurter.app/latest?from=EUR&to=IDR')
    ]);

    if (!usdRes.ok || !eurRes.ok) {
        throw new Error('Failed to fetch exchange rates');
    }

    const [usdData, eurData] = await Promise.all([usdRes.json(), eurRes.json()]);

    return { usdData, eurData };
};

module.exports = { 
    getExchangeRates 
};