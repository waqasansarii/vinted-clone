import React from 'react'
import './style.css'
import check from '../../assets/checked.png'
import { AiFillStar } from 'react-icons/ai'
import {BiMap,BiTime} from 'react-icons/bi'


const SellerCard = () => {
    return (
        <div className='sellercard_container'>
            <div className='seller_card_div'>
                <div className='img_review_div'>

                    <div >
                        <img className='seler_img' src={check} alt="" />
                    </div>
                    <div className='name_and_review_div'>
                        <p>Seller Name</p>
                        <div className='review_div'>
                            <AiFillStar className='star_icon' />
                            <AiFillStar className='star_icon' />
                            <AiFillStar className='star_icon' />
                            <AiFillStar  className='star_icon'/>
                            <span>4</span>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='greater_than'>{'>'}</p>
                </div>
            </div> <hr/>
            <div className='location_div'>
                <div className='location'>
                    <BiMap className='location_icon' />
                    <p className='location_para'>Stockton, CA, United States</p>
                </div>
                <div className='last_seen'>
                 <BiTime className='location_icon'/>
                 <p className='location_para'>Last seen25 minutes ag</p>
                </div>
            </div>
        </div>
    )
}

export default SellerCard