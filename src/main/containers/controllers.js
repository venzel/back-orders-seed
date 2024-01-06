const { services, controllers } = require('../factories');

const SellerController = () => {
    const sellerServices = {
        sellerProcessService: services.MakeSellerProcessService(),
    };

    const sellerController = controllers.MakeSellerController(sellerServices);

    return sellerController;
};

module.exports = {
    SellerController,
};
