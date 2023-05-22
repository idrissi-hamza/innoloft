import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import Navbar from './components/Navbar';
import EditProduct from './EditProduct';
import { useGetProductQuery } from './slices/apiSlice';
import Spinner from './components/Spinner';

function App() {
  const { isLoading, isSuccess, isError, error } = useGetProductQuery(6781);
  //
  return (
    <div className="bg-neutral-50 ">
      {isLoading && (
        <div className="flex items-center justify-center h-screen ">
          <Spinner />
        </div>
      )}
      {isSuccess && (
        <>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/product"
              element={<Product />}
            />
            <Route
              path="/edit"
              element={<EditProduct />}
            />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
