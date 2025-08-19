import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  ShoppingCart, 
  Heart, 
  Truck, 
  RefreshCw, 
  MessageSquare 
} from 'lucide-react';

const ProductDetailPage = ({ product, relatedProducts = [], onProductClick }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || '');
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [relatedStartIndex, setRelatedStartIndex] = useState(0);

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const itemsPerView = 4;

  const handleImageSelect = (index) => {
    setSelectedImageIndex(index);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleRelatedPrev = () => {
    setRelatedStartIndex((prev) => Math.max(0, prev - itemsPerView));
  };

  const handleRelatedNext = () => {
    setRelatedStartIndex((prev) => 
      Math.min(relatedProducts.length - itemsPerView, prev + itemsPerView)
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const tabContent = {
    description: (
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-3">Product Description</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            {product.short_description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">Product Details</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><span className="font-medium">Material:</span> {product.material}</li>
              <li><span className="font-medium">Fit:</span> {product.fit}</li>
              <li><span className="font-medium">Collar:</span> {product.collar}</li>
              <li><span className="font-medium">Sleeves:</span> {product.sleeves}</li>
              <li><span className="font-medium">Pattern:</span> {product.pattern}</li>
              <li><span className="font-medium">Occasion:</span> {product.occassion}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Care Instructions</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• {product.washcare || 'Machine wash cold'}</li>
              <li>• Do not bleach</li>
              <li>• Tumble dry low</li>
              <li>• Iron on low heat</li>
              <li>• Do not dry clean</li>
            </ul>
          </div>
        </div>

        {product.model_info && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Model Info:</span> {product.model_info}
            </p>
          </div>
        )}
      </div>
    ),
    
    reviews: (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Customer Reviews</h3>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            Write a Review
          </button>
        </div>
        
        <div className="flex items-center space-x-4 pb-4 border-b">
          <div className="text-3xl font-bold">{product.average_rating}</div>
          <div>
            <div className="flex mb-1">{renderStars(product.average_rating)}</div>
            <p className="text-sm text-gray-600">Based on {product.total_ratings_count} reviews</p>
          </div>
        </div>

        <div className="space-y-4">
          {[5, 4, 3, 2, 1].map((stars) => (
            <div key={stars} className="flex items-center space-x-3">
              <span className="text-sm w-8">{stars}</span>
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-yellow-400 h-2 rounded-full" 
                  style={{ width: `${Math.random() * 80 + 10}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-600 w-8">
                {Math.floor(Math.random() * 20)}
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-4 pt-4">
          {[1, 2, 3].map((review) => (
            <div key={review} className="border-b pb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <span className="font-medium">Customer {review}</span>
                </div>
                <div className="flex">{renderStars(4 + Math.random())}</div>
              </div>
              <p className="text-gray-600 text-sm">
                Great quality t-shirt! The fit is perfect and the material feels premium. 
                Highly recommended for everyday wear.
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
    
    faq: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">Frequently Asked Questions</h3>
        
        {[
          {
            question: "What is the fit like?",
            answer: `This t-shirt has a ${product.fit} that provides a comfortable and stylish silhouette. Check our size guide for the perfect fit.`
          },
          {
            question: "How should I care for this product?",
            answer: product.washcare || "Machine wash cold with like colors. Do not bleach. Tumble dry low and iron on low heat if needed."
          },
          {
            question: "What is the return policy?",
            answer: "We offer a 30-day return policy for unworn items in original condition with tags attached."
          },
          {
            question: "Is this true to size?",
            answer: "Yes, this item runs true to size. Our model is wearing size M and the fit is as expected. Refer to our size chart for measurements."
          },
          {
            question: "What occasions is this suitable for?",
            answer: `Perfect for ${product.occassion || 'casual wear, everyday activities, and relaxed outings'}.`
          }
        ].map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button className="w-full text-left p-4 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">{faq.question}</h4>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </button>
            <div className="px-4 pb-4">
              <p className="text-gray-600 text-sm">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    ),
    
    shipping: (
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Shipping & Returns</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-3 flex items-center">
              <Truck className="w-5 h-5 mr-2 text-blue-600" />
              Shipping Information
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Free shipping on orders over ₹999</li>
              <li>• Standard delivery: 3-5 business days</li>
              <li>• Express delivery: 1-2 business days</li>
              <li>• Cash on delivery available</li>
              <li>• Order tracking provided</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-3 flex items-center">
              <RefreshCw className="w-5 h-5 mr-2 text-green-600" />
              Return Policy
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 30-day return window</li>
              <li>• Free returns and exchanges</li>
              <li>• Items must be unworn with tags</li>
              <li>• Original packaging required</li>
              <li>• Refund processed in 5-7 days</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-medium mb-2 flex items-center">
            <MessageSquare className="w-5 h-5 mr-2 text-blue-600" />
            Need Help?
          </h4>
          <p className="text-sm text-gray-600 mb-3">
            Our customer service team is here to help with any questions about shipping or returns.
          </p>
          <div className="flex space-x-4 text-sm">
            <span className="text-blue-600 font-medium">📞 1800-XXX-XXXX</span>
            <span className="text-blue-600 font-medium">✉️ support@store.com</span>
          </div>
        </div>
      </div>
    )
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Main Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Image Section */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative group">
            <img
              src={product.images[selectedImageIndex]}
              alt={product.title}
              className="w-full h-96 lg:h-[600px] object-cover rounded-lg shadow-lg"
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Thumbnail Images */}
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => handleImageSelect(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                  selectedImageIndex === index 
                    ? 'border-blue-600' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
            
            {/* Rating */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex">{renderStars(product.average_rating)}</div>
              <span className="text-sm text-gray-600">
                {product.average_rating} ({product.total_ratings_count} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold text-gray-900 mb-6">
              ₹{product.selling_price}
            </div>
          </div>

          {/* Color Selection */}
          {product.colors.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Color: {selectedColor}</h3>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 text-sm border rounded-md transition-colors ${
                      selectedColor === color
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Size: {selectedSize}</h3>
            <div className="grid grid-cols-6 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 text-sm border rounded-md transition-colors ${
                    selectedSize === size
                      ? 'border-blue-600 bg-blue-50 text-blue-600'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center"
              >
                -
              </button>
              <span className="w-12 text-center font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <div className="flex space-x-3">
              <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2">
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-3 border rounded-lg transition-colors ${
                  isWishlisted
                    ? 'border-red-300 bg-red-50 text-red-600'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>
            <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium">
              Buy Now
            </button>
          </div>

          {/* Features */}
          <div className="pt-6 border-t border-gray-200">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="text-sm">
                <Truck className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                <span className="text-gray-600">Free Shipping</span>
              </div>
              <div className="text-sm">
                <RefreshCw className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                <span className="text-gray-600">Easy Returns</span>
              </div>
              <div className="text-sm">
                <MessageSquare className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                <span className="text-gray-600">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-16">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
                  activeTab === tab
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab === 'faq' ? 'FAQ' : tab.replace('_', ' ')}
              </button>
            ))}
          </nav>
        </div>
        <div className="py-8">
          {tabContent[activeTab]}
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Related Products</h2>
          <div className="flex space-x-2">
            <button
              onClick={handleRelatedPrev}
              disabled={relatedStartIndex === 0}
              className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleRelatedNext}
              disabled={relatedStartIndex >= relatedProducts.length - itemsPerView}
              className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts
            .slice(relatedStartIndex, relatedStartIndex + itemsPerView)
            .map((relatedProduct, index) => (
              <div 
                key={index} 
                className="group cursor-pointer"
                onClick={() => onProductClick && onProductClick(relatedProduct)}
              >
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <img
                    src={relatedProduct.images[0]}
                    alt={relatedProduct.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                  {relatedProduct.title}
                </h3>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex">{renderStars(relatedProduct.average_rating)}</div>
                  <span className="text-xs text-gray-500">
                    ({relatedProduct.total_ratings_count})
                  </span>
                </div>
                <p className="text-lg font-bold text-gray-900">₹{relatedProduct.selling_price}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;