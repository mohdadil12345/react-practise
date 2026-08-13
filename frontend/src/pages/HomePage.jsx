import DataTable from "../features/datatable/DataTable"
import CharacterCounter from "../features/counter/CharacterCounter"
const HomePage = () => {
  return (
    <div>
      <h5>
        HomePage
      </h5>

      <hr />
      <DataTable/>
      <hr />
        <h3>Character counter</h3>
      <CharacterCounter/>
    </div>
  )
}

export default HomePage