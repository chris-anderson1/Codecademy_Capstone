
document.addEventListener('DOMContentLoaded', function () {

    const ticker = document.querySelector('.ticker');

async function fetchMarketData() {

    const apiKey = 'cqg0qu9r01qhf3d12e30cqg0qu9r01qhf3d12e3g';
    const url = `https://finnhub.io/api/v1/quote?symbol=$SPX&token=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('Market Data', data)
        return data;
    } catch (error) {
        console.error('Error fetching market data', error);
        return null
    }
}

async function populateTicker() {
    const data = await fetchMarketData();
    
    if (data) {
        ticker.innerHTML = '';
        const tickerItem = document.createElement('div');
        tickerItem.className = 'ticker-item';
        tickerItem.textContent = ;
            ticker.appendChild(tickerItem);
        } else {
            ticker.innerHTML = '<div class="ticker-item">Error loading market data</div>';
        }
    }
    populateTicker();
});

