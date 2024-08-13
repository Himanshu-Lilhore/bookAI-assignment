import PricingCard from "./PricingCard"
import Heading from "../Heading"
import PricingDetail from "./PricingDetail"

export default function Pricing() {
    const plans = [
        { api: 'OpenAI', model: 'GPT-3.5', price: '0.002' },
        { api: 'OpenAI', model: 'GPT-4', price: '0.03' },
        { api: 'Together AI', model: 'Llama-2-70b', price: '0.0008' },
        { api: 'Together AI', model: 'Llama-2-13b', price: '0.0006' },
    ]

    return (
        <div className="p-4 flex flex-col relative border border-gray-200 rounded-lg dark:bg-gray-900 w-fit m-3 max-w-[60rem]">
            {/* Heading */}
            <Heading text="API pricing" />

            {/* Pricing Cards */}
            <div className="flex justify-center my-5">
                <div className="flex flex-col sm:grid grid-cols-2 gap-4 w-fit">
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