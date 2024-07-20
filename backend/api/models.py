from django.db import models

# Create your models here.

class Item(models.Model):
    first_name = models.CharField(max_length=100, null=True)
    middle_name = models.CharField(max_length=100, null=True)
    last_name = models.CharField(max_length=100, null=True)
    extension_name = models.CharField(max_length=100, null=True)
    address = models.CharField(max_length=100, null=True)
    zip_code = models.CharField(max_length=100, null=True)
    email = models.CharField(max_length=100, null=True)
    phone = models.CharField(max_length=100, null=True)
    mobile = models.CharField(max_length=100, null=True)
    birthday = models.CharField(max_length=100, null=True)
    place_of_birth = models.CharField(max_length=100, null=True)
    sex = models.CharField(max_length=100, null=True)
    civil_status = models.CharField(max_length=100, null=True)
    citizen_ship = models.CharField(max_length=100, null=True)
    blood_type = models.CharField(max_length=100, null=True)
    height = models.CharField(max_length=100, null=True)
    weight = models.CharField(max_length=100, null=True)
    tin = models.CharField(max_length=100, null=True)
    father_first_name = models.CharField(max_length=100, null=True)
    father_last_name = models.CharField(max_length=100, null=True)
    father_middle_name = models.CharField(max_length=100, null=True)
    father_extension_name = models.CharField(max_length=100, null=True)
    mother_first_name = models.CharField(max_length=100, null=True)
    mother_last_name = models.CharField(max_length=100, null=True)
    mother_middle_name = models.CharField(max_length=100, null=True)

    def __str__(self):
        return f"{self.first_name} {self.middle_name} {self.last_name}"
