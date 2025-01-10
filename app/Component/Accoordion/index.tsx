"use client"
import React, { useState } from 'react';

type AccordionItem = {
  title: string;
  body: string; // HTML string
};

type AccordionProps = {
  items: AccordionItem[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-md">
          <button
            className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-left text-gray-800 font-medium">{item.title}</span>
            <svg
              className={`w-5 h-5 transform transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : 'rotate-0'
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === index && (
            <div className="p-4 border-t border-gray-200">
              <div
                className="text-gray-700"
                dangerouslySetInnerHTML={{ __html: item.body }}
              ></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;