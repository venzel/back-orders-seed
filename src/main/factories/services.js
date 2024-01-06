const { SellerProcessService } = require('../../services');

const MakeSellerProcessService = () => {
    return new SellerProcessService();
};

module.exports = {
    MakeSellerProcessService,
};
