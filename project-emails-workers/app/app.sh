#!/bin/sh

pip install bottle==0.12.19 psycopg2==2.9.3 redis==6.0.2
python -u sender.py
