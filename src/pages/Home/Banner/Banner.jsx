import { Link } from 'react-router-dom';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';
const Banner = () => {
    return (
        <div className="w-full h-[600px] carousel">
            <div id="slide1" className="relative w-full carousel-item">
                <img
                    src={img1}
                    className="rounded-xl w-full" />
                <div className="top-0 left-0 absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl h-full">
                    <div className='space-y-7 pl-12 w-1/2 text-white'>
                        <h2 className='font-bold text-6xl'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passges of available, but the majority have suffered alteration in some products</p>
                        <div>
                            <button className='mr-5 btn btn-primary'>Discover More</button>

                            <Link to='/home'><button className='btn btn-outline btn-secondary'>Latest Project</button></Link>
                        </div>
                    </div>
                </div>
                <div className="right-5 bottom-0 left-5 absolute flex justify-end transform -translate-y-1/2">
                    <a href="#slide6" className="mr-5 btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="relative w-full carousel-item">
                <img
                    src={img2}
                    className="w-full" />
                    <div className="top-0 left-0 absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl h-full">
                    <div className='space-y-7 pl-12 w-1/2 text-white'>
                        <h2 className='font-bold text-6xl'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passges of available, but the majority have suffered alteration in some products</p>
                        <div>
                            <button className='mr-5 btn btn-primary'>Discover More</button>

                            <Link to='/home'><button className='btn btn-outline btn-secondary'>Latest Project</button></Link>
                        </div>
                    </div>
                </div>
                <div className="right-5 bottom-0 left-5 absolute flex justify-end transform -translate-y-1/2">
                    <a href="#slide1" className="mr-5 btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="relative w-full carousel-item">
                <img
                    src={img3}
                    className="w-full" />
                    <div className="top-0 left-0 absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl h-full">
                    <div className='space-y-7 pl-12 w-1/2 text-white'>
                        <h2 className='font-bold text-6xl'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passges of available, but the majority have suffered alteration in some products</p>
                        <div>
                            <button className='mr-5 btn btn-primary'>Discover More</button>

                            <Link to='/home'><button className='btn btn-outline btn-secondary'>Latest Project</button></Link>
                        </div>
                    </div>
                </div>
                <div className="right-5 bottom-0 left-5 absolute flex justify-end transform -translate-y-1/2">
                    <a href="#slide2" className="mr-5 btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="relative w-full carousel-item">
                <img
                    src={img4}
                    className="w-full" />
                    <div className="top-0 left-0 absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl h-full">
                    <div className='space-y-7 pl-12 w-1/2 text-white'>
                        <h2 className='font-bold text-6xl'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passges of available, but the majority have suffered alteration in some products</p>
                        <div>
                            <button className='mr-5 btn btn-primary'>Discover More</button>

                            <Link to='/home'><button className='btn btn-outline btn-secondary'>Latest Project</button></Link>
                        </div>
                    </div>
                </div>
                <div className="right-5 bottom-0 left-5 absolute flex justify-end transform -translate-y-1/2">
                    <a href="#slide3" className="mr-5 btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="relative w-full carousel-item">
                <img
                    src={img5}
                    className="w-full" />
                    <div className="top-0 left-0 absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl h-full">
                    <div className='space-y-7 pl-12 w-1/2 text-white'>
                        <h2 className='font-bold text-6xl'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passges of available, but the majority have suffered alteration in some products</p>
                        <div>
                            <button className='mr-5 btn btn-primary'>Discover More</button>

                            <Link to='/home'><button className='btn btn-outline btn-secondary'>Latest Project</button></Link>
                        </div>
                    </div>
                </div>
                <div className="right-6 bottom-0 left-5 absolute flex justify-end transform -translate-y-1/2">
                    <a href="#slide4" className="mr-5 btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="relative w-full carousel-item">
                <img
                    src={img6}
                    className="w-full" />
                    <div className="top-0 left-0 absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl h-full">
                    <div className='space-y-7 pl-12 w-1/2 text-white'>
                        <h2 className='font-bold text-6xl'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passges of available, but the majority have suffered alteration in some products</p>
                        <div>
                            <button className='mr-5 btn btn-primary'>Discover More</button>

                            <Link to='/home'><button className='btn btn-outline btn-secondary'>Latest Project</button></Link>
                        </div>
                    </div>
                </div>
                <div className="right-6 bottom-0 left-5 absolute flex justify-end transform -translate-y-1/2">
                    <a href="#slide5" className="mr-5 btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;