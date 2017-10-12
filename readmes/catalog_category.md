# Catalog Category

## [assignedProducts](http://www.magentocommerce.com/api/soap/catalog/catalogCategory/catalog_category.assignedProducts.html)

Retrieve the list of products assigned to a required category.

```js
magentoAPI.catalogCategory.assignedProducts({
  categoryId: val
}, callback);
```

## [assignProduct](http://www.magentocommerce.com/api/soap/catalog/catalogCategory/catalog_category.assignProduct.html)

Create a new category and return its ID.

```js
magentoAPI.catalogCategory.assignProduct({
  categoryId: val,
  product:    val,
  position:   val   /* optional */
}, callback);
```

## [create](http://www.magentocommerce.com/api/soap/catalog/catalogCategory/catalog_category.create.html)

Create a new category and return its ID.

`data` is a catalogCategoryEntityCreate object.

```js
magentoAPI.catalogCategory.create({
  categoryId: val,
  data:       val,
  storeView:  val   /* optional */
}, callback);
```

## [currentStore](http://www.magentocommerce.com/api/soap/catalog/catalogCategory/catalog_category.currentStore.html)

Allows you to set/get the current store view.

```js
magentoAPI.catalogCategory.currentStore({
  storeView: val
}, callback);
```

## [delete](http://www.magentocommerce.com/api/soap/catalog/catalogCategory/catalog_category.delete.html)

Allows you to delete the required category.

```js
magentoAPI.catalogCategory.delete({
  categoryId: val
}, callback);
```

## [info](http://www.magentocommerce.com/api/soap/catalog/catalogCategory/catalog_category.info.html)

Allows you to retrieve information about the required category.

```js
magentoAPI.catalogCategory.info({
  categoryId: val,
  storeView:  val,  /* optional */
  attributes: val   /* optional */
}, callback);
```

## [level](http://www.magentocommerce.com/api/soap/catalog/catalogCategory/catalog_category.level.html)

Allows you to retrieve one level of categories by a website, a store view, or a parent category.

```js
magentoAPI.catalogCategory.level(callback);

// or

magentoAPI.catalogCategory.level({
  website:        val,  /* optional */
  storeView:      val,  /* optional */
  parentCategory: val   /* optional */
}, callback);
```

## [move](http://www.magentocommerce.com/api/soap/catalog/catalogCategory/catalog_category.move.html)

Allows you to move the required category in the category tree.

```js
magentoAPI.catalogCategory.move({
  categoryId: val,
  parentId:   val,
  afterId:    val   /* optional */
}, callback);
```

## [removeProduct](http://www.magentocommerce.com/api/soap/catalog/catalogCategory/catalog_category.removeProduct.html)

Allows you to remove the product assignment from the category.

```js
magentoAPI.catalogCategory.removeProduct({
  categoryId: val,
  productId:   val
}, callback);
```

## [tree](http://www.magentocommerce.com/api/soap/catalog/catalogCategory/catalog_category.tree.html)

Allows you to retrieve the hierarchical tree of categories.

```js
magentoAPI.catalogCategory.tree(callback);

// or

magentoAPI.catalogCategory.tree({
  parentId:   val,  /* optional */
  storeView:  val  /* optional */
}, callback);
```

## [update](http://www.magentocommerce.com/api/soap/catalog/catalogCategory/catalog_category.update.html)

Update the required category. Note that you should specify only those parameters which you want to be updated.

```js
magentoAPI.catalogCategory.update({
  categoryId:   val,
  categoryData: val,
  storeView:    val   /* optional */
}, callback);
```

## [updateProduct](http://www.magentocommerce.com/api/soap/catalog/catalogCategory/catalog_category.updateProduct.html)

Allows you to update the product assigned to a category. The product position is updated.

```js
magentoAPI.catalogCategory.updateProduct({
  categoryId: val,
  productId:  val,
  position:   val   /* optional */
}, callback);
```