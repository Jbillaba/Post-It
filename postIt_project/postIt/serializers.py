from rest_framework import serializers 
from .models import Notes, Board, User
from django.contrib.auth.password_validation import validate_password


class UserSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name')


class NoteSerializer(serializers.HyperlinkedModelSerializer):
    message = serializers.CharField(required=True)
    class Meta: 
        model = Notes
        fields = ('id', 'message', 'creator')

    def create(self, validated_data):
        note = Notes.objects.create(
            message=validated_data['message']
        )

        note.save()

        return note


class BoardSerializer(serializers.HyperlinkedModelSerializer):
    notes = NoteSerializer(
        many=True, 
        read_only=True
    )
    class Meta:
        model = Board
        fields = ('messages','notes')


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password]
    )

    class Meta:
        model = User
        fields = ('first_name', 'email', 'username', 'password')

    def create(self, validated_data):
        user = User.objects.create(
            first_name=validated_data['first_name'],
            email=validated_data['email'],
            username=['username']
        )

        user.set_password(validated_data['password'])
        user.save()
        return user 