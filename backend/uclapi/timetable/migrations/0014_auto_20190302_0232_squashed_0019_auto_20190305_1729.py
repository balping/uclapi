# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2019-03-08 20:49
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('timetable', '0013_merge_20190223_2339'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lecturera',
            name='category',
            field=models.TextField(blank=True, max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='lecturera',
            name='costtype',
            field=models.TextField(blank=True, max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='lecturera',
            name='lecturerid',
            field=models.TextField(blank=True, max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='lecturera',
            name='parttime',
            field=models.TextField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='lecturera',
            name='status',
            field=models.TextField(blank=True, max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='lecturera',
            name='type',
            field=models.TextField(blank=True, max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='lecturera',
            name='linkcode',
            field=models.TextField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='lecturerb',
            name='category',
            field=models.TextField(blank=True, max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='lecturerb',
            name='costtype',
            field=models.TextField(blank=True, max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='lecturerb',
            name='parttime',
            field=models.TextField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='lecturerb',
            name='status',
            field=models.TextField(blank=True, max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='lecturerb',
            name='type',
            field=models.TextField(blank=True, max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='lecturerb',
            name='linkcode',
            field=models.TextField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='coursea',
            name='type',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='courseb',
            name='type',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='deptsa',
            name='address1',
            field=models.TextField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='deptsa',
            name='address2',
            field=models.TextField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='deptsa',
            name='address3',
            field=models.TextField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='deptsa',
            name='address4',
            field=models.TextField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='deptsa',
            name='admincontact',
            field=models.TextField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='deptsa',
            name='adminphone',
            field=models.TextField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='deptsa',
            name='category',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='deptsa',
            name='headofdepartment',
            field=models.TextField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='deptsa',
            name='headphone',
            field=models.TextField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='deptsa',
            name='lecturerid',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='deptsa',
            name='linkcode',
            field=models.TextField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='deptsa',
            name='name',
            field=models.TextField(max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='deptsa',
            name='type',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='deptsb',
            name='address1',
            field=models.TextField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='deptsb',
            name='address2',
            field=models.TextField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='deptsb',
            name='address3',
            field=models.TextField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='deptsb',
            name='address4',
            field=models.TextField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='deptsb',
            name='admincontact',
            field=models.TextField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='deptsb',
            name='adminphone',
            field=models.TextField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='deptsb',
            name='category',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='deptsb',
            name='headofdepartment',
            field=models.TextField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='deptsb',
            name='headphone',
            field=models.TextField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='deptsb',
            name='lecturerid',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='deptsb',
            name='linkcode',
            field=models.TextField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='deptsb',
            name='name',
            field=models.TextField(max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='deptsb',
            name='type',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='modulea',
            name='category',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='modulea',
            name='dontfit',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='modulea',
            name='isactive',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='modulea',
            name='lecturerid',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='moduleb',
            name='category',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='moduleb',
            name='dontfit',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='moduleb',
            name='isactive',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='moduleb',
            name='lecturerid',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='sitesa',
            name='address1',
            field=models.TextField(max_length=80, null=True),
        ),
        migrations.AlterField(
            model_name='sitesa',
            name='address2',
            field=models.TextField(max_length=80, null=True),
        ),
        migrations.AlterField(
            model_name='sitesa',
            name='address3',
            field=models.TextField(max_length=80, null=True),
        ),
        migrations.AlterField(
            model_name='sitesa',
            name='address4',
            field=models.TextField(max_length=80, null=True),
        ),
        migrations.AlterField(
            model_name='sitesa',
            name='campusid',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='sitesa',
            name='contact1',
            field=models.TextField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='sitesa',
            name='contact2',
            field=models.TextField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='sitesa',
            name='linkcode',
            field=models.TextField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='sitesa',
            name='phone1',
            field=models.TextField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='sitesa',
            name='phone2',
            field=models.TextField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='sitesb',
            name='address1',
            field=models.TextField(max_length=80, null=True),
        ),
        migrations.AlterField(
            model_name='sitesb',
            name='address2',
            field=models.TextField(max_length=80, null=True),
        ),
        migrations.AlterField(
            model_name='sitesb',
            name='address3',
            field=models.TextField(max_length=80, null=True),
        ),
        migrations.AlterField(
            model_name='sitesb',
            name='address4',
            field=models.TextField(max_length=80, null=True),
        ),
        migrations.AlterField(
            model_name='sitesb',
            name='campusid',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='sitesb',
            name='contact1',
            field=models.TextField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='sitesb',
            name='contact2',
            field=models.TextField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='sitesb',
            name='linkcode',
            field=models.TextField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='sitesb',
            name='phone1',
            field=models.TextField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='sitesb',
            name='phone2',
            field=models.TextField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='stuclassesa',
            name='clsgrpcode',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='studentsa',
            name='classgroupid',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='studentsa',
            name='ema',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='studentsa',
            name='emaid',
            field=models.TextField(max_length=12, null=True),
        ),
        migrations.AlterField(
            model_name='studentsa',
            name='finalyear',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='studentsa',
            name='fullypaid',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='studentsa',
            name='isdeferred',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='studentsa',
            name='isflipflop',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='studentsa',
            name='lecturerid',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='studentsa',
            name='newcourseid',
            field=models.TextField(max_length=12, null=True),
        ),
        migrations.AlterField(
            model_name='studentsa',
            name='oldcourseid',
            field=models.TextField(max_length=12, null=True),
        ),
        migrations.AlterField(
            model_name='studentsa',
            name='qtype3',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='studentsa',
            name='regchecked',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='studentsa',
            name='rulesetid',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='studentsb',
            name='classgroupid',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='studentsb',
            name='ema',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='studentsb',
            name='emaid',
            field=models.TextField(max_length=12, null=True),
        ),
        migrations.AlterField(
            model_name='studentsb',
            name='finalyear',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='studentsb',
            name='fullypaid',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='studentsb',
            name='isdeferred',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='studentsb',
            name='isflipflop',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='studentsb',
            name='lecturerid',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='studentsb',
            name='newcourseid',
            field=models.TextField(max_length=12, null=True),
        ),
        migrations.AlterField(
            model_name='studentsb',
            name='oldcourseid',
            field=models.TextField(max_length=12, null=True),
        ),
        migrations.AlterField(
            model_name='studentsb',
            name='qtype3',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='studentsb',
            name='regchecked',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='studentsb',
            name='rulesetid',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='stumodulesa',
            name='classif',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='stumodulesa',
            name='courseid',
            field=models.TextField(max_length=12, null=True),
        ),
        migrations.AlterField(
            model_name='stumodulesa',
            name='donotcount',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='stumodulesa',
            name='fixingrp',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='stumodulesa',
            name='inactive',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='stumodulesa',
            name='moddropped',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='stumodulesa',
            name='modgrpcode',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='stumodulesa',
            name='modlevel',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='stumodulesa',
            name='modpart',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='stumodulesa',
            name='restype',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='stumodulesa',
            name='unitvalue',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='stumodulesb',
            name='classif',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='stumodulesb',
            name='courseid',
            field=models.TextField(max_length=12, null=True),
        ),
        migrations.AlterField(
            model_name='stumodulesb',
            name='donotcount',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='stumodulesb',
            name='fixingrp',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='stumodulesb',
            name='inactive',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='stumodulesb',
            name='moddropped',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='stumodulesb',
            name='modgrpcode',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='stumodulesb',
            name='modlevel',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='stumodulesb',
            name='modpart',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='stumodulesb',
            name='restype',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='stumodulesb',
            name='unitvalue',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='board',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='classgroupid',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='classif',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='clsgrpcode',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='compcode',
            field=models.TextField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='copied',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='courseid',
            field=models.TextField(max_length=12, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='crsyear',
            field=models.TextField(max_length=4, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='datechanged',
            field=models.TextField(max_length=12, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='deptid',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='ecode',
            field=models.TextField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='einstalled',
            field=models.TextField(max_length=12, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='equipid',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='eremoved',
            field=models.TextField(max_length=12, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='ewhoinstalled',
            field=models.TextField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='ewhoremoved',
            field=models.TextField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='excludefit',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='fixlect',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='fixroom',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='gendatastring',
            field=models.TextField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='lecturerid',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='linkcode',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='mequipcat',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='mequiptype',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='modgrpcode',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='moduleid',
            field=models.TextField(max_length=12, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='moduletype',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='ncyear',
            field=models.TextField(max_length=3, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='optcode',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='owner',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='reasonforchange',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='reqcampusid',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='reqcategory',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='reqclass',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='reqroomid',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='reqsiteid',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='reqtype',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='reqzone',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='roomgrpcode',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='roomid',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='series',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='siteid',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='sourcesid',
            field=models.TextField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='subcode',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='tobecopied',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='triggerdate',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='uniquefield',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='board',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='classgroupid',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='classif',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='compcode',
            field=models.TextField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='copied',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='courseid',
            field=models.TextField(max_length=12, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='crsyear',
            field=models.TextField(max_length=4, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='datechanged',
            field=models.TextField(max_length=12, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='ecode',
            field=models.TextField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='einstalled',
            field=models.TextField(max_length=12, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='equipid',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='eremoved',
            field=models.TextField(max_length=12, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='ewhoinstalled',
            field=models.TextField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='ewhoremoved',
            field=models.TextField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='excludefit',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='fixlect',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='fixroom',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='gendatastring',
            field=models.TextField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='linkcode',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='mequipcat',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='mequiptype',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='ncyear',
            field=models.TextField(max_length=3, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='optcode',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='owner',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='reasonforchange',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='reqcampusid',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='reqcategory',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='reqclass',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='reqroomid',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='reqsiteid',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='reqtype',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='reqzone',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='series',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='sourcesid',
            field=models.TextField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='subcode',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='tobecopied',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='triggerdate',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='uniquefield',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='weekmapstringa',
            name='name',
            field=models.TextField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='weekmapstringa',
            name='statweeks',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='weekmapstringb',
            name='name',
            field=models.TextField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='weekmapstringb',
            name='statweeks',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='weekstructurea',
            name='description',
            field=models.TextField(max_length=80, null=True),
        ),
        migrations.AlterField(
            model_name='weekstructureb',
            name='description',
            field=models.TextField(max_length=80, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='clsgrpcode',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='deptid',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='lecturerid',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='modgrpcode',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='moduleid',
            field=models.TextField(max_length=12, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='moduletype',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='roomgrpcode',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='roomid',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='siteid',
            field=models.TextField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='starttime',
            field=models.TextField(max_length=5, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='starttime',
            field=models.TextField(max_length=5, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='finishtime',
            field=models.TextField(max_length=5, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='finishtime',
            field=models.TextField(max_length=5, null=True),
        ),
        migrations.AlterField(
            model_name='timetablea',
            name='userchange',
            field=models.TextField(max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='timetableb',
            name='userchange',
            field=models.TextField(max_length=30, null=True),
        ),
    ]
