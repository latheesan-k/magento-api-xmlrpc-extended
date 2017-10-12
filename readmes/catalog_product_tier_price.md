# Catalog Product Tier Price

## [info](http://www.magentocommerce.com/api/soap/catalog/catalogProductTierPrice/catalog_product_attribute_tier_price.info.html)

Allows you to retrieve information about product tier prices.

```js
magentoAPI.catalogProductTierPrice.info({
  product: val
}, callback);
```

## [update](http://www.magentocommerce.com/api/soap/catalog/catalogProductTierPrice/catalog_product_attribute_tier_price.update.html)

Allows you to update the product tier prices.

`tierPrices` is a catalogProductTierPriceEntity object.

```js
magentoAPI.catalogProductTierPrice.update({
  product:    val,
  tierPrices: val
}, callback);
```