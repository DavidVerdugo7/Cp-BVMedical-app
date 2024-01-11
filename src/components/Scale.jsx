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
  //POST request to DB
  const handlePostRequest = async (status, equipmentId) => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/assessments/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: status,
            scaleValues: scaleValues,
            readingValues: readingValues,
            comments: comments,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleStatus = (status) => {
    if (status === "Failed") {
      handlePostRequest(status, selectedEquipment.id);
    } else if (status === "Verified") {
      handlePostRequest(status, selectedEquipment.id);
    }
  };

  return (
    <>
      <div className="cardForm  p-2 sm:py-6 lg:p-6 justify-center my-2 mx-12  lg:mt-6  sm:mx-24 lg:mx-64 ">
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
                <button
                  className="btn btn-outline btn-warning"
                  onClick={() => decrementValue("scale", index)}
                >
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
                <button
                  className="btn btn-outline btn-success"
                  onClick={() => incrementValue("scale", index)}
                >
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

        <h2 className="mt-4">Functional</h2>

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
