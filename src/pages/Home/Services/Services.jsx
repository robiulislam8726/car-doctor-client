import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";



const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <div className="mt-4">
            <div className="text-center ">
                <h3 className="font-bold text-2xl text-orange-600"> Service</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p> Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. <br /> In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service ={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;