import Email from "./Email";
import Phone from "./Phone";

function Contacts({ email, phone, emailHandler, phoneHandler }) {
  return (
    <div className="contact">
      <Email email={email} emailHandler={emailHandler} />
      <Phone phone={phone} phoneHandler={phoneHandler} />
    </div>
  );
}

export default Contacts;
