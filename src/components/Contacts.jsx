import Email from "./Email";
import Phone from "./Phone";

function Contacts({ email, phone, emailHandler, phoneHandler, editMode }) {
  return (
    <div className="contact">
      <Email editMode={editMode} email={email} emailHandler={emailHandler} />
      <Phone editMode={editMode} phone={phone} phoneHandler={phoneHandler} />
    </div>
  );
}

export default Contacts;
