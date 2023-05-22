import Spinner from './components/Spinner';
import { useGetProductQuery } from './slices/apiSlice';

const Home = () => {
  const { data: product } = useGetProductQuery(6781);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
