"""
Created by: Liya Getachew
Created on: Oct 2023
This module is a Micro:bit MicroPython program that displays all 8 colours in sequential order when button is pressed.
"""

from microbit import *


display.clear()
display.show(Image.HEART)

while True:
    if button_a.is_pressed():
        # red
        pin14.write_digital(1)
        pin15.write_digital(0)
        pin16.write_digital(0)
        display.scroll("Red")
        sleep(1000)
        # blue
        pin14.write_digital(0)
        pin15.write_digital(0)
        pin16.write_digital(1)
        display.scroll("Blue")
        sleep(1000)
        # green
        pin14.write_digital(0)
        pin15.write_digital(1)
        pin16.write_digital(0)
        display.scroll("Green")
        sleep(1000)
        # magenta
        pin14.write_digital(1)
        pin15.write_digital(0)
        pin16.write_digital(1)
        display.scroll("Magenta")
        sleep(1000)
        # cyan
        pin14.write_digital(0)
        pin15.write_digital(1)
        pin16.write_digital(1)
        display.scroll("Cyan")
        sleep(1000)
        # yellow
        pin14.write_digital(1)
        pin15.write_digital(1)
        pin16.write_digital(0)
        display.scroll("Yellow")
        sleep(1000)
        # white
        pin14.write_digital(1)
        pin15.write_digital(1)
        pin16.write_digital(1)
        display.scroll("White")
        sleep(1000)
        # black
        pin14.write_digital(0)
        pin15.write_digital(0)
        pin16.write_digital(0)
        display.scroll("Black")
        sleep(1000)
