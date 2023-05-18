
import '../styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './HomePage';
import Quiz from './Quiz';
import Result from './Result';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },{
    path: '/quiz',
    element: <Quiz/>
  },{
    path: '/result',
    element: <Result/>
  },
])
function App() {
  return (
    <>
      <RouterProvider router={router} />  
    </>
  );
}

export default App;
