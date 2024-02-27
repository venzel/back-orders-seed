class ProcessPaymentUsecase {
    construct(repositories, integrations) {
        /* Repositories */
        this.orderRepository = repositories.orderRepository;

        /* Integrations */
        this.paymentIntegration = integrations.paymentIntegration;
    }

    async execute(input) {
        return {
            input,
        };
    }
}

module.exports = { ProcessPaymentUsecase };
