/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Liya Getachew 
 * Created on: Oct 2023
 * This program displays all 8 colours in sequential order when button is pressed.
*/

// On start
basic.clearScreen()
basic.showIcon(IconNames.EighthNote)
// red
pins.digitalWritePin(DigitalPin.P14, 0)
// green
pins.digitalWritePin(DigitalPin.P15, 0)
// blue
pins.digitalWritePin(DigitalPin.P16, 0)

input.onButtonPressed(Button.A, function () {
  // red
  basic.clearScreen()
  pins.digitalWritePin(DigitalPin.P14, 1)
  pins.digitalWritePin(DigitalPin.P15, 0)
  pins.digitalWritePin(DigitalPin.P16, 0)
  basic.showString("Red")
  basic.pause(1000)
  // blue
  pins.digitalWritePin(DigitalPin.P14, 0)
  pins.digitalWritePin(DigitalPin.P15, 0)
  pins.digitalWritePin(DigitalPin.P16, 1)
  basic.showString("Blue")
  basic.pause(1000)
  // green
  pins.digitalWritePin(DigitalPin.P14, 0)
  pins.digitalWritePin(DigitalPin.P15, 1)
  pins.digitalWritePin(DigitalPin.P16, 0)
  basic.showString("Green")
  basic.pause(1000)
  // magenta
  pins.digitalWritePin(DigitalPin.P14, 1)
  pins.digitalWritePin(DigitalPin.P15, 0)
  pins.digitalWritePin(DigitalPin.P16, 1)
  basic.showString("Magenta")
  basic.pause(1000)
  // cyan
  pins.digitalWritePin(DigitalPin.P14, 0)
  pins.digitalWritePin(DigitalPin.P15, 1)
  pins.digitalWritePin(DigitalPin.P16, 1)
  basic.showString("Cyan")
  basic.pause(1000)
  // yellow
  pins.digitalWritePin(DigitalPin.P14, 1)
  pins.digitalWritePin(DigitalPin.P15, 1)
  pins.digitalWritePin(DigitalPin.P16, 0)
  basic.showString("Yellow")
  basic.pause(1000)
  // white
  pins.digitalWritePin(DigitalPin.P14, 1)
  pins.digitalWritePin(DigitalPin.P15, 1)
  pins.digitalWritePin(DigitalPin.P16, 1)
  basic.showString("White")
  basic.pause(1000)
  // black
  pins.digitalWritePin(DigitalPin.P14, 0)
  pins.digitalWritePin(DigitalPin.P15, 0)
  pins.digitalWritePin(DigitalPin.P16, 0)
  basic.showString("Black")
  basic.pause(1000)
})
