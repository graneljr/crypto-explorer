const CurrentCoins = ({crypto_data,colBg }) => {
    return ( 
        <table className="min-w-max table-auto">
            <thead>
                <tr>
                    <th className={`sticky left-0 z-10 px-4 py-2 text-left xl:px-7 xl:text-3xl xl:font-medium ${colBg}`}>#&nbsp;&nbsp;&nbsp;Coin</th>
                    <th className="px-4 py-2 text-left xl:text-3xl xl:font-medium xl:px-9 xl:py-3 ">Price</th>  
                    <th className="px-4 py-2 text-left xl:text-3xl xl:font-medium xl:px-9 xl:py-3 ">1h</th>
                    <th className="px-4 py-2 text-left xl:text-3xl xl:font-medium xl:px-9 xl:py-3 ">24h</th>
                    <th className="px-4 py-2 text-left xl:text-3xl xl:font-medium xl:px-9 xl:py-3  ">7d</th>
                    <th className="px-4 py-2 text-left xl:text-3xl xl:font-medium xl:px-9 xl:py-3 ">Market cap</th>
                </tr>
            </thead>
            <tbody>
                {crypto_data.map((data, index) => {
                    const prices = data.sparkline_in_7d.price;
                    const startPrice = prices[0];
                    const endPrice = prices[prices.length - 1];
                    const change = ((endPrice - startPrice) / startPrice) * 100;
                    const coins_in_7d = change.toFixed(2)
                    return (
                        <tr key={index}>
                            <td className={`sticky left-0 z-10 px-4 py-2 text-left ${colBg}  text-left xl:px-7 xl:text-[17px] xl:font-medium`}>{index + 1} &nbsp;&nbsp;&nbsp;{data.name} ({data.symbol.toUpperCase()})</td>
                            <td className="px-4 py-2 xl:text-[17px] xl:font-medium xl:px-9 xl:py-3">${data.current_price.toLocaleString()}</td>
                            <td className={`px-4 py-2 xl:text-[17px] xl:font-mediumxl:px-9 xl:py-3  ${data.price_change_percentage_1h_in_currency.toFixed(2) > 0 ? "text-green-400 before:content-['+']" : "text-red-400"}`}>{data.price_change_percentage_1h_in_currency.toFixed(2)}%</td>
                            <td className={`px-4 py-2 xl:text-[17px] xl:font-medium xl:px-9 xl:py-3 ${data.price_change_percentage_24h.toFixed(2) > 0 ? "text-green-400 before:content-['+']" : "text-red-400"}`}>{data.price_change_percentage_24h.toFixed(2)}%</td>
                            <td className={`px-4 py-2 xl:text-[17px] xl:font-medium xl:px-9 xl:py-3 ${coins_in_7d > 0 ? "text-green-400 before:content-['+']" : "text-red-400"}`}>{coins_in_7d}%</td>
                            <td className="px-4 py-2 xl:text-[17px] xl:font-medium xl:px-9 xl:py-3">${data.market_cap.toLocaleString()}</td>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>
    );
}
 
export default CurrentCoins;