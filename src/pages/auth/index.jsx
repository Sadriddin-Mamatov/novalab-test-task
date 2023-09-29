import { Col, Row } from 'antd';
import { Container } from '@/styles/global';
import { RegisterWrapper } from './style';
import { Button } from '@/components/button';
import { useLogin } from './useLogin';
import { InputPassword } from '@/components/input-password';
import { Spinner } from '@/components/spinner';
import { Input } from '@/components/input'; 

const Auth = () => {
  const { form, onSubmit, isLoading, contextHolder } = useLogin();

  return (
    <RegisterWrapper>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {contextHolder}
        <Container>
          <div className="content">
         
            <Row gutter={[12, 12]}>
            <Col span={24}>
                <Input
                  control={form.control}
                  name="first_name"
                  label="First Name"
                  placeholder="Enter first name"
                />
              </Col>
              <Col span={24}>
                <Input
                  control={form.control}
                  name="last_name"
                  label="Last Name"
                  placeholder="Enter last name"
                />
              </Col>
              <Col span={24}>
                <Input
                  control={form.control}
                  name="email"
                  label="Email"
                  placeholder="Enter email"
                />
              </Col>
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
              <Col span={24}>
                <InputPassword
                  control={form.control}
                  name="password1"
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
      {isLoading && <Spinner />}
    </RegisterWrapper>
  );
};

export default Auth;
