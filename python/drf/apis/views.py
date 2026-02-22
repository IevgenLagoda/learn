from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from books.models import Book
from todos.models import Todo
from posts.models import Post
from .serializers import BookSerializer, TodoSerializer, PostSerializer
from .permissions import isAuthorOrReadOnly

class BookApiView(generics.ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class ListTodo(generics.ListAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class DetailsTodo(generics.RetrieveAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer    

class ListPost(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (isAuthorOrReadOnly,)

class DetailsPost(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (isAuthorOrReadOnly,IsAdminUser)