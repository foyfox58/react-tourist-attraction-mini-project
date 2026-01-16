const SearchInput = ({ value, onChange, placeholder = "หาที่เที่ยวแล้วไปกัน ..." }) => {
    return (
      <div className="w-full max-w-md">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  };
  
  export default SearchInput;
  