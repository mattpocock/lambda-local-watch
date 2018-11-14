#!/bin/bash

sls invoke local -f hello --data "{'message': 'Oh, cool!'}";
sls invoke local -f awesome --data "{'message': 'Oh, cool!'}";