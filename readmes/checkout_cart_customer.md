# Checkout Cart Customer

## [addresses](http://www.magentocommerce.com/api/soap/checkout/cartCustomer/cart_customer.addresses.html)

Allows you to set the customer addresses in the shopping cart (quote).

`customerAddressData` is an array of shoppingCartCustomerAddressEntity objects.

```js
magentoAPI.checkoutCartCustomer.addresses({
  quoteId:              val,
  customerAddressData:  [ val, val, val ],
  storeView:            val  /* optional */
}, callback);

// or a single address

magentoAPI.checkoutCartCustomer.addresses({
  quoteId:              val,
  customerAddressData:  val,
  storeView:            val  /* optional */
}, callback);
```

## [set](http://www.magentocommerce.com/api/soap/checkout/cartCustomer/cart_customer.set.html)

Allows you to add information about the customer to a shopping cart (quote).

`customerAddressData` is an array of shoppingCartCustomerEntity objects.

```js
magentoAPI.checkoutCartCustomer.set({
  quoteId:      val,
  customerData: [ val, val, val ],
  storeView:    val  /* optional */
}, callback);

// or a single cell of data

magentoAPI.checkoutCartCustomer.set({
  quoteId:      val,
  customerData: val,
  storeView:    val  /* optional */
}, callback);
```