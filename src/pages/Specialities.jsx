const Specialities = () => {
    return (
        <div className='text-center flex flex-col items-center gap-5 min-h-[80vh] pb-5'>
            <p className='p-5 text-6xl'>Specialities</p>
            <p className='p-5 text-gray-500 text-2xl max-w-[1000px] mx-auto'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                hic exercitationem facere sed nisi assumenda dolorem, numquam
                quam libero placeat?
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div className='max-w-sm rounded overflow-hidden shadow-lg'>
                    <div className='px-6 py-4'>
                        <p className='font-bold mb-2 text-3xl'>
                            product design
                        </p>
                        <p className='text-gray-700 text-base'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptatibus quia, nulla! Maiores et
                            perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                </div>
                <div className='max-w-sm rounded overflow-hidden shadow-lg'>
                    <div className='px-6 py-4'>
                        <p className='font-bold mb-2 text-3xl'>ui/ux design</p>
                        <p className='text-gray-700 text-base'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptatibus quia, nulla! Maiores et
                            perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                </div>
                <div className='max-w-sm rounded overflow-hidden shadow-lg'>
                    <div className='px-6 py-4'>
                        <p className='font-bold mb-2 text-3xl'>
                            interactive design
                        </p>
                        <p className='text-gray-700 text-base'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptatibus quia, nulla! Maiores et
                            perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Specialities;
