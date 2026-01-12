const ProviderDashboard = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-3 p-4">
  
      <section className="bg-gray-300 px-3 py-3 rounded-lg">
        <h2 className="text-2xl text-white font-bold mb-3">Provider Profile</h2>
        <p className="text-xl mb-2"><b className="text-2xl">Name:</b> Mr Kaboss Service</p>
        <p className="text-xl mb-2"><b>Category:</b> Professional Developer</p>
        <p className="mb-3">Rating: Kaboss</p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition">
          Edit Profile
        </button>
      </section>

      <section className="bg-gray-300 px-3 py-3 rounded-lg">
        <h2 className="text-2xl font-bold mb-3">My Services</h2>

        <div className="bg-white p-3 rounded-lg mb-3">
          <div className="mb-2">
            <p className="font-bold">Software Development</p>
            <p className="text-gray-600">$100 per hour</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition">
              Edit
            </button>
            <button className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition">
              Delete
            </button>
          </div>
        </div>

        <button className="bg-white text-yellow-500 px-6 py-3 rounded-full font-semibold border-2 border-yellow-500 hover:bg-yellow-50 transition">
          Add New Service
        </button>
      </section>

      <section className="bg-gray-300 px-3 py-3 rounded-lg">
        <h2 className="text-2xl font-bold mb-3">Booking Requests</h2>

        <div className="bg-white p-3 rounded-lg">
          <div className="mb-3">
            <p className="mb-1"><b>Client:</b> Kaboss</p>
            <p className="mb-1"><b>Service:</b> HTML CSS JavaScript</p>
            <p><b>Date:</b> Tomorrow 10:00</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition">
              Accept
            </button>
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition">
              Reject
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-300 px-3 py-3 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Earnings</h2>
        <h3 className="text-4xl font-bold text-green-600 mb-1">$150,250</h3>
        <p className="text-gray-600 mb-4">This month</p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition">
          Withdraw
        </button>
      </section>

    </div>
  );
};

export default ProviderDashboard;