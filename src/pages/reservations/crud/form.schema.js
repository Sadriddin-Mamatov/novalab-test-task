import * as yup from 'yup';

export const formSchema = yup.object().shape({
  event: yup
    .string()
    .nullable()
    .required('Ushbu maydon to`ldirilishi shart!'),
    number_of_tickets: yup
    .string()
    .nullable()
    .required('Ushbu maydon to`ldirilishi shart!'),
});
