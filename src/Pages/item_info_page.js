import React from 'react'
import './Styles/item.css'
import ItemImgCard from '../Components/itemImgCard/itemImgCard'
import SellerCard from '../Components/sellerCard/sellerCard'
import MemberItems from '../Components/memberitem/member_item'
import Product from '../Components/Product'


const ItemInfoPage = () => {
    return (
        <div className='item_info_container'>
            <ItemImgCard />

            <div className='seller_card'>
                <div className='shopAndCard_div'>
                    <MemberItems />
                    <div className='products_item_page'>

                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
                <div>

                    <SellerCard />
                </div>


            </div>
        </div>
    )
}
export default ItemInfoPage