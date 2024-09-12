// Gráfico Receita x Despesa
const receitaDespesaCtx = document.getElementById('receitaDespesaChart').getContext('2d');
const receitaDespesaChart = new Chart(receitaDespesaCtx, {
    type: 'line',
    data: {
        labels: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        datasets: [
            {
                label: 'Receita',
                data: [10000, 12000, 8000, 9000, 11000, 9500, 13000, 15000, 16000, 14000, 17000, 18000, 19000, 20000, 22000],
                borderColor: 'green',
                fill: false,
            },
            {
                label: 'Despesa',
                data: [5000, 4000, 3000, 3500, 3000, 2000, 4000, 4500, 5000, 6000, 5500, 7000, 7500, 8000, 8500],
                borderColor: 'red',
                fill: false,
            }
        ]
    }
});

// Gráfico Formas de Recebimento
const formasRecebimentoCtx = document.getElementById('formasRecebimentoChart').getContext('2d');
const formasRecebimentoChart = new Chart(formasRecebimentoCtx, {
    type: 'doughnut',
    data: {
        labels: ['Cartão Crédito', 'Cartão Débito', 'Dinheiro', 'Outros'],
        datasets: [{
            data: [50, 30, 15, 5],
            backgroundColor: ['#dc3545', '#007bff', '#ffc107', '#343a40']
        }]
    }
});

// Gráfico Faturamento Acumulado
const faturamentoAcumuladoCtx = document.getElementById('faturamentoAcumuladoChart').getContext('2d');
const faturamentoAcumuladoChart = new Chart(faturamentoAcumuladoCtx, {
    type: 'bar',
    data: {
        labels: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        datasets: [{
            label: 'Faturamento Acumulado (R$)',
            data: [3000, 4000, 3500, 4500, 5000, 4800, 5500, 6000, 7000, 6500, 8000, 8500, 9000, 9200, 9500],
            backgroundColor: ['#007bff', '#6f42c1', '#fd7e14', '#ffc107', '#dc3545', '#28a745', '#17a2b8', '#343a40', '#6c757d', '#f8f9fa', '#6f42c1', '#007bff', '#28a745', '#dc3545', '#ffc107']
        }]
    }
});

// Gráfico Formas de Pagamento
const formasPagamentoCtx = document.getElementById('formasPagamentoChart').getContext('2d');
const formasPagamentoChart = new Chart(formasPagamentoCtx, {
    type: 'doughnut',
    data: {
        labels: ['Cartão Crédito', 'Cartão Débito', 'Dinheiro', 'Outros'],
        datasets: [{
            data: [60, 25, 10, 5],
            backgroundColor: ['#17a2b8', '#007bff', '#ffc107', '#28a745']
        }]
    }
});
