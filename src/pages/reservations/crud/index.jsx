import { Button } from "@/components/button";
import { Footer, Header, Title, Wrapper } from "@/styles/global";
import { useConfirm } from "../hooks/useConfirm";
import { Col, Row } from "antd";
import { Input } from "@/components/input";
import { Spinner } from "@/components/spinner";
import { useNavigate } from "react-router-dom";
import { useReset } from "../hooks/useReset";
import { Select } from "@/components/select";

const CreateReservations = () => {
  const navigate = useNavigate();
  const { confirm, form, isLoading, events } = useConfirm();
  const { id } = useReset({ form });

  return (
    <Wrapper>
      <Header>
        <Title>{id ? "Update Reservations" : "Create Reservations"} </Title>
        <Button name="Orqaga" onClick={() => navigate("/admin/reservations")} />
      </Header>

      <form onSubmit={form.handleSubmit(confirm)}>
        <Row gutter={[16, 16]}>
          <Col span={24} lg={12}>
            <Select
              control={form.control}
              name="event"
              label="Event"
              placeholder="Event"
              options={events}
            />
          </Col>
          <Col span={24} lg={12}>
            <Input
              control={form.control}
              name="number_of_tickets"
              label="Number of tickets"
              placeholder="Number of tickets"
              type="number"
            />
          </Col>
        </Row>
        <Footer>
          <Button
            name={id ? "Update " : "Create Reservations"}
            className="category-btn"
            type="submit"
          />
        </Footer>
      </form>

      {isLoading && <Spinner />}
    </Wrapper>
  );
};

export default CreateReservations;
