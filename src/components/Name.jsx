function Name({ fullName, fullNameHandler, editMode }) {
  return (
    <>
      {editMode == true ? (
        <div className="full-name">
          <input
            type="text"
            className="full-name-input"
            placeholder="Full Name"
            onChange={fullNameHandler}
            value={fullName}
          />
        </div>
      ) : (
        <div className="full-name">{fullName}</div>
      )}
    </>
  );
}

export default Name;
