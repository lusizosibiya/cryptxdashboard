function MetricCard({
    icon,
    iconBg,
    price,
    coin,
    symbol,
    change,
    positive = true
}) {
    return (
        <div className="w-full h-[135px] sm:h-[148px] lg:w-[187px] lg:h-[148px] bg-white rounded-[16px] shadow-[0_8px_30px_rgba(0,0,0,0.05)] p-[18px] sm:p-[22px]">
            {/* Top Row */}
            <div className="flex items-start justify-between">
                {/* Coin Icon */}
                <div className=" w-[40px] h-[40px] rounded-[8px] flex items-center justify-center" style={{ backgroundColor: iconBg }}>
                    <img src={icon} alt={`${coin} icon`} className="w-[20px] h-[20px]"/>
                </div>

                {/* Percentage */}
                <div className={`flex items-center gap-[7px] text-[10px] sm:text-[11px] font-medium
                    ${ positive ? "text-[#00C853]" : "text-[#FF6846]"}`}>
                    <span className="text-[8px]"> {positive ? "▲" : "▼"}</span>
                    <span>{change}</span>
                </div>
            </div>
            {/* Price */}
            <h2 className=" mt-[18px] text-[18px] sm:text-[22px] font-semibold text-[#222222] leading-none">{price}</h2>

            {/* Coin Name */}
            <p className=" mt-[10px] text-[9px] sm:text-[10px] text-[#AAAAAA]">{coin} - {symbol}</p>
        </div>
    );
}

export default MetricCard;