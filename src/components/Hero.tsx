const Hero = () => {
    return (
        <section className="flex justify-between py-32 px-[300px] relative ">
            <div className="flex items-center">
                <div className="flex flex-col absolute">
                    <div className="flex flex-col">
                        <div className="z-10 w-[830px] h-[272px] py-0" style={{ background: 'linear-gradient(90deg, rgba(189, 31, 23, 0.00) 32.88%, rgba(189, 31, 23, 0.70) 100%)' }}>
                            <h2 className="z-110 text-[120px] leading-[130px] text-white pt-[20px]" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Taste the authentic
                                Saudi cuisine</h2>
                        </div>
                        <p className="z-10 text-2xl text-white font-normal mb-9" style={{ fontFamily: '"Roboto", sans-serif' }}>Among the best Saudi chefs in the world, serving you something beyond flavor. </p>
                    </div>

                    <button className="px-6 py-4 bg-[#FEBF00] uppercase font-bold w-fit" style={{ fontFamily: '"Roboto", sans-serif' }}>Explore Menu</button>
                </div>
            </div>
            <div className="relative z-0">
                <img src="/images/food.png" alt="food" className="w-[700px] h-[649px]" />
                <img src="/images/vector.svg" alt="food" className="absolute -top-8 -right-7 w-[45px] h-[45px]" />

            </div>
        </section>
    )
}

export default Hero
