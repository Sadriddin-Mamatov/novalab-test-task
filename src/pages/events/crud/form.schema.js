import * as yup from 'yup';

export const formSchema = yup.object().shape({
  name: yup
    .string()
    .nullable()
    .required('Ushbu maydon to`ldirilishi shart!'),
  description: yup
    .string()
    .nullable()
    .required('Ushbu maydon to`ldirilishi shart!'),
  number_of_seats: yup.string().nullable().required('Ushbu maydon to`ldirilishi shart!'),
  ticket_price: yup
    .string()
    .nullable()
    .required('Ushbu maydon to`ldirilishi shart!'),
  date: yup
    .string()
    .nullable()
    .required('Ushbu maydon to`ldirilishi shart!'),
});
