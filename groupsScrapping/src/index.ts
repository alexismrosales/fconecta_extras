import { programees, semester } from '../data/input'
import fetchData from './fetchData'
const main = async () => {


  let documents = await Promise.all(
    programees.map(async (programee) => {
      return await fetchData(`https://www.fciencias.unam.mx/docencia/horarios/indiceplan/${semester}/${programee}`)

    })
  )

  console.log(documents)
}

main()

