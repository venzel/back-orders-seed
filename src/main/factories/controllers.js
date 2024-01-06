const { SellerController } = require('../../controllers');

const MakeSellerController = (sellerServices) => {
    return new SellerController(sellerServices);
};

module.exports = {
    MakeSellerController,
};
