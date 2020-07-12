import pandas as pd
import json
from collections import OrderedDict
import numpy as np

class NpEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, np.integer):
            return int(obj)
        elif isinstance(obj, np.floating):
            return float(obj)
        elif isinstance(obj, np.ndarray):
            return obj.tolist()
        else:
            return super(NpEncoder, self).default(obj)

if __name__ == "__main__":
    FILE_NAME_LIST = ["./data/office-202004.xlsx", "./data/office-202005.xlsx", "./data/office-202006.xlsx"]
    
    df = pd.read_excel(
            FILE_NAME_LIST[0], 
            header=16
        )

    address_List = [[] for i in range(4)]
    address1_set = set()

    for i in range(len(df)):
        address = df.iloc[i, 0].split(" ")
        address1_set.add(address[0])

        for j in range(4):
            try:
                address_List[j].append(address[j])
            except Exception as e:
                address_List[j].append(None)

    for i in range(1, 5):
        df[f"address{i}"] = address_List[i-1]
    
    for i in address1_set:
        RES_FILE_NAME = f"./data/office/{i}.json"
        
        apt_list = {}
        
        address1_df = df.loc[df['address1'] == i].reset_index(drop=True)
        address1_df = address1_df.where(pd.notnull(address1_df), None)

        for j in range(len(address1_df)):
            apt_data = {}
            apt_name = address1_df.iloc[j, 4]
            if apt_name not in apt_list.keys():
                apt_list[apt_name] = list()
            
            apt_data["full_address"] = address1_df.iloc[j, 0]
            apt_data["address_num"] = address1_df.iloc[j,1]
            apt_data["area"] = address1_df.iloc[j,5]
            apt_data["contract_month"] = address1_df.iloc[j,6]
            apt_data["contract_day"] = address1_df.iloc[j,7]
            apt_data["price"] = address1_df.iloc[j,8].strip()
            apt_data["floor"] = address1_df.iloc[j,9]
            apt_data["built_year"] = address1_df.iloc[j,10]
            apt_data["road_address"] = address1_df.iloc[j,11]
            apt_data["address2"] = address1_df.iloc[j,13]
            apt_data["address3"] = address1_df.iloc[j,14]
            apt_data["address4"] = address1_df.iloc[j,15]
            
            apt_list[apt_name].append(apt_data)

        try:
            f = open(RES_FILE_NAME)


            f.close()
        except Exception as e:
            f = open(RES_FILE_NAME, "w", encoding="utf-8")
            file_data = OrderedDict()
            file_data[i] = apt_list

            json.dump(file_data, f, ensure_ascii=False, indent='\t', cls=NpEncoder)