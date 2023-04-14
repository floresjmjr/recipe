import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Signup from './Pages/Signup';

const router = createBrowserRouter([
  {path:'/signup', element:<Signup/>}
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
