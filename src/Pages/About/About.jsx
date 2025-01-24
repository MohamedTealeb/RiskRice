import React from 'react'
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t, i18n } = useTranslation();

  return <>
  
        

  
  <div class="lg:px-24 px-8 my-12   space-y-8"
  ><h2 class="text-primary lg:text-3xl text-2xl font-bold">{t('about.a')}
  </h2><div class="flex flex-col space-y-4">
    <h3 class="lg:text-2xl text-xl text-primary font-semibold">{t('about.b')}</h3>
    <p class="font-medium">{t('about.c')}</p></div>
    <div class="flex flex-col space-y-4">
        <h3 class="lg:text-2xl text-xl text-primary font-semibold">
            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge w-6 h-6" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TaskAltIcon"><path d="M22 5.18 10.59 16.6l-4.24-4.24 1.41-1.41 2.83 2.83 10-10zm-2.21 5.04c.13.57.21 1.17.21 1.78 0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8c1.58 0 3.04.46 4.28 1.25l1.44-1.44C16.1 2.67 14.13 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-1.19-.22-2.33-.6-3.39z"></path>
            </svg> {t('about.d')}</h3><p class="font-medium">{t('about.f')}</p></div><div class="flex flex-col space-y-4"><h3 class="lg:text-2xl text-xl text-primary font-semibold"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge w-6 h-6" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AdsClickIcon"><path d="M11.71 17.99C8.53 17.84 6 15.22 6 12c0-3.31 2.69-6 6-6 3.22 0 5.84 2.53 5.99 5.71l-2.1-.63C15.48 9.31 13.89 8 12 8c-2.21 0-4 1.79-4 4 0 1.89 1.31 3.48 3.08 3.89zM22 12c0 .3-.01.6-.04.9l-1.97-.59c.01-.1.01-.21.01-.31 0-4.42-3.58-8-8-8s-8 3.58-8 8 3.58 8 8 8c.1 0 .21 0 .31-.01l.59 1.97c-.3.03-.6.04-.9.04-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10m-3.77 4.26L22 15l-10-3 3 10 1.26-3.77 4.27 4.27 1.98-1.98z"></path></svg>{t('about.e')}</h3><p class="font-medium">{t('about.g')}</p></div></div>
  
  </>
}
