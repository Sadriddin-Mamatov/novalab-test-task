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
    queryKey: ['get-reservations-list'],
    queryFn: () => request("reservations/all/"),
    select: (res) => {
      return res?.data;
    },
    onError: (err) => {
      console.log(err?.response, "res");
    },
  });

  const { mutate } = useMutation(
    (id) => request.delete(`/reservations/${id}/cancel/`),
    {
      onSuccess: () => {
        refetch();
        api["success"]({
          message: "Success",
          description: "Reservation successfully deleted",
        });
      },
    }
  );
  const handleDelete = (id) => {
    console.log(id, "id");
    confirm({
      title: "Do you want to delete this reservation?",
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
    localStorage.setItem('reservations_detail', JSON.stringify(item))
    navigate(`${ROUTER.EDIT}/${item.id}`)
  }


  const columns = [
    {
      title: "Event",
      dataIndex: "event",
      key: "event",
    },
    {
      title: "Number of tickets",
      dataIndex: "number_of_tickets",
      key: "number_of_tickets",
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
