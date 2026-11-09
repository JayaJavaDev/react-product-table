import FilterableProductTable from './components/FilterableProductTable';
import PRODUCTS from './products';

function App() {
  return (
    <FilterableProductTable products={PRODUCTS} />
  );
}

export default App;