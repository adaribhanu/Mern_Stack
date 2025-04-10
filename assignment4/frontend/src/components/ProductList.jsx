import { useNavigate } from "react-router-dom";
import { products } from "../data/products";

const ProductList = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="bg-gray-100 h-56 flex items-center justify-center p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Details */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-blue-600 font-bold">{product.price}</p>
                </div>

                {/* Button */}
                <div className="mt-6">
                  <button
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="w-full py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
                  > View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
