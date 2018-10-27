@echo off
FOR /F "tokens=*" %%o IN (' %date /t% ') DO SET date=%%o
FOR /F "tokens=*" %%o IN (' %time /t% ') DO SET time=%%o
echo Current Date: %date%
echo Current Time: %time%
