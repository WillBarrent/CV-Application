function Experiences({
  experiences,
  addExperience,
  removeExperience,
  updateExperience,
  addResponsibility,
}) {
  return (
    <div className="experiences">
      <h2 className="experiences-section-title">Work history</h2>
      <ExperiencesList
        experiences={experiences}
        updateExperience={updateExperience}
        addResponsibility={addResponsibility}
      />
      <ExperienceButtons
        experiences={experiences}
        addExperience={addExperience}
        removeExperience={removeExperience}
      />
    </div>
  );
}

function ExperiencesList({ experiences, updateExperience, addResponsibility }) {
  return (
    <div className="experiences-list">
      {experiences.map((experience) => {
        return (
          <Experience
            experience={experience}
            key={experience.id}
            updateExperience={updateExperience}
            addResponsibility={addResponsibility}
            id={experience.id}
          />
        );
      })}
    </div>
  );
}

function Experience({ experience, updateExperience, id, addResponsibility }) {
  return (
    <div className="experience">
      <ExperienceInfo
        experience={experience}
        updateExperience={updateExperience}
        id={id}
      />
      <MainResponsibilities experience={experience} />
      <AddResponsibilityButton addResponsibility={addResponsibility} id={id} />
      <ExperienceDate
        experience={experience}
        updateExperience={updateExperience}
        id={id}
      />
    </div>
  );
}

function ExperienceInfo({ experience, updateExperience, id }) {
  return (
    <div className="experience-info">
      <div className="experience-place">
        <input
          type="text"
          className="experience-place-input"
          placeholder="Company name"
          data-key="companyName"
          onChange={updateExperience.bind(this, id)}
          value={experience.companyName}
        />
      </div>
      <span>|</span>
      <div className="experience-title">
        <input
          type="text"
          className="experience-title-input"
          placeholder="Position title"
          data-key="positionTitle"
          onChange={updateExperience.bind(this, id)}
          value={experience.positionTitle}
        />
      </div>
    </div>
  );
}

function ExperienceDate({ experience, updateExperience, id }) {
  return (
    <div className="experience-date">
      <div className="experience-date-title">Date of work:</div>
      <div className="experience-work-date">
        <div className="experience-work-from">
          <input
            type="date"
            className="experience-date-from-input"
            data-key="dateFrom"
            onChange={updateExperience.bind(this, id)}
            value={experience.dateFrom}
          />
        </div>
        <span>-</span>
        <div className="experience-work-until">
          <input
            type="date"
            className="experience-date-until-input"
            data-key="dateUntil"
            onChange={updateExperience.bind(this, id)}
            value={experience.dateUntil}
          />
        </div>
      </div>
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

function MainResponsibilities({ experience }) {
  return (
    <div className="responsibilities">
      {experience.mainResponsibilities.map((responsibility) => {
        return (
          <div className="responsibility" key={responsibility.id}>
            <input
              type="text"
              className="responsibility-input"
              placeholder="Enter your responsibility"
            />
          </div>
        );
      })}
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
