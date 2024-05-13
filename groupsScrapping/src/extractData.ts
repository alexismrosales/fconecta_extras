export default class extractData {
  private documents: Array<Document>
  constructor(documents: Array<Document>) {
    this.documents = documents
  }
  private extractGroupsPages() {
    let allGroups: Array<HTMLAnchorElement[]> = []
    for (let i = 0; i < this.documents.length; i++) {
      const groupsNames: HTMLAnchorElement[] = Array.from(
        this.documents[i].querySelectorAll('div.v-card__text')
      )
      allGroups.push(groupsNames)
    }
    return allGroups
  }

  getGroupsByProgramee() {
    const groups = this.extractGroupsPages()
    const groupsText = groups.map((groupsByProgramee) => {
      return groupsByProgramee.map((course) => {
        return course.textContent?.trim().replace('\n', '').replace(',', '').slice(0, -9).trim()
      })
    })
    return groupsText
  }
}
