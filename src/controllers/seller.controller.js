class SellerController {
    constructor(sellerServices) {
        this.sellerServices = sellerServices;
    }

    async process(req, res) {
        const input = {
            body: req.body,
            header: req.headers,
        };

        const response = await this.sellerServices.sellerProcessService.execute(input);

        return res.status(200).json(response);
    }
}

module.exports = { SellerController };
