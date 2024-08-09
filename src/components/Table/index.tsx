import React, { memo } from 'react';
import { TableProps } from './types';

const Table: React.FC<TableProps> = ({ users }) => {
  return (
    <table className="w-full shadow-md rounded-sm overflow-hidden bg-white">
      <thead>
        <tr>
          <th className="w-1/5 border-t border-l text-black/75 border-gray-300 p-2">Name</th>
          <th className="w-1/5 border-t text-black/75 border-gray-300 p-2">Email</th>
          <th className="w-1/5 border-t text-black/75 border-gray-300 p-2">Phone</th>
          <th className="w-1/5 border-t text-black/75 border-gray-300 p-2">Website</th>
          <th className="w-1/5 border-t border-r text-black/75 border-gray-300 p-2">City</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id} className="hover:bg-gray-100">
            <td className="border-t border-l text-black/75 border-gray-300 p-2">{user.name}</td>
            <td className="border-t text-black/75 border-gray-300 p-2">{user.email}</td>
            <td className="border-t text-black/75 border-gray-300 p-2">{user.phone}</td>
            <td className="border-t text-black/75 border-gray-300 p-2">{user.website}</td>
            <td className="border-t border-r text-black/75 border-gray-300 p-2">{user.address.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default memo(Table);
