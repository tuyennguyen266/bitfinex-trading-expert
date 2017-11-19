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
        buyStopPrice: 371.01,
        sellStopPrice: 382,
        stopLoss: 0
    }
];

module.exports = {
    tradingPair: TradingPairsUSD.ETH,
    buyLimitPrice: '371.01',
    sellLimitPrice: '382',
    pricePairs: pricePairs,
    amount: '1',
    side: Side,
    type: Type.ExchangeMarket
}