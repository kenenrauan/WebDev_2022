from .models import Author, Article
from django.contrib import admin

admin.site.register((Author, Article))