import React from "react";
import { PaginationProps } from "./types";

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-4">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`mx-1 px-3 py-1 border ${index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-white text-black/75'}`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};
