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
    buyStopPrice: 1263,
    buyLimitPrice: '1263',
    amount: '',
    sellStopPrice: 1280,
    sellLimitPrice: '1180',
    side: Side,
    type: Type.ExchangeMarket
}