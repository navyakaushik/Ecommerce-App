import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/loader";
import Header from "./components/header";
import Orders from "./pages/orders";
import { Toaster } from "react-hot-toast";

const Home = lazy(() => import("./pages/home"));
const Search = lazy(() => import("./pages/search"));
const Cart = lazy(() => import("./pages/cart"));
const Shipping = lazy(() => import("./pages/shipping"));
const Login = lazy(() => import("./pages/login"));
const OrderDetails = lazy(() => import("./pages/order-details"))
//const Orders = lazy(() => import("./pages/orders"));



//ADMIN ROUTES IMPORTING

const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const Products = lazy(() => import("./pages/admin/Products"));
const Transaction = lazy(() => import("./pages/admin/Transaction"));
const Customers = lazy(() => import("./pages/admin/Customers"));
const NewProduct = lazy(() => import("./pages/admin/management/NewProduct"));

const ProductManagement = lazy(
  () => import("./pages/admin/management/ProductManagement")
);

const TransactionManagement = lazy(
  () => import("./pages/admin/management/TransactionManagement")
);

const BarCharts = lazy(() => import("./pages/admin/charts/BarCharts"));
const LineCharts = lazy(() => import("./pages/admin/charts/LineCharts"));
const PieCharts = lazy(() => import("./pages/admin/charts/PieCharts"));

const Stopwatch = lazy(() => import("./pages/admin/apps/Stopwatch"));
const Coupon = lazy(() => import("./pages/admin/apps/Coupon"));
const Toss = lazy(() => import("./pages/admin/apps/Toss"));


const App = () => {
  return (
  <Router>
    {/*Header*/}
    <Header/>
    <Suspense fallback = {<Loader/>}>
    <Routes>
      <Route path = "/" element= {<Home/>} />
      <Route path = "/search" element= {<Search/>} />
      <Route path = "/cart" element= {<Cart/>} />
      {/*Not logged in route */}
      <Route path = "/login" element={<Login/>} />
      {/* Logged in user routes */}

      <Route path = "/shipping" element = {<Shipping/>} />
      <Route path = "/orders" element = {<Orders/>}  />
      <Route path = "/order/:id" element = {<OrderDetails/>}  />


      {/* ADMIN ROUTES */}
      
      <Route
            /*element={
              <ProtectedRoute
                isAuthenticated={true}
                adminOnly={true}
                admin={user?.role === "admin" ? true : false}
              />
            }*/
          >
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/product" element={<Products />} />
            <Route path="/admin/customer" element={<Customers />} />
            <Route path="/admin/transaction" element={<Transaction />} />
            {/* Charts */}
            <Route path="/admin/chart/bar" element={<BarCharts />} />
            <Route path="/admin/chart/pie" element={<PieCharts />} />
            <Route path="/admin/chart/line" element={<LineCharts />} />
            {/* Apps */}
            <Route path="/admin/app/coupon" element={<Coupon />} />
            <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
            <Route path="/admin/app/toss" element={<Toss />} />

            {/* Management */}
            <Route path="/admin/product/new" element={<NewProduct />} />

            <Route path="/admin/product/:id" element={<ProductManagement />} />

            <Route
              path="/admin/transaction/:id"
              element={<TransactionManagement />}
            />
          </Route>

    </Routes>
    </Suspense>
    <Toaster position = "bottom-center"/>
  </Router>
  );
};

export default App;