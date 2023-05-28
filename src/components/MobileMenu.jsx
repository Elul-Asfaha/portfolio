import { BiArrowBack } from "react-icons/bi";
import { HashLink as Link } from "react-router-hash-link";

const MobileMenu = ({ nightmode, menuToggler }) => {
    return (
        <div
            className={`px-[10%] pt-[100px] fixed top-0 bottom-0 right-0 left-0 md:hidden flex flex-col items-center gap-5 text-2xl  ${
                !nightmode ? "text-white bg-blue-950" : "text-black bg-white"
            }`}
        >
            <div
                onClick={menuToggler}
                className='px-5 absolute inset-y-0 w-fit h-fit right-10 top-10'
            >
                <BiArrowBack />
            </div>
            <Link to='#Home' onClick={menuToggler}>
                Home
            </Link>
            <Link to='#Specialities' onClick={menuToggler}>
                Specialities
            </Link>
            <Link to='#Projects' onClick={menuToggler}>
                Projects
            </Link>
        </div>
    );
};
export default MobileMenu;
