import { Pagination as AntdPagination } from 'antd';
import PropTypes from 'prop-types';
import { Wrapper } from './style';

export const Pagination = ({ total, params, setParams }) => {
  return (
    <Wrapper>
      <AntdPagination
        defaultCurrent={params.page}
        current={params.page}
        total={total}
        value={params}
        onChange={(e) =>
          setParams({
            page: e,
          })
        }
        showSizeChanger={false}
      />
    </Wrapper>
  );
};

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  setParams: PropTypes.any,
  params: PropTypes.any,
};
