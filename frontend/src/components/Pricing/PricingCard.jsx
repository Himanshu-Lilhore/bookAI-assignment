import './PricingCard.css'

export default function PricingCard({ api, model, price }) {
    return (
        <div className='pricingCard relative overflow-hidden'>
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className='flex flex-wrap content-start flex-col sm:flex-row mb-2 sm:mb-4 text-xl font-medium items-center'>
                    <h5 className="text-xl font-medium text-gray-500 dark:text-gray-400">{`${api}`}</h5>
                    <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-1 rounded dark:bg-blue-200 dark:text-blue-800 mt-1.5 sm:mt-0 sm:ml-3">{`${model}`}</span>
                </div>
                <div className="flex items-baseline text-gray-900 dark:text-white">
                    <span className="text-3xl font-semibold">$</span>
                    <span className="text-5xl font-extrabold tracking-tight">{price}</span>
                    <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/1k tokens</span>
                </div>
                <button 
                    type="button"
                    className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                >
                    Choose plan
                </button>
            </div>
        </div>
    )
}