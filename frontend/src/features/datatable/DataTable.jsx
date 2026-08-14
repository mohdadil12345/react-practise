
import React, { useState, useMemo } from 'react'

import "../../styles/datatable.scss";


const data = [
  {
    id: 1,
    name: "Adil",
    age: 25,
    city: "Delhi",
    salary: 50000,
  },
  {
    id: 2,
    name: "Rahul",
    age: 28,
    city: "Mumbai",
    salary: 65000,
  },
  {
    id: 3,
    name: "Aman",
    age: 22,
    city: "Kolkata",
    salary: 40000,
  },
  {
    id: 4,
    name: "Zaid",
    age: 30,
    city: "Lucknow",
    salary: 75000,
  },
  {
    id: 5,
    name: "Akash",
    age: 27,
    city: "Pune",
    salary: 55000,
  },
]


const DataTable = () => {

  const [tableData, setTableData] = useState(data)

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc"
  })

  const handle_sort = (key) => {
    let direction = "asc"

    if (sortConfig.key == key && sortConfig.direction == "asc") {
      direction = "desc"
    }

    setSortConfig({
      key,
      direction
    })


  };

  // icon
  const getSortIcon = (column) => {

    if (sortConfig.key !== column) {
      return "↕";
    }

    return sortConfig.direction === "asc" ? "↑" : "↓"

  }

  const sortedData = useMemo(() => {

    const sorted = [...tableData]
    if(!sortConfig.key) return sorted

    sorted.sort((a, b) => {

      const valueA = a[sortConfig.key]
      const valueB = b[sortConfig.key]


      // string sorting
      if(typeof valueA == "string" && typeof valueB == "string"){
        return sortConfig.direction == "asc" ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA)
      }

          // number sorting
      return sortConfig.direction == "asc" ? valueA - valueB:  valueB - valueA

    })

    return sorted

  }, [tableData, sortConfig])

  return (
    <div className="table-container">

      <h2>Employee Table Data</h2>

      <table>

        <thead>
          <tr>
            <th>ID</th>

            <th onClick={() => handle_sort("name")}>Name {getSortIcon("name")}</th>

            <th onClick={() => handle_sort("age")}>Age {getSortIcon("age")}</th>

            <th>City</th>

            <th>Salary</th>
          </tr>
        </thead>

        <tbody>
          {sortedData?.map((ele) => (
            <tr key={ele.id}>
              <td>{ele.id}</td>
              <td>{ele.name}</td>
              <td>{ele.age}</td>
              <td>{ele.city}</td>
              <td>{ele.salary}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  )
}

export default DataTable