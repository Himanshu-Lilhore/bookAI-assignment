import PricingCard from "./PricingCard"
import Heading from "../Heading"
import PricingDetail from "./PricingDetail"
import ThemeToggle from "../ThemeToggle"
import { useState } from 'react';

export default function Pricing() {
    const [isDark, setIsDark] = useState('light')

    const plans = [
        { api: 'OpenAI', model: 'GPT-3.5', price: '0.002' },
        { api: 'OpenAI', model: 'GPT-4', price: '0.03' },
        { api: 'Together AI', model: 'Llama-2-70b', price: '0.0008' },
        { api: 'Together AI', model: 'Llama-2-13b', price: '0.0006' },
    ]

    return (
        <div className="z-10 p-4 flex flex-col relative border border-gray-400 rounded-lg bg-white/70 backdrop-blur-sm dark:bg-gray-900/85 m-3 max-w-[60rem]">
            {/* Logo */}
            <div className="absolute top-4 left-4 rounded-full w-12 sm:w-16">
                <a href='https://trybookai.com/'>
                    <img className='logo' src='/Book-ai-logo.png'></img>
                </a>
            </div>

            {/* Theme toggle */}
            <div className="absolute top-3 right-3">
                <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
            </div>

            {/* Heading */}
            <Heading text="API pricing" />

            {/* Pricing Cards */}
            <div className="flex justify-center my-5">
                <div className="flex flex-col sm:grid grid-cols-2 gap-4">
                    {plans.map((val, index) => {
                        return (<PricingCard api={val.api} model={val.model} price={val.price} key={index} />)
                    })}
                </div>
            </div>

            {/* Other info */}
            <div className="flex flex-col p-3">
                <PricingDetail heading='Token Estimation'>
                    On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.
                </PricingDetail>
                <PricingDetail heading='Billing'>
                    You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.
                </PricingDetail>
            </div>

        </div>
    )
}