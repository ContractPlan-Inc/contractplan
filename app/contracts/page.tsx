export default function ContractsPage() {
  return (
    <main className="p-8 text-white bg-[#0b1120] min-h-screen">
      <h1 className="text-3xl font-bold mb-6">All Contracts</h1>
      <table className="w-full text-left table-auto border-collapse text-sm text-gray-300">
        <thead>
          <tr className="text-gray-400 border-b border-gray-700">
            <th className="pb-2">Name</th>
            <th className="pb-2">Type</th>
            <th className="pb-2">Owner</th>
            <th className="pb-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Vendor MSA 2025</td>
            <td>Service</td>
            <td>Amanda Liu</td>
            <td>Active</td>
          </tr>
          <tr>
            <td>Grant Funding Q3</td>
            <td>Grant</td>
            <td>Marcus Bell</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
