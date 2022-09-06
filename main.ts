input.onButtonPressed(Button.A, function () {
    BOB += 1
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # . .
        . # . # .
        . # # # .
        `)
    basic.pause(1000)
    basic.showNumber(BOB)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    Tie += 1
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.showNumber(Tie)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Score += 1
    basic.showLeds(`
        . . # # .
        . # . . .
        . # # . .
        . . . # .
        . # # . .
        `)
    basic.pause(1000)
    basic.showNumber(Score)
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("BOB")
    basic.pause(1000)
    basic.showNumber(BOB)
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("Score")
    basic.pause(1000)
    basic.showNumber(Score)
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("Ties")
    basic.pause(1000)
    basic.showNumber(Tie)
    basic.pause(1000)
    basic.clearScreen()
})
let Tie = 0
let BOB = 0
let Score = 0
Score = 0
BOB = 0
Tie = 0
