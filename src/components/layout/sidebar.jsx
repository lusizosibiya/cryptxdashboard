import Logo from "../../assets/Logo.svg";
import Overview from "../../assets/Overview.svg";
import Chart from "../../assets/graph.svg";
import Transaction from "../../assets/wallet-2.svg";
import Wallet from "../../assets/wallet-minus.svg";
import Mailbox from "../../assets/sms.svg";
import Setting from "../../assets/setting-2.svg";
import Logout from "../../assets/logout.svg";

function Sidebar() {
    return (
        <div className="bg-[#F3F3F3] h-[1025px] w-[263px]">
            <div className="flex w-[170px] h-[41px] pt-[32px] pl-[40px]">
                <img src={Logo} alt="logo" className="w-[36px] h-[24px] pt-[10px] pl-[3px]" />
                <h1 className="text-[21px] font-bold">CryptX</h1>
            </div>
            <div className="relative w-[166px] h-[416px] pt-[136px] pl-[40px]">
                <div className="flex h-[32px] pr-[11px] pb-[8px] gap-[20px]">
                    <img src={Overview} alt="overview" className="w-[24px] h-[24px]" />
                    <h2 className="text-[14px] text-[#6154F0] font-['Poppins'] font-semibold">Overview</h2>
                    <div className="absolute w-[10px] h-[10px] bg-[#6154F0] rounded-full top-[144px] left-[225px]"></div>
                </div>
                <div className="flex h-[32px] pr-[11px] pb-[8px] gap-[20px] mt-[32px]">
                    <img src={Chart} alt="chart" className="w-[24px] h-[24px]" />
                    <h2 className="text-[14px] text-[#9E9E9E] font-['Poppins'] font-normal">Chart</h2>
                </div>
                <div className="flex h-[32px] pr-[11px] pb-[8px] gap-[20px] mt-[32px]">
                    <img src={Transaction} alt="transaction" className="w-[24px] h-[24px]" />
                    <h2 className="text-[14px] text-[#9E9E9E] font-['Poppins'] font-normal">Transaction</h2>
                </div>
                <div className="flex h-[32px] pr-[11px] pb-[8px] gap-[20px] mt-[32px]">
                    <img src={Wallet} alt="wallet" className="w-[24px] h-[24px]" />
                    <h2 className="text-[14px] text-[#9E9E9E] font-['Poppins'] font-normal">Wallet</h2>
                </div>
                <div className="flex h-[32px] pr-[11px] pb-[8px] gap-[20px] mt-[32px]">
                    <img src={Mailbox} alt="mailbox" className="w-[24px] h-[24px]" />
                    <h2 className="text-[14px] text-[#9E9E9E] font-['Poppins'] font-normal">Mailbox</h2>
                </div>
                <div className="flex h-[32px] pr-[11px] pb-[8px] gap-[20px] mt-[32px]">
                    <img src={Setting} alt="setting" className="w-[24px] h-[24px]" />
                    <h2 className="text-[14px] text-[#9E9E9E] font-['Poppins'] font-normal">Setting</h2>
                </div>
                <div className="flex h-[32px] pr-[11px] pb-[8px] gap-[20px] mt-[32px]">
                    <img src={Logout} alt="logout" className="w-[24px] h-[24px]" />
                    <h2 className="text-[14px] text-[#9E9E9E] font-['Poppins'] font-normal">Logout</h2>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;