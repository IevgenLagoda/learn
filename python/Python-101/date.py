import datetime

d = datetime.datetime(2022,2,24)
print("%s-%s-%s" % (d.year, d.month, d.day))
print(d.strftime("%Y - %m - %d %H:%M:%S"))
n = datetime.datetime.now()
print(n.strftime("%Y - %m - %d %H:%M:%S"))

delta = n - d
print(delta.days)

