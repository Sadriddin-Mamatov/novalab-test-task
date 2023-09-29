import { useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { CreateReservation, updateReservations } from '@/shared/modules/reservation';
import { useNavigate, useParams } from 'react-router-dom';
import { Notification } from '@/components/notification';
import { request } from '@/shared/api/request';

export const useConfirm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const form = useForm()

  const { data: events = [] } = useQuery({
    queryKey: ['get-events-list'],
    queryFn: () => request("events/all/"),
    select: (res) => {
      return res?.data?.map((v) => {
        return {
          value: v?.id,
          label: v?.name
        }
      })
    }
  })

  const { mutate, isLoading } = useMutation(
    (data) => (id ? updateReservations(id, data) : CreateReservation(data)),
    {
      onSuccess: () => {
        navigate('/admin/reservations');
        queryClient.invalidateQueries({
          queryKey: ['get-reservation-list'],
        });
        Notification({
          type: 'success',
          message: 'Success',
          description: `Reservations Successfully ${id ? 'updated' : 'created'
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
    let obj = {
      event: parseInt(data?.event),
      number_of_tickets: parseInt(data?.number_of_tickets)
    }
    // console.log(data, 'data gagssggag-------deeee');
    // const formData = new FormData();
    // formData.append('event', data.event);
    // formData.append('number_of_tickets', data.number_of_tickets);
    mutate(obj);
  };

  return {
    confirm,
    form,
    isLoading,
    events
  };
}
