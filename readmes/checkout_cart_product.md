# Checkout Cart Product

## [add](http://www.magentocommerce.com/api/soap/checkout/cartProduct/cart_product.add.html)

Allows you to add one or more products to the shopping cart (quote).

`products` is an array of shoppingCartProductEntity objects.

```js
magentoAPI.checkoutCartProduct.add({
  quoteId:    val,
  products:   [ val, val, val ],
  storeView:  val  /* optional */
}, callback);

// or a single product

magentoAPI.checkoutCartProduct.add({
  quoteId:    val,
  products:   val,
  storeView:  val  /* optional */
}, callback);
```

## [list](http://www.magentocommerce.com/api/soap/checkout/cartProduct/cart_product.list.html)

Allows you to retrieve the list of products in the shopping cart (quote).

```js
magentoAPI.checkoutCartProduct.list({
  quoteId:    val,
  storeView:  val  /* optional */
}, callback);
```

## [moveToCustomerQuote](http://www.magentocommerce.com/api/soap/checkout/cartProduct/cart_product.moveToCustomerQuote.html)

Allows you to move products from the current quote to a customer quote.

`productsData` is an array of shoppingCartProductEntity objects.

```js
magentoAPI.checkoutCartProduct.moveToCustomerQuote({
  quoteId:      val,
  productsData: [ val, val, val ],
  storeView:    val  /* optional */
}, callback);

// or a single product data cell

magentoAPI.checkoutCartProduct.moveToCustomerQuote({
  quoteId:      val,
  productsData: val,
  storeView:    val  /* optional */
}, callback);
```

## [remove](http://www.magentocommerce.com/api/soap/checkout/cartProduct/cart_product.remove.html)

Allows you to remove one or several products from a shopping cart (quote).

`productsData` is an array of shoppingCartProductEntity objects.

```js
magentoAPI.checkoutCartProduct.remove({
  quoteId:      val,
  productsData: [ val, val, val ],
  storeView:    val  /* optional */
}, callback);

// or a single product data cell

magentoAPI.checkoutCartProduct.remove({
  quoteId:      val,
  productsData: val,
  storeView:    val  /* optional */
}, callback);
```

## [update](http://www.magentocommerce.com/api/soap/checkout/cartProduct/cart_product.update.html)

Allows you to update one or several products in the shopping cart (quote).

`productsData` is an array of shoppingCartProductEntity objects.

```js
magentoAPI.checkoutCartProduct.update({
  quoteId:      val,
  productsData: [ val, val, val ],
  storeView:    val  /* optional */
}, callback);

// or a single product data cell

magentoAPI.checkoutCartProduct.update({
  quoteId:      val,
  productsData: val,
  storeView:    val  /* optional */
}, callback);
```