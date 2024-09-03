import { Search } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import ProductItems from './ProductItems';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch products from API
        let res;
        if(searchQuery){
          res = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`);
        }else{
          res = await fetch('https://dummyjson.com/products');
        }


        if (!res.ok) {
          // If the response is not ok, throw an error
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        setProducts(data.products); // Update products state
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to fetch products. Please try again later.'); // Set error message
      }
    };

    fetchProducts(); 
  }, [searchQuery]);



  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Search Bar */}
      <div className="w-full flex justify-center my-4">
        <div className="relative w-1/2">
          <input
            type="text"
            className="border border-gray-300 rounded pl-10 pr-4 py-2 w-full"
            placeholder="Search Items...."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {/* Search Icon */}
          <Search
            color="black"
            className="cursor-pointer absolute left-3 top-1/2 transform -translate-y-1/2"
          />
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="text-center text-red-500 mb-4">
          {error}
        </div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ?
          products.map((product) => (
            <ProductItems
              key={product.id}
              id={product.id}
              title={product.title}
              thumbnail={product.thumbnail}
              brand={product.brand}
            />
          )): ( searchQuery ?
          <div className="col-span-full flex justify-center items-center">
            <h1 className="text-3xl font-semibold text-gray-700 bg-white py-8 px-12 rounded-lg shadow-md">
              No Products Found
            </h1>
          </div>:
           <div className="col-span-full flex justify-center items-center">
           <h1 className="text-3xl font-semibold text-gray-700 bg-white py-8 px-12 rounded-lg shadow-md">
            Please Wait...
           </h1>
         </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
