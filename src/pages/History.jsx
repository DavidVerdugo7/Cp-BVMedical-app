import React, { useEffect, useState } from "react";
import { FetchAssessment } from "../API/FetchAssessment";

export default function History() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const assessmentData = await FetchAssessment();
        setData(assessmentData);
      } catch (error) {
        // Manejar errores si es necesario
        console.error("Error fetching assessment data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="overflow-x p-2 sm:py-6 lg:p-6 justify-center my-2 mx-12  lg:mt-6  sm:mx-10 lg:mx-5">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>ShortCode</th>
              <th>EquipmentType</th>
              <th>Madeby</th>
              <th>Model</th>
              <th>Create at </th>
              <th>Update at</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.equipmentID}</td>
                <td>{item.userID}</td>
                <td>{item.dataInput}</td>
                <td>{item.comments}</td>
                <td>{item.Functional ? "Yes" : "No"}</td>
                <td>{item.verified ? "Yes" : "No"}</td>
              </tr>
            ))}
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
