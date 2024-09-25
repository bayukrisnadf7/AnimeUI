import { CiSearch } from "react-icons/ci";
const Input = () => {
    return (
        <div className="relative">
            <input type="text" className="border border-black rounded-xl p-1" />
            <CiSearch className="absolute right-2 top-1/2 -translate-y-1/2" size={24} />
        </div>
    )
}
export default Input