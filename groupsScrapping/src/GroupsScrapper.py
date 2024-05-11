from bs4 import BeautifulSoup as bf
import pandas as pd
import requests

class GroupsScrapper:
    def __init__(self, url: str , semester: int):
        self.url = url
        if semester != 0:
            self.semester = semester
        else:
            self.semester = 0
        self.soup = ""
    
    def getHTML(self):
        # Passing header info request to access to the page correctly
        header = { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'}
        req = requests.get(self.url, headers=header)
        self.soup = bf(req.text, "html.parser")
