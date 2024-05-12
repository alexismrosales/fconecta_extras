import axios, { AxiosError } from 'axios'
import { JSDOM } from 'jsdom'

const fetchPage = (url: string): Promise<string | undefined> => {
  const getHmtl = axios.get(url)
    .then(response => response.data)
    .catch((err: AxiosError) => {
      console.error('There was an error fetching data from url: ', err)
      console.error(err.toJSON())
    })
  return getHmtl
}

const fetchDocument = async (url: string): Promise<Document> => {
  const htmlData = await fetchPage(url)
  const dom = new JSDOM(htmlData)
  return dom.window.document
}

export default fetchDocument
