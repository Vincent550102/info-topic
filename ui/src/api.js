import axios from 'axios';
import { config } from '../config'

const client = axios.create({
  baseURL: config.api,
  timeout: 100000
}
)

export default {
  upload_image: async (formData) => {
    const res = await axios({
      method: 'POST',
      url: 'https://api.imgur.com/3/image',
      data: formData,
      headers: {
        Authorization: 'Client-ID ' + config.imgur_client_id,
      },
      mimeType: 'multipart/form-data',
    });
    return res.data.data;
  },
  login: async (username, password) =>
    client.post("/auth", {
      username: username,
      password: password
    })
  ,
  storage_token: (token) =>
    window.localStorage.setItem("token", String(token))
  ,
  is_login: () =>
    window.localStorage.getItem("token").length ? true : false
  ,
  get_token: () =>
    window.localStorage.getItem("token")
  ,
  clear_token: () =>
    window.localStorage.removeItem("token")
  ,
  get_topics_by_tid: async (id) =>
    client.get(`/teacher/${id}`)
  ,
  get_topics_search: async (word) =>
    client.get(`/search/${word}`)
  ,
  get_teachers: async () =>
    client.get("/teacher/")
  ,
  get_topic: async (id) =>
    client.get(`/topic/${id}`)
  ,
  download: (id) =>
      window.open(`${config.api}/file/${id}`, '_blank')
}