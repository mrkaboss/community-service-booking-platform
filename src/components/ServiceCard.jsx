import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-bold">{service.title}</h3>

        <p className="text-sm text-gray-500">
          {service.category} • {service.location}
        </p>

        <p className="mt-2 text-sm">{service.description}</p>

        <p className="mt-2 text-sm">
          <span className="font-semibold">Provider:</span>{" "}
          {service.providerName}
        </p>

        <p className="mt-1 text-sm">
          ⭐ {service.rating} / 5
        </p>

        <div className="mt-3 flex items-center justify-between">
          <span className="font-bold text-green-600">
            {service.price.toLocaleString()} RWF
          </span>

          {service.available ? (
            <Link to="/booking" className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
              Book Now
            </Link>
          ) : (
            <span className="text-red-500 text-sm font-semibold">
              Not Available
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
