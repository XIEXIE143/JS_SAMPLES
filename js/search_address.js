function getApiURL() {
    const currentURL = location.href
    const fileName = currentURL.substring(currentURL.lastIndexOf('/') + 1)
    const baseURL = currentURL.replace(fileName, '')
    return baseURL
}

const API_URL = getApiURL() + 'data/prefectures.json'

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
    const response = await fetch(uri)
    const data = await response.json()
    console.log(data)
    return data;
}

const searchHandler = async () => {
    const zipcode = document.getElementById('zipcode').value;
    var data = await searchAPI(zipcode);

    var results = data.results[0]
    document.getElementById('prefecture').value = results.prefcode
    document.getElementById('city').value = results.address2 + results.address3
}

// 都道府県読み込み処理
loadPrefectures()
