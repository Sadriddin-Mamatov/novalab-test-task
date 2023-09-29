import { STATUS } from '@/constants/status';
import { NotifyText } from '@/styles/global';
import { Button, Space } from 'antd';
import { BsCheck2All } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

export const useStatus = (status, accept, cancel) => {
  const orderStatus = () => {
    switch (status) {
      case STATUS.NEW:
        return (
          <Space>
            <Button type="primary" onClick={accept}>
              Accpect
            </Button>
            <Button type="primary" danger onClick={cancel}>
              Reject
            </Button>
          </Space>
        );
      case STATUS.ACCEPTED:
        return (
          <NotifyText>
            <BsCheck2All /> Accepted
          </NotifyText>
        );
      case STATUS.CANCELLED:
        return (
          <NotifyText>
            <AiOutlineClose /> Rejected
          </NotifyText>
        );
    }
  };
  return orderStatus;
};
