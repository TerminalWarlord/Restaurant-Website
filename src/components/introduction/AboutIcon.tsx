import React from "react";

const AboutIcon: React.FC<{ title: string, subtitle: string, icon: string }> = ({ icon, title, subtitle }) => {
    return (
        <div className="flex items-center w-[440px]">
            <div
                className="w-[90px] h-[90px] rounded-full flex items-center justify-center bg-white"
                style={{ filter: 'drop-shadow(0px 7px 16px rgba(0, 0, 0, 0.10))' }}
            >
                <img src={icon} alt={title} />
            </div>
            <div className="pl-4">
                <h2 className="uppercase text-3xl" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>{title}</h2>
                <p className="text-xl tracking-[-0.3px]" style={{ fontFamily: '"Inter", sans-serif' }}>{subtitle}</p>
            </div>
        </div>
    )
}

export default AboutIcon;
