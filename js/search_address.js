function getApiURL() {
    const currentURL = location.href
    const fileName = currentURL.substring(currentURL.lastIndexOf('/') + 1)
    const baseURL = currentURL.replace(fileName, '')
    return baseURL
}

const API_URL = getApiURL() + 'data/prefectures.json'
console.log(API_URL)

const loadPrefectures = async () => {
    const response = await fetch(API_URL)
    const prefectures = await response.json()
    console.log(prefectures)
    createPrefectures(prefectures)
}

const createPrefectures = (prefectures) => {
    prefectures.forEach(prefecture => {
        var option = document.createElement('option')
        option.value = prefecture.code
        option.innerHTML = prefecture.name
        document.getElementById('prefecture').appendChild(option)
    });
}

const SEARCH_URI = "https://zipcloud.ibsnet.co.jp/api/search";
const searchAPI = async (zipcode) => {
    if (!zipcode) return;
    const query_param = new URLSearchParams({ zipcode: zipcode, })
    const uri = SEARCH_URI + "?" + query_param;
    console.log(uri);
}

const searchHandler = async () => {
    const zipcode = document.getElementById('zipcode').value;
    var data = await searchAPI(zipcode);
}

loadPrefectures()