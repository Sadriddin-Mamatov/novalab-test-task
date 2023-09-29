import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import {
  FormGroupProvider,
  Label,
  Input as CustomInput,
  Error,
} from '@/styles/global';

export const Input = ({ control, name, ...props }) => (
  <Controller
    name={name}
    control={control}
    rules={{
      pattern: /^[a-zA-Z0-9_.,-@'`"?! ]*$/,
    }}
    render={({ field, formState: { errors } }) => (
      <FormGroupProvider>
        <Label>{props.label}</Label>
        <CustomInput
          {...props}
          {...field}
          onChange={(e) => {
            field.onChange(e);
          }}
          className={errors[name] ? 'input-error' : ''}
        />
        <Error>{errors[name]?.message}</Error>
      </FormGroupProvider>
    )}
  />
);

Input.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
