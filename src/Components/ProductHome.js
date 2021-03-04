import React from 'react'
import '../Components/Styles/PoductHome.css'
import MainDropdown from '../Components/DropDowns/MainDropdown'
import Sider from '../Components/DropDowns/MainDropdown'
const ProductHome = () => {
    return (
        <React.Fragment>
            <div className="product-home">
                <div className="ph-box">
                    <div className="ph-breadcrumb ps-5">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Library</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="ps-5 ph-text">
                        <h3>Women</h3>
                    </div>
                    <hr />
                    <Sider />
                </div>

            </div>
        </React.Fragment>
    )
}

export default ProductHome
