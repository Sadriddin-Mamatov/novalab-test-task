import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { DATE_FORMAT } from '@/constants/format';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localeData from 'dayjs/plugin/localeData';
import weekday from 'dayjs/plugin/weekday';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import weekYear from 'dayjs/plugin/weekYear';
import { useEffect } from 'react';
import { topics } from '@/constants/topic';
import { currency } from '@/constants/currency';

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);

export const useReset = ({ form }) => {
  const { id } = useParams();

  const eventsdetail = JSON.parse(localStorage.getItem('events_detail'))
  
  console.log(eventsdetail, 'events-detail');
  useEffect(() => {
   if(id) {
    let newDate = dayjs(eventsdetail?.date).format('YYYY-MM-DD, HH:mm')
    form.reset({
      name: eventsdetail?.name,
      number_of_seats: eventsdetail?.number_of_seats,
      place: eventsdetail?.place,
      ticket_price: eventsdetail?.ticket_price,
      description: eventsdetail?.description,
      date: dayjs(newDate, DATE_FORMAT),
      topic: eventsdetail?.topic,
      currency: eventsdetail?.currency
    })
   } 
  }, [])

  return {
    id,
  };
};
