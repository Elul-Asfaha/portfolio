import Nav from "../components/Nav";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
const Home = () => {
    return (
        <div className='min-h-[100vh] py-5 flex flex-col items-center'>
            <Nav />
            <div className='grid grid-cols-1 min-h-[50vh] sm:grid-cols-2 md:mt-[200px] capitalize'>
                <div className='md:pe-5'>
                    <svg
                        viewBox='0 0 1000 1000'
                        xmlns='http://www.w3.org/2000/svg'
                        className='hover:rotate-180 hover:ease-in-out md:hover:animate-bounce'
                    >
                        <defs>
                            <clipPath id='a'>
                                <path
                                    fill='currentColor'
                                    d='M938 645q-38 145-165.5 223T499 948.5q-146 2.5-243-99T119 624q-40-124 2-246.5T255.5 143Q348 31 500.5 30.5T773 122q120 92 161.5 235t3.5 288Z'
                                />
                            </clipPath>
                        </defs>
                        <g clip-path='url(#a)'>
                            <path
                                fill='#444cf7'
                                d='M938 645q-38 145-165.5 223T499 948.5q-146 2.5-243-99T119 624q-40-124 2-246.5T255.5 143Q348 31 500.5 30.5T773 122q120 92 161.5 235t3.5 288Z'
                            />
                        </g>
                    </svg>
                </div>
                <div className='flex flex-col justify-evenly gap-5'>
                    <p className='font-semibold text-5xl md:text-7xl'>
                        an interactive <br />
                        designer
                    </p>
                    <p className='leading-relaxed text-justify max-w-[400px]'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Et deleniti porro tempora numquam ea nam qui
                        dolorum adipisci, earum recusandae!
                    </p>
                    <div className='flex gap-5 items-center'>
                        <button className='bg-purple-700 text-white rounded-sm py-2 px-4'>
                            book a call
                        </button>
                        <p className='underline font-bold py-2 px-4 hover:ring-2 hover:ring-purple-700'>
                            my works
                        </p>
                    </div>
                    <div className='flex gap-5 items-center normal-case font-bold'>
                        <span className='text-gray-500'>Follow me on:</span>
                        <div className='flex gap-4 text-2xl'>
                            <a
                                href='https://www.linkedin.com/in/elul-asfaha-1a395125b'
                                className='border rounded-full p-2 hover:ring-2 hover:ring-purple-700'
                            >
                                <AiOutlineLinkedin />
                            </a>
                            <a
                                href=''
                                className='border rounded-full p-2 hover:ring-2 hover:ring-purple-700'
                            >
                                <BsInstagram />
                            </a>
                            <a
                                href='https://github.com/Elul-Asfaha'
                                className='border rounded-full p-2 hover:ring-2 hover:ring-purple-700'
                            >
                                <BsGithub />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;
