import React, { useState } from 'react'
import {FcExpand} from 'react-icons/fc'
import './style.css'
import CategoryDropDownMenu from './dropdown_menu'



const CategoryDropDown = () => {

    let [open, setOpen] = useState(false)
    let [category, setCategory] = useState(false)
    let [subCategory, setSubCategory] = useState(false)
    let [value ,setValue] = useState('')
    let [valueTwo ,setValueTwo] = useState('')

    const handleOpen = () => {
        setOpen(!open)
    }
    const handleShowWomen = (e)=> {
        setValue(e)
        if(open){
            setOpen(!open)
        }
        setCategory(!category)

    }
    const handleBack =() =>{
        setOpen(!open)
        setCategory(!category)
    }
    const handleStepTwo = e =>{
        console.log(e)
        setValueTwo(e)
        if(category){
            setCategory(!category)
        }
        setSubCategory(!subCategory)
    }
    const handleBacktwo = ()=>{
        setSubCategory(!subCategory)
        setCategory(!category)
    }

    return (
        <div className='catalog_drop_down_container'>
            <div>
                <div>
                    <p onClick={handleOpen} className='catalog_tag'>Catalog <FcExpand /></p>
                </div>
                 <CategoryDropDownMenu
                  openDropDown={open}
                   women={category} 
                   handleShowWomen={handleShowWomen}
                   handleBack={handleBack}
                   value={value}
                   valueTwo={valueTwo}
                   handleStepTwo={handleStepTwo}
                   stepThree={subCategory}
                   handleBacktwo={handleBacktwo}
                   />
            </div>
        </div>
    )
}

export default CategoryDropDown