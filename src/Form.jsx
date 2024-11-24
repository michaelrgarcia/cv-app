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
    name: "",
    email: "",
    phone: "",
    school: "",
    study: "",
    stdybegin: "",
    stdyend: "",
    company: "",
    position: "",
    startdate: "",
    enddate: "",
    responsibilities: "",
  });

  function setField(id, value) {
    setInfo({ ...info, [id]: value });
  }

  function setWorkDescription(e) {
    setInfo({ ...info, responsibilities: e.target.value });
  }

  // define inputs for each section below
  // ids must match with info object properties

  const personalInfo = [
    { id: "name", type: "text", labelText: "Name" },
    { id: "email", type: "email", labelText: "Email" },
    { id: "phone", type: "tel", labelText: "Phone" },
  ];

  const eduExp = [
    { id: "school", type: "text", labelText: "School Name" },
    { id: "study", type: "text", labelText: "Title of Study" },
    { id: "stdybegin", type: "date", labelText: "Date of Study Begin" },
    { id: "stdyend", type: "date", labelText: "Date of Study End" },
  ];

  const workExp = [
    { id: "company", type: "text", labelText: "Company Name" },
    { id: "position", type: "text", labelText: "Position Title" },
    { id: "startdate", type: "date", labelText: "Start Date" },
    { id: "enddate", type: "date", labelText: "End Date" },
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
      <FormSection
        title="Work Experience"
        inputs={workExp}
        setField={setField}
      />
      <label htmlFor="work-description">Responsibilities: </label>
      <textarea
        name="work-description"
        id="work-description"
        rows={10}
        onChange={setWorkDescription}
        maxLength={500}
      ></textarea>
    </form>
  );
}

export default Form;
