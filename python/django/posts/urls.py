from django.urls import path
from .views import PostsListView, PostDetailView, PostCreateView, PostEditView, PostDeleteView

urlpatterns = [
    path("", PostsListView.as_view(), name="posts"),
    path("post/new/", PostCreateView.as_view(), name="post_new"),
    path("post/<int:pk>/", PostDetailView.as_view(), name="post_detail"),
    path("post/<int:pk>/edit/", PostEditView.as_view(), name="post_edit"),
    path("post/<int:pk>/delete/", PostDeleteView.as_view(), name="post_delete"),
]

from django.urls import path
from .views import BlogListView

urlpatterns = [
    path("", BlogListView.as_view(), name="home"),
]
