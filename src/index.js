const Constants = require('./constants');

const BFX = require('bitfinex-api-node')

const API_KEY = process.argv[2];
const API_SECRET = process.argv[3];

const opts = {
    version: 2,
    transform: true
}

const bws = new BFX(API_KEY, API_SECRET, opts).ws

var isBought = false;
var isSold = false;

bws.on('auth', () => {
    // emitted after .auth()
    // needed for private api endpoints

    console.log('authenticated')
// bws.submitOrder ...
})

bws.on('open', () => {
    bws.subscribeTicker(Constants.tradingPair)
    // bws.subscribeOrderBook('BTCUSD')
    // bws.subscribeTrades('BTCUSD')
// authenticate
// bws.auth()
})

bws.on('orderbook', (pair, book) => {
    console.log('Order book:', book)
})

bws.on('trade', (pair, trade) => {
    console.log('Trade:', trade)
})

bws.on('ticker', (pair, ticker) => {
    console.log('Ticker:', ticker)
    const lastPrice = ticker.LAST_PRICE;
    if (shouldBuy(lastPrice)) {
        buy();
    }
    if (shouldSell(lastPrice)) {
        sell();
    }
})

bws.on('error', console.error)

const shouldBuy = (price) => {
    return price >= Constants.buyStopPrice && !isBought;
}

const shouldSell = (price) => {
    return price >= Constants.sellStopPrice && isBought && !isSold;
}

const buy = () => {
    const bfxRest = new BFX(API_KEY, API_SECRET, {version: 1}).rest;
    bfxRest.new_order(Constants.tradingPair, Constants.amount, Constants.buyLimitPrice, 'bitfinex', Constants.side.BUY, Constants.type, (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        isBought = true;
        console.log(res);
    })
};

const sell = () => {
    const bfxRest = new BFX(API_KEY, API_SECRET, {version: 1}).rest;
    bfxRest.new_order(Constants.tradingPair, Constants.amount, Constants.sellLimitPrice, 'bitfinex', Constants.side.SELL, Constants.type, (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        isSold = true;
        console.log(res);
    })
}