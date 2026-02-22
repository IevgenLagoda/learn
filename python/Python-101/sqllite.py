import sqlite3

def createTables():
    queries = [
        "DROP TABLE IF EXISTS artist",
        "CREATE TABLE artist (id integer, title text)",
        "DROP TABLE IF EXISTS album",
        "CREATE TABLE album (id integer, title text, year integer, artist integer)",
        "DROP TABLE IF EXISTS track",
        "CREATE TABLE track (id integer, title text, album integer)",
    ]
    for q in queries:
        cursor.execute(q)

def createData():
    artists = [
        (1, "The Artist"),
        (2, "Crazy dogs"),
        (3, "My riots"),
    ]
    cursor.executemany("INSERT INTO artist VALUES(?,?)", artists)

    albums = [
        (1, "The album", 2019, 1),
        (2, "The new album", 2020, 1),
        (3, "Puppies", 2016, 2),
        (4, "Big finale", 2021, 3),
        (5, "999", 2022, 3),
    ]
    cursor.executemany("INSERT INTO album VALUES(?,?,?,?)", albums)

    tracks = [
        (1, "The track 1", 1),
        (2, "The track 2", 1),
        (3, "The track 3", 1),
        (4, "The new track 1", 2),
        (5, "The new track 2", 2),
        (6, "Black puppy", 3),
        (7, "White puppy", 3),
        (8, "The final song", 4),
        (9, "Crazzzzy", 5),
        (10, "Not sooo crazzzy", 5),
    ]
    cursor.executemany("INSERT INTO track VALUES(?,?,?)", tracks)

def init():
    createTables()
    createData()
    conn.commit()

conn = sqlite3.connect('data.db')
cursor = conn.cursor()

init()

sql = "SELECT track.title, album.title, album.year FROM track, album WHERE track.album = album.id"
for row in cursor.execute(sql):
    print(row)





