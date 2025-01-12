import React from 'react';

const SpecificationTable = ({ specifications }) => {
  return (
    <table>
      <tbody>
        {Object.entries(specifications).map(([key, value]) => (
          <tr key={key}>
            <td>{key}:</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SpecificationTable;
