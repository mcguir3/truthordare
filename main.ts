let pick = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    pick = randint(0, 1)
    if (pick == 0) {
        basic.showString("Truth")
    } else if (pick == 1) {
        basic.showString("Dare")
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    pick = randint(0, 3)
    if (pick == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (pick == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            . . # . .
            `)
    } else if (pick == 2) {
        basic.showLeds(`
            . . . . .
            . # . . .
            # # # # #
            . # . . .
            . . . . .
            `)
    } else if (pick == 3) {
        basic.showLeds(`
            . . . . .
            . . . # .
            # # # # #
            . . . # .
            . . . . .
            `)
    } else {
        basic.showIcon(IconNames.No)
    }
})
basic.forever(function () {
	
})
