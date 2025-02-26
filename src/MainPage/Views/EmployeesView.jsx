import { useEffect, useState } from "react";
import { useFetch } from "../../Hooks/useFetch";
import { Searchbar, StaffCard } from "../../Components";

export const EmployeesView = () => {
  const employees = useFetch("http://localhost:3000/employees");
  const departments = useFetch("http://localhost:3000/departments");

  const [filterOption, setFilterOption] = useState("all");
  const [employeesFiltered, setEmployeesFiltered] = useState([]);

  useEffect(() => {
    if (!employees.data) return;

    if (filterOption === "all") {
      setEmployeesFiltered(employees.data);
    } else {
      const filtered = employees.data.filter(
        (employee) => employee.department === filterOption
      );
      setEmployeesFiltered(filtered);
    }
  }, [employees.data, filterOption]);

  if (employees.error || departments.error)
    return <h1>Ocurrió un error en el pedido de datos, consulte con IT</h1>;

  return (
    <>
      <header className="main__header">
        <div className="header_filters">
          <span className="filter_text">Departamento:</span>
          <select
            className="filter_options"
            name="employeesFilter"
            value={filterOption}
            onChange={(e) => setFilterOption(e.target.value)}
          >
            <option value="all">Todos</option>
            {departments.data &&
              departments.data.map(({ name, id }) => (
                <option value={name} key={id}>
                  {name}
                </option>
              ))}
          </select>
        </div>

        <Searchbar placeholder={"Buscar Empleado..."} />
      </header>
      <div className="employessList">
        {employeesFiltered.length === 0 ? (
          <h1>No hay resultados</h1>
        ) : (
          employeesFiltered.map((employee) => (
            <StaffCard {...employee} key={employee.id} />
          ))
        )}
      </div>
    </>
  );
};
