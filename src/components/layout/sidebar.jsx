import Logo from "../../assets/Logo.svg";
import Overview from "../../assets/Overview.svg";
import Chart from "../../assets/graph.svg";
import Transaction from "../../assets/wallet-2.svg";
import Wallet from "../../assets/wallet-minus.svg";
import Mailbox from "../../assets/sms.svg";
import Setting from "../../assets/setting-2.svg";
import Logout from "../../assets/logout.svg";

function Sidebar() {
    const menuItems = [
        { name: "Overview", icon: Overview, active: true },
        { name: "Chart", icon: Chart },
        { name: "Transaction", icon: Transaction },
        { name: "Wallet", icon: Wallet },
        { name: "Mailbox", icon: Mailbox },
        { name: "Setting", icon: Setting },
        { name: "Logout", icon: Logout },
    ];

    return (
        <aside className=" hidden md:flex md:w-[88px] xl:w-[263px] min-h-screen bg-[#F3F3F3] flex-col shrink-0 transition-all duration-300 ">
            {/* Logo */}
            <div className="flex items-center md:justify-center xl:justify-start xl:px-[40px] pt-[32px] gap-[10px]">
                <img src={Logo} alt="CryptX logo" className="w-[36px] h-[24px]"/>
                <h1  className="hidden xl:block text-[21px] font-bold">CryptX</h1>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col mt-[90px] gap-[32px] ">
                {menuItems.map((item) => (
                    <div key={item.name} className="relative flex items-center md:justify-center xl:justify-start xl:px-[40px] gap-[20px] h-[32px]">
                        <img src={item.icon} alt={item.name} className="w-[24px] h-[24px] shrink-0"/>
                        <span className={` hidden xl:block text-[14px] whitespace-nowrap
                                ${
                                    item.active
                                        ? "text-[#6154F0] font-semibold"
                                        : "text-[#9E9E9E] font-normal"
                                }`}>
                            {item.name}
                        </span>
                        
                        {item.active && (
                            <div className="hidden xl:block absoluteright-[28px] w-[10px] h-[10px] rounded-full bg-[#6154F0]"></div>
                        )}
                    </div>
                ))}
            </nav>
        </aside>
    );
}

export default Sidebar;