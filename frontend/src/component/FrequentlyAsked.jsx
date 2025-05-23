import { useState } from "react";
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-gray-50/20 gap-y-[5px] mb-3.5 px-[10px] py-3 rounded-[6px]">
            <button
                className="flex justify-between w-full text-left text-lg font-medium"
                onClick={() => setIsOpen(!isOpen)}
            >
                {question}
                <span>{isOpen ? "↓" : "→"}</span>
            </button>
            {isOpen && (
                <div className="mt-2 transition-all duration-300 ea
                se-in-out">
                    {answer}
                </div>
            )}
        </div>
    );
  };
const FrequentlyAsked = () => {
    const faqs = [
        {
            question: "What is Crypto Explorer?",
            answer: "Crypto Explorer is a platform to track and analyze cryptocurrency trends.",
        },
        {
            question: "Is Crypto Explorer reliable?",
            answer: "Yes, we provide accurate and up-to-date information sourced from CoinGecko.",
        },
        {
            question: "Is Crypto Explorer free to use?",
            answer: "Yes, Crypto Explorer is completely free to use.",
           
        },
      ];
    return ( 
        <div className="w-full">
            <h1 className="text-[30px] font-medium !mb-[2%]">Frequently Asked Questions</h1>
            <div>
                {faqs.map((faq, index) => (
                    <FAQItem key={index} {...faq} />
                ))}
                
            </div>
        </div>
     );
}
 
export default FrequentlyAsked;