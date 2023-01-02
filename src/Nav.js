import React,{useEffect, useState} from 'react';
import './Nav.css';

const Nav = () => {
    const [show, setShow] = useState(false)
    useEffect(() => {
        const scrollHandler =  () => {
            if(window.scrollY > 100){
                setShow(true)
                console.log("raftoam to")
            } else {
                setShow(false)
            }
        }
        window.addEventListener("scroll",scrollHandler)
       
        return () => {
            window.removeEventListener("scroll",scrollHandler)
        };
        
       
    }, [])

    return (
        <div className={`navbar ${show && 'nav_Black'}`}>
            <img 
            className='nav_logo'
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
            alt="logo" 
            />
        </div>
    );
};

export default Nav;