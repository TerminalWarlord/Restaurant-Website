
const IntroductionImage = () => {
    return (
        <div className=" bg-[url('/images/burger_and_drink.png')] w-[38.375rem] h-[28.75rem] bg-cover bg-center relative">
            <div className="absolute w-60 h-[8.5rem] bg-white rounded-[20px] top-8 left-6 flex items-center  px-5 space-x-3" style={{ boxShadow: '-5px 22px 26px 0px rgba(95, 95, 95, 0.25)' }}>
                <div className="relative">
                    <img src="/images/progress.svg" alt="progress bar" className="w-40 h-w-40" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <span className="text-[1.625rem] font-bold text-black" style={{ fontFamily: '"Open Sans", sans-serif' }}>50+</span>
                    </div>
                </div>

                <h4 className="font-semibold" style={{ fontFamily: '"Open Sans", sans-serif' }}>Market
                    Experiences</h4>
            </div>
        </div>
    )
}

export default IntroductionImage
