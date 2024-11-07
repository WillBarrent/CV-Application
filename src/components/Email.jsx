function Email({ editMode, email, emailHandler }) {
  return (
    <div className="contact-email">
      <span className="email-label">E:</span>
      {editMode === true ? (
        <input
          type="text"
          className="contact-email-input"
          placeholder="Email address"
          onChange={emailHandler}
          value={email}
        />
      ) : (
        <div className="contact-email-text">{email}</div>
      )}
    </div>
  );
}

export default Email;
