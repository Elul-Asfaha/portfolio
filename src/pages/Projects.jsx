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
                    I invite you to take a closer look at my projects and dive
                    into the live demos below and code repositories by going to
                    my github profile
                </p>
            </div>
            <div className='flex flex-col md:grid md:grid-cols-2 gap-5'>
                <a
                    href='https://main--euphonious-lokum-2f2c9a.netlify.app/'
                    className='min-h-[170px] border border-white grid grid-cols-2 bg-gray-100'
                >
                    <div className='p-5'>
                        <p className='text-2xl font-bold '>Dashboard</p>
                        <p>a dashboard where admins can check stats</p>
                    </div>
                    <div className='flex'>
                        <img src='' className='cover' />
                    </div>
                </a>
                <a
                    href='https://rad-mermaid-2c5b01.netlify.app/'
                    className='min-h-[170px] border border-white grid grid-cols-2 bg-gray-100'
                >
                    <div className='p-5'>
                        <p className='text-2xl font-bold '>Youtube Clone</p>
                        <p>
                            A Youtube clone with a search functionality and
                            videoplay back
                        </p>
                    </div>
                    <div className='flex'>
                        <img src='' className='cover' />
                    </div>
                </a>
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
                <a
                    href='https://nimble-cactus-2afed8.netlify.app/'
                    className='min-h-[170px] border border-white grid grid-cols-2 bg-gray-100'
                >
                    <div className='p-5'>
                        <p className='text-2xl font-bold '>Delivery</p>
                        <p>a delivery buissness site</p>
                    </div>
                    <div className='flex'>
                        <img src='' className='cover' />
                    </div>
                </a>
            </div>
        </div>
    );
};
export default Projects;
