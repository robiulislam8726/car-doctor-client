import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="bg-base-200 min-h-screen hero">
            <div className="lg:flex-row flex-col hero-content">
                <div className='relative lg:w-1/2'>
                    <img src={person} className="shadow-2xl rounded-lg w-3/4" />
                    <img src={parts} className="top-1/2 right-5 absolute border-8 border-white shadow-2xl rounded-lg w-1/2" />
                </div>
                <div className='space-y-5 p-4 lg:w-1/2'>
                <h3 className='font-bold text-3xl text-orange-500'>About US</h3>
                    <h1 className="font-bold text-5xl">We are qualified & of experience in this field</h1>
                    <hr />
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;