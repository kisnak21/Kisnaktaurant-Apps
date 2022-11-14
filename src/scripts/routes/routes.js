import ListResto from '../views/pages/list';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/explore': ListResto,
  '/detail/:id': Detail,
  '/favorite': Like,
};

export default routes;
