import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createEvent, updateEvents } from '@/shared/modules/events';
import { useNavigate, useParams } from 'react-router-dom';
import { Notification } from '@/components/notification';

export const useConfirm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [file, setFile] = useState(null)
  console.log(file, "this is file")
  const queryClient = useQueryClient();
  const form = useForm()

  const { data: categoryList = [] } = useQuery({
    queryKey: ['get-categories-list'],
    select: (res) =>
      res?.data?.results?.map((v) => {
        return {
          value: v?.id,
          label: v?.name,
        };
      }),
  });

  const { mutate, isLoading } = useMutation(
    (data) => (id ? updateEvents(id, data) : createEvent(data)),
    {
      onSuccess: () => {
        navigate('/admin/events');
        queryClient.invalidateQueries({
          queryKey: ['get-events-list'],
        });
        Notification({
          type: 'success',
          message: 'Success',
          description: `Event Successfully ${
            id ? 'updated' : 'created'
          }`,
        });
      },
      onError: (err) => {
        console.log(err, 'err');
        Notification({
          type: 'error',
          message: 'Error',
          description: 'Something is wrong!',
        });
      },
    }
  );
  const confirm = (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('topic', data.topic);
    formData.append('date', new Date(data.date).toISOString()  );
    formData.append('place', data.place);
    formData.append('number_of_seats', data.number_of_seats);
    formData.append('ticket_price', data.ticket_price);
    formData.append('currency', data.currency);
    formData.append('thumbnail', file.originFileObj);
    formData.append('description', data.description);
    mutate(formData);
  };

  return {
    confirm,
    form,
    isLoading,
    categoryList,
    file,
    setFile
  };
};
