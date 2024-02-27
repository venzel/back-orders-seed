class OrdersController {
    constructor(useCases) {
        this.processPaymentUseCase = useCases.processPaymentUseCase;
    }

    async processPayment(req, res) {
        const input = {
            body: req.body,
            header: req.headers,
        };

        const response = await this.processPaymentUseCase.execute(input);

        return res.status(200).json(response);
    }
}

module.exports = { OrdersController };
