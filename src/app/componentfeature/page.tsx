import React from 'react';

import {  Check,  Flower,  TractorIcon, Zap } from "lucide-react"; // Importing shadcn/ui (Lucide icons)

const features = [
  {
    id: 1,
    icon: <TractorIcon className="text-blue-500 w-8 h-8 mb-6" />, 
    title: "Next day as standard",
    description: "Order before 3pm and get your order the next day as standard"
  },
  {
    id: 2,
    icon: <Check className="text-blue-500 w-8 h-8 mb-6" />,
    title: "Made by true artisans",
    description: "Handmade crafted goods made with real passion and craftmanship"
  },
  {
    id: 3,
    icon: <Zap className="text-blue-500 w-8 h-8 mb-6" />,
    title: "Recycled packaging",
    description: "We use 100% recycled packaging to ensure our footprint is manageable"
  }
  ,
  {
    id: 4,
    icon: <Flower className="text-blue-500 w-8 h-8 mb-6" />,
    title: "Recycled packaging",
    description: "We use 100% recycled packaging to ensure our footprint is manageable"
  }
];

export default function Features() {
  return (
    <div className="bg-gray-100 font-sans">
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-gray-800 text-4xl font-extrabold text-center mb-16">
        What makes our brand different
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-md:max-w-md mx-auto">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="p-8">
                {feature.icon}
                <h3 className="text-gray-800 text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
