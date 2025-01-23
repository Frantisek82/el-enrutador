import { Routes, Route, Outlet, Link, useParams } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/invoices" element={<Invoices />}>
          <Route path="/invoices/:invoiceId" element={<Invoice />} />
          <Route path="/invoices/sent" element={<SentInvoices />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <h1>Welcome to the app!</h1>
      <nav>
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

function Invoices() {
  return (
    <div>
      <h1>Invoices</h1>
      <Link to="/invoices/sent">Sent</Link> |{" "}
      <Link to="/invoices/123">Detalle</Link>
      <Outlet />
    </div>
  );
}

function Dashboard() {
  return <h1>Dashboard</h1>;
}

function Invoice() {
  let { invoiceId } = useParams();
  return <h1>Invoice {invoiceId} </h1>;
}

function SentInvoices() {
  return <h1>Sent Invoices</h1>;
}

export default App;
