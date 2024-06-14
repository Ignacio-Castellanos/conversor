document.addEventListener('DOMContentLoaded', () => {
    const converterForm = document.getElementById('converter-form');
    const amountInput = document.getElementById('amount');
    const fromCurrency = document.getElementById('from-currency');
    const toCurrency = document.getElementById('to-currency');
    const resultElement = document.getElementById('result');

    // Tasas de cambio ficticias
    const exchangeRates = {
        'USD': {'EUR': 0.85, 'GBP': 0.75},
        'EUR': {'USD': 1.18, 'GBP': 0.88},
        'GBP': {'USD': 1.33, 'EUR': 1.14}
    };

    converterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const amount = parseFloat(amountInput.value);
        const from = fromCurrency.value;
        const to = toCurrency.value;

        if (from === to) {
            resultElement.textContent = `Introduce diferentes monedas para la conversión.`;
            return;
        }

        // Obtener la tasa de conversión
        const rate = exchangeRates[from][to];
        const convertedAmount = (amount * rate).toFixed(2);

        resultElement.textContent = `${amount} ${from} son ${convertedAmount} ${to} a una tasa de ${rate}`;
    });
});