import React, { useState } from "react";
import CardEquipment from "./CardEquipment";

import { useLocation } from "react-router-dom";

export default function Scale() {
  const initialScaleValues = [50, 90]; // Valores iniciales de escala
  const initialReadingValues = [60, 60]; // Valores iniciales de lectura
  const [scaleValues, setScaleValues] = useState(initialScaleValues);
  const [readingValues, setReadingValues] = useState(initialReadingValues);
  const [isFunctionalYes, setIsFunctionalYes] = useState(null);
  const [commentValues, setCommentValues] = useState(["", ""]);
  const [comments, setComments] = useState("");
  //utilizando hook

  const location = useLocation();
  const { selectedEquipment } = location.state || {};

  const handleChange = (type, index, value, comment) => {
    if (type === "scale") {
      const updatedValues = [...scaleValues];
      updatedValues[index] = value;
      setScaleValues(updatedValues);
    } else if (type === "reading") {
      const updatedValues = [...readingValues];
      updatedValues[index] = value;
      setReadingValues(updatedValues);
    }
    const updatedComments = [...commentValues];
    updatedComments[index] = comment;
    setCommentValues(updatedComments);
  };

  const incrementValue = (type, index) => {
    if (type === "scale") {
      const updatedValues = [...scaleValues];
      if (updatedValues[index] < 100) {
        updatedValues[index] += 1;
        setScaleValues(updatedValues);
      }
    } else if (type === "reading") {
      const updatedValues = [...readingValues];
      if (updatedValues[index] < 100) {
        updatedValues[index] += 1;
        setReadingValues(updatedValues);
      }
    }
  };

  const decrementValue = (type, index) => {
    if (type === "scale") {
      const updatedValues = [...scaleValues];
      if (updatedValues[index] > 0) {
        updatedValues[index] -= 1;
        setScaleValues(updatedValues);
      }
    } else if (type === "reading") {
      const updatedValues = [...readingValues];
      if (updatedValues[index] > 0) {
        updatedValues[index] -= 1;
        setReadingValues(updatedValues);
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
    <>
      <div className="cardForm  p-2 sm:py-6 lg:p-6 justify-center my-2 mx-12  lg:mt-6  sm:mx-24 lg:mx-64 ">
        {/* <div className="cardForm p-2 md:p-4 lg:p-6 justify-center mt-2 md:mt-4 lg:mt-6 sm:mx-20 "> */}
        {selectedEquipment ? (
          <CardEquipment equipment={selectedEquipment} />
        ) : (
          <p>No equipment selected</p>
        )}
        <div>
          <div>
            <h1>Scale (kg)</h1>
            {scaleValues.map((scale, index) => (
              <div
                className="flex justify-evenly items-center flex-wrap mt-4 sm:w-full"
                key={index}
              >
                <button onClick={() => decrementValue("scale", index)}>
                  -
                </button>
                <input
                  className="input input-bordered  w-20 max-w-xs m-4"
                  type="number"
                  value={scale}
                  onChange={(e) =>
                    handleChange(
                      "scale",
                      index,
                      parseInt(e.target.value),
                      commentValues[index]
                    )
                  }
                />
                <button onClick={() => incrementValue("scale", index)}>
                  +
                </button>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="kg"
                  value={commentValues[index]}
                  onChange={(e) =>
                    handleChange("scale", index, scale, e.target.value)
                  }
                  rows="1"
                  cols="2"
                />
              </div>
            ))}
          </div>
        </div>

        {/*  CHECKBOX */}

        <h2>Functional</h2>
        <div className="flex justify-evenly items-center flex-wrap mt-4 sm:w-full ">
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
    </>
  );
}
