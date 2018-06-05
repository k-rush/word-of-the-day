#!/bin/bash
chromium-browser --kiosk http://localhost:3000
while true;
do
xdotool key ctrl+F5
sleep 1200
done
