import { useState } from "react"

const MENU = {
    about: {
        title: 'Exceptional culinary experience and delicious food',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.'
    },
    experience: {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.'
    },
    contact: {
        title: 'Contact us',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.'
    },

};

type TabKey = keyof typeof MENU;

const Tabs = () => {
    const [currentTab, setCurrentTab] = useState<TabKey>('about');

    function handleTabChange(tabName: TabKey) {
        setCurrentTab(tabName);
    }
    return (
        <div className="w-full flex-grow">
            <ul className="flex list-none space-x-4 border-b-2 border-[#B52B1D] w-full text-sm"

                style={{ fontFamily: '"Inter", sans-serif' }}>
                <li className={`px-4 cursor-pointer transform ease-in duration-300  py-[6px] ${currentTab == 'about' ? ' bg-[#B52B1D] text-white' : ''}`} onClick={() => {
                    handleTabChange('about')
                }}>About</li>
                <li className={`px-4 cursor-pointer transform ease-in duration-300 py-[6px] ${currentTab == 'experience' ? ' bg-[#B52B1D] text-white' : ''}`} onClick={() => {
                    handleTabChange('experience')
                }}>Experience</li>
                <li className={`px-4 cursor-pointer transform ease-in duration-300 py-[6px] ${currentTab == 'contact' ? ' bg-[#B52B1D] text-white' : ''}`} onClick={() => {
                    handleTabChange('contact')
                }}>Contact</li>
            </ul>
            <h2 className="text-[3.875rem] leading-[3.875rem] mt-8 mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}> {MENU[currentTab].title}</h2>
            <p className="text-base leading-6 mt-4 mb-8" style={{ fontFamily: '"Roboto", sans-serif' }}> {MENU[currentTab].description}</p>
            <div className="my-4 flex items-center space-x-8" style={{ fontFamily: '"Roboto", sans-serif' }}>
                <button className="uppercase px-6 py-4 text-lg leading-6 bg-[#FEBF00] font-bold">About More</button>
                <div className="flex flex-grow space-x-2">
                    <img src="/icons/telephone.svg" alt="" />
                    <p className="text-lg font-bold">+88 3426 739 485</p>
                </div>
            </div>

        </div>
    )
}

export default Tabs
