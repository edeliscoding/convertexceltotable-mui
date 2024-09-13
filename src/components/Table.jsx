const Table = ({ data }) => (
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        {Object.keys(data[0]).map((header) => (
          <th
            key={header}
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {data.map((row, index) => (
        <tr key={index}>
          {Object.values(row).map((cell, cellIndex) => (
            <td
              key={cellIndex}
              className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
            >
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
