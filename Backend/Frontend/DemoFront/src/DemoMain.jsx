import React from 'react'

const DemoMain = () => {
    return (
        <div className='bg-gray-950'>
            {/* Navbar */}
            <nav className='flex justify-between items-center px-3 py-2 border-b border-white'>
                <section>
                    <h1 className='text-white'>Tech Blog</h1>
                </section>
                <section className='flex items-center gap-3'>
                    <div>
                        <ul className='text-white flex gap-3'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div>
                        <button className='bg-green-500 p-1 rounded-2xl'>Subscribe</button>
                    </div>
                </section>
            </nav>

            <main className='px-10 py-3 flex flex-col justify-center space-y-9'>
                {/* Hero */}
                <section className='flex justify-center'>
                    <div className='bg-[url(/pexels-moose-photos-170195-1037992.jpg)] bg-cover bg-center w-[100%] h-[500px] rounded-lg flex flex-col justify-center items-center gap-3 text-white'>
                        <h2 className='text-5xl'>Welcome To Tech Blog</h2>
                        <p> Stay up-to-date with the latest in technology.</p>
                        <button className='bg-green-500 p-1 rounded-2xl'>Subscribe</button>
                    </div>
                </section>

                {/* About */}
                <section>
                    <div className='flex justify-center'>
                        <div className='text-white flex flex-col gap-3'>
                            <h2 className='text-3xl'>About Us</h2>
                            <p>Welcome to Tech Blog, your go-to source for the latest in technology. Our mission is to provide insightful articles, breaking news, and in-depth analyses to keep you informed and ahead in the fast-paced world of tech.</p>
                            <p>Our team of expert writers and tech enthusiasts are passionate about sharing their knowledge and perspectives on everything from artificial intelligence and cybersecurity to the newest gadgets and software developments. We believe that understanding technology is key to navigating the future, and we're here to make that journey exciting and accessible for everyone.</p>
                            <p>Join our community of tech lovers and stay curious!</p>
                        </div>
                    </div>
                </section>

                {/* Blog */}
                <section>
                    <div className='text-white flex flex-col gap-3'>
                        <h2 className='text-3xl'>Our Blog</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {/* Blog Post 1 */}
                            <div className='bg-gray-800 p-4 rounded-lg flex flex-col gap-2'>
                                <img src="/pexels-christina-morillo-1181263.jpg" alt="AI" className='w-full h-48 object-cover rounded-md' />
                                <h3 className='text-xl font-bold'>The Future of AI: What to Expect in the Next Decade</h3>
                                <p className='text-gray-400'>Artificial intelligence is rapidly evolving, promising to reshape industries and daily life. Discover the key trends and breakthroughs on the horizon.</p>
                                <button className='bg-green-500 p-1 rounded-2xl self-start mt-auto'>Read More</button>
                            </div>
                            {/* Blog Post 2 */}
                            <div className='bg-gray-800 p-4 rounded-lg flex flex-col gap-2'>
                                <img src="/pexels-pixabay-270360.jpg" alt="Cybersecurity" className='w-full h-48 object-cover rounded-md' />
                                <h3 className='text-xl font-bold'>Cybersecurity Essentials: Protecting Your Digital Life</h3>
                                <p className='text-gray-400'>In an increasingly connected world, cybersecurity is paramount. Learn practical tips and best practices to safeguard your personal information and devices.</p>
                                <button className='bg-green-500 p-1 rounded-2xl self-start mt-auto'>Read More</button>
                            </div>
                            {/* Blog Post 3 */}
                            <div className='bg-gray-800 p-4 rounded-lg flex flex-col gap-2'>
                                <img src="/pexels-pixabay-38619.jpg" alt="Web Development" className='w-full h-48 object-cover rounded-md' />
                                <h3 className='text-xl font-bold'>Web Development Trends: What's New in Front-End Frameworks</h3>
                                <p className='text-gray-400'>Stay ahead in the fast-paced world of web development. Explore the latest trends and updates in front-end frameworks like React, Angular, and Vue.</p>
                                <button className='bg-green-500 p-1 rounded-2xl self-start mt-auto'>Read More</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section>
                    <div className='text-white flex flex-col gap-3'>
                        <h2 className='text-3xl'>Contact Us</h2>
                        <p>Have questions, feedback, or just want to say hello? We'd love to hear from you! Reach out to us through the form below or connect with us on social media.</p>
                        <form className='flex flex-col gap-4'>
                            <input type='text' placeholder='Your Name' className='p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500' />
                            <input type='email' placeholder='Your Email' className='p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500' />
                            <textarea placeholder='Your Message' rows='5' className='p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500'></textarea>
                            <button type='submit' className='bg-green-500 p-2 rounded-md self-start'>Send Message</button>
                        </form>
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className='text-white text-center py-6 border-t border-gray-700 mt-10'>
                <p>&copy; 2023 Tech Blog. All rights reserved.</p>
                <div className='flex justify-center gap-4 mt-3'>
                    <a href='#' className='text-gray-400 hover:text-white'>Facebook</a>
                    <a href='#' className='text-gray-400 hover:text-white'>Twitter</a>
                    <a href='#' className='text-gray-400 hover:text-white'>LinkedIn</a>
                </div>
            </footer>
        </div>
    )
}

export default DemoMain