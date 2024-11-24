import "./App.css";
import "./Form.css";

import { useState } from "react";

function Input({ id, labelText, type, setter }) {
  return (
    <div className="form-row">
      <label htmlFor={id}>{labelText}: </label>
      <input id={id} type={type} onChange={setter} />
    </div>
  );
}

function FormSection({ title, inputs, setField }) {
  const titleStringArray = title.toLowerCase().split(" ");
  const sectionClassTitle = titleStringArray.join("-");

  return (
    <section className={sectionClassTitle}>
      <p className="section-title">{title}</p>
      {inputs.map(({ id, type, labelText }) => (
        <Input
          key={id}
          id={id}
          labelText={labelText}
          type={type}
          setter={(e) => setField(id, e.target.value)}
        />
      ))}
    </section>
  );
}

function Form() {
  const [info, setInfo] = useState({
    name: "John Doe",
    email: "example@mail.com",
    phone: "123-456-7890",
  });

  function setField(id, value) {
    setInfo({ ...info, [id]: value });
  }

  // define inputs for each section below

  const personalInfo = [
    { id: "name", type: "text", labelText: "Name" },
    { id: "email", type: "email", labelText: "Email" },
    { id: "phone", type: "tel", labelText: "Phone" },
  ];

  const eduExp = [
    { id: "school", type: "text", labelText: "School Name" },
    { id: "study", type: "text", labelText: "Title of Study" },
    { id: "study-begin", type: "date", labelText: "Date of Study Begin" },
    { id: "study-end", type: "date", labelText: "Date of Study End" },
  ];

  return (
    <form>
      <FormSection
        title="Personal Information"
        inputs={personalInfo}
        setField={setField}
      />
      <FormSection
        title="Educational Experience"
        inputs={eduExp}
        setField={setField}
      />
    </form>
  );
}

export default Form;
