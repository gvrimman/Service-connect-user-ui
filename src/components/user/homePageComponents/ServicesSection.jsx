import React, { useState } from 'react';
import ServiceCard from '../../reUsableComponents/homeReusuableComponents/ServiceCardComponent';

const ServicesSection = ({ servicesData }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Get unique categories from servicesData
    const uniqueCategories = [
        'All',
        ...new Set(servicesData.map((service) => service.category)),
    ];

    // Filter services based on the selected category
    const filteredServices =
        selectedCategory === 'All'
            ? servicesData
            : servicesData.filter((service) => service.category === selectedCategory);

    return (
        <div className="py-6">
            {/* Header Section */}
            <div className="flex items-center justify-between">
                <h2 className="mb-4 text-2xl font-bold">Popular Services</h2>
                <h3 className="mb-4 text-xl font-bold cursor-pointer">SEE ALL</h3>
            </div>

            {/* Category Filters */}
            <div className="relative px-4 sm:px-8 md:px-12 lg:px-16">
                {uniqueCategories.map((category) => (
                    <button
                        key={category}
                        className={`px-4 py-1 m-2 rounded-full text-sm font-semibold ${selectedCategory === category
                            ? 'bg-gray-800 text-white'
                            : 'bg-[#736a68] text-white'
                            }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Services Section */}
            <div className="flex gap-6 overflow-x-auto md:overflow-x-visible md:flex-wrap scroll-smooth no-scrollbar">
                {filteredServices.slice(0, 8).map((service) => (
                    <ServiceCard
                        key={service.id}
                        category={service.category}
                        serviceTitle={service.serviceTitle}
                        price={service.price}
                        rating={service.rating}
                        reviews={service.reviews}
                        imgUrl={service.imgUrl}
                        className="w-[85vw] md:w-[30%] lg:w-[22%] h-[220px] flex-shrink-0 md:flex-shrink"
                    />
                ))}
            </div>
        </div>
    );
};

export default ServicesSection;
