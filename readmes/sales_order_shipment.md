# Sales Order Shipment

## [addComment](http://www.magentocommerce.com/api/soap/sales/salesOrderShipment/sales_order_shipment.addComment.html)

Allows you to add a new comment to the order shipment.

```js
magentoAPI.salesOrderShipment.addComment({
  shipmentIncrementId:  val,
  comment:              val,  /* optional */
  email:                val,  /* optional */
  includeInEmail:       val   /* optional */
}, callback);
```

## [addTrack](http://www.magentocommerce.com/api/soap/sales/salesOrderShipment/sales_order_shipment.addTrack.html)

Allows you to add a new tracking number to the order shipment.

```js
magentoAPI.salesOrderShipment.addTrack({
  shipmentIncrementId:  val,
  carrier:              val,
  title:                val,
  trackNumber:          val
}, callback);
```

## [create](http://www.magentocommerce.com/api/soap/sales/salesOrderShipment/sales_order_shipment.create.html)

Allows you to create a new shipment for an order.

```js
magentoAPI.salesOrderShipment.create({
  orderIncrementId: val,
  itemsQty:         val,  /* optional */
  comment:          val,  /* optional */
  email:            val,  /* optional */
  includeComment:   val   /* optional */
}, callback);
```

## [getCarriers](http://www.magentocommerce.com/api/soap/sales/salesOrderShipment/sales_order_shipment.getCarriers.html)

Allows you to retrieve the list of allowed carriers for an order.

```js
magentoAPI.salesOrderShipment.getCarriers({
  orderIncrementId: val
}, callback);
```

## [info](http://www.magentocommerce.com/api/soap/sales/salesOrderShipment/sales_order_shipment.info.html)

Allows you to retrieve the shipment information.

```js
magentoAPI.salesOrderShipment.info({
  shipmentIncrementId: val
}, callback);
```

## [list](http://www.magentocommerce.com/api/soap/sales/salesOrderShipment/sales_order_shipment.list.html)

Allows you to retrieve the list of order shipments. Additional filters can be applied.

```js
magentoAPI.salesOrderShipment.list(callback);

// or 

magentoAPI.salesOrderShipment.list({
  filters: [ val, val, val ]
}, callback);

// or a single filter

magentoAPI.salesOrderShipment.list({
  filters: val
}, callback);
```

## [removeTrack](http://www.magentocommerce.com/api/soap/sales/salesOrderShipment/sales_order_shipment.removeTrack.html)

Allows you to remove a tracking number from the order shipment.

```js
magentoAPI.salesOrderShipment.removeTrack({
  shipmentIncrementId:  val,
  trackId:              val
}, callback);
```