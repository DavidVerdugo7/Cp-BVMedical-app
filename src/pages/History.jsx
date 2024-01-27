// import React, { useState, useEffect } from "react";
// import { FetchAssessment } from "../API/FetchAssessment";

// export default function History() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     FetchAssessment().then((fetchedData) => setData(fetchedData.data));
//   }, []);

//   return (
//     <>
//       <div className="overflow-x p-2 sm:py-6 lg:p-6 justify-center my-2 mx-12  lg:mt-6  sm:mx-10 lg:mx-5">
//         <table className="table table-zebra">
//           {/* head */}
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Equipment ID</th>
//               <th>User ID</th>
//               <th>Data Input</th>
//               <th>Comments</th>
//               <th>Functional</th>
//               <th>Verified</th>
//             </tr>
//           </thead>

//           <tbody>
//             {data.map((item, index) => (
//               <tr key={index}>
//                 <th>{item.id}</th>
//                 <td>{item.equipmentID}</td>
//                 <td>{item.userID}</td>
//                 <td>{item.dataInput}</td>
//                 <td>{item.comments}</td>
//                 <td>{item.Functional ? "True" : "False"}</td>
//                 <td>{item.verified ? "True" : "False"}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import { FetchAssessment } from "../API/FetchAssessment";

export default function History() {
  const [data, setData] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(13);

  useEffect(() => {
    FetchAssessment().then((fetchedData) => setData(fetchedData.data));
  }, []);

  const showMoreItems = () => {
    setItemsToShow(itemsToShow + 13);
  };

  return (
    <>
      <div className="overflow-x p-2 sm:py-6 lg:p-6 justify-center my-2 mx-12  lg:mt-6  sm:mx-10 lg:mx-5">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Equipment ID</th>
              <th>User ID</th>
              <th>Data Input</th>
              <th>Comments</th>
              <th>Functional</th>
              <th>Verified</th>
            </tr>
          </thead>

          <tbody>
            {data.slice(0, itemsToShow).map((item, index) => (
              <tr key={index}>
                <th>{item.id}</th>
                <td>{item.equipmentID}</td>
                <td>{item.userID}</td>
                <td>{item.dataInput}</td>
                <td>{item.comments}</td>
                <td>{item.Functional ? "True" : "False"}</td>
                <td>{item.verified ? "True" : "False"}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <button onClick={showMoreItems}>Mostrar más</button> */}
        <button className="btn mt-10 ml-10 btn-success" onClick={showMoreItems}>
          {" "}
          More
        </button>
      </div>
    </>
  );
}
