const Constants = require('./constants');

const BFX = require('bitfinex-api-node')

const API_KEY = process.argv[2];
const API_SECRET = process.argv[3];

const opts = {
    version: 2,
    transform: true
}

const bws = new BFX(API_KEY, API_SECRET, opts).ws

var hasError = false;
var orderNumber = 0;
var currentSellOrder = null;

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
    // const lastPrice = ticker.LAST_PRICE;
    // console.log('PRICE:', Constants.pricePairs[orderNumber].buyLimitPrice);
    // if (shouldBuy(lastPrice)) {
    //     buy();
    // }
    // if (shouldStopLoss(lastPrice)) {
    //     stopLoss();
    // }
    // if (shouldClearCurrentSell(lastPrice)) {
    //     clearCurrentSell();
    // }
})

bws.on('error', console.error)

const shouldBuy = (price) => {
    if (hasError) {
        return false;
    }
    if (orderNumber >= Constants.pricePairs.length) {
        return false;
    }
    return price >= Constants.pricePairs[orderNumber].buyStopPrice;
}

const shouldStopLoss = (price) => {
    if (hasError) {
        return false;
    }
    if (!currentSellOrder) {
        return false;
    }
    return price <= Constants.pricePairs[orderNumber-1].stopLossPrice;
}

const shouldClearCurrentSell = (price) => {
    if (hasError) {
        return false;
    }
    if (!currentSellOrder) {
        return false;
    }
    return price > Constants.pricePairs[orderNumber-1].sellLimitPrice;
}


const buy = () => {
    const bfxRest = new BFX(API_KEY, API_SECRET, {version: 1}).rest;
    bfxRest.new_order(Constants.tradingPair, Constants.amount, `\(Constants.pricePairs[orderNumber].buyLimitPrice)`, 'bitfinex', Constants.side.BUY, Constants.types.ExchangeLimit, (err, res) => {
        if (err) {
            console.log(err);
            hasError = true;
            return;
        }
        bookSellOrder();
        orderNumber += 1;
        console.log(res);
    })
};

const bookSellOrder = () => {
    const bfxRest = new BFX(API_KEY, API_SECRET, {version: 1}).rest;
    bfxRest.new_order(Constants.tradingPair, Constants.amount, `\(Constants.pricePairs[orderNumber].sellLimitPrice)`, 'bitfinex', Constants.side.SELL, Constants.types.ExchangeLimit, (err, res) => {
        if (err) {
            console.log(err);
            hasError = true;
            return;
        }
        currentSellOrder = res.order_id;
        console.log(res);
    })
}

const stopLoss = () => {
    const bfxRest = new BFX(API_KEY, API_SECRET, {version: 1}).rest;
    bfxRest.cancel_order(currentSellOrder, (err, res) => {
        if (err) {
            console.log(err);
            hasError = true;
            return;
        }
        console.log(res);
        clearCurrentSell();
        bfxRest.new_order(Constants.tradingPair, Constants.amount, `\(Constants.pricePairs[orderNumber].stopLossPrice)`, 'bitfinex', Constants.side.SELL, Constants.types.ExchangeMarket, (err, res) => {
            if (err) {
                console.log(err);
                hasError = true;
                return;
            }
            console.log(res);
        })
    })
}

const clearCurrentSell = () => {
    currentSellOrder = null;
}