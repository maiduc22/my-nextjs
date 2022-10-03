import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Header } from "../components/Header";
import { Table } from "antd";
import { FilterComponent } from "../components/FilterComponent";

const data = [
  {
    id: 1,
    role: "intern",
    fullname: "Mai Duc",
    phone: "0942893001",
    address: "362 Bui Xuong Trach",
  },
  {
    id: 2,
    role: "intern",
    fullname: "Mai Duc",
    phone: "0942893001",
    address: "362 Bui Xuong Trach",
  },
  {
    id: 3,
    role: "tester",
    fullname: "Mai Duc",
    phone: "0942893001",
    address: "362 Bui Xuong Trach",
  },
  {
    id: 4,
    role: "project owner",
    fullname: "Mai Duc",
    phone: "0942893001",
    address: "362 Bui Xuong Trach",
  },
];
export default function Home() {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];
  return (
    <div className="flex justify-center">
      <FilterComponent />
      <div>
        <Table dataSource={data} columns={columns} />
      </div>
    </div>
  );
}
