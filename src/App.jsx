import Image from "next/image";
import ProductPage from "./Components/Productpage/page";
import ProductDetailPage from "./components/ProductDetailPage";
import Header from "./Components/Header/page";
import Carousel from "./Components/Carousel/page";
import Feature from "./Components/Feature/page";
import { useState } from "react";

export default function Home() {
const [selectedProduct, setSelectedProduct] = useState(null);
const [showProductDetail, setShowProductDetail] = useState(false);

const handleProductClick = (product) => {
  setSelectedProduct(product);
  setShowProductDetail(true);
};

const handleBackToProducts = () => {
  setShowProductDetail(false);
  setSelectedProduct(null);
};

const anoterdata='https://dummyjson.com/products/1'

 const Data = fetch('https://dummyjson.com/carts')
  .then(res => res.json())
  .then(console.log);

  // Sample product data (using your existing data structure)
  const sampleData = [
    {
      average_rating: 4.6,
      collar: "Crew",
      color: "['Black']",
      color_variants_count: 9,
      colors: [
        "Pink",
        "White",
        "Navy",
        "Grey",
        "Beige",
        "Maroon",
        "Brown",
        "Off-White",
        "Green",
      ],
      created_at: "2025-03-13T17:39:49",
      fit: "Slim Fit",
      global_sort_score: 58.84,
      handle: "slim-fit-4-way-stretch-black-t-shirt-4mst2683-10",
      images: [
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4_565e7514-56cb-4994-a11a-ef77cb6749ba.jpg?v=1742198861",
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/2_ef157d2b-fcb8-4f07-9f2e-44bcd8a9a478.jpg?v=1742198861",
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/3_87944483-c462-468c-9781-2e884181efb9.jpg?v=1742198861",
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/5_837411c5-f954-41a1-ad48-0ec12fd86b84.jpg?v=1742198861",
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/6_b583b2bf-a95d-4d18-96d6-bed670af32a4.jpg?v=1742198861",
      ],
      material: "Cotton Blend",
      model_info: "Model is wearing size M",
      mrp: 0,
      occassion: "Casual Wear,Street Wear",
      pattern: "Solid",
      preview_image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4_565e7514-56cb-4994-a11a-ef77cb6749ba.jpg?v=1742198861",
      published_at: "2025-04-22T07:34:11",
      selling_price: 799,
      shopify_product_id: 8615680966818,
      shopify_product_type: "T-Shirts",
      short_description: "Crafted from 94% Cotton and 6% Spandex, this slim-fit T-shirt offers a sleek silhouette and exceptional comfort. The high-quality cotton blend ensures breathability and durability, making it a versatile addition to your wardrobe.",
      sleeves: "Half Sleeve",
      sort_rank: 1,
      status: "active",
      style: null,
      title: "Slim Fit 4-Way Stretch Black T-Shirt",
      total_ratings_count: 55,
      updated_at: "2025-07-04T01:28:17",
      videos: null,
      washcare: null,
    },
    {
      average_rating: 4.6,
      collar: "Crew",
      color: "['White']",
      colors: ["Pink", "Navy", "Grey", "Beige"],
      fit: "Slim Fit",
      images: [
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MST2683-01_1_db4cfedb-3098-4a67-a17a-ecbad021cd6c.jpg?v=1742450964",
      ],
      material: "Cotton Blend",
      selling_price: 799,
      title: "Slim Fit 4-Way Stretch White T-shirt",
      total_ratings_count: 45,
      pattern: "Plain",
      sleeves: "Half Sleeve",
      short_description: "Everyone needs a slim fit crew tee for their wardrobe rotation.",
      shopify_product_id: 8615680966819,
    },
    {
      average_rating: 4.4,
      collar: "Crew",
      color: "['Grey']",
      colors: ["Pink", "White", "Navy", "Beige"],
      fit: "Slim Fit",
      images: [
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4mst2683-03_4.jpg?v=1741887506",
      ],
      material: "Cotton Blend",
      selling_price: 799,
      title: "Slim Fit 4-Way Stretch Light Grey T-Shirt",
      total_ratings_count: 21,
      pattern: "Solid",
      sleeves: "Half Sleeve",
      short_description: "Crafted from a premium blend of 94% cotton and 6% spandex.",
      shopify_product_id: 8615680966820,
    },
    {
      average_rating: 4.6,
      collar: "Crew",
      color: "['Red']",
      colors: ["Black", "Pink"],
      fit: "Oversized Fit",
      images: [
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/b7f04c770aa14da70cd0aa99ec56d34b.jpg?v=1735046156",
      ],
      material: "Cotton Blend",
      selling_price: 799,
      title: "Core Lab Red Oversized Fit T-Shirt",
      total_ratings_count: 121,
      pattern: "Plain",
      sleeves: "Half Sleeve",
      short_description: "Snitch Core Lab is inspired by the clean, minimalist aesthetic.",
      shopify_product_id: 8615680966821,
    },
    {
      average_rating: 0,
      collar: "Polo",
      color: "['White']",
      colors: [],
      fit: "Regular Fit",
      images: [
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MST2556-01_3_d29abc46-d395-4fde-ba1e-6a0c78bb712b.jpg?v=1751487808",
      ],
      material: "Cotton",
      selling_price: 1499,
      title: "Regular Fit 100% Cotton Zipper Polo T-Shirt",
      total_ratings_count: 0,
      pattern: "Colourblocked",
      sleeves: "Half Sleeve",
      short_description: "Bold geometric patterns in vibrant hues redefine casual style.",
      shopify_product_id: 8615680966822,
    },
  ];

  // If showing product detail, render the detail page
  if (showProductDetail && selectedProduct) {
    // Create related products (exclude the current product)
    const relatedProducts = sampleData
      .filter(product => product.shopify_product_id !== selectedProduct.shopify_product_id)
      .slice(0, 4);

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Back button */}
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={handleBackToProducts}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              padding: '8px 0'
            }}
          >
            <span>←</span>
            <span>Back to Products</span>
          </button>
        </div>
        <ProductDetailPage 
          product={selectedProduct} 
          relatedProducts={relatedProducts}
          onProductClick={handleProductClick}
        />
      </div>
    );
  }

  // Default product listing view
  return (
    <>
      <Header />
      <Carousel />
      <Feature />
      <div className="container mt-4">
        <div className="row">
          {sampleData.map((product, index) => (
            <ProductPage 
              key={index} 
              resData={product} 
              onProductClick={handleProductClick}
            />
          ))}
        </div>
      </div>
    </>
  );
}