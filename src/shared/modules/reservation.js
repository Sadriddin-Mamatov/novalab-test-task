import { request } from '../api/request';

export const getReservation = () =>
  request(`/reservations/all/`);

export const CreateReservation = (data) =>
  request.post('reservations/create/', data );

export const updateReservations = (id, data) =>
  request.put(`reservations/${id}/update/`, data );
