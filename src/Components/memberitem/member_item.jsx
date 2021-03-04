import React from 'react'
import './style.css'



const MemberItems = () => {
    return (
        <div className='member_item_container'>
            <div>
                <div>
                    <p >Member's item (50)</p>
                </div><hr />
                <div className='shop_btn_div'>
                    <div>

                        <p>Shop bundles</p>
                        <p className='save_para'>Save on shipping</p>
                    </div>
                    <button className='shop_btn'>Shop</button>
                </div>
            </div>
        </div>
    )
}

export default MemberItems