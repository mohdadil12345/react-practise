import React, { useEffect, useMemo, useState } from "react";
import "../../styles/datatable.scss";

const data = [
  { id: 1, name: "Adil", age: 25, city: "Delhi", salary: 50000 },
  { id: 2, name: "Rahul", age: 28, city: "Mumbai", salary: 65000 },
  { id: 3, name: "Aman", age: 22, city: "Kolkata", salary: 40000 },
  { id: 4, name: "Zaid", age: 30, city: "Lucknow", salary: 75000 },
  { id: 5, name: "Akash", age: 27, city: "Pune", salary: 55000 },
  { id: 6, name: "Rohit", age: 29, city: "Delhi", salary: 80000 },
  { id: 7, name: "Karan", age: 24, city: "Mumbai", salary: 45000 },
  { id: 8, name: "Salman", age: 31, city: "Kolkata", salary: 90000 },
  { id: 9, name: "Imran", age: 26, city: "Pune", salary: 58000 },
  { id: 10, name: "Ankit", age: 23, city: "Lucknow", salary: 42000 },
];

const DataTable = () => {
  const [tableData] = useState(data);

  const [search, setSearch] = useState("");
  const [cityFilter, setCityFilter] = useState("all");

  const [pageNo, setPageNo] = useState(1);
  const [limit, setLimit] = useState(5);

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  // Sorting Handler
  const handleSort = (key) => {
    let direction = "asc";

    if (
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }

    setSortConfig({
      key,
      direction,
    });
  };

  // Search + Filter
  const filteredData = useMemo(() => {
    return tableData.filter((item) => {
      const matchSearch =
        Object.values(item).some((value) =>
          String(value)
            .toLowerCase()
            .includes(search.toLowerCase())
        );

      const matchCity =
        cityFilter === "all" ||
        item.city === cityFilter;

      return matchSearch && matchCity;
    });
  }, [tableData, search, cityFilter]);

  // Sorting
  const sortedData = useMemo(() => {
    const sorted = [...filteredData];

    if (!sortConfig.key) {
      return sorted;
    }

    sorted.sort((a, b) => {
      const valueA = a[sortConfig.key];
      const valueB = b[sortConfig.key];

      if (
        typeof valueA === "string" &&
        typeof valueB === "string"
      ) {
        return sortConfig.direction === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }

      return sortConfig.direction === "asc"
        ? valueA - valueB
        : valueB - valueA;
    });

    return sorted;
  }, [filteredData, sortConfig]);

  // Pagination
  const totalPages = Math.ceil(
    sortedData.length / limit
  );

  const startIndex = (pageNo - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedData = sortedData.slice(
    startIndex,
    endIndex
  );

  // Reset Page
  useEffect(() => {
    setPageNo(1);
  }, [search, cityFilter, limit]);

  const getSortIcon = (column) => {
    if (sortConfig.key !== column) {
      return "↕";
    }

    return sortConfig.direction === "asc"
      ? "↑"
      : "↓";
  };

  return (
    <div className="table-container">
      <h2>Employee Data Table</h2>

      {/* Search + Filter */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          value={cityFilter}
          onChange={(e) =>
            setCityFilter(e.target.value)
          }
        >
          <option value="all">
            All Cities
          </option>
          <option value="Delhi">
            Delhi
          </option>
          <option value="Mumbai">
            Mumbai
          </option>
          <option value="Kolkata">
            Kolkata
          </option>
          <option value="Pune">
            Pune
          </option>
          <option value="Lucknow">
            Lucknow
          </option>
        </select>

        <select
          value={limit}
          onChange={(e) =>
            setLimit(Number(e.target.value))
          }
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("id")}>
              ID {getSortIcon("id")}
            </th>

            <th
              onClick={() =>
                handleSort("name")
              }
            >
              Name {getSortIcon("name")}
            </th>

            <th
              onClick={() =>
                handleSort("age")
              }
            >
              Age {getSortIcon("age")}
            </th>

            <th
              onClick={() =>
                handleSort("city")
              }
            >
              City {getSortIcon("city")}
            </th>

            <th
              onClick={() =>
                handleSort("salary")
              }
            >
              Salary{" "}
              {getSortIcon("salary")}
            </th>
          </tr>
        </thead>

        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.city}</td>
                <td>
                  ₹
                  {item.salary.toLocaleString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="no-data"
              >
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <button
          disabled={pageNo === 1}
          onClick={() =>
            setPageNo((prev) => prev - 1)
          }
        >
          Prev
        </button>

        {[...Array(totalPages)].map(
          (_, index) => (
            <button
              key={index}
              className={
                pageNo === index + 1
                  ? "active"
                  : ""
              }
              onClick={() =>
                setPageNo(index + 1)
              }
            >
              {index + 1}
            </button>
          )
        )}

        <button
          disabled={
            pageNo === totalPages
          }
          onClick={() =>
            setPageNo((prev) => prev + 1)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;