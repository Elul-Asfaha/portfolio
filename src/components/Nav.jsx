import { HiOutlineMail } from "react-icons/hi";
const Nav = () => {
    return (
        <nav className='flex justify-between items-center w-[100%]'>
            <a
                href='mailto:scorpiondota22@gmail.com'
                className='flex gap-1 items-center text-xl '
            >
                <HiOutlineMail className='text-2xl' />
                <span className='hidden md:block'>
                    scorpiondota22@gmail.com
                </span>
            </a>
            <div className='flex gap-5 text-xl capitalize text-gray-500'>
                <div className=''>projects</div>
                <div className=''>journey</div>
                <div className=''>contact</div>
            </div>
        </nav>
    );
};
export default Nav;
