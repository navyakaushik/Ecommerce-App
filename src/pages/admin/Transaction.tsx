import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { Column } from "react-table";
import TableHOC from "../../components/admin/TableHOC";
import { Link } from "react-router-dom";

interface DataType{
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[]=[
  {
    Header: "User",
    accessor: "user"
  },
  {
    Header: "Amount",
    accessor: "amount"
  },
  {
    Header: "Discount",
    accessor: "discount"
  },
  {
    Header: "Quantity",
    accessor: "quantity"
  },
  {
    Header: "Status",
    accessor: "status"
  },
  {
    Header: "Action",
    accessor: "action"
  }
];

const arr:DataType[] = [
  {
  user: "Navya",
  amount: 4500,
  discount: 400,
  quantity: 2,
  status: <span className="red">Processing</span>,
  action: <Link to = "admin/transaction/kfnflejw">Manage</Link>
  },
  {
    user: "Rushat",
    amount: 6999,
    discount: 400,
    quantity: 4,
    status: <span className="green">Shipped</span>,
    action: <Link to = "admin/transaction/euhdmsoi">Manage</Link>
    },
    {
      user: "Radhika",
      amount: 6999,
      discount: 400,
      quantity: 6,
      status: <span className="purple">Delivered</span>,
      action: <Link to = "admin/transaction/ijewioes">Manage</Link>
      },
];


const Transaction = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(TableHOC<DataType>(
    columns, 
    data,
    "dashboard-product-box", 
    "Transactions",
    true
  ),[]);


  return (
    <div className="admin-container">
      <AdminSidebar/>
      <main>{Table()}</main>
    </div>
  );
};

export default Transaction;