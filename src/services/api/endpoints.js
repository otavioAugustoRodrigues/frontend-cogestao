import api from './api';

export async function getEvent() {
  const { data } = await api.get(`/evento`);
  return data;
}

export async function createEvent(body) {
  const { data } = await api.post(`/evento`, body);
  return data;
}

export async function deleteEvent(id) {
  const { data } = await api.delete(`/evento/${id}`);
  return data;
}

export async function updateEvent(data) {
  const { data1 } = await api.put(`/event/${data.id}`, data.body);
  return data1;
}
