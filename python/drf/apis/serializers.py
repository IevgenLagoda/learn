from rest_framework import serializers

from books.models import Book
from todos.models import Todo
from posts.models import Post

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('title', 'author', 'isbn')

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('title', 'body')

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id','author','title', 'body','sizes','urls','created_at')
