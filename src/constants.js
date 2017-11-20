const TradingPairsUSD = {
    BTC: 'BTCUSD',
    BCH: 'BCHUSD',
    NEO: 'NEOUSD',
    ETH: 'ETHUSD',
    DASH: 'DASHUSD'
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
        buyStopPrice: 453.6,
        buyLimitPrice: 454,
        sellLimitPrice: 459,
        stopLossPrice: 451.5
    }
];

module.exports = {
    tradingPair: TradingPairsUSD.DASH,
    pricePairs: pricePairs,
    amount: '0.3',
    side: Side,
    types: Type
}