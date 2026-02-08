import { useEffect, useState } from "react";
import { apiClient } from "../services/apiClient";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get("/employees")
      .then((res) => setEmployees(res.data))
      .catch((err) => {
        setError("Failed to load employees (login first)");
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h2>Employees</h2>
      {error && <p>{error}</p>}

      <ul>
        {employees.map((e) => (
          <li key={e.id}>
            {e.firstName} {e.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Employees;
