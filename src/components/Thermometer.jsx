import React, { useState } from "react";

export default function Thermometer() {
  const initialSpo2Values = [36, 40]; // Valores iniciales de peso
  const initialPulseValues = [60, 60]; // Valores iniciales de Pulse
  const [spo2Values, setSpo2Values] = useState(initialSpo2Values);
  const [pulseValues, setPulseValues] = useState(initialPulseValues);
  const [isFunctionalYes, setIsFunctionalYes] = useState(null);
  const [location, setLocation] = useState("");
  const [comments, setComments] = useState("");

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

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
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
    <div className="cardForm p-10 md:p-6  justify-center mt-28">
      <div>
        <div>
          <h1>Temperature (c)</h1>
          {spo2Values.map((spo2, index) => (
            <div key={index}>
              <button onClick={() => decrementValue("spo2", index)}>-</button>
              <input
                className="input input-bordered w-20 max-w-xs m-4"
                type="number"
                value={spo2}
                onChange={(e) =>
                  handleChange("spo2", index, parseInt(e.target.value))
                }
              />
              <button onClick={() => incrementValue("spo2", index)}>+</button>
              <textarea
                className="textarea textarea-bordered"
                placeholder="kg"
                value={location}
                onChange={handleLocationChange}
                rows="2"
                cols="40"
              />
            </div>
          ))}
        </div>
        <br />
      </div>

      {/*  CHECKBOX */}
      <div>
        <h2>Functional</h2>

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

      <div>
        <h2>Comments</h2>
        <textarea
          className="textarea textarea-bordered"
          placeholder="comments"
          value={comments}
          onChange={handleCommentsChange}
          rows="3"
          cols="40"
        />
      </div>
      {/* BUTTONS TO SUBMMIT */}

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
  );
}
