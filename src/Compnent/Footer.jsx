import React from 'react'
import logo from './../assets/logo-DHkhB3YR.png'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
export default function Footer() {
    const { t, i18n } = useTranslation();

  return <>
  <div className='bg-primary lg:px-24 px-8 mt-8 py-6 text-white rounded-t-lg'>
<div className='grid lg:grid-cols-5 grid-cols-1 gap-4' >
<div className="flex lg:col-span-2 flex-col lg:justify-start lg:items-start justify-center items-center space-y-4 w-full">
    <img src={logo} className="w-36"/>
    <p className="text-white lg:block text-sm hidden w-2/3">{t('footer.a')}</p> </div>
    <div className="lg:flex flex-col  hidden space-y-2">
        <h2 className="font-bold">{t('Navbar.services')}</h2>
        <a className="hover:underline hover:text-secondary underline-offset-4" href="/services" data-discover="true">{t('footer.b')}</a>
        <a className="hover:underline hover:text-secondary underline-offset-4" href="/services" data-discover="true">{t('footer.c')}</a>
        <a className="hover:underline hover:text-secondary underline-offset-4" href="/services" data-discover="true">{t('footer.d')}</a>
        <a className="hover:underline hover:text-secondary underline-offset-4" href="/services" data-discover="true">{t('footer.e')}</a>
        </div>
        <div className='flex flex-col lg:justify-start lg:items-start justify-center items-center  space-y-1'>
        <h2 className="font-bold ">{t('footer.f')}</h2>
        <div className='flex  lg:flex-col justify-start items-start lg:gap-2 gap-4 lg:ms-0 ms-4 '>
        <a className="hover:underline hover:text-secondary underline-offset-4"  href="/about" data-discover="true">{t('footer.g')}</a>
        <a className="hover:underline hover:text-secondary underline-offset-4" href="/services" data-discover="true">{t('Navbar.services')}</a>
        </div>
      
        </div>
        <div className='flex flex-col lg:justify-start lg:items-start justify-center items-center  space-y-4'>
        <h2 className="font-bold">{t('footer.q')}</h2>
        <div className="flex gap-4">
            <Link tof="" target="_blank" rel="noopener noreferrer">
                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge rounded-full p-1 text-primary my-2 w-8 h-8 bg-white" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FacebookRoundedIcon">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
                </svg>
            </Link>
            <Link to="" target="_blank" rel="noopener noreferrer">
                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge rounded-full p-1 text-primary my-2 w-8 h-8 bg-white" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LinkedInIcon">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                </svg>
            </Link>
            <Link to="" target="_blank" rel="noopener noreferrer">
                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge rounded-full p-1 text-primary my-2 w-8 h-8 bg-white" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WhatsAppIcon">
                    <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"></path>
                </svg>
            </Link>
      
        </div>
        <p>info@riskrice.com</p>
        </div>
</div>
  </div>
  
  
  
  </>
}
