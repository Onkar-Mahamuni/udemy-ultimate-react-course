import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter filterField="discount" />
    </TableOperations>
  );
}

export default CabinTableOperations;
