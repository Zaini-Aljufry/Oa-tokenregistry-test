const issueToken = require("../utils/oaeth");

const oaTR = async (req, res, next) => {
  try {
    const { hashSignature, beneficiary, holder } = req.body;
    const isDeployed = await issueToken(hashSignature, beneficiary, holder);
    res.send(isDeployed);
  } catch (error) {}
};

module.exports = {
  oaTR: oaTR,
};
