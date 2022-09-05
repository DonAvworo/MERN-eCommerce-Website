import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../utils/queries';

//import categories from '../data/categories'

const CategoriesLinks = () => {
  
  // eslint-disable-next-line no-unused-vars
  const { loading, data } = useQuery(QUERY_CATEGORIES);
  const categories = data?.categories || [];

  return (
    <div>
      {categories.map(category => (
          <div key={category.name} className='category-link border p-5 m-3'>
            <Link to={`/category/${category.name}`}>{category.name}</Link>
          </div>
        ))}
    </div>
  )
}

export default CategoriesLinks
