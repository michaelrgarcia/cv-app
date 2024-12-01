import "../styles/Resume.css";

function Resume({ info }) {
  return (
    <div className="resume">
      <p className="resume-name">{info.name}</p>
      <section className="contact-info">
        <p>Email: {info.email}</p>
        <p>|</p>
        <p>Phone: {info.phone}</p>
      </section>
      <section className="education">
        <p className="section-title">EDUCATION</p>
        <p className="school-name">{info.school}</p>
        <div className="study-area">
          <span>{info.study}</span>
          <div className="dates">
            <span>{info.stdybegin}</span>
            <span>{info.stdybegin && info.stdyend ? "to" : ""}</span>
            <span>{info.stdyend}</span>
          </div>
        </div>
      </section>
      <section className="experience">
        <p className="section-title">EXPERIENCE</p>
        <p className="company-name">{info.company}</p>
        <div className="work-area">
          <span>{info.position}</span>
          <div className="dates">
            <span>{info.startdate}</span>
            <span>{info.startdate && info.enddate ? "to" : ""}</span>
            <span>{info.enddate}</span>
          </div>
        </div>
        <p className="work-info">- {info.responsibilities}</p>
      </section>
    </div>
  );
}

export default Resume;
