import React from 'react';
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { FaFacebookF, FaGithub, FaHeart, FaInstagram, FaGlobe } from 'react-icons/fa';
import footerContact from "../../api/footerData.json";

export default function Footer() {
    const iconMap = {
        MdLocationOn: <MdLocationOn />,
        IoCall: <IoCall />,
        IoIosMail: <IoIosMail />,
        FaGlobe: <FaGlobe />,
    };

    return (
        <footer className="relative bottom-0 z-40 w-full bg-black/[0.95] text-white py-8 px-6 md:px-10">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 flex flex-col items-start justify-center">
                        <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">WorldAtlas</h1>
                        <div className="text-sm text-neutral-100 mb-2">
                            Copyright © 2025 WorldAtlas
                        </div>
                        <div className="text-sm text-white flex items-center">
                            Made with <FaHeart className="text-blue-500 mx-1" /> by Aashir Siddiqui
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-start">
                            {footerContact.map((currData, index) => {
                                const { icon, title, detail } = currData;
                                return (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="text-3xl text-white">{iconMap[icon]}</div>
                                        <div className="flex flex-col">
                                            <h3 className="text-lg font-semibold text-white">{title}</h3>
                                            <p className="text-sm text-neutral-100">{detail}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex items-center justify-start gap-4">
                            <a
                                href="https://github.com/Aashir-Siddiqui"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white rounded-full flex items-center justify-center hover:bg-neutral-300 transition"
                            >
                                <FaGithub className="text-black text-2xl" />
                            </a>
                            <a
                                href="https://www.instagram.com/aashirsiddiqui_/?next=%2F&hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white rounded-full flex items-center justify-center hover:bg-neutral-300 transition"
                            >
                                <FaInstagram className="text-black text-2xl" />
                            </a>
                            <a
                                href="https://www.facebook.com/aashir.siddiqui.2025"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white rounded-full flex items-center justify-center hover:bg-neutral-300 transition"
                            >
                                <FaFacebookF className="text-black text-2xl" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}