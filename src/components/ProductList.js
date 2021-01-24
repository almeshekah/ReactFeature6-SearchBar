// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import { useState  } from "react";
import SearchBar from "./SearchBar";


// Data
import products from "../products";


const ProductList = () => {
  const [input, setInput] = useState('');
  const productList = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));
  const filtered = products.filter(product => {
    return product.name.toLowerCase().includes(input.toLowerCase())
   })

  return (
    <>
      <SearchBar 
      input={input} 
      onChange={ setInput  }/>
      <ListWrapper>{productList}</ListWrapper>
    </>
  );
};

export default ProductList;
