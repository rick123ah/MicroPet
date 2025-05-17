enum RadioMessage {
    message1 = 49434
}
input.onSound(DetectedSound.Loud, function () {
    music.setVolume(1000)
    music.play(music.stringPlayable("C5 C5 B C5 C5 C5 B C5 ", 300), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    Hunger = 0
})
input.onSound(DetectedSound.Quiet, function () {
    basic.pause(randint(50000, 60000))
    Hunger = 1
    while (Hunger == 1) {
        music.play(music.stringPlayable("C5 C5 B C5 C5 C5 B C5 ", 300), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
let Hunger = 0
basic.clearScreen()
