import React, { useState, useEffect } from "react";
import Button from "./buttons/Button";

export default function IncDec() {
  const [value, setValue] = useState(0); //initial state
  const [name, setName] = useState("");
  const [isRead, setIsRead] = useState(false);
  const [inputField, setInputField] = useState([{}]);
  const [buttonEnable, setButtonEnable] = useState(false);
  const handleInc = () => {
    setValue(value + 1); //update final state to the variable(value);
  };
  const handleDec = () => {
    setValue(value - 1);
  };

  const handleChange = (e, data, index) => {
    const { value } = e.target;
    const list = [...inputField];
    list[index] = { name: value };
    setInputField(list);
  };
  const handleBlur = () => {
    setIsRead(true);
  };
  const handleFocus = () => {
    setIsRead(false);
  };
  const addInput = () => {
    setInputField([...inputField, {}]);
  };
  const removeInputField = (index) => {
    console.log("removeInputField worked");
    const list = [...inputField];
    list.splice(index, 1);
    // setInputField()
    setInputField(list);
  };
  console.log("inputField", inputField);

  const decStyle = { backgroundColor: "red" };
  return (
    <div>
      <h1>Increament/Decreament Application</h1>
      {isRead ? (
        <h2>
          {name} {value}
        </h2>
      ) : (
        ""
      )}
      <Button name="+" onclick={handleInc} backgroundColor="Blue" />

      <span>{value}</span>
      <Button name="-" onclick={handleDec} backgroundColor="red" />

      {inputField.map((data, index) => {
        return (
          <div key={index}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={(e) => handleChange(e, data, index)}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
            {inputField?.length > 1 ? (
              <Button
                name="-"
                backgroundColor="red"
                onclick={(e) => removeInputField(index)}
              />
            ) : (
              ""
            )}
          </div>
        );
      })}

      {/* <button onClick={addInput}>Add Input</button> */}
      <Button name="Add Input" onclick={addInput} backgroundColor="orange" />
    </div>
  );
}
