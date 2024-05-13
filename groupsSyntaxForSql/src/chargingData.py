def gettingTextGroups():

    programees = []
    groups = []
    group = []

    # Loading files from programees data
    with open('../data/programees.txt', 'r') as file:
        linesProgramees = file.readlines()
    for lineProgramees in linesProgramees:
        programees.append(lineProgramees[:-1])

    # Loading files from groups data
    with open('../data/groups.txt', 'r') as file:
        lines = file.readlines() 

    for line in lines:
        if line == '--\n':
            groups.append(group)
            group = []
        else:
            group.append(line[:-1]) 
        
    groups.append(group)
    return groups , programees
