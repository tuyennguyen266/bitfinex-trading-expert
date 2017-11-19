const TradingPairsUSD = {
    BTC: 'BTCUSD',
    BCH: 'BCHUSD',
    NEO: 'NEOUSD',
    ETH: 'ETHUSD',
    XRP: 'XRPUSD'
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
        buyStopPrice: 0.24790,
        sellStopPrice: 0.25533,
        stopLoss: 0
    },
    {
        buyStopPrice: 0.28151,
        sellStopPrice: 0.29558,
        stopLoss: 0
    }
];

module.exports = {
    tradingPair: TradingPairsUSD.XRP,
    buyLimitPrice: '0.24790',
    sellLimitPrice: '0.25533',
    pricePairs: pricePairs,
    amount: '400',
    side: Side,
    type: Type.ExchangeMarket
}