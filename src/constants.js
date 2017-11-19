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
        sellStopPrice: 1244
    },
    {
        buyStopPrice: 1264,
        sellStopPrice: 1280
    },
    {
        buyStopPrice: 1348.1,
        sellStopPrice: 1368
    },
    {
        buyStopPrice: 1379.9,
        sellStopPrice: 1420
    },

];

module.exports = {
    tradingPair: TradingPairsUSD.BCH,
    buyLimitPrice: '1263',
    sellLimitPrice: '1180',
    pricePairs: pricePairs,
    amount: '0.1',
    side: Side,
    type: Type.ExchangeMarket
}