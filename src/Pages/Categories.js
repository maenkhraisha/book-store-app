import { useDispatch } from 'react-redux';
import checkStatus from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h1>Catergory Page</h1>
      <input
        type="button"
        onClick={() => dispatch(checkStatus())}
        value="Check status"
      />
    </>
  );
};
export default Categories;
