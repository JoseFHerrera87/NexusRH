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
      <header className="flex justify-around items-center py-2 px-1 mb-5">
        <div className="w-[30%] text-xl text-center">
          <span className="mb-1 block font-semibold">Departamento:</span>
          <select
            className="max-h-20"
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
      <div className="flex justify-around items-center flex-wrap gap-y-10 gap-x-1">
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
