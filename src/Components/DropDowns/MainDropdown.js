import React, { useState, useEffect, useRef } from 'react';
import { Menu, Divider } from 'antd';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';

import {
  AppstoreOutlined, MailOutlined, SettingOutlined,
  CalendarOutlined,
  LinkOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import { CSSTransition } from 'react-transition-group';
const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const MainDropdown = () => {
  const [openKeys, setOpenKeys] = React.useState(['sub1']);

  // const onOpenChange = keys => {
  //   const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
  //   if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
  //     setOpenKeys(keys);
  //   } else {
  //     setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  //   }
  // };
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <Divider type="vertical" />

      <Menu mode="inline" style={{ width: 200 }}>
        <SubMenu  key="sub1" title="Navigation One">

          <SubMenu key="sub2" title="Navigation Two">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
            <SubMenu mode="vertical" key="sub1-2" title="Submenu">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
            </SubMenu>
          </SubMenu>


        </SubMenu>
      </Menu>
      {/* <div>
        <button onClick={() => setOpen(!open)}> Hello </button>
        {open && <DropdownMenu/>}
      </div> */}
    </React.Fragment>

  );
};

export default MainDropdown;

// function DropdownMenu() {
//   const [activeMenu, setActiveMenu] = useState('main');
//   const [menuHeight, setMenuHeight] = useState(null);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     setMenuHeight(dropdownRef.current?.firstChild.offsetHeight+35)
//   }, [])

//   function calcHeight(el) {
//     const height = el.offsetHeight;
//     setMenuHeight(height+35);
//   }

//   function DropdownItem(props) {
//     return (
//       <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
//         <span className="icon-button">{props.leftIcon}</span>
//         {props.children}
//         <span className="icon-right">{props.rightIcon}</span>
//       </a>
//     );
//   }

//   return (
//     <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

//       <CSSTransition
//         in={activeMenu === 'main'}
//         timeout={500}
//         classNames="menu-primary"
//         unmountOnExit
//         onEnter={calcHeight}>
//         <div className="menu">
//           <DropdownItem>My Profile</DropdownItem>
//           <DropdownItem
//             leftIcon={<CogIcon />}
//             rightIcon={<ChevronIcon />}
//             goToMenu="settings">
//             Settings
//           </DropdownItem>
//           <DropdownItem
//             leftIcon="🦧"
//             rightIcon={<ChevronIcon />}
//             goToMenu="animals">
//             Animals
//           </DropdownItem>

//         </div>
//       </CSSTransition>

//       <CSSTransition
//         in={activeMenu === 'settings'}
//         timeout={500}
//         classNames="menu-secondary"
//         unmountOnExit
//         onEnter={calcHeight}>
//         <div className="menu">
//           <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
//             <h2>My Tutorial</h2>
//           </DropdownItem>
//           <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
//           <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
//           <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
//           <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
//         </div>
//       </CSSTransition>

//       <CSSTransition
//         in={activeMenu === 'animals'}
//         timeout={500}
//         classNames="menu-secondary"
//         unmountOnExit
//         onEnter={calcHeight}>
//         <div className="menu">
//           <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
//             <h2>Animals</h2>
//           </DropdownItem>
//           <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
//           <DropdownItem leftIcon="🐸">Frog</DropdownItem>
//           <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
//           <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
//           <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
//           <DropdownItem leftIcon="🐸">Frog</DropdownItem>
//           <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
//           <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
//         </div>
//       </CSSTransition>
//     </div>
//   );
// }