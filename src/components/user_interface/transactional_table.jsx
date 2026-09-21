import transactionalData from "../../data/transactional_data";

function TransactionalTable() {
    return (
        <div className="w-full"> 
            {/* Heading */}
            <h2 className="text-[18px] font-semibold text-[#222222] mb-[22px]">Transactions</h2>
            {/* Transaction Rows */}
            <div className="flex flex-col gap-[20px]"> {transactionalData.map((transaction) => (
                    <div key={transaction.id} className=" grid grid-cols-[40px_1fr_auto] items-center gap-[10px] w-full">
                        {/* Icon */}
                        <div className=" w-[34px] h-[34px] rounded-full border border-[#E4E4E4] flex items-center justify-center">
                            <div className=" w-[18px] h-[18px] rounded-full flex items-center  justify-center" style={{ backgroundColor: transaction.iconBg,}}>
                            <img src={transaction.icon} alt="" className="w-[10px] h-[10px]"/></div>
                        </div>
                        <div>
                            <p className="text-[12px] sm:text-[13px] font-semibold text-[#222222]">{transaction.name}</p>
                            <p className="text-[10px] sm:text-[11px] text-[#AAAAAA] mt-[3px]">{transaction.type}</p>
                        </div>
                        {/* Amount and Date */}
                        <div className="text-right">
                            <p className="text-[11px] sm:text-[12px] font-semibold text-[#222222]">{transaction.amount}</p>
                            <p className="text-[9px] sm:text-[10px] text-[#AAAAAA] mt-[3px] whitespace-nowrap">{transaction.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TransactionalTable;