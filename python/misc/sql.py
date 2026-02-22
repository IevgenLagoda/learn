import sqlite3

def create_table():
    sql ="""
    CREATE TABLE IF NOT EXISTS user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT,
        password TEXT
    );
    """
    try:
        cursor.executescript(sql)
    except sqlite3.DatabaseError as err:
        print("Error: ", err)
    else:
        print("Success!")

def insert_record():
    data = {'id': None, 'email': 'admin@site.com', 'password': 'admin'}
    sql = 'INSERT INTO user VALUES(:id, :email, :password)'
    try:
        cursor.execute(sql, data)
    except sqlite3.DatabaseError as err:
        print("Error: ", err)
    else:
        print("Success!")
        connect.commit()

def insert_records():
    data = [
        {'id': None, 'email': 'user1@site.com', 'password': 'user1'},
        {'id': None, 'email': 'user2@site.com', 'password': 'user2'},
        {'id': None, 'email': 'user3@site.com', 'password': 'user3'}
    ]
    sql = 'INSERT INTO user VALUES(:id, :email, :password)'
    try:
        cursor.executemany(sql, data)
    except sqlite3.DatabaseError as err:
        print("Error: ", err)
    else:
        print("Success!")
        connect.commit()

def get_user():
    sql = 'SELECT * FROM user'
    cursor.execute(sql)
    print(cursor.fetchone())

def get_users():
    sql = 'SELECT * FROM user'
    cursor.execute(sql)
    for id, email, password in cursor:
        print(f'{email} - {password}')


connect = sqlite3.connect('data.db')
cursor = connect.cursor()

# init
# create_table()
# insert_record()
# insert_records()

# get
get_user()
get_users()

cursor.close()
connect.close()

