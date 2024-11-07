function Phone({ editMode, phone, phoneHandler }) {
  return (
    <div className="contact-phone">
      <span className="phone-label">P:</span>
      {editMode === true ? (
        <input
          type="text"
          className="contact-phone-input"
          placeholder="Phone Number"
          onChange={phoneHandler}
          value={phone}
        />
      ) : (
        <div className="contact-phone-text">{phone}</div>
      )}
    </div>
  );
}

export default Phone;
