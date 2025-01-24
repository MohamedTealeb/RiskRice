import React, { useState } from 'react'
import po from './../../assets/contact-D_4DvA_G.jpg'
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    consultType: '',
    message: '',
    agreeToPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
  };
  const { t, i18n } = useTranslation();


  return <>
  <div className='relative h-60 w-full'>
    <img src={po} className='w-full h-full object-cover' alt="" />
    <div className='absolute inset-0 bg-[#032e43a8] bg-opacity-30 flex flex-col justify-center items-center text-center text-white px-4'>
    <h1 className="text-2xl md:text-4xl font-bold">{t('contact.a')}</h1>
    <p className="mt-2 text-sm md:text-lg text-white"> {t('contact.b')}</p>
    <p className="text-sm md:text-lg text-white">{t('contact.d')}</p>
    </div>
    
  </div>
  <div className="bg-form lg:px-24 px-8 flex justify-center items-center">
      <form className="lg:w-1/2 w-full mt-16 mb-8" onSubmit={handleSubmit}>
        <label>{t('contact.e')}</label>
        <input type="text" name="name" className="w-full py-2 px-3 rounded-lg text-black outline-none border border-black focus:border-none focus:outline-secondary mt-2" required value={formData.name} onChange={handleChange} />
        
        <label className="mt-4 block">{t('contact.f')}</label>
        <input type="tel" name="phoneNumber" className="w-full py-2 px-3 rounded-lg text-black outline-none border border-black focus:border-none focus:outline-secondary mt-2" required value={formData.phoneNumber} onChange={handleChange} />
        
        <label className="mt-4 block">{t('contact.g')}</label>
        <input type="email" name="email" className="w-full py-2 px-3 rounded-lg text-black outline-none border border-black focus:border-none focus:outline-secondary mt-2" required value={formData.email} onChange={handleChange} />
        
        <div className="relative w-full">
          <label className="mt-4 block">{t('contact.g')}</label>
          <select name="consultType" className="w-full py-3 px-4 rounded-lg text-black outline-none border border-black focus:border-none focus:outline-secondary mt-2 appearance-none" required value={formData.consultType} onChange={handleChange}>
            <option value="" disabled>{t('contact.i')}</option>
            <option value="general">{t('contact.w')}</option>
            <option value="business">{t('contact.r')}</option>
            <option value="strategic">{t('contact.t')}</option>
            <option value="technical">{t('contact.y')}</option>
            <option value="hiring">{t('contact.u')}</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 top-10 flex items-center px-2 text-gray-700">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
        
        <label className="mt-4 block">{t('contact.k')}</label>
        <textarea name="message" className="w-full py-2 px-3 rounded-lg text-black outline-none border border-black focus:border-none focus:outline-secondary mt-2" rows="4" placeholder={t('contact.k')} required value={formData.message} onChange={handleChange}></textarea>
        
        <div className="mt-4">
          <label className="flex items-center">
            <input type="checkbox" name="agreeToPolicy" className="mx-2" required checked={formData.agreeToPolicy} onChange={handleChange} />
            {t('contact.l')}
          </label>
        </div>
        
        <div className="flex justify-center items-center">
          <button type="submit" className="w-1/2 bg-secondary text-black font-bold py-2 rounded-lg mt-6 hover:bg-primary-dark transition flex justify-center items-center">{t('contact.q')}</button>
        </div>
      </form>
      <section className="" aria-live="polite" aria-atomic="false" aria-relevant="additions text" aria-label="Notifications Alt+T"></section>
    </div>
  
  
  
  </>
}
