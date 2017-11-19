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
    buyStopPrice: 7770.1,
    buyLimitPrice: 8050,
    amount: 0.005,
    sellStopPrice: 8000,
    sellLimitPrice: 7950,
    tradingPair: TradingPairsUSD.BTC,
    side: Side,
    type: Type.ExchangeMarket
}