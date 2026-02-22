import csv
import logging

logging.basicConfig(filename='file.log', level=logging.INFO)
logging.debug('Start...')

try:
    with open('test.csv', newline='') as csvFile:
        reader = csv.reader(csvFile, ',')
        for row in reader:
            print(" ".row)
except:
    logging.error('Error!')