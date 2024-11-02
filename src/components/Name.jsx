function Name({ fullName, fullNameHandler }) {
  return (
    <div className="full-name">
      <input
        type="text"
        className="full-name-input"
        placeholder="Full Name"
        onChange={fullNameHandler}
        value={fullName}
      />
    </div>
  );
}

export default Name;
