import puppeteer from 'puppeteer'
import { JSDOM } from 'jsdom'

const fetchPage = async (url: string): Promise<string | undefined> => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  page.setDefaultNavigationTimeout(0);
  await page.goto(url)
  // Wating for two seconds to connect
  await page.waitForFunction(
    'window.performance.timing.loadEventEnd - window.performance.timing.navigationStart >= 1000'
  );
  const getHmtl = await page.content()
  await browser.close()
  return getHmtl
}

const fetchDocument = async (url: string): Promise<Document> => {
  const htmlData = await fetchPage(url)
  console.log("Pages loaded successfully")
  const dom = new JSDOM(htmlData)
  return dom.window.document
}

export default fetchDocument
