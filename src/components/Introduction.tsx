import IntroductionImage from "./introduction/IntroductionImage";
import Tabs from "./introduction/Tabs";

const Introduction = () => {
    return (
        <div className="py-[7.5rem] px-[18.75rem] flex space-x-20">
            <div className="flex-shrink-0">
                <IntroductionImage />
            </div>
            <Tabs />
        </div>
    )
}

export default Introduction;

