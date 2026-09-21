import Search from "../../assets/search-normal.svg";
import Notification from "../../assets/notification.svg"
import Help from "../../assets/help.svg"
import Down from "../../assets/down.svg"


function Header() {
    return (
        <header className=" w-full px-4 sm:px-6 lg:px-[32px] xl:px-0">
            <div className=" w-full xl:w-[1098px] min-h-[73px] mx-auto pt-[20px]  pb-[20px] border-b border-[#E4E4E4] flex items-center justify-between gap-4">
                {/* Search */}
                <div className=" flex items-center justify-between border border-[#E4E4E4] rounded-[10px] h-[40px] w-full max-w-[355px] sm:w-[280px] md:w-[320px] lg:w-[355px]">
                    <p className="text-[#828282] text-[12px] font-normal pl-[15px]">Search type of keywords</p>
                    <img src={Search} alt="Search" className="w-[18px] h-[18px] mr-[15px]"/>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-4 sm:gap-6">
                    {/* Notification + Help */}
                    <div className="flex items-center gap-4 sm:gap-6">
                        <img src={Notification} alt="Notifications" className="w-[24px] h-[24px]"/>
                        <img src={Help} alt="Help" className=" w-[21.5px] h-[21.5px] hidden sm:block"/>
                    </div>

                    {/* User */}
                    <div className="flex items-center gap-[10px]">
                        <div className=" bg-[#9E9E9E] rounded-full  w-[40px]  h-[40px] shrink-0"></div>
                        <div className="hidden md:block">
                            <p className="text-[14px] font-semibold">Laurice</p>
                            <p className="text-[12px] text-[#828282] font-normal">@laurice22</p>
                        </div>
                        <img src={Down} alt="Profile menu" className=" w-[24px] h-[24px] hidden sm:block"/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;