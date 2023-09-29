import { useParams } from 'react-router-dom';
import { useEffect } from 'react';


export const useReset = ({ form }) => {
  const { id } = useParams();

  const reservationsdetail = JSON.parse(localStorage.getItem('reservations_detail'))
  
  useEffect(() => {
   if(id) {
    form.reset({
      event: reservationsdetail?.event,
      number_of_tickets: reservationsdetail?.number_of_tickets,
    })
   } 
  }, [])

  return {
    id,
  };
};
