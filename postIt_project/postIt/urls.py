from rest_framework.routers import DefaultRouter
from django.urls import path, include
from django.conf import settings 
from django.conf.urls.static import static
from postIt.views import NoteViewSet, UserViewSet, BoardViewSet, RegisterView, MyTokenObtainPairView
from django.contrib import admin 
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView, 
    TokenRefreshView
)

router = DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'notes', views.NoteViewSet)
router.register(r'board', views.BoardViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api/', include('rest_framework.urls')),
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/register/', RegisterView.as_view(), name='register_view'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh')
]