import AboutIcon from "./introduction/AboutIcon";
import IntroductionImage from "./introduction/IntroductionImage";
import Tabs from "./introduction/Tabs";

const Introduction = () => {
    return (
        <>
            <div className="pt-[7.5rem] px-[18.75rem] flex space-x-20">
                <div className="flex-shrink-0">
                    <IntroductionImage />
                </div>
                <Tabs />
            </div>
            <div className="flex justify-between items-start mx-[300px] pt-[74px] pb-[130px] ">
                <AboutIcon title="fast delivery" subtitle="Within 30 minutes" icon="/icons/package.svg" />
                <AboutIcon title="absolute dining" subtitle="Best buffet restaurant" icon="/icons/medal.svg" />
                <AboutIcon title="pickup delivery" subtitle="Grab your food order" icon="/icons/bag.svg" />
            </div>
        </>
    )
}

export default Introduction;

