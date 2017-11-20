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
        buyStopPrice: 1226.5,
        buyLimitPrice: 1227,
        sellLimitPrice: 1244,
        stopLossPrice: 1220
    }
];

module.exports = {
    tradingPair: TradingPairsUSD.BCH,
    pricePairs: pricePairs,
    amount: '0.1',
    side: Side,
    types: Type
}