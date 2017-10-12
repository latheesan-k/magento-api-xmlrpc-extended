# Customer

## [create](http://www.magentocommerce.com/api/soap/customer/customer.create.html)

Create a new customer.

`customerData` is an array of customerCustomerEntityToCreate objects.

```js
magentoAPI.customer.create({
  customerData: [ val, val, val ]
}, callback);

// or a single cell of customer data

magentoAPI.customer.create({
  customerData: val
}, callback);
```

## [delete](http://www.magentocommerce.com/api/soap/customer/customer.delete.html)

Delete the required customer.

```js
magentoAPI.customer.delete({
  customerId: val
}, callback);
```

## [info](http://www.magentocommerce.com/api/soap/customer/customer.info.html)

Retrieve information about the specified customer.

```js
magentoAPI.customer.info({
  customerId: val,
  attributes: [ val, val, val ]   /* optional */
}, callback);

// or a single attribute

magentoAPI.customer.info({
  customerId: val,
  attributes: val   /* optional */
}, callback);
```

## [list](http://www.magentocommerce.com/api/soap/customer/customer.list.html)

Allows you to retrieve the list of customers.

```js
magentoAPI.customer.list({
  filters: [ val, val, val ]
}, callback);

// or a single attribute

magentoAPI.customer.list({
  filters: val
}, callback);
```

## [update](http://www.magentocommerce.com/api/soap/customer/customer.update.html)

Update information about the required customer.

Note that you need to pass only those arguments which you want to be updated.

`customerData` is an array of customerCustomerEntityToCreate objects.

```js
magentoAPI.customer.update({
  customerId:   val,
  customerData: [ val, val, val ]
}, callback);

// or a single attribute

magentoAPI.customer.update({
  customerId:   val,
  customerData: val
}, callback);
```