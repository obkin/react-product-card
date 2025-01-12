import React from 'react';
import './SpecificationTable.css';

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
