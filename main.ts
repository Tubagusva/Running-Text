basic.showIcon(IconNames.Happy)
basic.forever(function () {
    basic.showString("Selamat siang")
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.InBackground)
})
