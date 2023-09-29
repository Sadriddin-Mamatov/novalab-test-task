import { request } from '../api/request';

export const getEvents = () =>
  request(`/events/all/`)

export const createEvent = (data) =>
  request.post('events/create/', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
export const updateEvents = (id, data) =>
  request.put(`events/${id}/update/`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
