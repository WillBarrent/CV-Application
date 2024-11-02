function Email({ email, emailHandler }) {
  return (
    <div className="contact-email">
      <span className="email-label">E:</span>
      <input
        type="text"
        className="contact-email-input"
        placeholder="Email address"
        onChange={emailHandler}
        value={email}
      />
    </div>
  );
}

export default Email;
