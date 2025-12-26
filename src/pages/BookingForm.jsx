import { useParams } from "react-router-dom";
import { useState } from "react";
import services from "../datas/Services";

const BookingForm = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === Number(id));

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    location: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Booking Data:", {
      service: service.title,
      ...formData,
    });

    alert("Booking submitted successfully!");
  };

  if (!service) {
    return <p className="text-center mt-10">Service not found</p>;
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">
        Book: {service.title}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          className="w-full border p-2 rounded"
          required
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full border p-2 rounded"
          required
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          className="w-full border p-2 rounded"
          required
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          placeholder="Service Location"
          className="w-full border p-2 rounded"
          required
          onChange={handleChange}
        />

        <textarea
          name="notes"
          placeholder="Additional notes (optional)"
          className="w-full border p-2 rounded"
          rows="3"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-green-700"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
