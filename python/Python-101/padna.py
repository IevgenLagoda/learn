import pandas as pd
import matplotlib.pyplot as plt 

# data = {
#    'ages': [14, 18, 24, 42],
#    'heights': [165, 180, 176, 184]
# } 
# df = pd.DataFrame(data, index=["Joe", "Bob", "Ray", "Alex"])
# filtered = df[(df['ages']>18) & (df['heights']>180)]

# df = pd.read_csv("https://www.sololearn.com/uploads/ca-covid.csv")
# df.drop('state', axis=1, inplace=True)
# df['month'] = pd.to_datetime(df['date'], format="%d.%m.%y").dt.month_name()
# df.set_index('date', inplace=True)
# #print(df['month'].value_counts())
# mon = df[(df['month'] == input())]
# print(mon[mon['cases']==mon['cases'].max()])

df = pd.read_csv("https://www.sololearn.com/uploads/ca-covid.csv")
df.drop('state', axis=1, inplace=True)
df['month'] = pd.to_datetime(df['date'], format="%d.%m.%y").dt.month_name()
df.set_index('date', inplace=True)
df.plot()
