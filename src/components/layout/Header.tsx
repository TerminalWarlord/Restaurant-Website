const Header = () => {
    return (
        <nav className="flex justify-between  py-8 px-[300px] sticky top-0 z-30">
            <div className="flex items-center text-white">
                <div className="flex items-center pr-[60px] space-x-[6px]">
                    <img src="/images/frame.png" alt="Restaurent Logo" />
                    <div className="flex">
                        <h1 className="text-[28.444px] font-semibold pr-0 mr-0" style={{ fontFamily: '"Poppins", sans-serif' }}>Restau</h1>
                        <h1 className="text-[28.444px] font-normal" style={{ fontFamily: '"Poppins", sans-serif' }}>rant</h1>
                    </div>

                </div>
                <ul className="list-none flex space-x-10 text-[15px]" style={{ fontFamily: '"Raleway", sans-serif' }}>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Portfolio</a>
                    </li>
                    <li>
                        <a href="/">Clients</a>
                    </li>
                    <li>
                        <a href="/">Blog</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </div>
            <button className="uppercase px-6 py-2.5 bg-[#FEBF00] font-bold line leading-6">Book a table</button>
        </nav>
    )
}

export default Header;
