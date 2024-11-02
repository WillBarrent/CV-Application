function Education({
  title,
  place,
  from,
  to,
  titleHandler,
  placeHandler,
  fromHandler,
  toHandler,
}) {
  return (
    <div className="education">
      <h2 className="education-section-title">Education</h2>
      <EducationInfo
        title={title}
        place={place}
        titleHandler={titleHandler}
        placeHandler={placeHandler}
      />
      <EducationDate
        from={from}
        to={to}
        fromHandler={fromHandler}
        toHandler={toHandler}
      />
    </div>
  );
}

function EducationInfo({ title, place, titleHandler, placeHandler }) {
  return (
    <div className="education-info">
      <EducationPlace place={place} placeHandler={placeHandler} />
      <span>|</span>
      <EducationTitle title={title} titleHandler={titleHandler} />
    </div>
  );
}

function EducationPlace({ place, placeHandler }) {
  return (
    <div className="education-place">
      <input
        type="text"
        className="education-place-input"
        placeholder="School name"
        onChange={placeHandler}
        value={place}
      />
    </div>
  );
}

function EducationTitle({ title, titleHandler }) {
  return (
    <div className="education-title">
      <input
        type="text"
        className="education-title-input"
        placeholder="Title of study"
        onChange={titleHandler}
        value={title}
      />
    </div>
  );
}

function EducationDate({ from, to, fromHandler, toHandler }) {
  return (
    <div className="education-date">
      <div className="education-date-title">Date of study:</div>
      <div className="education-study-date">
        <div className="education-date-from">
          <input
            type="date"
            className="education-date-from-input"
            onChange={fromHandler}
            value={from}
          />
        </div>
        <span>-</span>
        <div className="education-date-to">
          <input
            type="date"
            className="education-date-to-input"
            onChange={toHandler}
            value={to}
          />
        </div>
      </div>
    </div>
  );
}

export default Education;
