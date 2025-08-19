import React from 'react';

function Feature() {
  const features = [
    {
      title: "Free Shipping",
      description: "Free shipping on orders over $99",
      icon: "🚚"
    },
    {
      title: "Easy Returns",
      description: "30-day return policy",
      icon: "↩️"
    },
    {
      title: "24/7 Support",
      description: "Customer support available anytime",
      icon: "💬"
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feature;