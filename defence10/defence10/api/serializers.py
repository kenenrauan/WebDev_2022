from rest_framework import serializers


from .models import Author, Article


class AuthorSerializer(serializers.Serializer):
    name = serializers.CharField()
    email = serializers.CharField()

    def create(self, validated_data):
        category = Author.objects.create(name=validated_data.get('name'),                          
                                          email=validated_data.get('email'))
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.save()
        return instance


class AuthorSerializer2(serializers.ModelSerializer):
    # name = serializers.CharField(read_only=True)

    class Meta:
        model = Author
        fields = ('id', 'email')
        # read_only_fields = ('name',)

class ArticleSerializer(serializers.ModelSerializer):
    # name = serializers.CharField(read_only=True)
    # company = CompanySerializer2()
    class Meta:
        model = Article
        fields = ('title', 'description', 'author')
        # read_only_fields = ('name',)

