const ProviderDashboard = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 justfaycontent-center gap-3">
  
      <section className="bg-gray-300 px-3 py-3">
        <h2 className="text-2xl text white justify-Content-center">Provider Profile</h2>
        <p className="text-xl"><b className="text-2xl">Name:</b> mr kaboss Service</p>
        <p className="text-xl"><b>Category:</b> Professional developa</p>
        <p>Rating</p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold">Edit Profile</button>
      </section>

      <section className="bg-gray-300 px-3 py-3">
        <h2> My Services</h2>

        <div>
          <div>
            <p><b>am sofuty wear development</b></p>
            <p>$100  hour</p>
          </div>
          <div>
            <button className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold">Edit</button>
            <button style={danger} className="bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold">Delete</button>
          </div>
        </div>

        <button className="bg-white text-yellow-500 px-6 py-3 rounded-full font-semibold">Add New Service</button>
      </section>

      
      <section className="bg-gray-300 px-3 py3">
        <h2>Booking Requests</h2>

        <div>
          <div>
            <p><b>Client:</b> kaboss</p>
            <p>Service: html css javascriput</p>
            <p>Date: Tomorrow 10:00</p>
          </div>
          <div>
            <button className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold">Accept</button>
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold">Reject</button>
          </div>
        </div>
      </section>

      <section className="bg-gray-300 px-3 py-3">
        <h2>Earnings</h2>
        <h3>$150,250</h3>
        <p>This month</p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition">
  Withdraw
</button>

      </section>

    </div>
  );
};

const card = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "16px",
};

const row = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "10px",
};

const danger = {
  background: "red",
  color: "white",
  marginLeft: "8px",
};

export default ProviderDashboard;

