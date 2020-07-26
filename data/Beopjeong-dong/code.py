import pandas as pd

if __name__ == "__main__":
    df = pd.read_csv("./code_.csv", encoding="utf-8-sig")

    df2 = df[df['폐지여부'] == '존재']

    address1 = []
    address2 = []
    address3 = []
    address4 = []
    address5 = []

    for i in range(len(df2)):
        address_list = df2.iloc[i, 1].split(' ')
        address_list.append('')
        address_list.append('')
        address_list.append('')
        address_list.append('')

        address1.append(address_list[0])
        address2.append(address_list[1])
        address3.append(address_list[2])
        address4.append(address_list[3])
        address5.append(address_list[4])


    df2["address1"] = address1 
    df2["address2"] = address2 
    df2["address3"] = address3 
    df2["address4"] = address4 
    df2["address5"] = address5 
    
    df2.to_csv("result.csv", encoding="utf-8-sig")
    
    