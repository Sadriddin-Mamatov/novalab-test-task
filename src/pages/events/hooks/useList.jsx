import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Modal, notification } from "antd";
import { ActionWrapper } from "../style";
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "@/constants/router";
import { useState } from "react";
import { request } from "@/shared/api/request";

const { confirm } = Modal;

export const useList = () => {
  const [params, setParams] = useState({
    page: 1,
  });
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['get-events-list'],
    queryFn: () => request("events/all/"),
    select: (res) => { console.log(res?.data, "dsa data bu hisob----")
      return res?.data;
    },
    onError: (err) => {
      console.log(err?.response, "res");
    },
  });

  const { mutate } = useMutation(
    (id) => request.delete(`/events/${id}/delete/`),
    {
      onSuccess: () => {
        refetch();
        api["success"]({
          message: "Success",
          description: "Maxsulot muvaffaqiyatli o`chirildi",
        });
      },
    }
  );
  const handleDelete = (id) => {
    console.log(id, "id");
    confirm({
      title: "Do you want to delete?",
      icon: <ExclamationCircleOutlined />,
      onOk() {
        mutate(id);
      },
      onCancel() {
        console.log("Cancel");
      },
      okButtonProps: {
        style: {
          background: "var(--main-red)",
        },
      },
    });
  };

  const handleEdit = (item) => {
    localStorage.setItem('events_detail', JSON.stringify(item))
    navigate(`${ROUTER.EDIT}/${item.id}`)
  }


  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Place",
      dataIndex: "place",
      key: "place",
    },
    {
      title: "Number of seats",
      dataIndex: "number_of_seats",
      key: "number_of_seats",
    },
    {
      title: "Ticket price",
      dataIndex: "ticket_price",
      key: "ticket_price",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Currency",
      dataIndex: "currency",
      key: "currency",
    },
    {
      title: "Action",
      key: "action",
      render: (row) => (
        <ActionWrapper size="middle">
          <Button
            className="edit-btn"
            onClick={() => handleEdit(row)}
          >
            <EditOutlined />
          </Button>
          <Button className="delete-btn" onClick={() => handleDelete(row.id)}>
            <DeleteOutlined />
          </Button>
        </ActionWrapper>
      ),
    },
  ];

  return {
    columns,
    data: products,
    isLoading,
    contextHolder,
    count: products.count,
    params,
    setParams,
  };
};
