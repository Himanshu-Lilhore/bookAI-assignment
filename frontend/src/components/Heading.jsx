export default function Heading ({text}) {
    return (
        <div className="mb-6 w-full flex justify-center">
            <span className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">{text}</span>
        </div>
    )
}