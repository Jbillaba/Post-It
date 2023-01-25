from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    first_name = models.CharField(max_length=30)
    username = models.CharField(max_length=15, unique=True)
    email = models.EmailField(max_length=200, unique=True)
    password = models.CharField(max_length=225)

    def __str__(self):
        return self.username

class Notes(models.Model):
    message = models.CharField(max_length=280)
    creator = models.CharField(max_length=280)
    def __str__(self):
        return self.message

class Board(models.Model):
    messages = models.ManyToManyField(Notes, related_name="messages")

    def __str__(self):
        return self.messages

