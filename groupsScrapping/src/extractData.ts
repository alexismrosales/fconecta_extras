export default class extractData {
  private documents: Array<Document>
  constructor(documents: Array<Document>) {
    this.documents = documents
  }
  extractProgrameesPages() {
    const programesLinks: HTMLAnchorElement[] = Array.from(
      document.querySelectorAll('a.')
    )
  }
}
