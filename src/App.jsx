import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Services from './Pages/Services/Services'
import About from './Pages/About/About'
import Layout from './Pages/Layout'
import Contact from './Pages/contact/Contact'
import { useTranslation ,initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector' 
import i18next from 'i18next'
import Backend from 'i18next-http-backend'
i18next
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    backend: {
      loadPath: './locale/{{lng}}/translation.json', 
    },
    
  });

export default function App() {
    const router=createBrowserRouter([
      {path:'',element:<Layout />,children:[ 

        {index:true,element:<Home />},
        {path:'home',element:<Home />},
        {path:'services',element:<Services />},
        {path:'about',element:<About />},
        {path:'contact',element:<Contact />}]

      }
    ])
  return <>
  
  <RouterProvider router={router}></RouterProvider>
  </>
}
