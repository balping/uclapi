# -*- coding: utf-8 -*-
# Generated by Django 1.11.18 on 2019-03-02 02:32
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('roombookings', '0011_rooma_roomb'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Lock',
        ),
    ]
