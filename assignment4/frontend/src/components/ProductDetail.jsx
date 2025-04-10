import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="p-10 text-center text-gray-500">Product not found</div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden p-8">
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
          >
            ← Back to Products
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Product Image */}
          <div className="bg-gray-100 p-6 rounded-2xl flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h2>
            <p className="text-2xl text-blue-500 font-semibold mb-6">{product.price}</p>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              {product.description}
            </p>

            <button className="mt-auto w-full px-6 py-3 bg-blue-600 text-white rounded-full font-medium shadow hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
