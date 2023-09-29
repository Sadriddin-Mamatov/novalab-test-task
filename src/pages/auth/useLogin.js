import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { login, userlogin } from '@/shared/modules/login';
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';

export const useLogin = () => {
  const navigate = useNavigate();
  const [contextHolder] = notification.useNotification();

  const form = useForm();

  const registerMutate = useMutation((data) => login(data), {
    onSuccess: () => {
      navigate('/login')
    },
    onError: (err) => {
     console.log(err)
    },
  });

  const loginMutate = useMutation((data) => userlogin(data), {
    onSuccess: (res) => {
      console.log(res, 'res')
      if(res?.status == 200){
      navigate('/admin/events/')
      }
      else{
        navigate('/login')
      }
    },
    onError: (err) => {
      console.log(err)
    },
  });

  const onSubmit = (data) => {
    registerMutate.mutate(data)
  };

  const onLogin = (data) => {
    loginMutate.mutate(data)
    let base64string = btoa(`${data.username}:${data.password}`)
    localStorage.setItem('token', base64string)
  };
  return {
    form,
    onSubmit,
    onLogin,
    isLoading: registerMutate.isLoading,
    isLoginLoading: loginMutate.isLoading,
    contextHolder,
  };
};
