import React from 'react'
import Navbar from './../../Compnent/Navbar';
import photo from './../../assets/hero-DwfVBmP5.png'
import photo1 from './../../assets/whoarewe-btaxIWyK.png'
import download from './../../assets/download-DB5ja-F-.png'
import Footer from '../../Compnent/Footer';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import logo from './../../assets/logo-DHkhB3YR.png' 
import { Link } from 'react-router-dom';




export default function Home() {
  const { t, i18n } = useTranslation();
  return <>
  
  <Helmet>
                <title>RiskRice</title>
                <link rel="shortcut icon" href={logo} type="image/svg+xml" />
            </Helmet>
   
<div className="flex bg-primary ">
  <div className="flex flex-col-reverse lg:flex-row my-12 lg:px-24 px-4 text-white lg:gap-24 gap-2">
    <div className="flex flex-col lg:items-start items-center lg:text-start lg:mt-12 mt-0 text-center lg:w-1/2">
  
        {i18n.language === 'ar' ? ( 
            <h1 className="lg:text-[56px] text-[36px] leading-1 font-semibold">
              {t('home.we')} <span className="text-secondary">{t('home.ma')} </span>
              {t('home.ee')} <br /> {t('home.aa')}
            </h1>
          ) : <h1 className="lg:text-[56px] text-[36px] leading-none  font-bold">
          {t('home.we')} <span className="text-secondary">{t('home.ma')} </span>
             {t('home.ee')} <br/> {t('home.aa')}</h1>} 
       <p className="mt-8 text-lg  text-[#B6B6B6]">{t('home.a')}</p>
       <p className="text-lg text-[#B6B6B6] ">{t('home.b')}</p>
       <a className="bg-secondary text-center font-bold mt-8 py-2 rounded-md lg:w-1/2 w-3/4 text-black" to="/contact" data-discover="true">{t('home.c')}</a>
       </div><div className="flex items-center justify-center lg:w-1/2 ">
       <img src={photo} alt="Hero" className="w-full rounded-full"/></div>
       </div>
       </div>
  
  
   
   
   <div className='lg:px-24 px-8 my-24'>

    <h1 className='text-primary font-bold lg:text-4xl text-2xl'>{t('home.d')}</h1> 
    <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-36 gap-4 my-12 lg:px-12 px-16'>
    <div className='flex flex-col justify-center items-center space-y-2'>
      <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge text-secondary w-6 h-6" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ModeStandbyIcon">
        <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3" fill="currentColor"></path>
      </svg>
      <h2 className="text-primary lg:text-lg text-md font-semibold">{t('home.e')}</h2>
      <p className="text-center  lg:w-full w-2/3">{t('home.f')}</p>
    </div>
    <div className='flex flex-col justify-center items-center space-y-2'>
      <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge text-secondary w-6 h-6" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TuneIcon">
        <path d="M3 17v2h6v-2zM3 5v2h10V5zm10 16v-2h8v-2h-8v-2h-2v6zM7 9v2H3v2h4v2h2V9zm14 4v-2H11v2zm-6-4h2V7h4V5h-4V3h-2z" fill="currentColor"></path>
      </svg>
      <h2 className="text-primary lg:text-lg text-md font-semibold">{t('home.g')}</h2>
      <p className="text-center lg:w-full w-2/3">{t('home.h')}</p>
    </div>
    <div className='flex flex-col justify-center items-center space-y-2'>
      <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge text-secondary w-6 h-6" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TipsAndUpdatesIcon">
        <path d="M7 20h4c0 1.1-.9 2-2 2s-2-.9-2-2m-2-1h8v-2H5zm11.5-9.5c0 3.82-2.66 5.86-3.77 6.5H5.27c-1.11-.64-3.77-2.68-3.77-6.5C1.5 5.36 4.86 2 9 2s7.5 3.36 7.5 7.5m4.87-2.13L20 8l1.37.63L22 10l.63-1.37L24 8l-1.37-.63L22 6zM19 6l.94-2.06L22 3l-2.06-.94L19 0l-.94 2.06L16 3l2.06.94z" fill="currentColor"></path>
      </svg>
      <h2 className="text-primary lg:text-lg text-md font-semibold">{t('home.j')}</h2>
      <p className="text-center lg:w-full w-2/3">{t('home.k')}</p>
    </div>
  </div>
  
  
</div>

        
  <div className='lg:px-24 px-8 my-24'>

<h1 className='text-primary font-semibold lg:text-4xl text-2xl'>{t('home.l')}</h1> 


   
    <div className="grid lg:grid-cols-4 grid-cols-1  gap-10 my-8">
  <div className="card bg-[#eee] border border-secondary rounded-lg hover:cursor-pointer px-4 py-4 transition-all duration-300 ease-in-out hover:shadow-lg flex flex-col space-y-2 items-start relative overflow-hidden">
    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge text-primary my-2 w-8 h-8" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SignalCellularAltIcon">
      <path d="M17 4h3v16h-3zM5 14h3v6H5zm6-5h3v11h-3z"></path>
    </svg>
    <h2 className="font-bold lg:text-xl text-md">{t('footer.b')}</h2>
    <p className="font-medium lg:text-md  text-sm">{t('home.n')}</p>
    <a rel="noopener noreferrer" className="hover:underline underline-offset-1 text-primary font-semibold" href="/services" data-discover="true">{t('home.m')}</a>
    <div className="absolute inset-0 border-2 border-secondary opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
  </div>
  <div class="card  bg-[#eee] border border-secondary rounded-lg hover:cursor-pointer px-4 py-4 transition-all duration-300 ease-in-out hover:shadow-lg  flex flex-col space-y-2 items-start relative overflow-hidden">
    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge text-primary my-2 w-8 h-8" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InsightsIcon">
      <path d="M21 8c-1.45 0-2.26 1.44-1.93 2.51l-3.55 3.56c-.3-.09-.74-.09-1.04 0l-2.55-2.55C12.27 10.45 11.46 9 10 9c-1.45 0-2.27 1.44-1.93 2.52l-4.56 4.55C2.44 15.74 1 16.55 1 18c0 1.1.9 2 2 2 1.45 0 2.26-1.44 1.93-2.51l4.55-4.56c.3.09.74.09 1.04 0l2.55 2.55C12.73 16.55 13.54 18 15 18c1.45 0 2.27-1.44 1.93-2.52l3.56-3.55c1.07.33 2.51-.48 2.51-1.93 0-1.1-.9-2-2-2"></path><path d="m15 9 .94-2.07L18 6l-2.06-.93L15 3l-.92 2.07L12 6l2.08.93zM3.5 11 4 9l2-.5L4 8l-.5-2L3 8l-2 .5L3 9z"></path>
    </svg>
    <h2 class="font-bold lg:text-xl text-md">{t('footer.c')}</h2>
    <p class="font-medium lg:text-md text-sm">{t('home.z')}</p>
    <a rel="noopener noreferrer" class="hover:underline underline-offset-1  text-primary font-semibold" href="/services" data-discover="true">{t('home.m')}</a>
    <div class="absolute inset-0 border-2 border-secondary opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
    </div></div>
  <div className="card bg-[#eee] border border-secondary rounded-lg hover:cursor-pointer px-4 py-4 transition-all duration-300 ease-in-out hover:shadow-lg flex flex-col space-y-2 items-start relative overflow-hidden">
  <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge text-primary my-2 w-8 h-8" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EngineeringIcon"><path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4m13.1-8.16c.01-.11.02-.22.02-.34s-.01-.23-.03-.34l.74-.58c.07-.05.08-.15.04-.22l-.7-1.21c-.04-.08-.14-.1-.21-.08l-.86.35c-.18-.14-.38-.25-.59-.34l-.13-.93c-.02-.09-.09-.15-.18-.15h-1.4c-.09 0-.16.06-.17.15l-.13.93c-.21.09-.41.21-.59.34l-.87-.35c-.08-.03-.17 0-.21.08l-.7 1.21c-.04.08-.03.17.04.22l.74.58c-.02.11-.03.23-.03.34s.01.23.03.34l-.74.58c-.07.05-.08.15-.04.22l.7 1.21c.04.08.14.1.21.08l.87-.35c.18.14.38.25.59.34l.13.93c.01.09.08.15.17.15h1.4c.09 0 .16-.06.17-.15l.13-.93c.21-.09.41-.21.59-.34l.87.35c.08.03.17 0 .21-.08l.7-1.21c.04-.08.03-.17-.04-.22zm-2.6.91c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25m.42 3.93-.5-.87c-.03-.06-.1-.08-.15-.06l-.62.25q-.195-.15-.42-.24l-.09-.66c-.02-.06-.08-.1-.14-.1h-1c-.06 0-.11.04-.12.11l-.09.66c-.15.06-.29.15-.42.24l-.62-.25c-.06-.02-.12 0-.15.06l-.5.87c-.03.06-.02.12.03.16l.53.41c-.01.08-.02.16-.02.24s.01.17.02.24l-.53.41c-.05.04-.06.11-.03.16l.5.87c.03.06.1.08.15.06l.62-.25q.195.15.42.24l.09.66c.01.07.06.11.12.11h1c.06 0 .12-.04.12-.11l.09-.66c.15-.06.29-.15.42-.24l.62.25c.06.02.12 0 .15-.06l.5-.87c.03-.06.02-.12-.03-.16l-.52-.41c.01-.08.02-.16.02-.24s-.01-.17-.02-.24l.53-.41c.05-.04.06-.11.04-.17m-2.42 1.65c-.46 0-.83-.38-.83-.83 0-.46.38-.83.83-.83s.83.38.83.83c0 .46-.37.83-.83.83M4.74 9h8.53c.27 0 .49-.22.49-.49v-.02c0-.27-.22-.49-.49-.49H13c0-1.48-.81-2.75-2-3.45v.95c0 .28-.22.5-.5.5s-.5-.22-.5-.5V4.14C9.68 4.06 9.35 4 9 4s-.68.06-1 .14V5.5c0 .28-.22.5-.5.5S7 5.78 7 5.5v-.95C5.81 5.25 5 6.52 5 8h-.26c-.27 0-.49.22-.49.49v.03c0 .26.22.48.49.48M9 13c1.86 0 3.41-1.28 3.86-3H5.14c.45 1.72 2 3 3.86 3">
    </path></svg>
    <h2 className="font-bold lg:text-xl text-md">{t('footer.d')}</h2>
    <p className="font-medium lg:text-md text-sm">{t('home.x')}</p>
    <a rel="noopener noreferrer" className="hover:underline underline-offset-1 text-primary font-semibold" href="/services" data-discover="true">{t('home.m')}</a>
    <div className="absolute inset-0 border-2 border-secondary opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
  </div>
  <div class="card  bg-[#eee] border border-secondary rounded-lg hover:cursor-pointer px-4 py-4 transition-all duration-300 ease-in-out hover:shadow-lg  flex flex-col space-y-2 items-start relative overflow-hidden"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge text-primary my-2 w-8 h-8" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HandshakeIcon">
    <path d="M16.48 10.41c-.39.39-1.04.39-1.43 0l-4.47-4.46-7.05 7.04-.66-.63c-1.17-1.17-1.17-3.07 0-4.24l4.24-4.24c1.17-1.17 3.07-1.17 4.24 0L16.48 9c.39.39.39 1.02 0 1.41m.7-2.12c.78.78.78 2.05 0 2.83-1.27 1.27-2.61.22-2.83 0l-3.76-3.76-5.57 5.57c-.39.39-.39 1.02 0 1.41s1.02.39 1.42 0l4.62-4.62.71.71-4.62 4.62c-.39.39-.39 1.02 0 1.41s1.02.39 1.42 0l4.62-4.62.71.71-4.62 4.62c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l4.62-4.62.71.71-4.62 4.62c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l8.32-8.34c1.17-1.17 1.17-3.07 0-4.24l-4.24-4.24c-1.15-1.15-3.01-1.17-4.18-.06z">
  </path>
  </svg>
  <h2 class="font-bold lg:text-xl text-md">{t('footer.e')}</h2>
  <p class="font-medium lg:text-md text-sm">{t('home.v')}</p>
  <a rel="noopener noreferrer" class="hover:underline underline-offset-1  text-primary font-semibold" href="/services" data-discover="true">{t('home.m')}</a>
  <div class="absolute inset-0 border-2 border-secondary opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
    </div></div>
</div> 
   </div>
   <div className='lg:px-24 px-8 my-24'>
   <h1 className='text-primary font-semibold lg:text-4xl text-2xl'>{t('home.r')}</h1> 
   <div className="grid lg:grid-cols-2 grid-cols-1  my-8" >
    <div className='w-full lg:ps-12 flex justify-center items-center'>
      <img src={photo1} className='w-3/4' alt="" />
    </div>
    <div className='flex flex-col space-y-8 mt-6'>
    <p class="leading-8 text-md font-semibold text-[#333]">
      <span class="font-bold">{t('home.o')} </span> 
      {t('home.p')}</p>
       <p class="text-md leading-8 font-semibold text-[#333]">{t('home.i')} <span class="font-bold mx-1">{t('home.u')}  </span>{t('home.y')}</p>
       <Link to="/about" className='text-primary font-semibold'>{t('home.m')}</Link>
    </div>

   </div>
   </div>
   <div className='lg:px-24 px-0'>
    <div className='py-6 space-y-6  lg:px-36 px-6 bg-cover  lg:rounded-xl flex flex-col justify-center bg-no-repeat items-center text-white    'style={{backgroundImage: `url(${download})`}}>
  <h1 className='lg:text-xl  font-bold text-center'>
  {t('home.w')}</h1>
  <p className='text-center lg:block hidden'>{t('home.s')}</p>
  <p class="text-center lg:hidden flex"> Get expert insights and proven strategies to help your startup succeed</p>
  <div className='flex w-full justify-center'>
  <input class="py-1 border border-secondary rounded-tl-lg lg:w-1/2 w-2/3 rounded-bl-lg outline-none px-2 text-black" placeholder={t('home.t')}/>
  <button class="rounded-tr-lg text-sm rounded-br-lg bg-secondary text-black py-2 px-4 font-semibold">{t('home.q')}</button>
  </div>
 
    </div>

   </div>
  </>
}
