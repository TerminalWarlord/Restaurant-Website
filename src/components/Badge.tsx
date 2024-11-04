const Badge = () => {
    return (
        <div className='w-[120px] h-[120px] rounded-full flex items-center justify-center bg-[#FEBF00]'>
            <div className='border-[#BD1F17] border-[1.25px] rounded-full w-[106px] h-[106px] border-dashed flex items-center justify-center'>
                <p className='text-center text-4xl leading-9' style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Today Offer</p>
            </div>
        </div>
    )
}

export default Badge
