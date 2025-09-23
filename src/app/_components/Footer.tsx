import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';


export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full mt-10 bg-bgcolor border-t border-white/10 py-16 sm:py-20">
            <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-300 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                            Nipun Yasas
                        </h3>
                        <p className="text-neutral-300 text-sm leading-relaxed">
                            Full-stack developer passionate about creating exceptional digital experiences
                            with modern technologies and clean, efficient code.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.linkedin.com/in/nipun-yasas-1126a8275"
                                aria-label="LinkedIn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
            flex items-center justify-center 
            rounded-full border-[3px] border-[#6a37fb] text-[#6a37fb] 
            w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16
            transition-all duration-300 ease-in-out
            hover:text-black hover:bg-[#4824a8] hover:scale-115 hover:-translate-y-1
            hover:shadow-[0_0_25px_#4824a8] hover:border-[#4824a8]
        "
                            >
                                <FiLinkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                            </a>
                            <a
                                href="https://github.com/Nipun-Yasas"
                                aria-label="LinkedIn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
            flex items-center justify-center 
            rounded-full border-[3px] border-[#6a37fb] text-[#6a37fb] 
            w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16
            transition-all duration-300 ease-in-out
            hover:text-black hover:bg-[#4824a8] hover:scale-115 hover:-translate-y-1
            hover:shadow-[0_0_25px_#4824a8] hover:border-[#4824a8]
        "
                            >
                                <FiGithub className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                            </a>

                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-medium text-white">Quick Links</h4>
                        <nav className="flex flex-col space-y-2">
                            <a
                                href="#about"
                                className="text-neutral-300 hover:text-[#4824a8] transition-colors duration-200 text-sm"
                            >
                                About
                            </a>
                            <a
                                href="#education"
                                className="text-neutral-300 hover:text-[#4824a8] transition-colors duration-200 text-sm"
                            >
                                Education
                            </a>
                            <a
                                href="#technical-skills"
                                className="text-neutral-300 hover:text-[#4824a8] transition-colors duration-200 text-sm"
                            >
                                Skills
                            </a>
                            <a
                                href="#projects"
                                className="text-neutral-300 hover:text-[#4824a8] transition-colors duration-200 text-sm"
                            >
                                Projects
                            </a>
                            <a
                                href="#contact"
                                className="text-neutral-300 hover:text-[#4824a8] transition-colors duration-200 text-sm"
                            >
                                Contact
                            </a>
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-medium text-white">Contact Info</h4>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-3 text-neutral-300">
                                <FiMapPin className="h-4 w-4 text-[#6a37fb] " />
                                <span>Ambepussa, Sri Lanka</span>
                            </div>
                            <div className="flex items-center gap-3 text-neutral-300">
                                <FiMail className="h-4 w-4 text-[#6a37fb]" />
                                <a
                                    href="mailto:nipuny74@gmail.com"
                                    className="hover:text-[#4824a8] transition-colors duration-200"
                                >
                                    nipuny74@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-neutral-300">
                                <FiPhone className="h-4 w-4 text-[#4824a8]" />
                                <a
                                    href="tel:+94705540725"
                                    className="hover:text-[#4824a8] transition-colors duration-200"
                                >
                                    +94 70 554 0725
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-neutral-400 text-sm">
                        © {currentYear} Nipun Yasas. All rights reserved.
                    </p>
                    <p className="text-neutral-400 text-sm">
                        Built with Next.js, TypeScript & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}
