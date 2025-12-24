import services from "../datas/Services";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Available Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
