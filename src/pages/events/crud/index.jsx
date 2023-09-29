import { Button } from "@/components/button";
import { Footer, Header, Title, Wrapper } from "@/styles/global";
import { useConfirm } from "../hooks/useConfirm";
import { Col, Row } from "antd";
import { Input } from "@/components/input";
import { CustomTextArea } from "@/components/textarea";
import { Calendar } from "@/components/calendar";
import { Select } from "@/components/select";
import { Spinner } from "@/components/spinner";
import { useNavigate } from "react-router-dom";
import { useReset } from "../hooks/useReset";
import { topics } from "@/constants/topic";
import { currency } from "@/constants/currency";
import FileUpload from "@/components/upload-file";

const CreateEvents = () => {
  const navigate = useNavigate();
  const { confirm, form, isLoading, categoryList, file,
    setFile } = useConfirm();
  const { id } = useReset({ form });

  return (
    <Wrapper>
      <Header>
        <Title>{id ? "Update events" : "Create events"} </Title>
        <Button name="Orqaga" onClick={() => navigate("/admin/events")} />
      </Header>
  
        <form onSubmit={form.handleSubmit(confirm)}>
          <Row gutter={[16, 16]}>
            <Col span={24} lg={12}>
              <Input
                control={form.control}
                name="name"
                label="Name"
                placeholder="Name"
              />
            </Col>
            <Col span={24} lg={12}>
              <Select
                control={form.control}
                name="topic"
                label="Topics"
                placeholder="Topics"
                options={topics}
              />
            </Col>
            <Col span={24} lg={12}>
              <Calendar
                control={form.control}
                name="date"
                label="Date"
                placeholder="Date"
              />
            </Col>
            <Col span={24} lg={12}>
              <Input
                control={form.control}
                name="place"
                label="Place"
                placeholder="Place"
              />
            </Col>
            <Col span={24} lg={12}>
              <Input
                control={form.control}
                name="number_of_seats"
                label="Number of seats"
                placeholder="Number of seats"
                type='number'
              />
            </Col>
            <Col span={24} lg={12}>
              <Input
                control={form.control}
                name="ticket_price"
                label="Ticket price"
                placeholder="Ticket price"
              />
            </Col>
            <Col span={24} lg={12}>
              <Select
                control={form.control}
                name="currency"
                label="Currency"
                placeholder="Currency"
                options={currency}
              />
            </Col>
            <Col span={24} lg={12}>
             <FileUpload setFile={setFile} />
            </Col>
            <Col span={24} lg={12}>
              <CustomTextArea
                control={form.control}
                name="description"
                label="Description"
                placeholder="Description"
              />
            </Col>
          </Row>
          <Footer>
            <Button
              name={id ? "Update" : "Create Events"}
              className="category-btn"
              type="submit"
            />
          </Footer>
        </form>

      {isLoading && <Spinner />}
    </Wrapper>
  );
};

export default CreateEvents;
