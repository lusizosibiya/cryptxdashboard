import MetricCard from "../user_interface/metric_card";
import Bitcoin from "../../assets/Bitcoin.svg";
import Ethereum from "../../assets/Ethereum.svg";
import Litecoin from "../../assets/Litecoin.svg";
import Cardano from "../../assets/Cardano.svg";
import BitcoinColored from "../../assets/Bitcoin-colored.svg";
import EthereumColored from "../../assets/Ethereum-colored.svg";
import LitecoinColored from "../../assets/Litecoin-colored.svg";
import CardanoColored from "../../assets/Cardano-colored.svg";
import ChartVisual from "../user_interface/chart_visual";
import TransactionalTable from "../user_interface/transactional_table";

function Main() {
    return (
        <div>
            {/* Top Section */}
            <div className="flex flex-col xl:flex-row gap-[20px] w-full">
                <div className=" grid grid-cols-2 gap-x-[12px] gap-y-[16px] sm:gap-x-[22px] sm:gap-y-[30px] w-full lg:w-[396px]">
                    <MetricCard icon={Bitcoin} iconBg="#FFB719" price="$40,291" coin="Bitcoin" symbol="BTC" change="+0.25%" positive={true}/>
                    <MetricCard icon={Ethereum} iconBg="#6154F0" price="$18,291" coin="Ethereum" symbol="ETH" change="+0.25%" positive={true}/>
                    <MetricCard icon={Litecoin} iconBg="#3857E8" price="$8,291" coin="Litecoin" symbol="LTC" change="+0.25%" positive={true}/>
                    <MetricCard icon={Cardano} iconBg="#16C75B" price="$3,291" coin="Cardano" symbol="ADA" change="-2.05%" positive={false}/>
                </div >
                <div className="w-full xl:flex-1 min-w-0">
                    <ChartVisual />
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col xl:flex-row gap-[40px] w-full mt-[28px]">
                {/* Live Market */}
                <div className="w-full xl:flex-1 min-w-0">
                    <h2 className="text-[18px] font-semibold text-[#222222] mb-[20px]">Live Market</h2>
                    <div className="flex flex-col gap-[18px]">
                        {/* Ethereum */}
                        <div className="grid grid-cols-[40px_1.2fr_0.8fr_0.9fr_1fr] items-center gap-[12px]">
                            <div className="w-[38px] h-[38px] rounded-full border border-[#E4E4E4] flex items-center justify-center">
                                <img src={EthereumColored} alt="Bitcoin" className="w-[20px] h-[20px]" />
                            </div>
                            <div>
                                <p className="text-[13px] font-semibold">Ethereum</p>
                                <p className="text-[11px] text-[#AAAAAA]">ETH / USDT</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-[#BBBBBB]">Change</p>
                                <p className="text-[11px] text-[#16C75B] mt-[4px]">+14.02%</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-[#BBBBBB]">Price</p>
                                <p className="text-[11px] font-semibold mt-[4px]">39,786 USD</p>
                            </div>
                            <svg viewBox="0 0 120 35" className="w-full max-w-[120px] h-[35px]">
                                <path d="M2 10 C10 10,13 25,22 25 C31 25,32 12,40 12 C48 12,50 26,58 25 C67 24,68 10,76 12 C85 14,88 8,96 9 C105 10,108 3,116 4" fill="none" stroke="#6154F0" strokeWidth="2"/>
                            </svg>
                        </div>
                        {/* Bitcoin */}
                        <div className="grid grid-cols-[40px_1.2fr_0.8fr_0.9fr_1fr] items-center gap-[12px]">
                            <div className="w-[38px] h-[38px] rounded-full border border-[#E4E4E4] flex items-center justify-center">
                                <img src={BitcoinColored} alt="Bitcoin" className="w-[20px] h-[20px]" />
                            </div>
                            <div>
                                <p className="text-[13px] font-semibold">Bitcoin</p>
                                <p className="text-[11px] text-[#AAAAAA]">ETH / USDT</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-[#BBBBBB]">Change</p>
                                <p className="text-[11px] text-[#16C75B] mt-[4px]">+4.02%</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-[#BBBBBB]">Price</p>
                                <p className="text-[11px] font-semibold mt-[4px]">21,786 USD</p>
                            </div>
                            <svg viewBox="0 0 120 35" className="w-full max-w-[120px] h-[35px]">
                                <path d="M2 10 C10 10,13 25,22 25 C31 25,32 12,40 12 C48 12,50 26,58 25 C67 24,68 10,76 12 C85 14,88 8,96 9 C105 10,108 3,116 4" fill="none" stroke="#FFB719" strokeWidth="2"/>
                            </svg>
                        </div>
                        {/* Litecoin */}
                        <div className="grid grid-cols-[40px_1.2fr_0.8fr_0.9fr_1fr] items-center gap-[12px]">
                            <div className="w-[38px] h-[38px] rounded-full border border-[#E4E4E4] flex items-center justify-center">
                                <img src={LitecoinColored} alt="Litecoin" className="w-[20px] h-[20px]" />
                            </div>
                            <div>
                                <p className="text-[13px] font-semibold">Litecoin</p>
                                <p className="text-[11px] text-[#AAAAAA]">LTC / USDT</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-[#BBBBBB]">Change</p>
                                <p className="text-[11px] text-[#FF6846] mt-[4px]">-4.02%</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-[#BBBBBB]">Price</p>
                                <p className="text-[11px] font-semibold mt-[4px]">9,786 USD</p>
                            </div>
                            <svg viewBox="0 0 120 35" className="w-full max-w-[120px] h-[35px]">
                                <path d="M2 10 C10 10,13 25,22 25 C31 25,32 12,40 12 C48 12,50 26,58 25 C67 24,68 10,76 12 C85 14,88 8,96 9 C105 10,108 3,116 4" fill="none" stroke="#3857E8" strokeWidth="2"/>
                            </svg>
                        </div>
                        {/* Cardano */}
                        <div className="grid grid-cols-[40px_1.2fr_0.8fr_0.9fr_1fr] items-center gap-[12px]">
                            <div className="w-[38px] h-[38px] rounded-full border border-[#E4E4E4] flex items-center justify-center">
                                <img src={CardanoColored} alt="Cardano" className="w-[20px] h-[20px]" />
                            </div>
                            <div>
                                <p className="text-[13px] font-semibold">Cardano</p>
                                <p className="text-[11px] text-[#AAAAAA]">ADA / USDT</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-[#BBBBBB]">Change</p>
                                <p className="text-[11px] text-[#16C75B] mt-[4px]">+0.02%</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-[#BBBBBB]">Price</p>
                                <p className="text-[11px] font-semibold mt-[4px]">4,786 USD</p>
                            </div>
                            <svg viewBox="0 0 120 35" className="w-full max-w-[120px] h-[35px]">
                                <path d="M2 10 C10 10,13 25,22 25 C31 25,32 12,40 12 C48 12,50 26,58 25 C67 24,68 10,76 12 C85 14,88 8,96 9 C105 10,108 3,116 4" fill="none" stroke="#16C75B" strokeWidth="2"/>
                            </svg>
                        </div>
                    </div>
                </div>
                {/* Transactions */}
                <div className="w-full xl:w-[320px] xl:shrink-0">
                    <TransactionalTable />
                </div>
            </div>
        </div>
    );
}

export default Main;