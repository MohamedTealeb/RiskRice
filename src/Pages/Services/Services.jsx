import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';




export default function Services() {
    const { t, i18n } = useTranslation();
    const [selectedService, setSelectedService] = useState(null);

    const handleServiceClick = (serviceId) => {
        setSelectedService(serviceId);
    };
    const servicesData = [
        {
            id: 'businessDevelopment',
            title:  t('services.id'),
            offerings: [
                {
                    title: t('services.b'),
                    description: t('services.c'),
                },
                {
                    title: t('services.d'),
                    description: t('services.e'),
                },
                {
                    title: t('services.f'),
                    description: t('services.g'),
                },
                {
                    title: t('services.h'),
                    description: t('services.j'),
                },
            ],
        },
        {
            id: 'strategicMarketing',
            title: t('footer.c'),
            offerings: [
                {
                    title: t('services.k'),
                    description: t('services.l'),
                },
                {
                    title: t('services.m'),
                    description: t('services.n'),
                },
                {
                    title: t('services.z'),
                    description: t('services.x'),
                },
                {
                    title: t('services.v'),
                    description: t('services.s'),
                },
            ],
        },
        {
            id: 'technicalDevelopment',
            title: t('footer.d'),
            offerings: [
                {
                    title: t('services.aa'),
                    description: t('services.ab'),
                },
                {
                    title: t('services.ac'),
                    description: t('services.ad'),
                },
                {
                    title: t('services.af'),
                    description: t('services.ag'),
                },
                {
                    title: t('services.ah'),
                    description: t('services.aj'),
                },
            ],
        },
        {
            id: 'hiringOutsource',
            title: t('footer.e'),
            offerings: [
                {
                    title: t('services.ak'),
                    description: t('services.al'),
                },
                {
                    title: t('services.az'),
                    description: t('services.ax'),
                },
                {
                    title: t('services.av') ,
                    description:  t('services.an'),
                },
                {
                    title:  t('services.am'),
                    description: t('services.aq'),
                },
            ],
        },
    ];

    return <>
        <div className='lg:px-24 px-8 my-12 space-y-10'>
        <h2 className="text-primary lg:text-3xl text-2xl font-bold">{t('Navbar.services')}</h2>
        <p>{t('services.a')}</p>
        <div className="flex flex-col rounded-2xl bg-gradient-to-t from-[#3f6d858a] to-[#2897ce00]">
            <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-8 gap-4 lg:px-16 px-4">
                {servicesData.map((service) => (
                    <button
                        key={service.id}
                        onClick={() => handleServiceClick(service.id)}
                        className={`py-1 lg:text-md font-medium text-sm rounded-3xl px-1 ${selectedService === service.id ? 'bg-primary text-white' : 'bg-white border border-primary text-black'}`}

                    >
                        {service.title}
                    </button>
                ))}
            </div>

            {/* Conditional Rendering of Selected Service Details */}
            {selectedService && (
                <div className="grid py-8 lg:grid-cols-2 grid-cols-1 lg:px-16 px-4 gap-4">
                    {servicesData
                        .filter(service => service.id === selectedService)
                        .map(service => (
                            service.offerings.map(offering => (
                                <div key={offering.title} className="p-4 rounded-lg gap-4 space-y-2 flex">
                                    <div className="text-primary flex items-center justify-center">
                                        {/* You can add an SVG icon here if needed */}
                                    </div>
                                    <div className="flex justify-center items-start flex-col">
                                        <h3 className="font-bold text-lg">{offering.title}</h3>
                                        <p>{offering.description}</p>
                                    </div>
                                </div>
                            ))
                        ))}
                </div>
            )}

      
        </div>
        <div className="flex justify-center items-center my-4">
                <a className="bg-secondary py-2 lg:w-1/4 w-1/2 px-1 rounded-lg text-center font-semibold" href="/contact" data-discover="true">{t('services.aw')}</a>
            </div>

            <div className="flex flex-col justify-center items-center space-y-4">
                <h2 className="lg:text-2xl text-lg font-semibold">{t('services.ae')}</h2>
                <a className="lg:text-md text-sm text-primary font-bold" href="/contact" data-discover="true">{t('services.ar')}</a>
            </div>
        </div>
        </>
}
