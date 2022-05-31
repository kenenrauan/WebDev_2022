import json
from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from .models import Author, Article
from django.http.response import JsonResponse
from rest_framework import mixins, generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
# Create your views here.
from .models import Author, Article
from .serializers import AuthorSerializer, AuthorSerializer2, ArticleSerializer

from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def authorslist(request):
    if request.method == "GET":
        authors = Author.objects.all()
        serializer = AuthorSerializer(authors, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        serializer = AuthorSerializer(data=data)
        if serializer.is_valid():
            # call create function
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)

def authorDetail(request, id):
    try:
        category = Author.objects.get(id=id)
    except Author.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    if request.method == "GET":
        return JsonResponse(category.to_json(), safe=False)
    elif request.method == 'PUT':
        data = json.loads(request.body)
        serializer = AuthorSerializer2(instance=category, data=data)
        if serializer.is_valid():
            # call create function
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)
    elif request.method == 'DELETE':
        category.delete()
        return JsonResponse({'message': 'deleted'}, status=204)

 
class AuthorsArticlesListAPIView(mixins.ListModelMixin,
                            generics.GenericAPIView):

    serializer_class = ArticleSerializer

    def get_queryset(self, *args, **kwargs):
        return Article.objects.filter(author_id=self.kwargs['id'])

    def get(self, request, *args, **kwargs):
        return self.list(request)
