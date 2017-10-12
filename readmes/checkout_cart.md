# Checkout Cart

## [create](http://www.magentocommerce.com/api/soap/checkout/cart/cart.create.html)

Allows you to create an empty shopping cart.

```js
magentoAPI.checkoutCart.create(callback);

// or

magentoAPI.checkoutCart.create({
  storeView: val
}, callback);
```

## [info](http://www.magentocommerce.com/api/soap/checkout/cart/cart.info.html)

Allows you to retrieve full information about the shopping cart (quote).

```js
magentoAPI.checkoutCart.info({
  quoteId:    val,
  storeView:  val   /* optional */
}, callback);
```

## [license](http://www.magentocommerce.com/api/soap/checkout/cart/cart.license.html)

Allows you to retrieve the website license agreement for the quote according to the website (store).

```js
magentoAPI.checkoutCart.license({
  quoteId:    val,
  storeView:  val   /* optional */
}, callback);
```

## [order](http://www.magentocommerce.com/api/soap/checkout/cart/cart.order.html)

Allows you to create an order from a shopping cart (quote).

Before placing the order, you need to add the customer, customer address, shipping and payment methods.

```js
magentoAPI.checkoutCart.order({
  quoteId:    val,
  storeView:  val,  /* optional */
  agreements: val   /* optional */
}, callback);
```

## [totals](http://www.magentocommerce.com/api/soap/checkout/cart/cart.totals.html)

Allows you to retrieve total prices for a shopping cart (quote).

```js
magentoAPI.checkoutCart.totals({
  quoteId:    val,
  storeView:  val   /* optional */
}, callback);
```