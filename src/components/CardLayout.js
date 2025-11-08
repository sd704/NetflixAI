const CardLayout = ({ heading }) => {
    return (
        <div className="text-white my-8">
            <p className="text-3xl font-bold my-4">{heading}</p>
            <div id="carousel" className="flex overflow-x-auto no-scrollbar space-x-4 snap-x snap-mandatory scroll-smooth">
                <div className="flex-shrink-0 h-48 my-4 aspect-[16/9] bg-red-600 rounded-lg snap-start cursor-pointer hover:h-56 hover:my-0"></div>
                <div className="flex-shrink-0 h-48 my-4 aspect-[16/9] bg-red-600 rounded-lg snap-start cursor-pointer hover:h-56 hover:my-0"></div>
                <div className="flex-shrink-0 h-48 my-4 aspect-[16/9] bg-red-600 rounded-lg snap-start cursor-pointer hover:h-56 hover:my-0"></div>
                <div className="flex-shrink-0 h-48 my-4 aspect-[16/9] bg-red-600 rounded-lg snap-start cursor-pointer hover:h-56 hover:my-0"></div>
                <div className="flex-shrink-0 h-48 my-4 aspect-[16/9] bg-red-600 rounded-lg snap-start cursor-pointer hover:h-56 hover:my-0"></div>
                <div className="flex-shrink-0 h-48 my-4 aspect-[16/9] bg-red-600 rounded-lg snap-start cursor-pointer hover:h-56 hover:my-0"></div>
                <div className="flex-shrink-0 h-48 my-4 aspect-[16/9] bg-red-600 rounded-lg snap-start cursor-pointer hover:h-56 hover:my-0"></div>
                <div className="flex-shrink-0 h-48 my-4 aspect-[16/9] bg-red-600 rounded-lg snap-start cursor-pointer hover:h-56 hover:my-0"></div>
                <div className="flex-shrink-0 h-48 my-4 aspect-[16/9] bg-red-600 rounded-lg snap-start cursor-pointer hover:h-56 hover:my-0"></div>
                <div className="flex-shrink-0 h-48 my-4 aspect-[16/9] bg-red-600 rounded-lg snap-start cursor-pointer hover:h-56 hover:my-0"></div>
                <div className="flex-shrink-0 h-48 my-4 aspect-[16/9] bg-red-600 rounded-lg snap-start cursor-pointer hover:h-56 hover:my-0"></div>
                <div className="flex-shrink-0 h-48 my-4 aspect-[16/9] bg-red-600 rounded-lg snap-start cursor-pointer hover:h-56 hover:my-0"></div>
                <div className="flex-shrink-0 h-48 my-4 aspect-[16/9] bg-red-600 rounded-lg snap-start cursor-pointer hover:h-56 hover:my-0"></div>
            </div>
        </div>
    )
}

export default CardLayout