import { useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Input = () => {
  const searchRef = useRef(null); 
  const navigate = useNavigate(); 
  const handleSearch = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      const keyword = searchRef.current.value; 
      if (keyword.trim()) {
        navigate(`/search/${keyword}`); 
      }
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="border border-black rounded-xl p-1"
        ref={searchRef} // Assign searchRef to the input's ref
        onKeyDown={handleSearch} // Trigger search on Enter key
        placeholder="Search..."
      />
      <button
        onClick={handleSearch}
        className="absolute right-2 top-1/2 -translate-y-1/2"
      >
        <CiSearch size={24} />
      </button>
    </div>
  );
};

export default Input;
