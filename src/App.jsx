import { useState } from "react";

import Form from "./Form";

function App() {
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

  const [editMode, setEditMode] = useState(true);

  function setField(id, value) {
    setInfo({ ...info, [id]: value });
  }

  function setWorkDescription(e) {
    setInfo({ ...info, responsibilities: e.target.value });
  }

  function toggleEditMode() {
    setEditMode(!editMode);
  }

  if (editMode) {
    return (
      <>
        <Form setField={setField} setWorkDescription={setWorkDescription} />
        <button type="button" className="submit" onClick={toggleEditMode}>
          Submit
        </button>
      </>
    );
  } else {
    // return resume
  }
}

export default App;
