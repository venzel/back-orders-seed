const SellerController = require('../containers/controllers').SellerController();

module.exports = async (router) => {
    const base = '/orders';

    const paths = {
        process: base.concat('/sellers/process'),
    };

    router.post(paths.process, SellerController.process.bind(SellerController));

    return router;
};
