import React from 'react';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const SocialLink = ({ href, ariaLabel, icon: Icon, colorClass }: { 
    href: string; 
    ariaLabel: string; 
    icon: React.ComponentType<{ className?: string }>;
    colorClass: string;
}) => (
    <a
        href={href}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
        className={`
            flex items-center justify-center 
            rounded-full border-[3px] ${colorClass}
            w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16
            transition-all duration-300 ease-in-out
            hover:text-black hover:scale-115 hover:-translate-y-1
        `}
    >
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
    </a>
);

const ProfileSection = ({ colorClass }: { colorClass: string }) => (
    <div className="space-y-3">
        <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-300 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            Nipun Yasas
        </h3>
        <p className="text-neutral-300 text-sm leading-relaxed">
            Full-stack developer passionate about creating exceptional digital experiences
            with modern technologies and clean, efficient code.
        </p>
        <div className="flex space-x-4">
            <SocialLink
                href="https://www.linkedin.com/in/nipun-yasas-1126a8275"
                ariaLabel="LinkedIn"
                icon={FiLinkedin}
                colorClass={colorClass}
            />
            <SocialLink
                href="https://github.com/Nipun-Yasas"
                ariaLabel="GitHub"
                icon={FiGithub}
                colorClass={colorClass}
            />
            <SocialLink
                href="https://wa.me/94705540725"
                ariaLabel="WhatsApp"
                icon={FiPhone}
                colorClass={colorClass}
            />
        </div>
    </div>
);

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const socialColorClass = "border-[#003366] text-[#003366] hover:bg-[#003366] hover:shadow-[0_0_25px_#003366] hover:border-[#003366]";

    return (
        <footer className="w-full mt-2 bg-bgcolor border-t border-white/10 py-8 sm:py-12">
            <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                <div className="space-y-6 md:space-y-0">
                    <div className="md:hidden">
                        <ProfileSection colorClass={socialColorClass} />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                        <div className="hidden md:block">
                            <ProfileSection colorClass={socialColorClass} />
                        </div>

                        <div className="space-y-3">
                            <h4 className="text-lg font-medium text-white">Quick Links</h4>
                            <nav className="flex flex-col space-y-1.5">
                                <Link
                                    href="#about"
                                    className="text-neutral-300 hover:text-[#003366] transition-colors duration-200 text-sm"
                                >
                                    About
                                </Link>
                                <Link
                                    href="#education"
                                    className="text-neutral-300 hover:text-[#003366] transition-colors duration-200 text-sm"
                                >
                                    Education
                                </Link>
                                <Link
                                    href="#technical-skills"
                                    className="text-neutral-300 hover:text-[#003366] transition-colors duration-200 text-sm"
                                >
                                    Skills
                                </Link>
                                <Link
                                    href="#projects"
                                    className="text-neutral-300 hover:text-[#003366] transition-colors duration-200 text-sm"
                                >
                                    Projects
                                </Link>
                                <Link
                                    href="#archivements"
                                    className="text-neutral-300 hover:text-[#003366] transition-colors duration-200 text-sm"
                                >
                                    Achievements
                                </Link>
                                <Link
                                    href="#contact"
                                    className="text-neutral-300 hover:text-[#003366] transition-colors duration-200 text-sm"
                                >
                                    Contact
                                </Link>
                            </nav>
                        </div>

                        <div className="space-y-3">
                            <h4 className="text-lg font-medium text-white">Contact Info</h4>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-3 text-neutral-300">
                                    <FiMapPin className="h-5 w-5 sm:h-4 sm:w-4 text-[#003366] flex-shrink-0" />
                                    <span>Ambepussa, Sri Lanka</span>
                                </div>
                                <div className="flex items-center gap-3 text-neutral-300">
                                    <FiMail className="h-5 w-5 sm:h-4 sm:w-4 text-[#003366] flex-shrink-0" />
                                    <a
                                        href="mailto:nipuny74@gmail.com"
                                        className="hover:text-[#003366] transition-colors duration-200"
                                    >
                                        nipuny74@gmail.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-neutral-300">
                                    <FiPhone className="h-5 w-5 sm:h-4 sm:w-4 text-[#003366] flex-shrink-0" />
                                    <a
                                        href="tel:+94705540725"
                                        className="hover:text-[#003366] transition-colors duration-200"
                                    >
                                        +94 70 554 0725
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
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
