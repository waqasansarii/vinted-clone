import React, { useState } from 'react'
import { FcExpand } from 'react-icons/fc'
import { RiTShirt2Line } from 'react-icons/ri'
import { FaRegSmile, FaSprayCan } from 'react-icons/fa'
import { GiAmpleDress } from 'react-icons/gi'
import { BiArrowBack } from 'react-icons/bi'
import { TiThSmall } from 'react-icons/ti'
import { GiRunningShoe, GiPerfumeBottle, GiWatch } from 'react-icons/gi'
import { MdToys } from 'react-icons/md'
import './style.css'



const CategoryDropDownMenu = ({ openDropDown, valueTwo, handleShowWomen, women, handleBack, handleBacktwo, value, handleStepTwo, stepThree }) => {

    // let [open, setOpen] = useState(false)
    let [category, setCategory] = useState(false)

    const handleOpen = () => {
        // setOpen(!open)
    }
    const handleShow = (e) => {
        // if(open){
        //     setOpen(!open)
        // }
        // setCategory(!category)

    }
    // const handleBack = () => {
    //     // setOpen(!open)
    //     // setCategory(!category)
    // }

    return (
        <div className='dropDown_menu_container'>
            <div>

                {openDropDown ?
                    <div className='catalog_list_div'>
                        <ul className='catalog_list_ul'>
                            <li onClick={() => handleShowWomen('women')}>
                                <p className='icon_name'><GiAmpleDress className='menu_icons' /> Women</p>
                                <p className='more_icon'>{'>'}</p>
                            </li>
                            <li onClick={() => handleShowWomen('men')}>
                                <p className='icon_name'><RiTShirt2Line className='menu_icons' /> Men</p>
                                <p className='more_icon'>{'>'}</p>
                            </li>
                            <li onClick={() => handleShowWomen('kids')}>
                                <p className='icon_name'><FaRegSmile className='menu_icons' /> Kids</p>
                                <p className='more_icon'>{'>'}</p>

                            </li>
                        </ul>
                    </div>
                    :
                    null
                }
                {women ?
                    <div className='catalog_list_div'>
                        <ul className='catalog_list_ul'>
                            <li onClick={handleBack}>
                                <p className='back'><BiArrowBack className='back_icon' /></p>
                                <p className='title_drop_down'>{value}</p>
                            </li>
                            <li>
                                <p className='icon_name'><TiThSmall className='menu_icons' /> All</p>
                                {/* <p className='more_icon'>{'>'}</p> */}
                                <input className='checkBox' type="checkbox" defaultChecked name="" id="" />
                            </li>
                            {value === 'women' ?
                                <>
                                    <li onClick={() => handleStepTwo('clothes')}>
                                        <p className='icon_name'><GiAmpleDress className='menu_icons' /> Clothes</p>
                                        <p className='more_icon'>{'>'}</p>
                                    </li>
                                    <li onClick={() => handleStepTwo('shoes')}>
                                        <p className='icon_name'><GiRunningShoe className='menu_icons' /> Shoes</p>
                                        <p className='more_icon'>{'>'}</p>
                                    </li>
                                    <li onClick={() => handleStepTwo('bags')}>
                                        <p className='icon_name'><GiRunningShoe className='menu_icons' /> Bags</p>
                                        <p className='more_icon'>{'>'}</p>
                                    </li>
                                    <li onClick={() => handleStepTwo('Accessories')}>
                                        <p className='icon_name'><GiPerfumeBottle className='menu_icons' /> Accessories</p>
                                        <p className='more_icon'>{'>'}</p>
                                    </li>
                                    <li onClick={() => handleStepTwo('Beauty')}>
                                        <p className='icon_name'><FaSprayCan className='menu_icons' /> Beauty</p>
                                        <p className='more_icon'>{'>'}</p>
                                    </li>
                                </>
                                : value === 'men' ?
                                    <>
                                        <li onClick={() => handleStepTwo('clothes')}>
                                            <p className='icon_name'><GiAmpleDress className='menu_icons' /> Clothes</p>
                                            <p className='more_icon'>{'>'}</p>
                                        </li>
                                        <li onClick={() => handleStepTwo('shoes')}>
                                            <p className='icon_name'><GiRunningShoe className='menu_icons' /> Shoes</p>
                                            <p className='more_icon'>{'>'}</p>
                                        </li>
                                        <li onClick={() => handleStepTwo('Grooming')}>
                                            <p className='icon_name'><GiRunningShoe className='menu_icons' /> Grooming</p>
                                            <p className='more_icon'>{'>'}</p>
                                        </li>
                                        <li onClick={() => handleStepTwo('Grooming')}>
                                            <p className='icon_name'><GiWatch className='menu_icons' /> Accessories</p>
                                            <p className='more_icon'>{'>'}</p>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li onClick={() => handleStepTwo('Girls Clothing')}>
                                            <p className='icon_name'><GiAmpleDress className='menu_icons' /> Girls Clothing</p>
                                            <p className='more_icon'>{'>'}</p>
                                        </li>
                                        <li onClick={() => handleStepTwo('Boys Clothing')}>
                                            <p className='icon_name'><RiTShirt2Line className='menu_icons' /> Boys Clothing</p>
                                            <p className='more_icon'>{'>'}</p>
                                        </li>
                                        <li onClick={() => handleStepTwo('Toys')}>
                                            <p className='icon_name'><MdToys className='menu_icons' /> Toys</p>
                                            <p className='more_icon'>{'>'}</p>
                                        </li>
                                    </>
                            }
                        </ul>
                    </div>
                    :
                    null
                }
                {stepThree ?
                    <div className='catalog_list_div'>
                        <ul className='catalog_list_ul'>
                            <li onClick={handleBacktwo}>
                                <p className='back'><BiArrowBack className='back_icon' /></p>
                                <p className='title_drop_down'>{valueTwo}</p>
                            </li>
                            <li>
                                <p className='icon_name'> All</p>
                                <input className='checkBox' type="checkbox" defaultChecked name="" id="" />
                            </li>
                            {valueTwo === 'clothes' ?
                                <>
                                    <li>
                                        <p className='icon_name'>Coats & jackets</p>
                                        <p className='more_icon'>{'>'}</p>
                                    </li>
                                    <li >
                                        <p className='icon_name'>sweaters</p>
                                        <p className='more_icon'>{'>'}</p>
                                    </li>
                                    <li >
                                        <p className='icon_name'>Jeans</p>
                                        <p className='more_icon'>{'>'}</p>
                                    </li>
                                </>
                                : valueTwo === 'bags' ?
                                    <>
                                        
                                        <li>
                                            <p className='icon_name'> Handbags</p>
                                            <input className='checkBox' type="checkbox"  name="" id="" />
                                        </li>
                                        <li>
                                            <p className='icon_name'> Backpacks</p>
                                            <input className='checkBox' type="checkbox"  name="" id="" />
                                        </li>
                                        <li>
                                            <p className='icon_name'> Tote Bags</p>
                                            <input className='checkBox' type="checkbox" name="" id="" />
                                        </li>
                                        <li>
                                            <p className='icon_name'> Clutches</p>
                                            <input className='checkBox' type="checkbox"  name="" id="" />
                                        </li>
                                        <li>
                                            <p className='icon_name'> Makeup bags</p>
                                            <input className='checkBox' type="checkbox" name="" id="" />
                                        </li>
                                        <li  id='fanny' >
                                            <p className='icon_name'> Fanny Packs</p>
                                            <input className='checkBox' type="checkbox"  name="fanny" id="fanny" />
                                        </li>
                                    </>
                                    : null

                            }
                            

                        </ul>
                    </div>
                    :
                    null
                }
            </div>
        </div>
    )
}

export default CategoryDropDownMenu