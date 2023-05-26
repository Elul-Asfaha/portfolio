const Projects = () => {
    return (
        <div className='px-[10%] py-[5%] min-h-[80vh] flex flex-col items-center gap-5 bg-blue-700'>
            <div className='flex flex-col md:grid md:grid-cols-2 gap-5'>
                <p className='text-white text-5xl capitalize'>
                    take a look at my projects
                </p>
                <p className='text-gray-300 p-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    officiis veritatis iure dolore voluptates commodi!
                </p>
            </div>
            <div className='flex flex-col md:grid md:grid-cols-2 gap-5'>
                <div className='min-h-[170px] border border-white grid grid-cols-2 bg-gray-100'>
                    <div className='p-5'>
                        <p className='text-2xl font-bold '>Title title</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                        <a className='font-bold text-xl underline underline-offset-4'>
                            Case study
                        </a>
                    </div>
                    <div></div>
                </div>
                <div className='min-h-[170px] border border-white grid grid-cols-2 bg-gray-100'>
                    <div className='p-5'>
                        <p className='text-2xl font-bold '>Title title</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                        <a className='font-bold text-xl underline underline-offset-4'>
                            Case study
                        </a>
                    </div>
                    <div></div>
                </div>
                <div className='min-h-[170px] border border-white grid grid-cols-2 bg-gray-100'>
                    <div className='p-5'>
                        <p className='text-2xl font-bold '>Title title</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                        <a className='font-bold text-xl underline underline-offset-4'>
                            Case study
                        </a>
                    </div>
                    <div></div>
                </div>
                <div className='min-h-[170px] border border-white grid grid-cols-2 bg-gray-100'>
                    <div className='p-5'>
                        <p className='text-2xl font-bold '>Title title</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                        <a className='font-bold text-xl underline underline-offset-4'>
                            Case study
                        </a>
                    </div>
                    <div></div>
                </div>
            </div>
            <button className='w-fit  py-2 px-4'>Show all</button>
        </div>
    );
};
export default Projects;
