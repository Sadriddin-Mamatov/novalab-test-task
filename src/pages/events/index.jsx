import { Button } from '@/components/button';
import { Header, Title, Wrapper } from '@/styles/global';
import { useList } from './hooks/useList';
import { CustomTable } from '@/components/table';
import { useNavigate } from 'react-router-dom';
import { ROUTER } from '@/constants/router';
import { Pagination } from '@/components/pagination';

const Events = () => {
  const navigate = useNavigate();
  const { columns, data, isLoading, contextHolder, count, params, setParams } =
    useList();

  return (
    <>
      <Wrapper>
        <Header>
          <Title>Events</Title>
          <Button
            name="Create events"
            onClick={() => navigate(ROUTER.CREATE)}
          />
        </Header>
        <CustomTable columns={columns} data={data} loading={isLoading} />
      </Wrapper>
      <Pagination total={count} params={params} setParams={setParams} />
      {contextHolder}
    </>
  );
};

export default Events;
