import VideoPlayer from './video-player'
import Helpers from './helpers'

const releaseMapAssets = (mapId) => {
    if (!ysp.Preloader.Config.releaseMapChange) {
        return
    }

    const assets = ysp.Preloader.MAP_BASED[mapId]

    if (!assets) {
        return
    }

    for (let image of assets.IMAGES) {
        ImageManager.releaseGroup(`img/${image}.png`)
    }

    for (let movie of assets.VIDEOS) {
        VideoPlayer.releaseVideo(movie)
    }
}

const preloadMapAssets = (mapId) => {
    const assets = ysp.Preloader.MAP_BASED[mapId]

    if (!assets) {
        return
    }

    for (let image of assets.IMAGES) {
        let path = `img/${Helpers.encodeURIImageName(image)}.png`
        ImageManager.reserveNormalBitmap(`${path}`, 0, ImageManager._defaultReservationId)
    }

    for (let movie of assets.VIDEOS) {
        VideoPlayer.loadVideo(movie)
    }
}

export default (Scene_Map) => {
    const _onMapLoaded = Scene_Map.prototype.onMapLoaded
    Scene_Map.prototype.onMapLoaded = function () {
        releaseMapAssets($gameMap.mapId())
        _onMapLoaded.call(this)
        preloadMapAssets($gameMap.mapId())
    }
}