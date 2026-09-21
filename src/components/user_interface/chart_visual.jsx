function ChartVisual() {
    return (
        <div className="w-full h-[326px] bg-white rounded-[16px] shadow-[0_10px_35px_rgba(0,0,0,0.06)] px-[24px] pt-[22px] pb-[14px]">
            <h2 className="text-[20px] font-semibold text-[#222222]">BTC Prices</h2>
            {/* Chart Area */}
            <div className="w-full h-[245px] mt-[8px]">
                <svg viewBox="0 0 360 240" className="w-full h-full">
                    <text x="0" y="30" fontSize="10" fill="#9E9E9E">$800</text>
                    <text x="0" y="75" fontSize="10" fill="#9E9E9E">$600</text>
                    <text x="0" y="120" fontSize="10" fill="#9E9E9E">$400</text>
                    <text x="0" y="165" fontSize="10" fill="#9E9E9E">$200</text>
                    <text x="0" y="205" fontSize="10" fill="#9E9E9E">0</text>
                    <line x1="45" y1="200" x2="350" y2="200" stroke="#E4E4E4"/>
                    <rect x="168" y="95" width="28" height="105" fill="#E4E1FF"/>
                    <polyline points="
                            45,90
                            70,80
                            95,55
                            120,65
                            145,85
                            181,90
                            210,75
                            235,80
                            260,140
                            285,145
                            310,70
                            350,55
                        "
                        fill="none" stroke="#6154F0" strokeWidth="2"/>

                    {/* May Point */}
                    <circle cx="181" cy="90" r="5" fill="#6154F0"/>
                    <rect x="145" y="60" width="72" height="28" rx="8" fill="#6154F0"/>
                    <text x="181" y="78" fontSize="11" fill="white" textAnchor="middle">$25,240</text>
                    {/* Month Labels */}
                    <text x="55" y="230" fontSize="10" fill="#9E9E9E">Jan</text>
                    <text x="105" y="230" fontSize="10" fill="#9E9E9E">Mar</text>
                    <text x="170" y="230" fontSize="10" fill="#9E9E9E">May</text>
                    <text x="225" y="230" fontSize="10" fill="#9E9E9E">Jul</text>
                    <text x="280" y="230" fontSize="10" fill="#9E9E9E">Sep</text>
                    <text x="330" y="230" fontSize="10" fill="#9E9E9E">Nov</text>
                </svg>
            </div>
        </div>
    );
}

export default ChartVisual;