from django.urls import path
from rest_framework.routers import SimpleRouter

from .views import BookApiView, ListTodo, DetailsTodo, ListPost, DetailsPost

# router = SimpleRouter()
# router.register("post", PostViewSet, basename="psots")
# urlpatterns = router.urls

urlpatterns = [
    path('book', BookApiView.as_view(), name='book'),
    path('todo', ListTodo.as_view(), name='todo_list'),
    path('todo/<int:pk>/', DetailsTodo.as_view(), name='todo_details'),
    path('post', ListPost.as_view(), name='post_list'),
    path('post/<int:pk>/', DetailsPost.as_view(), name='post_details'),
]