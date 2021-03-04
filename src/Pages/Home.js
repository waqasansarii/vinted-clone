import React from 'react'
import subheader from "../assets/subheader.jpeg";
import Product from '../Components/Product'
import './Styles/Home.css'
import UserProfile from '../Components/user_profile/userProfile'
import ItemImgCard from '../Components/itemImgCard/itemImgCard'
import SellerCard from '../Components/sellerCard/sellerCard'
import MemberItems from '../Components/memberitem/member_item'
import CategoryDropDown from '../Components/categoryDropDown/categoryDropDown'
const Home = () => {
    return (
        <React.Fragment>
            <div className="subheader">
                <img src={subheader} alt="Vinted-Subheader" />
                <div className="mb-view-form">
                    <p>Ready to declutter your wardrobe?</p>
                </div>
            </div>

            <div className="d-flex justify-content-between flex-wrap">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            <CategoryDropDown />
            </div>
                {/* <UserProfile /> */}
                {/* <ItemImgCard /> */}
                {/* <SellerCard /> */}
                {/* <MemberItems /> */}
            {/* 
      <Link to="/offer">
        <Product />
      </Link> */}
        </React.Fragment>
    )
}

export default Home;
