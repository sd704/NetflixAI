import { TMDB_MOVIE_SEARCH, TMDB_SERIES_SEARCH, API_OPTIONS } from "../utils/constants"

const tmdbSearch = async (jsonList) => {
    const tmdbResults = jsonList.map(async (item) => {
        if (item.type === "show") {
            const rawData = await fetch(TMDB_SERIES_SEARCH({ name: item.name, year: item.year }), API_OPTIONS)
            const data = await rawData.json()
            return data.results?.[0]
        } else if (item.type === "movie") {
            const rawData = await fetch(TMDB_MOVIE_SEARCH({ name: item.name, year: item.year }), API_OPTIONS)
            const data = await rawData.json()
            return data.results?.[0]
        }
    })
    // This will return only Promise array
    // console.log(tmdbResults)
    const searchList = await Promise.all(tmdbResults)
    return searchList
}

export default tmdbSearch