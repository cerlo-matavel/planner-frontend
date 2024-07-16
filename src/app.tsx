import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { TripDetailsPage } from "./pages/trip-details";
import { CreateTripPage } from "./pages/create-trip";


//Array com todas as paginas da aplicacao
const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />,
  },

  {
    path: "/trips/:tripId",
    element: <TripDetailsPage />,
  }
]);

// React router para o roteamento
export function App() {
  return <RouterProvider router={router} />
}