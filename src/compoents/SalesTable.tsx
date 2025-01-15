// src/components/SalesTable.tsx
import React from 'react';
import { SalesData } from '../types';
import './SalesTable.css';

interface SalesTableProps {
  sales: SalesData[];
}

const SalesTable: React.FC<SalesTableProps> = ({ sales }) => {
  return (
    <table className="sales-table">
      <thead>
        <tr>
          <th>Week Ending</th>
          <th>Retail Sales</th>
          <th>Wholesale Sales</th>
          <th>Units Sold</th>
          <th>Retailer Margin</th>
        </tr>
      </thead>
      <tbody>
        {sales.map((entry) => (
          <tr key={entry.weekEnding}>
            <td>{entry.weekEnding}</td>
            <td>{entry.retailSales}</td>
            <td>{entry.wholesaleSales}</td>
            <td>{entry.unitsSold}</td>
            <td>{entry.retailerMargin}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SalesTable;
