interface Proptypes {
  label: string;
  placeholder: string;
}

const TextInput = ({ label, placeholder }: Proptypes) => {
  return (
    <label className="input-label">
      {label}
      <input type="text" placeholder={placeholder} className="input-text" />
    </label>
  );
};

export default TextInput;
