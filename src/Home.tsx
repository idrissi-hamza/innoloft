import { useGetProductQuery } from './slices/apiSlice';

const Home = () => {
  const { data: product } = useGetProductQuery(6781);

  return (
    <div>
      <h1>Home</h1>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>
  );
};

export default Home;
