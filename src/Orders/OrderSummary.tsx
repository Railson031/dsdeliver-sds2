function OrderSummary() {
    return (
        <div className="order-summary-container">
            <div className="order-summary-content">
                <span className="amount-selected-container">
                <strong className="amount-selected">2</strong>
                PEDIDOS SELECIONADOS
                </span>
                <span className="order-summary-total">
                    <strong className="amount-selected">R$ 50,00</strong>
                    VALOR TOTAL
                </span>
            </div>
        </div>
    )
}

export default OrderSummary;
