const clients = [
  {
    name: "Acme Corporation",
    project: "Website Redesign",
    amount: "$24,500",
    status: "Active",
  },
  {
    name: "Nova Technologies",
    project: "Mobile App",
    amount: "$18,200",
    status: "Active",
  },
  {
    name: "Vertex Solutions",
    project: "CRM System",
    amount: "$32,800",
    status: "Pending",
  },
];

export default function ClientCard() {
  return (
    <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-[28px] p-6">

      <div className="flex justify-between mb-6">

        <div>
          <h2 className="text-xl font-bold text-white">
            Top Clients
          </h2>

          <p className="text-gray-400 text-sm">
            Recent client activity
          </p>
        </div>

        <button className="text-violet-400 text-sm">
          View All
        </button>

      </div>

      <div className="space-y-4">

        {clients.map((client, index) => (

          <div
            key={index}
            className="flex items-center justify-between bg-black/20 rounded-2xl p-4"
          >

            <div>

              <h3 className="text-white font-semibold">
                {client.name}
              </h3>

              <p className="text-gray-400 text-sm">
                {client.project}
              </p>

            </div>

            <div className="text-right">

              <p className="text-white font-bold">
                {client.amount}
              </p>

              <span
                className={`text-xs ${
                  client.status === "Active"
                    ? "text-green-400"
                    : "text-yellow-400"
                }`}
              >
                {client.status}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}