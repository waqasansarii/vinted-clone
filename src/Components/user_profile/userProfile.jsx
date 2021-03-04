import React from 'react'
import img from '../../assets/shoe_1.jpg'
import './style.css'



const UserProfile = () => {
    return(
        <div className='user_profile_container'>
            <div className='main_userProfile_div'>
                <div className='profile_img_div'>
                   <img 
                   className='profile_img'
                   src={img}
                    alt="user"/>
                </div>
                <div className='profile_name_div'>
                    <p className='user_name'>seller name</p>
                    <p className='more_dots'>...</p>
                </div>
                <div className="review_div">
                    <p>xxxxxxxx</p>
                    <p>43 review</p>
                    <p>{'>'}</p>
                </div>
                <div className="verified_div">

                </div>
                <div className="location_div">

                </div>

            </div>
        </div>
    )
}

export default UserProfile