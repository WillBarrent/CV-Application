function Phone({ phone, phoneHandler }) {
  return (
    <div className="contact-phone">
      <span className="phone-label">P:</span>
      <input
        type="text"
        className="contact-phone-input"
        placeholder="Phone Number"
        onChange={phoneHandler}
        value={phone}
      />
    </div>
  );
}

export default Phone;
