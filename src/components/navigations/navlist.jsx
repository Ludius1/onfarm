import { FaChevronDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

export const navlist =[
    {id: 1, name: "Home", icon:<FaChevronDown />, path: '/'
    },
    {id: 2,name: "Shop", icon:<FaChevronDown />, path: '/shop'
    },
    {id: 3,name: "Blog", icon:<FaChevronDown />, path: '/blog'
    },
    {id: 4,name: "Pages", icon:<FaChevronDown />, path: '/pages'
    }
]

export const navOtherItems = [
    {id: 1, icon: <CiSearch />},
    {id: 2, icon:<CiUser />},
    {id: 3, icon: <CiHeart />}
]