let dice = 0
input.onButtonPressed(Button.A, function () {
    music.play(music.createSoundExpression(WaveShape.Noise, 3423, 1698, 103, 60, 666, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    // Displays the current temperature on the LED grid :D
    basic.showNumber(input.temperature())
    basic.showString("*C")
    basic.pause(100)
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # # .
            . # # . .
            # # # # .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            # # # # #
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . # # . .
            . . # # .
            . # # # #
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            # # # # #
            `)
    }
    basic.clearScreen()
})
// old code from testing
input.onButtonPressed(Button.AB, function () {
    music.play(music.createSoundExpression(WaveShape.Noise, 3423, 1698, 103, 60, 666, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 9; index++) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . . # .
            # # . # .
            . . # . .
            . # . # #
            . # . . .
            `)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            . # . . .
            . # . # #
            . . # . .
            # # . # .
            . . . # .
            `)
        basic.clearScreen()
    }
})
// compass
input.onButtonPressed(Button.B, function () {
    music.play(music.createSoundExpression(WaveShape.Noise, 3423, 1698, 103, 60, 666, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    basic.showNumber(input.compassHeading())
    basic.pause(100)
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # # .
            . # # . .
            # # # # .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            # # # # #
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . # # . .
            . . # # .
            . # # # #
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            # # # # #
            `)
    }
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    dice = randint(1, 6)
    if (dice == 1) {
        basic.showString("1")
    } else if (dice == 2) {
        basic.showString("2")
    } else if (dice == 3) {
        basic.showString("3")
    } else if (dice == 4) {
        basic.showString("4")
    } else if (dice == 5) {
        basic.showString("5")
    } else if (dice == 6) {
        basic.showString("6")
    }
    basic.pause(2000)
    basic.clearScreen()
})
input.onGesture(Gesture.LogoDown, function () {
    music.play(music.createSoundExpression(WaveShape.Noise, 3423, 1698, 103, 60, 666, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # # .
            . # # . .
            # # # # .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            # # # # #
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . # # . .
            . . # # .
            . # # # #
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            # # # # #
            `)
    }
    basic.clearScreen()
})
