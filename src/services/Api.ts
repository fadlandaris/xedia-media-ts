import axios from "axios"

const BASE_URL = "https://api.mediastack.com/v1/news?"
const API_TOKEN = "0d4140631ac06a8c91d576db8bb4f13d"

const getTrendingNews = () => {
  return axios.get(`${BASE_URL}`, {
    params: {
      access_key: API_TOKEN, 
      keywords: "industri,-kreatif", 
      countries: "id" 
    }
  })
}

export default {
  getTrendingNews,
}


