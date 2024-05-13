import chargingData as ld
from createQuerySql import createQuerySql

def main():
    courses, programees = ld.gettingTextGroups()
    df = createQuerySql(courses, programees)
    df.createQueryAllGroups()
    

if __name__ == "__main__":
    main()
