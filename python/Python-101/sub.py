import subprocess

args = ["ping", "-t","xxx.com"]
#subprocess.call("notepad.exe")
process = subprocess.Popen(args, stdout=subprocess.PIPE)
data = process.communicate()
for line in data:
    print(line)
