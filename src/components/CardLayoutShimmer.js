const CardLayoutShimmer = ({ heading }) => {
    return (
        <div className="text-white my-5 md:my-8">
            <p className="text-lg md:text-xl xl:text-3xl font-bold my-4">{heading}</p>
            <div id="carousel" className="flex overflow-x-auto no-scrollbar space-x-4 snap-x snap-mandatory scroll-smooth">
                {[...Array(15)].map((_, i) =>
                    <div
                        key={heading + i}
                        className="flex-shrink-0 h-64 md:h-80 my-2 md:my-8 aspect-[2/3] shimmer-background rounded-lg snap-start cursor-pointer md:hover:h-96 md:hover:my-0 md:hover:shadow-lg">
                    </div>
                )}
            </div>
        </div>
    )
}

export default CardLayoutShimmer