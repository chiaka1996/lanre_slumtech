const Generosity = () => {
  return (
    <section className="lg:mx-20 md:mx-7 mx-2 h-[200px] max-[1103px]:h-[220px] max-[780px]:h-[250px] max-[450px]:h-[350px] bg-[#119566] relative rounded-[16px]">
        <div className="space-y-[20px] max-[558px]:space-y-[10px] z-50 h-full w-full absolute flex justify-between items-center px-[50px] max-[616px]:px-[20px] max-[1222px]:gap-2 max-[1222px]:flex-wrap">
            <div className="text-[#FAFCFE] space-y-[16px]">
                <h3 className="text-[40px] max-[740px]:text-[32px] font-semibold">Your Generosity powers possibility</h3>
                <p>Help us educate, empower, energise, and elevate communities worldwide</p>
            </div>

            <div className="flex max-[450px]:flex-col flex-wrap items-center gap-4 max-[450px]:w-full">
                <button className="max-[450px]:w-full text-green bg-[#FAFCFE] hover:bg-[#92E8C8] cursor-pointer py-4 px-6 rounded-xl font-semibold">Donate Now</button>
                <button className="max-[450px]:w-full text-green bg-[#92E8C8] hover:bg-[#FAFCFE] cursor-pointer py-4 px-6 rounded-xl font-semibold">Partner with Us</button>
            </div>
        </div>

        <div className="absolute w-full h-full top-0 bg-[url('/assets/wavy-texture.png')] bg-cover bg-center opacity-25"> </div>
    </section>
  )
}

export default Generosity