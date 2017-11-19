const TradingPairsUSD = {
    BTC: 'BTCUSD',
    BCH: 'BCHUSD',
    NEO: 'NEOUSD',
    ETH: 'ETHUSD'
}

const Side = {
    BUY: 'buy',
    SELL: 'sell'
}

const Type = {
    ExchangeMarket: 'exchange market',
    ExchangeLimit: 'exchange limit',
    ExchangeStop: 'exchange stop',
    ExchangeTrailingStop: 'exchange trailing-stop',
    ExchangeFillOrKill: 'exchange fill-or-kill'
}

const pricePairs = [
    {
        buyStopPrice: 7991,
        sellStopPrice: 8150,
        stopLoss: 0
    }

];

module.exports = {
    tradingPair: TradingPairsUSD.BTC,
    buyLimitPrice: '7991',
    sellLimitPrice: '8150',
    pricePairs: pricePairs,
    amount: '0.014',
    side: Side,
    type: Type.ExchangeMarket
}