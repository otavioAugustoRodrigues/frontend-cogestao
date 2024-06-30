import { useMutation, useQuery } from '@tanstack/react-query';
import {
  createEvent,
  deleteEvent,
  getEvent,
  updateEvent,
} from '../../services/api/endpoints';

export function useGetEnvent({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ['evento'],
    queryFn: getEvent,
    onSuccess,
    onError,
  });
}

export function useCreateEvent({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: createEvent,
    onSuccess,
    onError,
  });
}

export function useDeleteEvent({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: deleteEvent,
    onSuccess,
    onError,
  });
}

export function useUpdateEvent({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: updateEvent,
    onSuccess,
    onError,
  });
}
