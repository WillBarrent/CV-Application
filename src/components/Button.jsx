function Button({ editMode, submitForm }) {
  return (
    <div className="button">
      <button className="button-submit" onClick={submitForm}>
        {editMode == true ? "Submit" : "Edit"}
      </button>
    </div>
  );
}

export default Button;
