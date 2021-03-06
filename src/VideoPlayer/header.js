/*:
 * @plugindesc v1.0.0 Plugin used for playing video.
 * @author Dr.Yami
 *
 * @help
 * Use script call:
 *   ysp.VideoPlayer.loadVideo(videoName) - Preload Video
 *   ysp.VideoPlayer.releaseVideo(videoName) - Release memory for a Video
 *   ysp.VideoPlayer.newVideo(videoName, id) - Create new Video object with id
 *   ysp.VideoPlayer.playVideoById(id) - Play a Video object by id
 *   ysp.VideoPlayer.stopVideoById(id) - Stop a Video object by id
 *   ysp.VideoPlayer.setLoopById(id) - Make a Video object playing loop by id
 *   ysp.VideoPlayer.getVideoById(id) - Get Video object by id
 *   ysp.VideoPlayer.isReady() - Check if all videos have been loaded
 *
 * Video Object is a PIXI.Sprite object, can be re-position by modifying x and y props
 * To preload a (or many) video(s), use loadVideo(videoName) followed by a loop in
 * an event, break the loop when isReady() returns true
 */

