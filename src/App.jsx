import Login from "./pages/Login";
import Employees from "./pages/Employees";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Enterprise Payroll Frontend</h1>
      <Login />
      <hr />
      <Employees />
    </div>
  );
}

export default App;
