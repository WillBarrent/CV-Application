function Experiences({
  editMode,
  experiences,
  addExperience,
  removeExperience,
  updateExperience,
  addResponsibility,
  updateResponsibility,
}) {
  return (
    <div className="experiences">
      <h2 className="experiences-section-title">Work history</h2>
      <ExperiencesList
        editMode={editMode}
        experiences={experiences}
        updateExperience={updateExperience}
        addResponsibility={addResponsibility}
        updateResponsibility={updateResponsibility}
      />
      {editMode === true ? (
        <ExperienceButtons
          experiences={experiences}
          addExperience={addExperience}
          removeExperience={removeExperience}
        />
      ) : (
        ""
      )}
    </div>
  );
}

function ExperiencesList({
  editMode,
  experiences,
  updateExperience,
  addResponsibility,
  updateResponsibility,
}) {
  return (
    <div className="experiences-list">
      {experiences.map((experience) => {
        return (
          <Experience
            editMode={editMode}
            experience={experience}
            key={experience.id}
            updateExperience={updateExperience}
            addResponsibility={addResponsibility}
            updateResponsibility={updateResponsibility}
            id={experience.id}
          />
        );
      })}
    </div>
  );
}

function Experience({
  editMode,
  experience,
  updateExperience,
  id,
  addResponsibility,
  updateResponsibility,
}) {
  return (
    <div className="experience">
      <ExperienceInfo
        editMode={editMode}
        experience={experience}
        updateExperience={updateExperience}
        id={id}
      />
      <MainResponsibilities
        editMode={editMode}
        experience={experience}
        updateResponsibility={updateResponsibility}
      />
      {editMode === true ? (
        <AddResponsibilityButton
          addResponsibility={addResponsibility}
          id={id}
        />
      ) : (
        ""
      )}
      <ExperienceDate
        editMode={editMode}
        experience={experience}
        updateExperience={updateExperience}
        id={id}
      />
    </div>
  );
}

function ExperienceInfo({ editMode, experience, updateExperience, id }) {
  return (
    <div className="experience-info">
      <div
        className="experience-place"
        style={{ width: editMode === true ? "100%" : "auto" }}
      >
        {editMode === true ? (
          <input
            type="text"
            className="experience-place-input"
            placeholder="Company name"
            data-key="companyName"
            onChange={updateExperience.bind(this, id)}
            value={experience.companyName}
          />
        ) : (
          experience.companyName
        )}
      </div>
      <span>|</span>
      <div
        className="experience-title"
        style={{ width: editMode === true ? "100%" : "auto" }}
      >
        {editMode === true ? (
          <input
            type="text"
            className="experience-title-input"
            placeholder="Position title"
            data-key="positionTitle"
            onChange={updateExperience.bind(this, id)}
            value={experience.positionTitle}
          />
        ) : (
          experience.positionTitle
        )}
      </div>
    </div>
  );
}

function ExperienceDate({ editMode, experience, updateExperience, id }) {
  return (
    <div
      className="experience-date"
      style={{
        justifyContent: editMode === true ? "space-between" : "start",
        gap: editMode === true ? "0" : "10px",
      }}
    >
      <div className="experience-date-title">Date of work:</div>
      <div className="experience-work-date">
        <div className="experience-work-from">
          {editMode === true ? (
            <input
              type="date"
              className="experience-date-from-input"
              data-key="dateFrom"
              onChange={updateExperience.bind(this, id)}
              value={experience.dateFrom}
            />
          ) : (
            experience.dateFrom
          )}
        </div>
        <span>-</span>
        <div className="experience-work-until">
          {editMode === true ? (
            <input
              type="date"
              className="experience-date-until-input"
              data-key="dateUntil"
              onChange={updateExperience.bind(this, id)}
              value={experience.dateUntil}
            />
          ) : (
            experience.dateUntil
          )}
        </div>
      </div>
    </div>
  );
}

function MainResponsibilities({ editMode, experience, updateResponsibility }) {
  if (!editMode) {
    return (
      <ul
        className="responsibilities"
        style={{
          marginLeft: "40px",
        }}
      >
        {experience.mainResponsibilities.map((responsibility) => {
          return (
            <li
              className="responsibility"
              key={responsibility.id}
              style={{
                fontSize: "15px",
              }}
            >
              {responsibility.responsibility}
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className="responsibilities">
      {experience.mainResponsibilities.map((responsibility) => {
        return (
          <div className="responsibility" key={responsibility.id}>
            <input
              type="text"
              className="responsibility-input"
              placeholder="Enter responsibility of your job"
              value={responsibility.responsibility}
              onChange={updateResponsibility.bind(
                this,
                responsibility.id,
                experience.id
              )}
            />
          </div>
        );
      })}
    </div>
  );
}

function AddResponsibilityButton({ addResponsibility, id }) {
  return (
    <div className="responsibility-button--add">
      <button onClick={addResponsibility.bind(this, id)}>
        Add Responsibility
      </button>
    </div>
  );
}

function ExperienceButtons({ experiences, addExperience, removeExperience }) {
  return (
    <div className="experience-buttons">
      <AddExperienceButton addExperience={addExperience} />
      <RemoveExperienceButton
        experiences={experiences}
        removeExperience={removeExperience}
      />
    </div>
  );
}

function AddExperienceButton({ addExperience }) {
  return (
    <div className="experience-button--add">
      <button onClick={addExperience}>Add Experience</button>
    </div>
  );
}

function RemoveExperienceButton({ experiences, removeExperience }) {
  return (
    <div className="experience-button--remove">
      <button disabled={experiences.length == 0} onClick={removeExperience}>
        Remove Experience
      </button>
    </div>
  );
}

export default Experiences;
