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
        buyStopPrice: 42.856,
        sellStopPrice: 44.141,
        stopLoss: 0
    },
    {
        buyStopPrice: 45.686,
        sellStopPrice: 46.233,
        stopLoss: 0
    },
    {
        buyStopPrice: 48.451,
        sellStopPrice: 50.873,
        stopLoss: 0
    }

];

module.exports = {
    tradingPair: TradingPairsUSD.NEO,
    buyLimitPrice: '42.856',
    sellLimitPrice: '44.141',
    pricePairs: pricePairs,
    amount: '3',
    side: Side,
    type: Type.ExchangeMarket
}