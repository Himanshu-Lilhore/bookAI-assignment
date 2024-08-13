import PricingCard from "./PricingCard"

export default function Pricing () {
    const plans = [
        {api:'OpenAI', model:'GPT-3.5', price:'0.002'},
        {api:'OpenAI', model:'GPT-4', price:'0.03'},
        {api:'Together AI', model:'Llama-2-70b', price:'0.0008'},
        {api:'Together AI', model:'Llama-2-13b', price:'0.0006'},
    ]

    return (
        <div className="grid grid-cols-2 gap-4 w-fit p-6 b">
            {plans.map((val, index) => {
                return(<PricingCard api={val.api} model={val.model} price={val.price} key={index}/>)
            })}
        </div>
    ) 
}