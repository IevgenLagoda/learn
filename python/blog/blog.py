from post import Post
import calendar
import sqlite3

class Blog:
    def __init__(self):
        self.connect = sqlite3.connect('data.db')
        self.cursor = self.connect.cursor()
        self.posts = self.loadPosts()
        #self.initPosts(15)
    
    def getPosts(self, count=10):
        if (len(self.posts) == 0):
            return []
        return self.posts[0:count]

    def getPostsByDate(self, date):
        if (len(self.posts) == 0):
            return []
        return list(
            filter(lambda post: post.getDate() == date, self.posts)
        )

    def addPost(self, post):
        self.posts.append(post)
        sql = 'INSERT INTO post VALUES(:id, :title, :date, :body)'
        self.cursor.execute(sql, post)

    def getPostBySku(self, sku):
        return list(
            filter(lambda post: post.getSku() == sku, self.posts)
        )[0]

    def initPosts(self, count = 10):
        for i in range(1, count+1):
            post = Post('Title %s' % (str(i)), '2022-01-%s' % (str(i)), 'Post body %s' % (str(i)))
            self.addPost(post)

    def getMonthCalendar(self):
        year = 2022
        month = 7
        c = calendar.HTMLCalendar(0)
        days = c.monthdayscalendar(year, month)
        links = []
        for week in days:
            for day in week:
                if day != 0:
                    date = f'{year}-{month:02}-{day:02}'
                    link = f'<a href="posts/{date}">{date}</a>'
                    links.append(link)    
        return " | ".join(links)
        #return c.formatmonth(year, month)
    
    def loadPosts(self):
        sql ="""
        CREATE TABLE IF NOT EXISTS post (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            date TEXT,
            body TEXT
        );
        """
        self.cursor.executescript(sql)
        
        sql = 'SELECT * FROM post'
        self.cursor.execute(sql)
        for id, title, date, body in self.cursor:
            self.posts.append(Post(id, title, date, body))
        