class Post:
    def __init__(self, id, title = '', date = '', body = ''):
        self.id = id
        self.title = title
        self.date = date
        self.body = body

    def getId(self):
        return self.id
    
    def getTitle(self) :
        return self.title or ''

    def getDate(self):
        return self.date or ''
    
    def getBody(self):
        return self.body or ''        

    def getSku(self):
        return self.title.replace(' ', '_').lower()

