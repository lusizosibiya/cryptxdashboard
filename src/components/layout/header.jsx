import Search from "../../assets/search-normal.svg";
import Notification from "../../assets/notification.svg"
import Help from "../../assets/help.svg"
import Down from "../../assets/down.svg"


function Header() {
    return (
        <div className="flex w-[1098px] h-[73px] mt-[32px] ml-[90px]">
            <div className="flex rounded-[10px] md border-1 border-[#E4E4E4] w-[355px] h-[40px]">
                <p className="text-[#828282] text-[12px] font-['Poppins'] font-400 pt-[11px] pl-[15px]">Search type of keywords</p>
                <img src={Search} alt="logo" className="w-[18px] h-[18px] mt-[11px] ml-[155px]"></img>
            </div>
            <div className="flex gap-[24px] ml-[470px]">
                <img src={Notification} alt="logo" className="w-[24px] h-[24px] mt-[11px]"></img>
                <img src={Help} alt="logo" className="w-[21.5px] h-[21.5px] mt-[11px]"></img>
            </div>
            <div className="flex gap-[10px]">
                <div className="bg-[#9E9E9E] rounded-full w-[40px] h-[40px] ml-[68px]"></div>
                <div className>
                    <p className="text-[14px] font-semibold">Laurice</p>
                    <p className="text-[12px] text-[#828282] font-normal">@laurice22</p>
                </div>
                <img src={Down} alt="logo" className="w-[24px] h-[24px] mt-[9px]"></img>
            </div>
        </div>
    );
}

export default Header;