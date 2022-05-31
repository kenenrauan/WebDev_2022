from django.db import models
from django.db.models import CharField, FloatField, TextField
from django.db.models.fields.related import ForeignKey
# Create your models here.

class Author(models.Model):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    
    def to_json(self):
        return {
            'name': self.name,
            'email': self.email,
        }

    def __str__(self):
        return f'{self.name} | {str(self.email)}'

class Article(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(default='')
    author = ForeignKey(Author, on_delete=models.CASCADE)

    def to_json(self):
        return {
            'title': self.title,
            'description': self.description,
    }
    
    def __str__(self):
        return f'{self.title} | {str(self.author)}'