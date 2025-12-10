export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      className="form-control neo-input mb-3"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
