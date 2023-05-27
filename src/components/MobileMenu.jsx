import { GrClose } from "react-icons/gr";

import { HashLink as Link } from "react-router-hash-link";

const MobileMenu = ({ nightmode, menuToggler }) => {
    return (
        <div
            className={`px-[10%] py-5 fixed top-0 bottom-0 right-0 left-0 md:hidden ${
                !nightmode ? "text-white bg-blue-950" : "text-black bg-white"
            }`}
        >
            <div onClick={menuToggler} className='text-2xl px-5'>
                <GrClose />
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
