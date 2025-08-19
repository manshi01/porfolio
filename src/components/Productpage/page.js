import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductPage({ resData, onProductClick }) {
console.log("resData:", resData?.title);

  const [buttonClick, setButtonClick] = useState(0);

  function handleClick() {
    setButtonClick(buttonClick + 1);
    console.log("Items in cart:", buttonClick + 1);
  }

  const handleProductClick = () => {
    if (onProductClick && resData) {
      onProductClick(resData);
    }
  };

 return (
  
    <div className="col-6 col-md-3 mb-4">
      
      <div
        onClick={handleProductClick}
        style={{
          backgroundColor: "#FFF",
          padding: "16px",
          borderRadius: "8px",
          textAlign: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          height: "100%",
          cursor: "pointer",
          transition: "transform 0.2s ease, box-shadow 0.2s ease"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        }}
      >
        <img
          src={resData?.image}
          alt={resData?.title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "contain",
            marginBottom: "12px",
          }}
        />
        <h5
          style={{
            fontSize: "16px",
            fontWeight: "600",
            color: "#333",
            marginBottom: "8px",
            minHeight: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {resData?.title}
        </h5>
        <p
          style={{
            fontSize: "18px",
            fontWeight: "700",
            color: "#007bff",
            marginBottom: "12px",
          }}
        >
          ${resData?.price}
        </p>
        <button
          className="btn btn-primary btn-sm"
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
          style={{
            fontSize: "14px",
            padding: "8px 16px",
            borderRadius: "4px",
          }}
        >
          Add to Cart ({buttonClick})
        </button>
      </div>
    </div>
  );
}

export default ProductPage;