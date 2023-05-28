const Projects = () => {
    return (
        <div
            className='px-[10%] py-[5%] min-h-[80vh] bg-blue-900 text-black'
            id='Projects'
        >
            <div className='flex flex-col md:grid md:grid-cols-2 gap-5 w-full pb-5'>
                <p className='text-white text-5xl md:text-7xl capitalize'>
                    take a look at my projects
                </p>
                <p className='text-gray-200 p-5 max-w-md'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    officiis veritatis iure dolore voluptates commodi!
                </p>
            </div>
            <div className='flex flex-col md:grid md:grid-cols-2 gap-5'>
                <a
                    href='https://startling-druid-b14713.netlify.app/'
                    className='min-h-[170px] border border-white grid grid-cols-2 bg-gray-100'
                >
                    <div className='p-5'>
                        <p className='text-2xl font-bold '>Airbnb clone</p>
                        <p>a replica of the air bnb website</p>
                    </div>
                    <div className='flex'>
                        <img src='' className='cover' />
                    </div>
                </a>
                <a
                    href='https://amazing-pithivier-487a83.netlify.app/'
                    className='min-h-[170px] border border-white grid grid-cols-2 bg-gray-100'
                >
                    <div className='p-5'>
                        <p className='text-2xl font-bold '>Ecommerce</p>
                        <p>an ecommerce website for headphones</p>
                    </div>
                    <div className='flex'>
                        <img src='' className='cover' />
                    </div>
                </a>
                <div className='min-h-[170px] border border-white grid grid-cols-2 bg-gray-100'>
                    <div className='p-5'>
                        <p className='text-2xl font-bold '>Title title</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                    <div className='flex'>
                        <img src='' className='cover' />
                    </div>
                </div>
                <div className='min-h-[170px] border border-white grid grid-cols-2 bg-gray-100'>
                    <div className='p-5'>
                        <p className='text-2xl font-bold '>Title title</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                    <div className='flex'>
                        <img src='' className='cover' />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Projects;
