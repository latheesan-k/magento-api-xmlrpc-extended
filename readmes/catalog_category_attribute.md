# Catalog Category Attribute

## [currentStore](http://www.magentocommerce.com/api/soap/catalog/catalogCategoryAttributes/catalog_category_attribute.currentStore.html)

Allows you to set/get the current store view.

```js
magentoAPI.catalogCategoryAttribute.currentStore({
  storeView: val
}, callback);
```

## [list](http://www.magentocommerce.com/api/soap/catalog/catalogCategoryAttributes/catalog_category_attribute.list.html)

Allows you to retrieve the list of category attributes.

```js
magentoAPI.catalogCategoryAttribute.list(callback);
```

## [options](http://www.magentocommerce.com/api/soap/catalog/catalogCategoryAttributes/catalog_category_attribute.options.html)

Allows you to retrieve the attribute options.

```js
magentoAPI.catalogCategoryAttribute.options({
  attributeId:  val,
  storeView:    val
}, callback);
```