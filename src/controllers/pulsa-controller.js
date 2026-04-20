const pulsaService = require('../service/pulsa-service');

const buyPulsa = async (req, res, next) => {
  try {
    const user = req.user;
    const result = await pulsaService.buyPulsa(user, req.body);
    res.status(200).json({
      message: "Pulsa berhasil dibeli",
      data: result
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { 
  buyPulsa 
};