import Contacts from "./Contacts";
import Name from "./Name";

function General({
  fullName,
  email,
  phone,
  fullNameHandler,
  emailHandler,
  phoneHandler,
  editMode,
}) {
  return (
    <>
      <Name
        fullName={fullName}
        fullNameHandler={fullNameHandler}
        editMode={editMode}
      />
      <Contacts
        email={email}
        phone={phone}
        emailHandler={emailHandler}
        phoneHandler={phoneHandler}
        editMode={editMode}
      />
    </>
  );
}

export default General;
