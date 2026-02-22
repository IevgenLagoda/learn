from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=255, default='')
    subtitle = models.CharField(max_length=255, default='')
    author = models.CharField(max_length=127, default='')
    isbn = models.CharField(max_length=13, default='')

    def __str__(self) -> str:
        return self.title + ' by ' + self.author
