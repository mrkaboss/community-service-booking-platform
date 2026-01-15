import { useState } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  // 1. Setup State
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  // Mock data (This would eventually come from your MongoDB)
  const services = [
    { id: 1, name: "Web Development", category: "Tech", price: "$50/hr" },
    { id: 2, name: "House Cleaning", category: "Home", price: "$30/hr" },
    { id: 3, name: "Graphic Design", category: "Creative", price: "$40/hr" },
    { id: 4, name: "Plumbing", category: "Home", price: "$60/hr" },
    { id: 5, name: "Mobile App Dev", category: "Tech", price: "$70/hr" },
  ];

  // 2. Filter Logic
  const filteredServices = services.filter((service) => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeFilter === "All" || service.category === activeFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-16 px-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Find the Best Services</h1>
        
        {/* --- SEARCH BAR --- */}
        <div className="max-w-xl mx-auto mt-8">
          <input
            type="text"
            placeholder="Search for services (e.g. 'Web')..."
            className="w-full p-4 rounded-full text-gray-800 outline-none shadow-lg"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      {/* --- FILTERS & RESULTS --- */}
      <section className="py-12 px-10 max-w-6xl mx-auto">
        
        {/* Category Buttons */}
        <div className="flex justify-center gap-4 mb-10 overflow-x-auto pb-2">
          {["All", "Tech", "Home", "Creative"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                activeFilter === cat 
                ? "bg-blue-800 text-white" 
                : "bg-white text-blue-800 border border-blue-800 hover:bg-blue-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <div key={service.id} className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition border border-gray-100">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">{service.category}</span>
                <h3 className="text-xl font-bold mt-1">{service.name}</h3>
                <p className="text-gray-500 mt-2">Starting at <span className="text-green-600 font-semibold">{service.price}</span></p>
                <button className="mt-4 w-full bg-gray-100 py-2 rounded font-medium hover:bg-gray-200">
                  View Details
                </button>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-10 text-gray-400">
              No services found matching "{searchTerm}"
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;