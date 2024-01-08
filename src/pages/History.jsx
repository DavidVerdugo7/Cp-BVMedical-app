export default function History() {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>ShortCode</th>
              <th>EquipmentType</th>
              <th>Madeby</th>
              <th>Model</th>
              <th>Create at </th>
              <th>Update at</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>id</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td>Blue</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>ShortCode</th>
              <th>EquipmentType</th>
              <th>Madeby</th>
              <th>Model</th>
              <th>Create at </th>
              <th>Update at</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}
