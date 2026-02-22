from django.conf import settings
from django.db import models
from django.urls import path

class Post(models.Model):
    title = models.CharField(max_length=50)
    body = models.TextField()
    cover = models.ImageField(upload_to='cover/', blank=True)
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    sizes = models.CharField(
        max_length=200, help_text="Comma separated list of heights (e.g. '100,200')", default='')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    @property
    def urls(self):
        urls = [
            self.cover.url,
            self.cover.url + '?h=200',
            self.cover.url + '?h=400',
        ]
        return urls

    def __str__(self):
        return self.title
