const langData = {
    English: {
        searchButton: 'Search',
        gptPlaceholder: 'What would you like to watch today?'
    },
    Hindi: {
        searchButton: 'खोजें',
        gptPlaceholder: 'आप आज क्या देखना चाहते हैं?'
    },
    Bengali: {
        searchButton: 'অনুসন্ধান',
        gptPlaceholder: 'আপনি আজ কী দেখতে চান?'
    },
    Spanish: {
        searchButton: 'Buscar',
        gptPlaceholder: '¿Qué te gustaría ver hoy?'
    },
    Japanese: {
        searchButton: '検索',
        gptPlaceholder: '今日は何を見たいですか？'
    },
}

export default langData
export const SUPPORTED_LANGUAGES = Object.keys(langData);