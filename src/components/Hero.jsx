import React from "react";

const Hero= () => {
  return (
    <div className="min-h-screen p-8">
      <div className="flex justify-between items-center mb-10">
    
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
          + Create
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            className="h-40 w-full object-cover rounded-t-xl"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Mountain</h2>
            <div className="flex gap-3">
              <button className="bg-green-500 text-white px-4 py-1 rounded">
                Edit
              </button>
              <button className="bg-red-500 text-white px-4 py-1 rounded">
                Delete
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            className="h-40 w-full object-cover rounded-t-xl"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Beach</h2>
            <div className="flex gap-3">
              <button className="bg-green-500 text-white px-4 py-1 rounded">
                Edit
              </button>
              <button className="bg-red-500 text-white px-4 py-1 rounded">
                Delete
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            className="h-40 w-full object-cover rounded-t-xl"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Forest</h2>
            <div className="flex gap-3">
              <button className="bg-green-500 text-white px-4 py-1 rounded">
                Edit
              </button>
              <button className="bg-red-500 text-white px-4 py-1 rounded">
                Delete
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow">
          <img
            src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429"
            className="h-40 w-full object-cover rounded-t-xl"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Desert</h2>
            <div className="flex gap-3">
              <button className="bg-green-500 text-white px-4 py-1 rounded">
                Edit
              </button>
              <button className="bg-red-500 text-white px-4 py-1 rounded">
                Delete
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
