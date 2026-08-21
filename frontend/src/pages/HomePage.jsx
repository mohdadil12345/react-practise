import DataTable from "../features/datatable/DataTable"
import CharacterCounter from "../features/counter/CharacterCounter"
import DebounceSearch from "./DebounceSearch"
const HomePage = () => {
  return (
    <div>
      <h5>
        HomePage
      </h5>

      <hr />

      <DebounceSearch/>

      <hr />
    </div>
  )
}

export default HomePage