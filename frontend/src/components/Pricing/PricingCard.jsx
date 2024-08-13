import './PricingCard.css'

export default function PricingCard({ api, model, price }) {
    return (
        <div className='pricingCard relative overflow-hidden'>
            <div className="min-w-80 sm:min-w-64 p-4 bg-slate-100 border border-gray-400 rounded-lg shadow sm:p-8 dark:bg-gray-900 dark:border-gray-600">
                <div className='flex flex-wrap content-start flex-row mb-2 sm:mb-4 text-xl font-medium items-center'>
                    <h5 className="text-xl font-medium text-gray-500 dark:text-gray-400">{`${api}`}</h5>
                    <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-1 rounded dark:bg-blue-200 ml-3 border-blue-800">{`${model}`}</span>
                </div>
                <div className="flex items-baseline text-gray-900 dark:text-white">
                    <span className="text-3xl font-semibold">$</span>
                    <div className='flex md:flex-row sm:flex-col flex-row'>
                        <span className="text-5xl font-extrabold tracking-tight">{price}</span>
                        <span className="ms-1 sm:self-end text-xl font-normal text-gray-500 dark:text-gray-400">/1k tokens</span>
                    </div>
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