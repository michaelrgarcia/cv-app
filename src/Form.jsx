import "./Form.css";

function Input({ id, labelText, type, setter, value }) {
  return (
    <div className="form-row">
      <label htmlFor={id}>{labelText}: </label>
      <input id={id} type={type} onChange={setter} value={value} />
    </div>
  );
}

function FormSection({ title, inputs, setField }) {
  const titleStringArray = title.toLowerCase().split(" ");
  const sectionClassTitle = titleStringArray.join("-");

  return (
    <section className={sectionClassTitle}>
      <p className="section-title">{title}</p>
      {inputs.map(({ id, type, labelText, value }) => (
        <Input
          key={id}
          id={id}
          labelText={labelText}
          type={type}
          setter={(e) => setField(id, e.target.value)}
          value={value}
        />
      ))}
    </section>
  );
}

function Form({ info, setField, setWorkDescription }) {
  const personalInfo = [
    { id: "name", type: "text", labelText: "Name", value: info.name },
    { id: "email", type: "email", labelText: "Email", value: info.email },
    { id: "phone", type: "tel", labelText: "Phone", value: info.phone },
  ];

  const eduExp = [
    {
      id: "school",
      type: "text",
      labelText: "School Name",
      value: info.school,
    },
    {
      id: "study",
      type: "text",
      labelText: "Title of Study",
      value: info.study,
    },
    {
      id: "stdybegin",
      type: "date",
      labelText: "Date of Study Begin",
      value: info.stdybegin,
    },
    {
      id: "stdyend",
      type: "date",
      labelText: "Date of Study End",
      value: info.stdyend,
    },
  ];

  const workExp = [
    {
      id: "company",
      type: "text",
      labelText: "Company Name",
      value: info.company,
    },
    {
      id: "position",
      type: "text",
      labelText: "Position Title",
      value: info.position,
    },
    {
      id: "startdate",
      type: "date",
      labelText: "Start Date",
      value: info.startdate,
    },
    { id: "enddate", type: "date", labelText: "End Date", value: info.enddate },
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
        value={info.responsibilities}
      ></textarea>
    </form>
  );
}

export default Form;
