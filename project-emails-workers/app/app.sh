#!/bin/sh

pip install bottle==0.12.19 psycopg2==2.9.3 redis==4.1.0
python -u sender.py
