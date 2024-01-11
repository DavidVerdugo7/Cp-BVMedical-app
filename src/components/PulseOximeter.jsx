import React, { useState } from "react";
import CardEquipment from "./CardEquipment";
import { useLocation } from "react-router-dom";

export default function pulseOximeter() {
  const initialSpo2Values = [80, 80, 80]; // Valores iniciales de SPO2
  const initialPulseValues = [60, 60, 60]; // Valores iniciales de Pulse
  const [spo2Values, setSpo2Values] = useState(initialSpo2Values);
  const [pulseValues, setPulseValues] = useState(initialPulseValues);
  const [isFunctionalYes, setIsFunctionalYes] = useState(null);
  const [comments, setComments] = useState("");
  //useLocation from react
  const location = useLocation();
  const { selectedEquipment } = location.state || {};

  const handleChange = (type, index, value) => {
    if (type === "spo2") {
      const updatedValues = [...spo2Values];
      updatedValues[index] = value;
      setSpo2Values(updatedValues);
    } else if (type === "pulse") {
      const updatedValues = [...pulseValues];
      updatedValues[index] = value;
      setPulseValues(updatedValues);
    }
  };

  const incrementValue = (type, index) => {
    if (type === "spo2") {
      const updatedValues = [...spo2Values];
      if (updatedValues[index] < 100) {
        updatedValues[index] += 1;
        setSpo2Values(updatedValues);
      }
    } else if (type === "pulse") {
      const updatedValues = [...pulseValues];
      if (updatedValues[index] < 100) {
        updatedValues[index] += 1;
        setPulseValues(updatedValues);
      }
    }
  };

  const decrementValue = (type, index) => {
    if (type === "spo2") {
      const updatedValues = [...spo2Values];
      if (updatedValues[index] > 0) {
        updatedValues[index] -= 1;
        setSpo2Values(updatedValues);
      }
    } else if (type === "pulse") {
      const updatedValues = [...pulseValues];
      if (updatedValues[index] > 0) {
        updatedValues[index] -= 1;
        setPulseValues(updatedValues);
      }
    }
  };

  const handleCommentsChange = (e) => {
    setComments(e.target.value);
  };

  const handleStatus = (status) => {
    // Manejar la lógica para los botones de "Failed" y "Verified"
    if (status === "Failed") {
      // Lógica para el estado "Failed"
    } else if (status === "Verified") {
      // Lógica para el estado "Verified"
    }
  };

  return (
    <div className="cardForm  p-2 sm:py-6 lg:p-6 justify-center my-2 mx-12  lg:mt-6  sm:mx-24 lg:mx-64 ">
      {selectedEquipment ? (
        <CardEquipment equipment={selectedEquipment} />
      ) : (
        <p>No equipment selected</p>
      )}

      <div>
        <div>
          <h2>SPO2</h2>
          {spo2Values.map((spo2, index) => (
            <div key={index}>
              <button onClick={() => decrementValue("spo2", index)}>-</button>
              <input
                className="input input-bordered  w-20 max-w-xs m-4"
                type="number"
                value={spo2}
                onChange={(e) =>
                  handleChange("spo2", index, parseInt(e.target.value))
                }
              />
              <button onClick={() => incrementValue("spo2", index)}>+</button>
              <br />
            </div>
          ))}
        </div>
        <div>
          <h2 className="mt-4">Pulse</h2>
          {pulseValues.map((pulse, index) => (
            <div key={index}>
              <button onClick={() => decrementValue("pulse", index)}>-</button>
              <input
                className="input input-bordered  w-20 max-w-xs m-4"
                type="number"
                value={pulse}
                onChange={(e) =>
                  handleChange("pulse", index, parseInt(e.target.value))
                }
              />
              <button onClick={() => incrementValue("pulse", index)}>+</button>
              <br />
            </div>
          ))}
        </div>
      </div>

      {/*  CHECKBOX */}
      <h2 className="mt-4">Functional</h2>
      <div className="flex justify-evenly items-center flex-wrap mt-4 sm:w-full">
        <div className="form-control  items-center">
          <label className="cursor-pointer label">
            <p className="label-text">Yes</p>

            <input
              type="checkbox"
              className="ml-6 checkbox checkbox-success "
              name="functional"
              value="yes"
              checked={isFunctionalYes === true}
              onChange={() => setIsFunctionalYes(true)}
            />
          </label>
        </div>

        <div className="form-control  items-center mb-4">
          <label className="cursor-pointer label">
            <p className="label-text">No</p>

            <input
              type="checkbox"
              className="ml-6  checkbox checkbox-error "
              name="functional"
              value="no"
              checked={isFunctionalYes === false}
              onChange={() => setIsFunctionalYes(false)}
            />
          </label>
        </div>
      </div>
      {/* TEST AREA LOCATION, COMMENTS */}

      <h2>Comments</h2>
      <div className="flex justify-evenly items-center flex-wrap">
        <textarea
          className=" textarea textarea-bordered mt-4 "
          placeholder="comments"
          value={comments}
          onChange={handleCommentsChange}
          rows="3"
          cols="40"
        />
      </div>
      {/* BUTTONS TO SUBMMIT */}
      <div className="flex justify-evenly items-center flex-wrap sm:flex-nowrap md:flex-wrap">
        <button
          className="btn mt-10 mr-10 btn-error"
          onClick={() => handleStatus("Failed")}
        >
          Failed
        </button>

        <button
          className="btn mt-10 ml-10 btn-success"
          onClick={() => handleStatus("Verified")}
        >
          Verified
        </button>
      </div>
    </div>
  );
}
