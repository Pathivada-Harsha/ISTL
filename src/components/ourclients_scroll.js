"use client"

import { useEffect, useState } from "react"
import tsnpdcl from "../images/Home/tsnpdcl.png";
import thinkenergy from "../images/Home/thinkEnergy.png";
import fourtghpart from "../images/Home/fourthpartnerenergy.png";
import southern from "../images/Home/Southern Power Distribution Company of APLtd.png";
import godrej from "../images/Home/Godrej Group.png";

import AndhraPradeshCapitalRegionDevelopmentAuthority from "../images/Home/AndhraPradeshCapitalRegionDevelopmentAuthority.png";
import BhopalMunicipalCorporation from "../images/Home/Bhopal Municipal Corporation.png";
import governmentoftelangana from "../images/Home/governmentoftelangana.png";
import HaryanaUrbanDevelopmentAuthority from "../images/Home/Haryana Urban Development Authority.png";
import KarnatakaPowerTransmissionCorporationLtd from "../images/Home/Karnataka Power Transmission Corporation Ltd.png";
import TelanganaStateIndustrialInfrastructureCorporation from "../images/Home/Telangana State Industrial Infrastructure Corporation.png";
import TelanganaStateRenewableEnergyDevelopmentCorporationLtd from "../images/Home/Telangana State Renewable Energy Development Corporation Ltd.png";
import UttarHaryanaBijliVitranNigam from "../images/Home/Uttar Haryana Bijli Vitran Nigam.png";
import VibrantEnergy from "../images/Home/Vibrant Energy.png";
import VikramSolar from "../images/Home/Vikram Solar.png";
import Virchows from "../images/Home/Virchows.png";
import kptcl from "../images/Home/kptcl.png"

export default function OurClientsSection() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const logos = [
        {
            id: 1,
            name: "TSNPDCL",
            src: tsnpdcl,
            alt: "TSNPDCL",
        },
        {
            id: 2,
            name: "Think Energy",
            src: thinkenergy,
            alt: "Think Energy",
        },
        {
            id: 3,
            name: "Fourth Partner Energy",
            src: fourtghpart,
            alt: "Fourth Partner Energy",
        },
        {
            id: 4,
            name: "Southern Power Distribution Company",
            src: southern,
            alt: "Southern Power Distribution Company of AP Ltd",
        },
        {
            id: 5,
            name: "Godrej Group",
            src: godrej,
            alt: "Godrej Group",
        },
        {
            id: 6,
            name: "AP Capital Region Development Authority",
            src: AndhraPradeshCapitalRegionDevelopmentAuthority,
            alt: "Andhra Pradesh Capital Region Development Authority",
        },
        {
            id: 7,
            name: "Bhopal Municipal Corporation",
            src: BhopalMunicipalCorporation,
            alt: "Bhopal Municipal Corporation",
        },
        {
            id: 8,
            name: "Government of Telangana",
            src: governmentoftelangana,
            alt: "Government of Telangana",
        },
        {
            id: 9,
            name: "Haryana Urban Development Authority",
            src: HaryanaUrbanDevelopmentAuthority,
            alt: "Haryana Urban Development Authority",
        },
        {
            id: 10,
            name: "Karnataka Power Transmission Corporation",
            src: KarnatakaPowerTransmissionCorporationLtd,
            alt: "Karnataka Power Transmission Corporation Ltd",
        },
        {
            id: 11,
            name: "Telangana State Industrial Infrastructure Corporation",
            src: TelanganaStateIndustrialInfrastructureCorporation,
            alt: "Telangana State Industrial Infrastructure Corporation",
        },
        {
            id: 12,
            name: "TSREDCO",
            src: TelanganaStateRenewableEnergyDevelopmentCorporationLtd,
            alt: "Telangana State Renewable Energy Development Corporation Ltd",
        },
        {
            id: 13,
            name: "Uttar Haryana Bijli Vitran Nigam",
            src: UttarHaryanaBijliVitranNigam,
            alt: "Uttar Haryana Bijli Vitran Nigam",
        },
        {
            id: 14,
            name: "Vibrant Energy",
            src: VibrantEnergy,
            alt: "Vibrant Energy",
        },
        {
            id: 15,
            name: "Vikram Solar",
            src: VikramSolar,
            alt: "Vikram Solar",
        },
        {
            id: 16,
            name: "Virchows",
            src: Virchows,
            alt: "Virchows",
        },
         {
            id: 17,
            name: "KPTCL",
            src: kptcl,
            alt: "KPTCL",
        },
    ]

    const duplicatedLogos = [...logos, ...logos, ...logos]

    return (
        <section className="w-full py-12 sm:py-20 lg:py-24 overflow-hidden">
            {/* Section Container with proper spacing */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section with improved spacing */}
                <div className="text-center mb-12  sm:mb-16">
                    <div className="inline-flex items-center justify-center">
                        <span className="inline-block bg-green-100 text-green-600 text-lg sm:text-xl lg:text-2xl font-bold tracking-wide uppercase px-6 py-12 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-full shadow-sm">
                            🌟 TRUSTED BY INDUSTRY LEADERS
                        </span>
                    </div>
                    
                    {/* Optional subtitle */}
                    <p className="mt-6 text-gray-600 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto font-medium">
                        Powering sustainable energy solutions for leading organizations across industries
                    </p>
                </div>

                {/* Logos Carousel Section */}
                <div className="relative rounded-2xl py-10 sm:py-16 lg:py-20">
                    <div className="overflow-hidden">
                        <div
                            className={`flex items-center gap-16 sm:gap-20 lg:gap-24 ${isVisible ? "animate-scroll" : ""}`}
                            style={{ width: "fit-content" }}
                        >
                            {duplicatedLogos.map((logo, index) => (
                                <div
                                    key={`${logo.id}-${index}`}
                                    className="flex-shrink-0 flex items-center justify-center h-28 sm:h-32 lg:h-36 xl:h-40 min-w-fit hover:scale-105 transition-all duration-300 ease-in-out"
                                >
                                    <div className="shadow-sm hover:shadow-md transition-shadow duration-300 p-6 sm:p-8 rounded-lg">
                                        <img
                                            src={logo.src}
                                            alt={logo.alt}
                                            className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                                            style={{ 
                                                maxHeight: '100px', 
                                                maxWidth: '180px',
                                                minHeight: '80px',
                                                minWidth: '120px'
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Gradient Overlays */}
                    <div className="absolute left-0 top-0 w-20 sm:w-32 h-full bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent pointer-events-none z-10"></div>
                    <div className="absolute right-0 top-0 w-20 sm:w-32 h-full bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent pointer-events-none z-10"></div>
                </div>

                {/* Bottom spacing buffer */}
                <div className="mt-8 sm:mt-12"></div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.333%);
                    }
                }

                .animate-scroll {
                    animation: scroll 25s linear infinite;
                }

                .animate-scroll:hover {
                    animation-play-state: paused;
                }

                @media (max-width: 768px) {
                    .animate-scroll {
                        animation-duration: 35s;
                    }
                }

                @media (max-width: 640px) {
                    .animate-scroll {
                        animation-duration: 25s;
                    }
                }
            `}</style>
        </section>
    )
}