function Education({
  title,
  place,
  from,
  to,
  titleHandler,
  placeHandler,
  fromHandler,
  toHandler,
  editMode,
}) {
  return (
    <div className="education">
      <h2 className="education-section-title">Education</h2>
      <EducationInfo
        editMode={editMode}
        title={title}
        place={place}
        titleHandler={titleHandler}
        placeHandler={placeHandler}
      />
      <EducationDate
        editMode={editMode}
        from={from}
        to={to}
        fromHandler={fromHandler}
        toHandler={toHandler}
      />
    </div>
  );
}

function EducationInfo({ editMode, title, place, titleHandler, placeHandler }) {
  return (
    <div className="education-info">
      <EducationPlace
        editMode={editMode}
        place={place}
        placeHandler={placeHandler}
      />
      <span>|</span>
      <EducationTitle
        editMode={editMode}
        title={title}
        titleHandler={titleHandler}
      />
    </div>
  );
}

function EducationPlace({ editMode, place, placeHandler }) {
  return (
    <div
      className="education-place"
      style={{ width: editMode === true ? "100%" : "auto" }}
    >
      {editMode === true ? (
        <input
          type="text"
          className="education-place-input"
          placeholder="School name"
          onChange={placeHandler}
          value={place}
        />
      ) : (
        place
      )}
    </div>
  );
}

function EducationTitle({ editMode, title, titleHandler }) {
  return (
    <div
      className="education-title"
      style={{ width: editMode === true ? "100%" : "auto" }}
    >
      {editMode === true ? (
        <input
          type="text"
          className="education-title-input"
          placeholder="Title of study"
          onChange={titleHandler}
          value={title}
        />
      ) : (
        title
      )}
    </div>
  );
}

function EducationDate({ editMode, from, to, fromHandler, toHandler }) {
  return (
    <div
      className="education-date"
      style={{
        justifyContent: editMode === true ? "space-between" : "start",
        gap: editMode === true ? "0" : "10px",
      }}
    >
      <div className="education-date-title">Date of study:</div>
      <div className="education-study-date">
        <div className="education-date-from">
          {editMode === true ? (
            <input
              type="date"
              className="education-date-from-input"
              onChange={fromHandler}
              value={from}
            />
          ) : (
            from
          )}
        </div>
        <span>-</span>
        <div className="education-date-to">
          {editMode === true ? (
            <input
              type="date"
              className="education-date-to-input"
              onChange={toHandler}
              value={to}
            />
          ) : (
            to
          )}
        </div>
      </div>
    </div>
  );
}

export default Education;
