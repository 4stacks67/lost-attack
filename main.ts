scene.onOverlapTile(SpriteKind.Player, assets.tile`instrument1`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`exit`, function (sprite, location) {
    game.over(true)
})
scene.setBackgroundColor(13)
tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(assets.image`rockstar`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`stage`)
