import React from 'react'
import shoe from '../../assets/shoe_1.jpg'
import { FaUsps } from 'react-icons/fa'
import { FiMoreVertical } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'
import SellerCard from '../sellerCard/sellerCard'
import './style.css'



const ItemImgCard = () => {
    return (
        <div>
            <div className='main_item_div'>
                <div className='item_img_div'>
                    <div>
                        <img className='item_img1'
                            src={shoe}
                            alt="" />
                    </div>
                    <div className='item_img_div2'>

                        <img className='item_img'
                            src={shoe}
                            alt="" />
                        <img className='item_img'
                            src={shoe}
                            alt="" />
                    </div>
                </div>
                <div className='item_details_div'>
                    <div className='price_and_size_div'>

                        <div className='main_price_div'>

                            <div className='price_div'>
                                <p className='price_item'>$45.00</p>
                                <div className='item_privacy_div'>
                                    <p className='privacy_icon'>icon</p>
                                    <div className='privacy_para_div'>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
                                        dfdsfdsfsdfdsfdsf
                            </p>
                                        <p className='privacy_link'>refun privacy</p>
                                    </div>

                                </div>
                            </div>
                            <div className='usps_div'>
                                <div className='usps_div'>
                                    <FaUsps className='usps_icon' />
                                    <span>USPS</span>
                                </div>
                                <div>
                                    <p>$3.69</p>
                                </div>
                            </div>
                        </div>
                        <div className='item_size_info_div'>
                            <div className='item_tags_div'>
                                <ul>
                                    <li>Brand</li>
                                    <li>Size</li>
                                    <li>CONDITION</li>
                                    <li>COLOR</li>
                                    <li>LOCATION</li>
                                    <li>PAYMENT OPTIONS</li>
                                    <li>VIEWS</li>
                                    <li>UPLOADED</li>

                                </ul>
                            </div>
                            <div className='item_tags_value_div'>
                                <ul>
                                    <li>Pink</li>
                                    <li>S/6</li>
                                    <li>Very good</li>
                                    <li>grey</li>
                                    <li>STOCKTON, CA, UNITED STATES</li>
                                    <li>CREDIT CARD</li>
                                    <li>5</li>
                                    <li> 5 HOURS AGO</li>

                                </ul>
                            </div>
                            <div className='help_icon_div'>
                                <FiMoreVertical />
                                <div>
                                    <FiMoreVertical />
                                </div>
                                <FiMoreVertical />


                            </div>

                        </div>
                    </div>
                    <div>

                        <div className='item_description_div'>
                            <p className='item_name'>Vs pink logo leggings</p>
                            <p className='item_description_para'>in great condition vs pink logo yoga pants size small</p>
                        </div>

                        <div className='seller_contact_btns'>
                            <button className='msg_btn'>Message seller</button>
                            <button className='btn_buy'>Buy now</button>
                            <button className='favorite_btn'><AiOutlineHeart /> Add to favorities</button>
                        </div>
                    </div>

                </div>
            </div>
            {/* <SellerCard /> */}
        </div>
    )
}

export default ItemImgCard