/* eslint-disable react-refresh/only-export-components */
import { ROUTER } from "@/constants/router";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { PrivateRouter } from "./private/private";

const Auth = lazy(async () => await import("@/pages/auth"));
const NotFound = lazy(async () => await import("@/pages/404"));
const Login = lazy(async () => await import("@/pages/auth/login"));
const Events = lazy(async () => await import("@/pages/events"));
const CreateEvents = lazy(async () => await import("@/pages/events/crud"));
const Reservations = lazy(async () => import("@/pages/reservations"));
const CreateReservations = lazy(async () => import("@/pages/reservations/crud")) ;

export const router = createBrowserRouter([
  {
    path: ROUTER.LOGIN,
    element: <Auth />,
  },
  {
    path: ROUTER.USER_LOGIN,
    element: <Login />,
  },
  {
    path: ROUTER.ADMIN,
    element: <PrivateRouter />,
    children: [
      {
        path: ROUTER.EVENTS,
        element: <Events />,
      },
      {
        path: ROUTER.EVENTS + ROUTER.CREATE,
        element: <CreateEvents />,
      },
      {
        path: ROUTER.EVENTS + ROUTER.EDIT + "/:id",
        element: <CreateEvents />,
      },
      {
        path: ROUTER.RESERVATIONS,
        element: <Reservations />,
      },
      {
        path: ROUTER.RESERVATIONS + ROUTER.CREATE,
        element: <CreateReservations />,
      },
      {
        path: ROUTER.RESERVATIONS + ROUTER.EDIT + "/:id",
        element: <CreateReservations />,
      },
    ],
  },
  {
    path: ROUTER.NOT_FOUND,
    element: <NotFound />,
  },
]);
