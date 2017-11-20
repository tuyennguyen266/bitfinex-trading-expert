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
        buyStopPrice: 363.1,
        buyLimitPrice: 364,
        sellLimitPrice: 367.5,
        stopLossPrice: 361
    }
];

module.exports = {
    tradingPair: TradingPairsUSD.ETH,
    pricePairs: pricePairs,
    amount: '1',
    side: Side,
    types: Type
}