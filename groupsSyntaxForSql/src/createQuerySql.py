import pandas as pd
class createQuerySql:
    def __init__(self, groups, programees):
        self.dataframe = pd.DataFrame(groups).T.rename(columns={i: name for i, name in enumerate(programees)})
    
    def createQueryAllGroups(self):
        print(self.dataframe)
