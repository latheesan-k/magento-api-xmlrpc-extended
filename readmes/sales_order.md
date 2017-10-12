# Sales Order

## [addComment](http://www.magentocommerce.com/api/soap/sales/salesOrder/sales_order.addComment.html)

Allows you to add a new comment to the order.

```js
magentoAPI.salesOrder.addComment({
  orderIncrementId: val,
  status:           val,
  comment:          val,  /* optional */
  notify:           val   /* optional */
}, callback);
```

## [cancel](http://www.magentocommerce.com/api/soap/sales/salesOrder/sales_order.cancel.html)

Allows you to cancel the required order.

```js
magentoAPI.salesOrder.cancel({
  orderIncrementId: val
}, callback);
```

## [hold](http://www.magentocommerce.com/api/soap/sales/salesOrder/sales_order.hold.html)

Allows you to place the required order on hold.

```js
magentoAPI.salesOrder.hold({
  orderIncrementId: val
}, callback);
```

## [info](http://www.magentocommerce.com/api/soap/sales/salesOrder/sales_order.info.html)

Allows you to retrieve the required order information.

```js
magentoAPI.salesOrder.info({
  orderIncrementId: val
}, callback);
```

## [list](http://www.magentocommerce.com/api/soap/sales/salesOrder/sales_order.list.html)

Allows you to retrieve the list of orders. Additional filters can be applied.

```js
magentoAPI.salesOrder.list(callback);

// or 

magentoAPI.salesOrder.list({
  filters: { key: 'val' }
}, callback);
```

## [unhold](http://www.magentocommerce.com/api/soap/sales/salesOrder/sales_order.unhold.html)

Allows you to unhold the required order.

```js
magentoAPI.salesOrder.unhold({
  orderIncrementId: val
}, callback);
```