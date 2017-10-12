# Sales Order Credit Memo

## [addComment](http://www.magentocommerce.com/api/soap/sales/salesOrderCreditMemo/sales_order_creditmemo.addComment.html)

Allows you to add a new comment to an existing credit memo. Email notification can be sent to the user email.

```js
magentoAPI.salesOrderCreditMemo.addComment({
  creditmemoIncrementId:  val,
  comment:                val,  /* optional */
  notifyCustomer:         val,  /* optional */
  includeComment:         val   /* optional */
}, callback);
```

## [cancel](http://www.magentocommerce.com/api/soap/sales/salesOrderCreditMemo/sales_order_creditmemo.cancel.html)

Allows you to cancel an existing credit memo.

```js
magentoAPI.salesOrderCreditMemo.cancel({
  creditmemoIncrementId: val
}, callback);
```

## [create](http://www.magentocommerce.com/api/soap/sales/salesOrderCreditMemo/sales_order_creditmemo.create.html)

Allows you to create a new credit memo for the invoiced order.

Comments can be added and an email notification can be sent to the user email.

```js
magentoAPI.salesOrderCreditMemo.create({
  orderIncrementId:           val,
  creditmemoData:             val,  /* optional */
  comment:                    val,  /* optional */
  notifyCustomer:             val,  /* optional */
  includeComment:             val,  /* optional */
  refundToStoreCreditAmount:  val   /* optional */
}, callback);
```

## [info](http://www.magentocommerce.com/api/soap/sales/salesOrderCreditMemo/sales_order_creditmemo.info.html)

Allows you to retrieve full information about the specified credit memo.

```js
magentoAPI.salesOrderCreditMemo.info({
  creditmemoIncrementId: val
}, callback);
```

## [list](http://www.magentocommerce.com/api/soap/sales/salesOrderCreditMemo/sales_order_creditmemo.list.html)

Allows you to retrieve the list of orders. Additional filters can be applied.

```js
magentoAPI.salesOrderCreditMemo.list(callback);

// or 

magentoAPI.salesOrderCreditMemo.list({
  filters: [ val, val, val ]
}, callback);

// or a single filter

magentoAPI.salesOrderCreditMemo.list({
  filters: val
}, callback);
```