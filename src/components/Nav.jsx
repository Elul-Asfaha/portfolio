import { HiOutlineMail, HiMenuAlt3 } from "react-icons/hi";
import { HashLink as Link } from "react-router-hash-link";

const Nav = ({ menuToggler }) => {
    return (
        <nav className='flex justify-between items-center w-[100%]'>
            <a
                href='mailto:scorpiondota22@gmail.com'
                className='flex gap-1 items-center text-xl '
            >
                <HiOutlineMail className='text-3xl' />
                <span className='hidden md:block'>
                    scorpiondota22@gmail.com
                </span>
            </a>
            <div className='hidden md:flex gap-5 text-xl capitalize text-gray-500'>
                <Link to='#Projects'>projects</Link>
                <Link to='#Specialities'>Specialities</Link>
                <Link to=''>contact</Link>
            </div>
            <HiMenuAlt3 className='md:hidden text-3xl' onClick={menuToggler} />
        </nav>
    );
};
export default Nav;
