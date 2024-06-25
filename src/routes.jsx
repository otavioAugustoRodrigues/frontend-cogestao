import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { Home, Eventos } from './pages';
import { AppLayout } from './layouts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="eventos" element={<Eventos />} />
      </Route>
    </Route>,
  ),
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
