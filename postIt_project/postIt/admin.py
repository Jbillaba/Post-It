from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Notes, Board
# Register your models here.
admin.site.register(User, UserAdmin)
admin.site.register(Notes)
admin.site.register(Board)