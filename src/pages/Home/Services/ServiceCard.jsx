
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {title, img, price} = service;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={img}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <p className="text-xl text-orange-500">Price: $ {price}</p>
                <div className="card-actions  justify-between items-center">
                   
                 <button className="btn btn-primary">Booking</button>
                    <Link to='/Home'>
                    <FaArrowRight />
                    </Link>
                   
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;