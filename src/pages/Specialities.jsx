import { FcIdea } from "react-icons/fc";
import { MdDesignServices } from "react-icons/md";
import { RxMobile } from "react-icons/rx";
const Specialities = () => {
    return (
        <div
            className='px-[10%] text-center flex flex-col items-center gap-5 min-h-[80vh] pb-5'
            id='Specialities'
        >
            <p className='p-5 text-6xl'>Specialities</p>
            <p className='p-5 text-gray-500 text-2xl max-w-[1000px] mx-auto'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                hic exercitationem facere sed nisi assumenda dolorem, numquam
                quam libero placeat?
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div className='max-w-sm rounded overflow-hidden shadow-lg'>
                    <div className='px-6 py-4'>
                        <div className='p-3 rounded-full border w-fit'>
                            <FcIdea className='text-4xl hover:animate-pulse' />
                        </div>
                        <p className='font-bold mb-2 text-3xl'>
                            product design
                        </p>
                        <p className='text-gray-500 text-base'>
                            is the foundation of any successful product. From
                            conceptualization to prototyping and final
                            production, I approach product design with a focus
                            on functionality, usability, and aesthetics.
                        </p>
                    </div>
                </div>
                <div className='max-w-sm rounded overflow-hidden shadow-lg'>
                    <div className='px-6 py-4'>
                        <div className='p-3 rounded-full border w-fit'>
                            <MdDesignServices className='text-4xl text-purple-700 hover:animate-bounce' />
                        </div>
                        <p className='font-bold mb-2 text-3xl'>ui/ux design</p>
                        <p className='text-gray-500 text-base'>
                            npm rwith a strong focus on UI/UX design to provide
                            visitors with an engaging and user-friendly
                            experience. With an intuitive interface and easy
                            navigation
                        </p>
                    </div>
                </div>
                <div className='max-w-sm rounded overflow-hidden shadow-lg'>
                    <div className='px-6 py-4'>
                        <div className='p-3 rounded-full border w-fit'>
                            <RxMobile className='text-4xl hover:animate-ping' />
                        </div>
                        <p className='font-bold mb-2 text-3xl'>
                            interactive design
                        </p>
                        <p className='text-gray-500 text-base'>
                            interactive design plays a crucial role in engaging
                            visitors and creating a memorable user experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Specialities;
