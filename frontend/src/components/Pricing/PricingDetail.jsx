
export default function PricingDetail({heading, children}) {
    return (
        <div className="flex flex-col">
            {/* Heading */}
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{heading}</h5>

            {/* Content */}
            <p class="font-normal text-gray-700 dark:text-gray-400">{children}</p>
        </div>
    )
}