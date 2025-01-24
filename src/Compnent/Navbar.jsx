import React, { useEffect, useState } from 'react'
import logo from '../assets/logo-DHkhB3YR.png'
import {  useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Cookies from 'js-cookie';
import { Helmet } from 'react-helmet';

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
   <Helmet>
  <title>RiskRice</title>
  <a rel="shortcut icon" href={logo} type="image/svg+xml" />
</Helmet>
  <section className="relative mx-auto  bg-primary ">
    
    <nav className="flex justify-around  w-screen overflow-hidden">
      <div className="px-5 xl:px-12 py-6 flex w-full  items-center">
        <a className="text-3xl font-bold font-heading" href="#">
         <img className="h-9" src={logo} alt="logo"/>
         </a>
        
       
        <ul className="hidden md:flex  mx-auto cursor-pointer font-semibold   gap-5 ">
        <li>
                <a className={`text-md font-bold duration-300 ${location.pathname === '/home' ? 'text-secondary  underline' : 'text-white'} hover:underline hover:text-secondary underline-offset-4`} href="/home">{t('Navbar.home')}</a>
              </li>
              <li>
                <a className={`text-md font-bold duration-300 ${location.pathname === '/services' ? 'text-secondary underline' : 'text-white'} hover:underline hover:text-secondary underline-offset-4 gap-2`} href="/services">{t('Navbar.services')}</a>
              </li>
          <li>
                <a className={`text-md font-bold duration-300 ${location.pathname === '/about' ? 'text-secondary underline' : 'text-white'} hover:underline hover:text-secondary underline-offset-4`} href="/about">{t('Navbar.about')}</a>
              </li>
          
         
        </ul>
       
        <div className="hidden md:flex lg:flex xl:flex items-center  space-x-5 ">
        <a className="text-black bg-secondary  focus:ring-4 focus:outline-none font-bold rounded-lg me-6 text-md px-4 py-2"  href="/contact" data-discover="true">{t('Navbar.contact')}</a>

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
                  
                    <a to="/" className="block font-medium text-lg px-4 py-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>{t('Navbar.home')}</a>
                    <a to="/services" className="block font-medium  px-4 py-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>{t('Navbar.services')}</a>
                    <a to="/about" className="block font-medium px-4 py-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>{t('Navbar.about')}</a>
                   
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