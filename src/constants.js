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

module.exports = {
    tradingPair: TradingPairsUSD.BCH,
    buyStopPrice: 1188,
    buyLimitPrice: '1189',
    amount: '0.02',
    sellStopPrice: 1189,
    sellLimitPrice: '1188',
    side: Side,
    type: Type.ExchangeMarket
}