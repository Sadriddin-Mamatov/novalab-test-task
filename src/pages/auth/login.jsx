import { Col, Row } from 'antd';
import { Container } from '@/styles/global';
import {  RegisterWrapper } from './style';
import { Button } from '@/components/button';
import { useLogin } from './useLogin';
import { InputPassword } from '@/components/input-password';
import { Spinner } from '@/components/spinner';
import { Input } from '@/components/input';

const Login = () => {
  const { form, onLogin,  isLoginLoading } = useLogin();

  return (
    <RegisterWrapper>
      <form onSubmit={form.handleSubmit(onLogin)}>
        <Container>
          <div className="content">
         
            <Row gutter={[12, 12]}>
              <Col span={24}>
                <Input
                  control={form.control}
                  name="username"
                  label="User Name"
                  placeholder="Enter user name"
                />
              </Col>
              <Col span={24}>
                <InputPassword
                  control={form.control}
                  name="password"
                  label="Parol"
                  placeholder="Parol"
                />
              </Col>
              <Col span={24} style={{ marginTop: '10px' }}>
                <Button type="submit" name="Tizimga kirish" />
              </Col>
            </Row>
          </div>
        </Container>
      </form>
      {isLoginLoading && <Spinner />}
    </RegisterWrapper>
  );
};

export default Login;
