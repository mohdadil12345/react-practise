
import React, { useState , useMemo} from 'react'

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


  const handleSort = (key) => {
 
  };



  // icon
  const getSortIcon = (column) => {


    if (sortConfig.key !== column) {
      return "↕";
    }

    return sortConfig.direction === "asc" ? "↑" : "↓"


  }




  return (
    <div className="table-container">

      <h2>Employee Table Data</h2>

      <table>

        <thead>
          <tr>
            <th>ID</th>

            <th onClick={() => handle_sort("name")}>Name {getSortIcon("name")}</th>

            <th>Age</th>

            <th>City</th>

            <th>Salary</th>
          </tr>
        </thead>

        <tbody>
          {tableData?.map((ele) => (
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