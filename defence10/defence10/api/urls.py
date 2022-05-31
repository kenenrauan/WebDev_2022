from django.urls import path
from . import views
from .views import authorslist, authorDetail, AuthorsArticlesListAPIView

urlpatterns = [

    path('authors/', views.authorslist),
    path('authors/<int:id>', views.authorDetail),
    path('authors/<int:id>/articles', AuthorsArticlesListAPIView.as_view()),
]
