import { useState } from "react";
import "./styles/style.css";
import General from "./components/General";
import Button from "./components/Button";
import Break from "./components/Break";
import Education from "./components/Education";
import experienceList from "./date";
import Experiences from "./components/Experience";

function App() {
  const [editMode, setEditMode] = useState(true);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [studyTitle, setStudyTitle] = useState("");
  const [studyPlace, setStudyPlace] = useState("");
  const [studyFrom, setStudyFrom] = useState("");
  const [studyUntil, setStudyUntil] = useState("");

  const [experiences, setExperiences] = useState(experienceList);

  function fullNameHandler(e) {
    setFullName(e.target.value);
  }

  function emailHandler(e) {
    setEmail(e.target.value);
  }

  function phoneHandler(e) {
    setPhone(e.target.value);
  }

  function studyTitleHandler(e) {
    setStudyTitle(e.target.value);
  }

  function studyPlaceHandler(e) {
    setStudyPlace(e.target.value);
  }

  function studyFromHandler(e) {
    setStudyFrom(e.target.value);
  }

  function studyToHandler(e) {
    setStudyUntil(e.target.value);
  }

  function addExperience() {
    const experience = {
      id: experiences.length == 0 ? 0 : experiences.at(-1).id + 1,
      companyName: "",
      positionTitle: "",
      dateFrom: "",
      dateUntil: "",
      mainResponsibilities: [],
    };

    const updatedExperienceList = [...experiences, experience];

    setExperiences(updatedExperienceList);
  }

  function removeExperience() {
    const updatedExperienceList = [...experiences];
    updatedExperienceList.pop();
    setExperiences(updatedExperienceList);
  }

  function updateExperience(id, e) {
    const propertyKey = e.target.dataset.key;
    const updatedExperienceList = [...experiences];
    updatedExperienceList[id][propertyKey] = e.target.value;
    setExperiences(updatedExperienceList);
  }

  function addResponsibility(id, _) {
    const updatedExperienceList = [...experiences];
    const experience = experiences[id];
    const responsibility = {
      id:
        experience.mainResponsibilities.length == 0
          ? 0
          : experience.mainResponsibilities.at(-1).id + 1,
      responsibility: "",
    };
    updatedExperienceList[id].mainResponsibilities = [
      ...updatedExperienceList[id].mainResponsibilities,
      responsibility,
    ];

    setExperiences(updatedExperienceList);
  }

  function updateResponsibility(id, experienceId, e) {
    const updatedExperienceList = [...experiences];
    updatedExperienceList[experienceId].mainResponsibilities[
      id
    ].responsibility = e.target.value;
    setExperiences(updatedExperienceList);
  }

  function submitForm() {
    setEditMode(!editMode);
  }

  return (
    <div className="app">
      <div className="logo">CV Application</div>
      <div className="resume">
        <General
          editMode={editMode}
          fullName={fullName}
          email={email}
          phone={phone}
          fullNameHandler={fullNameHandler}
          emailHandler={emailHandler}
          phoneHandler={phoneHandler}
        />
        <Break />
        <Education
          editMode={editMode}
          title={studyTitle}
          place={studyPlace}
          from={studyFrom}
          to={studyUntil}
          titleHandler={studyTitleHandler}
          placeHandler={studyPlaceHandler}
          fromHandler={studyFromHandler}
          toHandler={studyToHandler}
        />
        <Experiences
          editMode={editMode}
          experiences={experiences}
          addExperience={addExperience}
          removeExperience={removeExperience}
          updateExperience={updateExperience}
          addResponsibility={addResponsibility}
          updateResponsibility={updateResponsibility}
        />
      </div>
      <Button editMode={editMode} submitForm={submitForm} />
    </div>
  );
}

export default App;
