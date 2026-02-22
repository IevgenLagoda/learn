"""
Working with OS module.
"""
import os

print(os.environ['TMP'])
print(os.getenv('TMP'))

currentDir = os.getcwd()
print(os.getcwd())
os.chdir(r"e:/downloads/")
print(os.getcwd())
os.chdir(currentDir)
print(os.getcwd())

# os.mkdir("test")

path = os.getcwd()
for root, dirs, files in os.walk(path):
    print(files)
