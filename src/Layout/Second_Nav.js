import React from "react";
import Tabs from "../Components/Tabs/Tabs";
import Tab from "../Components/Tabs/Tab";
import Tab_Pan from "../Components/Tabs/Tab_Pan";
import Tab_DropDown from "../Components/Tabs/Tab_DropDown";
import { CgMenuGridO } from "react-icons/cg";
import {
  GiAmpleDress,
  GiRunningShoe,
  GiBabyBottle,
  GiSchoolBag,
} from "react-icons/gi";
import { BsFillBagFill, BsThreeDots } from "react-icons/bs";
import { SiSmartthings } from "react-icons/si";
import {
  GiPerfumeBottle,
  GiPirateCoat,
  GiTrojanHorse,
  GiRockingChair,
} from "react-icons/gi";
import { FiWatch } from "react-icons/fi";
import { MdStyle, MdToys } from "react-icons/md";
import { FaBabyCarriage } from "react-icons/fa";
import { BiBed } from "react-icons/bi";

function Second_Nav() {
  let items = {
    dropdown_1: {
      main: [
        { name: "see all", link: "", icon: <CgMenuGridO /> },
        { name: "Clothesl", link: "", press: "sec_1", icon: <GiAmpleDress /> },
        { name: "shoes", link: "", press: "sec_2", icon: <GiRunningShoe /> },
        { name: "bags", link: "", press: "sec_3", icon: <BsFillBagFill /> },
        {
          name: "accessories",
          press: "sec_4",
          link: "",
          icon: <SiSmartthings />,
        },
        { name: "beauty", link: "", press: "sec_5", icon: <GiPerfumeBottle /> },
      ],
      sec_1: {
        item_1: [
          { name: "see all", link: "", icon: "" },
          { name: "jumpers & jewellers", link: "", icon: "" },
          { name: "dresses", link: "", icon: "" },
          { name: "tops & T-Shirts", link: "", icon: "" },
          { name: "Trouser & legging", link: "", icon: "" },
          { name: "jumpsuits & playsuits", link: "", icon: "" },
          { name: "lengeri & nightware", link: "", icon: "" },
          { name: "active ware", link: "", icon: "" },
          { name: "other clothing", link: "", icon: "" },
        ],
        item_2: [
          { name: "see all", link: "", icon: "" },
          { name: "jumpers & jewellers", link: "", icon: "" },
          { name: "dresses", link: "", icon: "" },
          { name: "tops & T-Shirts", link: "", icon: "" },
          { name: "Trouser & legging", link: "", icon: "" },
          { name: "jumpsuits & playsuits", link: "", icon: "" },
          { name: "lengeri & nightware", link: "", icon: "" },
          { name: "active ware", link: "", icon: "" },
          { name: "other clothing", link: "", icon: "" },
        ],
      },
      sec_2: {
        item_1: [
          { name: "see all", link: "", icon: "" },
          { name: "heels", link: "", icon: "" },
          { name: "oxford & loafers", link: "", icon: "" },
          { name: "sandals", link: "", icon: "" },
          { name: "flip-flops", link: "", icon: "" },
          { name: "other shoes", link: "", icon: "" },
        ],
        item_2: [
          { name: "boots", link: "", icon: "" },
          { name: "flats", link: "", icon: "" },
          { name: "ankle boots", link: "", icon: "" },
          { name: "sports shoes", link: "", icon: "" },
          { name: "slippers", link: "", icon: "" },
        ],
      },
      sec_3: {
        item_1: [
          { name: "see all", link: "", icon: "" },
          { name: "shoulders bags", link: "", icon: "" },
          { name: "tote bags", link: "", icon: "" },
          { name: "purses and wallets", link: "", icon: "" },
          { name: "stachles", link: "", icon: "" },
          { name: "embroided bags", link: "", icon: "" },
          { name: "luggage & suitcases", link: "", icon: "" },
        ],
        item_2: [
          { name: "handbagsl", link: "", icon: "" },
          { name: "backpacks", link: "", icon: "" },
          { name: "clutches", link: "", icon: "" },
          { name: "make-up bags", link: "", icon: "" },
          { name: "bum bags", link: "", icon: "" },
          { name: "holdalls", link: "", icon: "" },
          { name: "other bags", link: "", icon: "" },
        ],
      },
      sec_4: {
        item_1: [
          { name: "see all", link: "", icon: "" },
          { name: "watches", link: "", icon: "" },
          { name: "sunglasses", link: "", icon: "" },
          { name: "gloves", link: "", icon: "" },
          { name: "hair accessories", link: "", icon: "" },
          { name: "umbrellas", link: "", icon: "" },
          { name: "other accessories", link: "", icon: "" },
        ],
        item_2: [
          { name: "jewellery", link: "", icon: "" },
          { name: "belts", link: "", icon: "" },
          { name: "scarfs & shawls", link: "", icon: "" },
          { name: "hats & caps", link: "", icon: "" },
          { name: "tech accessories", link: "", icon: "" },
          { name: "keyrings", link: "", icon: "" },
        ],
      },
      sec_5: {
        item_1: [
          { name: "see all", link: "", icon: "" },
          { name: "perfume", link: "", icon: "" },
          { name: "beauty tools", link: "", icon: "" },
          { name: "nail care", link: "", icon: "" },
          { name: "hair care", link: "", icon: "" },
        ],
        item_2: [
          { name: "make-up", link: "", icon: "" },
          { name: "face care", link: "", icon: "" },
          { name: "hand care", link: "", icon: "" },
          { name: "body care", link: "", icon: "" },
          { name: "other beauty items", link: "", icon: "" },
        ],
      },
    },
    dropdown_2: {
      main: [
        { name: "see all", link: "", icon: <CgMenuGridO /> },
        { name: "Clothes", link: "", press: "sec_1", icon: <GiPirateCoat /> },
        { name: "shoes", link: "", press: "sec_2", icon: <GiRunningShoe /> },
        { name: "Accessories", link: "", press: "sec_3", icon: <FiWatch /> },
        { name: "Grooming", link: "", press: "sec_4", icon: <MdStyle /> },
      ],

      sec_1: {
        item_1: [
          { name: "see all", link: "", icon: "" },
          { name: "Coats & jackets", link: "", icon: "" },
          { name: "suits & blazers", link: "", icon: "" },
          { name: "tops & T-Shirts", link: "", icon: "" },
          { name: "Trousers", link: "", icon: "" },
          { name: "Stock & underware", link: "", icon: "" },
          { name: "activewear", link: "", icon: "" },
          { name: "active ware", link: "", icon: "" },
          { name: "other men's clothing", link: "", icon: "" },
        ],
        item_2: [
          { name: "jeans", link: "", icon: "" },
          { name: "Top & t-shirts", link: "", icon: "" },
          { name: "jumpers & sweaters", link: "", icon: "" },
          { name: "shorts", link: "", icon: "" },
          { name: "swimwear", link: "", icon: "" },
          { name: "customers & special outfits", link: "", icon: "" },
        ],
      },
      sec_2: {
        item_1: [
          { name: "see all", link: "", icon: "" },
          { name: "sleepers & flip-flops", link: "", icon: "" },
          { name: "convers & sneaekers", link: "", icon: "" },
          { name: "sandals", link: "", icon: "" },
          { name: "other shoe", link: "", icon: "" },
        ],
        item_2: [
          { name: "oxford and loafers", link: "", icon: "" },
          { name: "formal shoes", link: "", icon: "" },
          { name: "sports shoes", link: "", icon: "" },
          { name: "boots", link: "", icon: "" },
        ],
      },
      sec_3: {
        item_1: [
          { name: "see all", link: "", icon: "" },
          { name: "bags & backpacks", link: "", icon: "" },
          { name: "belts", link: "", icon: "" },
          { name: "sunglasses", link: "", icon: "" },
          { name: "scarves & shawls", link: "", icon: "" },
          { name: "other", link: "", icon: "" },
        ],
        item_2: [
          { name: "ties & pocket squares ", link: "", icon: "" },
          { name: "jewellery", link: "", icon: "" },
          { name: "watches", link: "", icon: "" },
          { name: "hats & caps", link: "", icon: "" },
          { name: "gloves", link: "", icon: "" },
        ],
      },
      sec_4: {
        item_1: [
          { name: "see all", link: "", icon: "" },
          { name: "tools & accessories", link: "", icon: "" },
          { name: "body care", link: "", icon: "" },
          { name: "aftershaves & colongne", link: "", icon: "" },
          { name: "grooming kits", link: "", icon: "" },
        ],
        item_2: [
          { name: "face care ", link: "", icon: "" },
          { name: "hair care", link: "", icon: "" },
          { name: "hand & nail care", link: "", icon: "" },
          { name: "make-up", link: "", icon: "" },
          { name: "other grooming items", link: "", icon: "" },
        ],
      },
    },
    dropdown_3: {
      main: [
        { name: "see all", link: "", icon: <CgMenuGridO /> },
        {
          press: "sec_1",
          name: "Girls's Clotheing",
          link: "",
          icon: <GiAmpleDress />,
        },
        {
          press: "sec_2",
          name: "Boy's Clotheing",
          link: "",
          icon: <GiPirateCoat />,
        },
        { press: "sec_3", name: "Toys & Games", link: "", icon: <MdToys /> },
        { press: "sec_4", name: "Baby Care", link: "", icon: <GiBabyBottle /> },
        { press: "sec_5", name: "Buggies", link: "", icon: <FaBabyCarriage /> },
        {
          press: "sec_6",
          name: "Ride-on-toys",
          link: "",
          icon: <GiTrojanHorse />,
        },
        {
          press: "sec_7",
          name: "Car Seats And Chair ",
          link: "",
          icon: <GiRockingChair />,
        },
        { press: "sec_8", name: "Kids Furniture  ", link: "", icon: <BiBed /> },
        {
          press: "sec_9",
          name: "School supplies ",
          link: "",
          icon: <GiSchoolBag />,
        },
        {
          name: "Other Kid's Items ",
          link: "",
          icon: <BsThreeDots />,
        },
      ],

      sec_1: {
        item_1: [
          { name: "see all", link: "", icon: "" },
          { name: "shoes", link: "", icon: "" },
          { name: "jumpers & hoodies", link: "", icon: "" },
          { name: "dresses", link: "", icon: "" },
          { name: "Trousers & shorts", link: "", icon: "" },
          { name: "accessories", link: "", icon: "" },
          { name: "underwear & socks", link: "", icon: "" },
          { name: "sportswear", link: "", icon: "" },
          { name: "clothing for twins", link: "", icon: "" },
          { name: "formal wear & specials occasions", link: "", icon: "" },
        ],
        item_2: [
          { name: "baby clothing ", link: "", icon: "" },
          { name: "coats & jackets", link: "", icon: "" },
          { name: "tops & t-shirts", link: "", icon: "" },
          { name: "skirts", link: "", icon: "" },
          { name: "bags & backpacks", link: "", icon: "" },
          { name: "swimwear", link: "", icon: "" },
          { name: "sleepwear", link: "", icon: "" },
          { name: "clothing bundels", link: "", icon: "" },
          { name: "fancy dresess & costumes", link: "", icon: "" },
          { name: "other girls clothing", link: "", icon: "" },
        ],
      },
      sec_2: {
        item_1: [
          { name: "see all", link: "", icon: "" },
          { name: "shoes", link: "", icon: "" },
          { name: "jumpers & hoodies", link: "", icon: "" },
          { name: "Trousers & shorts", link: "", icon: "" },
          { name: "accessories", link: "", icon: "" },
          { name: "underwear & socks", link: "", icon: "" },
          { name: "sportswear", link: "", icon: "" },
          { name: "clothing for twins", link: "", icon: "" },
          { name: "formal wear & specials occasions", link: "", icon: "" },
        ],
        item_2: [
          { name: "baby clothing ", link: "", icon: "" },
          { name: "coats & jackets", link: "", icon: "" },
          { name: "tops & t-shirts", link: "", icon: "" },
          { name: "bags & backpacks", link: "", icon: "" },
          { name: "swimwear", link: "", icon: "" },
          { name: "sleepwear", link: "", icon: "" },
          { name: "clothing bundels", link: "", icon: "" },
          { name: "fancy dresess & costumes", link: "", icon: "" },
          { name: "other girls clothing", link: "", icon: "" },
        ],
      },
      sec_3: {
        item_1: [
          { name: "see all", link: "", icon: "" },
          { name: "jigsaws & puzzels", link: "", icon: "" },
          { name: "gaming consoles", link: "", icon: "" },
        ],
        item_2: [
          { name: "games ", link: "", icon: "" },
          { name: "toys", link: "", icon: "" },
        ],
      },
      sec_4: {
        item_1: [
          { name: "see all", link: "", icon: "" },
          { name: "nursing & feeding", link: "", icon: "" },
          { name: "swimming equipment", link: "", icon: "" },
          { name: "childcare & tech", link: "", icon: "" },
          { name: "bibes", link: "", icon: "" },
          { name: "childproofing & safety", link: "", icon: "" },
        ],
        item_2: [
          { name: "sleep accessories ", link: "", icon: "" },
          { name: "baby carriers & wraps", link: "", icon: "" },
          { name: "nappies & skincare", link: "", icon: "" },
          { name: "bouncers & swings", link: "", icon: "" },
          { name: "potties", link: "", icon: "" },
        ],
      },
      sec_5: {
        item_1: [
          { name: "running buggies", link: "", icon: "" },
          { name: "buggies for twins", link: "", icon: "" },
        ],
        item_2: [
          { name: "umbrella buggies", link: "", icon: "" },
          { name: "universal buggies", link: "", icon: "" },
          { name: "accessories for buggies", link: "", icon: "" },
        ],
      },
      sec_6: {
        item_1: [
          { name: "push & pull toys", link: "", icon: "" },
          { name: "scooters", link: "", icon: "" },
          { name: "bicycles", link: "", icon: "" },
          { name: "snowboards", link: "", icon: "" },
        ],
        item_2: [
          { name: "baby walkers", link: "", icon: "" },
          { name: "kid's bike", link: "", icon: "" },
          { name: "tricycles", link: "", icon: "" },
          { name: "outdoor vehicals", link: "", icon: "" },
          { name: "roller skates & ice skates", link: "", icon: "" },
        ],
      },
      sec_7: {
        item_1: [
          { name: "push & pull toys", link: "", icon: "" },
          { name: "feeding chairs", link: "", icon: "" },
        ],
        item_2: [{ name: "car chairs", link: "", icon: "" }],
      },
      sec_8: {
        item_1: [
          { name: "cots ", link: "", icon: "" },
          { name: "matresses", link: "", icon: "" },
          { name: "playpens", link: "", icon: "" },
          { name: "other kids furniture", link: "", icon: "" },
        ],
        item_2: [
          { name: "cribes & cradles", link: "", icon: "" },
          { name: "toddler beds", link: "", icon: "" },
          { name: "playmates", link: "", icon: "" },
          { name: "changing pads & tables", link: "", icon: "" },
        ],
      },
      sec_9: {
        item_1: [
          { name: "literature for parents ", link: "", icon: "" },
          { name: "school bags", link: "", icon: "" },
        ],
        item_2: [
          { name: "children's books", link: "", icon: "" },
          { name: "school books", link: "", icon: "" },
          { name: "school supplies", link: "", icon: "" },
        ],
      },
    },
  };   
  return (
    <div className="second_nav">
      <Tabs defaultTab={""}>
        <div className="tab-container">
          <Tab label="Women" tabIndex={1} />
          <Tab_Pan tabIndex={1}>
            <Tab_DropDown
              padding="0.8rem 0 0.8rem 1rem"
              sec2and3_padding="0.8rem 0 0.8rem 1rem"
              iconSize="1.5rem"
              items={items.dropdown_1}
            />
          </Tab_Pan>
        </div>
        <div className="tab-container">
          <Tab label="Men" tabIndex={2} />
          <Tab_Pan tabIndex={2}>
            <Tab_DropDown
              padding="0.6rem 0 0.6rem 1rem"
              sec2and3_padding="0.6rem 0 0.6rem 1rem"
              iconSize="1.3rem"
              items={items.dropdown_2}
            />
          </Tab_Pan>
        </div>
        <div className="tab-container">
          <Tab label="Kids" tabIndex={3} />
          <Tab_Pan tabIndex={3}>
            <Tab_DropDown
              sec2and3_padding="0.6rem 0 0.6rem 1rem"
              padding="0.3rem 0 0.3rem 1rem"
              iconSize="1.3rem"
              items={items.dropdown_3}
            />
          </Tab_Pan>
        </div>

        <div className="tab-container">
          <Tab label="About" tabIndex={4} />
          <Tab_Pan tabIndex={4}>
            <div className="Tab_Pan_About">
              <table className="Tab_Pan_About_table">
                <thead>
                  <tr style={{ height: "50px" }}>
                    <th className="Tab_Pan_About_table_th">Discover</th>
                    <th className="Tab_Pan_About_table_th">Policies</th>
                    <th className="Tab_Pan_About_table_th">Communtity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="Tab_Pan_About_table_td">How it works</td>
                    <td className="Tab_Pan_About_table_td">trust and safety</td>
                    <td className="Tab_Pan_About_table_td">forum</td>
                  </tr>
                  <tr>
                    <td className="Tab_Pan_About_table_td">mobail apps</td>
                    <td className="Tab_Pan_About_table_td">privacy policy</td>
                  </tr>
                  <tr>
                    <td className="Tab_Pan_About_table_td"> help center</td>
                    <td className="Tab_Pan_About_table_td">
                      terms & conditions
                    </td>
                  </tr>
                  <tr>
                    <td className="Tab_Pan_About_table_td">info board</td>
                    <td className="Tab_Pan_About_table_td">cookie policy</td>
                  </tr>
                </tbody>
              </table>
              <table
                style={{ marginTop: "20px", width: "400px" }}
                // className="Tab_Pan_About_table"
              >
                <thead>
                  <tr style={{ height: "20px" }}>
                    <th className="Tab_Pan_About_table_th">company</th>
                    <th className="Tab_Pan_About_table_th">privacy</th>
                    <th className="Tab_Pan_About_table_th"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="Tab_Pan_About_table_td">about us</td>
                    <td className="Tab_Pan_About_table_td">cookies settings</td>
                    <td className="Tab_Pan_About_table_td"></td>
                  </tr>
                  <tr>
                    <td className="Tab_Pan_About_table_td">jobs</td>
                    <td className="Tab_Pan_About_table_td"></td>
                  </tr>
                  <tr>
                    <td className="Tab_Pan_About_table_td"> press</td>
                    <td className="Tab_Pan_About_table_td"></td>
                  </tr>
                  <tr>
                    <td className="Tab_Pan_About_table_td">advertising</td>
                    <td className="Tab_Pan_About_table_td"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Tab_Pan>
        </div>
      </Tabs>
    </div>
  );
}

export default Second_Nav;
