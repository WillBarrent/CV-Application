import Contacts from "./Contacts";
import Name from "./Name";

function General({
  fullName,
  email,
  phone,
  fullNameHandler,
  emailHandler,
  phoneHandler,
}) {
  return (
    <>
      <Name fullName={fullName} fullNameHandler={fullNameHandler} />
      <Contacts
        email={email}
        phone={phone}
        emailHandler={emailHandler}
        phoneHandler={phoneHandler}
      />
    </>
  );
}

export default General;
