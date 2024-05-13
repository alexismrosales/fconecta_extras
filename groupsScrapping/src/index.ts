import { programees, semester } from '../data/input'
import fetchData from './fetchData'
import extractData from './extractData'
import fs from 'fs'
const main = async () => {
  let documents = await Promise.all(
    programees.map(async (programee) => {
      return await fetchData(`https://www.fciencias.unam.mx/docencia/horarios/indiceplan/${semester}/${programee}`)
    })
  )
  const extract = new extractData(documents)
  const groups = extract.getGroupsByProgramee()
  saveGroups(groups)
}

const saveGroups = async (groups: (string | undefined)[][]) => {
  const groupsAsText = groups.map(row => row.join('\n')).join('\n--\n')
  try {
    fs.promises.writeFile('./groups.txt', groupsAsText)
    console.log("Data saved successfully...")
  } catch (err) {
    console.log(err)
  }

}
main()
