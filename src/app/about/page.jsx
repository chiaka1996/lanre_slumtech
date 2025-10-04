import Image from "next/image";

const AboutPage = () => {
    return(
        <div className="max-w-[1200px] mx-auto px-[16px] md:px-[20px] xl:px-0 pt-[52px] md:pt-[72px] text-[#06192F]">
            <div className="space-y-[24px] text-center">
                <h1 className="font-[600] text-[42px] text-[#181D27] tracking-[-2%]">The Visionary Behind SlumTech</h1>
                <h5 className="text-[#535862] text-[20px]">Meet Olanrewaju Ogunleye</h5>
            </div>
             
             {/* banner image */}
             <div className="mt-[34px] md:mt-[57px] relative w-full h-[341px] md:h-[648px] rounded-[16px]">
            <Image src="https://res.cloudinary.com/chiaka/image/upload/v1759573865/Frame_37_o359d0.png" fill alt="tech foundation" className="object-cover object-center rounded-[16px]" />
             </div>

                {/* social media links */}
             <div className="mt-[34px] flex justify-center gap-x-[16px] items-end">
                <div className="relative w-[24px] h-[24px] cursor-pointer">
                    <Image src="/icons/linkedin.png" fill alt="slumtech foundation linkedin" className="object-cover" />
                </div>
                <div className="relative w-[24px] h-[24px] cursor-pointer">
                    <Image src="/icons/facebook.png" fill alt="slumtech foundation linkedin" className="object-cover" />
                </div>
                 <div className="relative w-[24px] h-[24px] cursor-pointer">
                    <Image src="/icons/instagram.png" fill alt="slumtech foundation linkedin" className="object-cover" />
                </div>
                 <div className="relative w-[24px] h-[24px] cursor-pointer">
                    <Image src="/icons/x.png" fill alt="slumtech foundation linkedin" className="obect-cover" />
                </div>
                 <div className="relative w-[69px] h-[17px] cursor-pointer">
                    <Image src="/icons/forbes.png" fill alt="slumtech foundation linkedin" className="object-cover" />
                </div>
             </div>

             <section className="mt-[32px] md:mt-[66px] max-w-[920px] mx-auto leading-[144%] tracking-0 text-[16px] sm:[18px] md:text-[20px] space-y-[32px]">
                <div>
                <p>
                The SlumTech Foundation was born from the vision of Olanrewaju Ogunleye, a tech entrepreneur and philanthropist who grew up believing that no child should be denied education because of poverty.
                </p>
                <p>Through his leadership, SlumTech has become more than a nonprofit — it is a movement to transform slums into centers of learning, innovation, and hope. His approach blends technology, compassion, and practical solutions to empower the most underserved.
                </p>
                </div>

                <div className="space-y-[26px]">
                    <h1 className="text-[24px] md:text-[32px] font-[600] text-[#181D27]">Honours and Recognition</h1>
                    <p>
                    Olanrewajuyou&#39;s work through SlumTech has not gone unnoticed. He has been formally recognized by 
                    <strong> U.S. Senator John Cornyn</strong> for his leadership in using technology for social good. 
                    The <strong>City of Austin</strong> and its Mayor also honored him and the Foundation for their contributions to 
                    underserved communities in Texas and around the world.
                    </p>
                    <p>
                    This recognition reflects not only the impact of SlumTech, but also the urgent need for solutions that bridge inequality with innovation.
                    </p>
                    <p>
                    He is an active member of the Forbes Technology Council, the World Economic Forum, the Institute of Electrical and Electronics Engineers (IEEE), the Project Management Institute (PMI), the Institute of Directors (UK), and Chatham House (UK).His thought leadership has been featured in several publications, including articles published on Forbes. 
                    </p>
                </div>

                  <div className="space-y-[26px]">
                    <h1 className="text-[24px] md:text-[32px] font-[600] text-[#181D27]">Looking Ahead</h1>
                    <p>
                   SlumTech continues to grow globally, expanding free school fees programs, launching renewable energy projects, 
                   and building STEM labs across underserved communities. With the support of donors, partners, and changemakers, 
                   we are proving that poverty is not destiny — opportunity changes everything.
                    </p>
                </div>
             </section>

             <section className="mt-[20px] md:pt-[80px] space-y-[38px]">
                <h2 className="font-[500] text-[32px] leading-[144%] hidden md:block text-center w-full">Member</h2>
                <div>
                    
                </div>

             </section>
        </div>
    )
}

export default AboutPage;