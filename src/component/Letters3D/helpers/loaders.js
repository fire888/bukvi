import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'





export const initLoaders = () => {

    const loaders = {
        'loaderGLTF': new GLTFLoader(),
        'loaderIMG': new THREE.TextureLoader(),
        'cubeTextureLoader': new THREE.CubeTextureLoader(),
    }
    const loadAsset = (src, type) => new Promise(resolve => loaders[type].load(src, resolve))


    return data => new Promise(onLoad => {

        const nextOrComplete = (i, data) => {
            i++
            !data[i]
                ? onLoad(data)
                : loadAsset(data[i].src, data[i].type)
                .then(asset => (data[i].asset = asset) && nextOrComplete(i, data))
        }
        nextOrComplete(-1, data)
    })

}
