import { ROUTER } from '@/constants/router';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';

export const HocPrivate = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('token'));
  console.log(user?.username, "this is user")
  const { pathname } = useLocation();

  if (!user?.username) {
    return <Navigate to={ROUTER.ADMIN + '/login' + ROUTER.EVENTS}  />;
  }
  if (pathname === ROUTER.ADMIN || pathname === ROUTER.ADMIN + '/events') {
    return <Navigate to={ROUTER.ADMIN + '/login' + ROUTER.EVENTS} />;
  }

  return <>{children}</>;
};

HocPrivate.propTypes = {
  children: PropTypes.element.isRequired,
};
