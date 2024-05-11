import sys

from GroupsScrapper import GroupsScrapper as gs

url = "https://www.fciencias.unam.mx/docencia/horarios/indice/"

def main():
    global url
    if len(sys.argv) == 2:
        semester = sys.argv[2] 
        url += "/" + str(semester) + "/"
        scrapping = gs(url, int(semester))
    else:
        scrapping = gs(url, 0)
    scrapping.getHTML()
         
if __name__ == "__main__":
    main()
