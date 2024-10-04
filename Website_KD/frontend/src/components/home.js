import React from 'react';
import { Link } from 'react-router-dom';
import PromotionBanner from './user/PromotionBanner';
import '../css/home.css'; // Thêm CSS cho trang chủ
import HomeVideo from './video'; // Import component video
import ProductList from './user/productList';
import UserGroups from './user/usergroups';


const Home = ({ products }) => {
  const promoMessage = "Khuyến mãi: Giảm 20% cho đơn hàng đầu tiên!";
  
  return (
    <div className="home-container">
      {/* <PromotionBanner message={promoMessage} /> */}


      {/* Chèn video vào trang chính */}
      <div className="video-container">
        <HomeVideo />
      </div>
      <h3>New Arrivals</h3>
      {/* Danh sách sản phẩm */}
      <div className="productList_container">
        <ProductList products={products} />
      </div>

      <div className="home">
      <h1>Welcome to Our Store</h1>
      <UserGroups /> {/* Sử dụng component UserGroups */}
    </div>
    </div>
  );
};

export default Home;
