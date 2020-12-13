

import { Paper } from '@material-ui/core'

import React, { useContext, useEffect } from 'react'
import PropTypes, { func } from 'prop-types'
import { PRODUCTS } from './ReactStartData'
import { EnhancedDisplayTitle } from './Display/DisplayTitle'
import {  EnhancedDisplaySearch } from './Display/DisplaySearch'
import { EnhancedDisplayContainer } from './Display/DisplayContainer'

function ProductCategoryRow(props) {
  const category = props.category;
  return (
    <tr className="test4">
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow (props) {
  const product = props.product;
  const name = product.stocked ?
    product.name :
    <span style={{color: 'red'}}>
        {product.name}
      </span>;

  return (
    <tr className="test5">
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable (props) {
  const filterText = props.filterText;
  const inStockOnly = props.inStockOnly;

  const rows = [];
  let lastCategory = null;

  props.products.forEach((product) => {
    if (product.name.indexOf(filterText) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table className="test3">
      <thead>
        <tr >
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar(props) {
  const filterText = props.filterText;
  const inStockOnly = props.inStockOnly;

  function handleFilterTextChange(e) {
    props.onFilterTextChange(e.target.value);
  }

  function handleInStockChange(e) {
    props.onInStockChange(e.target.checked);
  }




  return (
    <form className="test3">
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={handleFilterTextChange}
      />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={handleInStockChange}
        />
        {' '}
        Only show products in stock
      </p>
    </form>
  );
}

function FilterableProductTable(props) {
  const [filterText, setFilterText] = React.useState('')
  const [inStockOnly, setInStockOnly] = React.useState(false)

  function handleFilterTextChange(filterText) {
    setFilterText( filterText);
  }

  function handleInStockChange(inStockOnly) {
    setInStockOnly(inStockOnly);
  }




  return (
    <div className="test2">
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleInStockChange}
      />
      <ProductTable
        filterText={filterText}
        inStockOnly={inStockOnly}
        products={props.products}
      />
    </div>
  );
}

function DisplayTitle(props) {

}


function ReactStart(props) {
  const title=props.selected

  return (
    <Paper className="test1">
      <EnhancedDisplayContainer />
      <div>################################</div>
      <FilterableProductTable products={PRODUCTS} />
    </Paper>
  )
}

export default ReactStart
