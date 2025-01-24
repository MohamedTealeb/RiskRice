import React, { useEffect, useState } from 'react'
import logo from '../assets/logo-DHkhB3YR.png'
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Cookies from 'js-cookie';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 
  const location = useLocation();


  const toggleNavbar = () => {
      setIsOpen(!isOpen); 
  };
  const { t, i18n } = useTranslation(); // Get translation function
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change language to the selected one
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr'; // Set direction based on language

  };
  const lng=Cookies.get("i18next")||"en";
  useEffect(()=>{
window.document.dir =i18n.dir()
  },[lng])

 
  return <>
   
  <section class="relative mx-auto  bg-primary ">
    
    <nav class="flex justify-around  w-screen overflow-hidden">
      <div class="px-5 xl:px-12 py-6 flex w-full  items-center">
        <a class="text-3xl font-bold font-heading" href="#">
         <img class="h-9" src={logo} alt="logo"/>
         
        </a>
       
        <ul className="hidden md:flex  mx-auto  font-semibold   gap-5 ">
        <li>
                <Link className={`text-md font-bold duration-300 ${location.pathname === '/home' ? 'text-secondary  underline' : 'text-white'} hover:underline hover:text-secondary underline-offset-4`} to="/home">{t('Navbar.home')}</Link>
              </li>
              <li>
                <Link className={`text-md font-bold duration-300 ${location.pathname === '/services' ? 'text-secondary underline' : 'text-white'} hover:underline hover:text-secondary underline-offset-4 gap-2`} to="/services">{t('Navbar.services')}</Link>
              </li>
          <li>
                <Link className={`text-md font-bold duration-300 ${location.pathname === '/about' ? 'text-secondary underline' : 'text-white'} hover:underline hover:text-secondary underline-offset-4`} to="/about">{t('Navbar.about')}</Link>
              </li>
          
         
        </ul>
       
        <div class="hidden md:flex lg:flex xl:flex items-center  space-x-5 ">
        <a class="text-black bg-secondary  focus:ring-4 focus:outline-none font-bold rounded-lg me-6 text-md px-4 py-2"  href="/contact" data-discover="true">{t('Navbar.contact')}</a>

        {i18n.language === 'en' ? (
          <button className='text-white font-semibolde' onClick={() => changeLanguage('ar')}>{t('Navbar.language.arabic')}</button> // Show Arabic button
        ) : (
          <button className='text-white font-semibolde' onClick={() => changeLanguage('en')}>{t('Navbar.language.english')}</button> // Show English button
        )}         
          
        </div>
      </div>
    
      
      
      {(i18n.language === 'en') ? (
          <a className="navbar-burger self-center mr-12 md:hidden xl:hidden" onClick={toggleNavbar} href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
          </a>
      ) : (
          <a className="navbar-burger self-center m-10 md:hidden xl:hidden" onClick={toggleNavbar} href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
          </a>
      )}
      
    
         {isOpen && (

                <div className="absolute text-center top-16 left-0 w-full bg-primary text-white md:hidden">
                  
                    <Link to="/" className="block font-medium text-lg px-4 py-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>{t('Navbar.home')}</Link>
                    <Link to="/services" className="block font-medium  px-4 py-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>{t('Navbar.services')}</Link>
                    <Link to="/about" className="block font-medium px-4 py-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>{t('Navbar.about')}</Link>
                   
                   <div class="p-4 flex items-center   hover:bg-gray-700 justify-center space-x-2">
                    
                    
        {i18n.language === 'en' ? (
          <div className='relative'>
<button className='ext-white text-lg  font-medium' onClick={() => changeLanguage('ar')}>{t('Navbar.language.arabic')}</button>
      
      </div>  ) : (
          <button className='ext-white text-lg  font-medium' onClick={() => changeLanguage('en')}>{t('Navbar.language.english')}</button> // Show English button
        )}     
              </div>
                  
                </div>
            )}
    </nav>
    
  </section>


    
  </>
  
}