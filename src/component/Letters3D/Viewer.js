import * as THREE from 'three'
import * as CANNON from 'cannon'
import { initLoaders } from './helpers/loaders'
import { initRayCaster } from './helpers/screenCursor'
import { shape2mesh } from './helpers/cannonHelpers'






import letters from '../../assets/3dModels/letters.glb'
import lettersBumpSrc from '../../assets/3dModels/lettersMapBump.jpg'
import pX from '../../assets/3dModels/pX.jpg'
import pY from '../../assets/3dModels/pY.jpg'
import pZ from '../../assets/3dModels/pZ.jpg'
import nX from '../../assets/3dModels/nX.jpg'
import nY from '../../assets/3dModels/nY.jpg'
import nZ from '../../assets/3dModels/nZ.jpg'






const ASSETS_MODELS = [
    { key: 'letters', src: letters, type: 'loaderGLTF', asset: null },
]
const ASSETS_MAPS = [
    { key: 'lettersBump', src: lettersBumpSrc, type: 'loaderIMG', asset: null },
]
const ASSETS_CUBE_MAPS = [
    { key: 'letterEnvMap', src: [ pX, nX, pY, nY, pZ, nZ ], type: 'cubeTextureLoader', asset: null },
]






export class Viewer {
    constructor() {
        this._animateNextRequest = null

        this._scene = new THREE.Scene()
        this._camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000)
        this._camera.position.set(0, 0, 3)

        this._scene.add(new THREE.AmbientLight(0x666666))

        const light = new THREE.PointLight(0xffffff, 3, 100)
        light.position.set(0, 50, 50)
        this._scene.add(light)

        this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true})
        this.renderer.setPixelRatio(window.devicePixelRatio)
        this.renderer.render(this._scene, this._camera)

        this._collisionWorld = new CollisionWorld()

        this._letters = []

        this._loadAssets().then(assets => {
            this._createLetters(assets)
            this._createUser()
        })
    }


    /** public *******************************************************/


    resize (w, h) {
        this._camera.aspect = w / h
        this._camera.updateProjectionMatrix()
        this.renderer.setSize( w, h )
        this.renderer.render( this._scene, this._camera )
    }


    startUpdate () {
        this._animate()
    }


    stopUpdate () {
        cancelAnimationFrame(this._animateNextRequest)
    }



    /** private *******************************************************/


    _loadAssets () {
        return new Promise(resolve => {
            const loadAssets = initLoaders()

            loadAssets(ASSETS_MODELS).then(assetsGLB => {
                loadAssets(ASSETS_MAPS).then(maps => {
                    loadAssets(ASSETS_CUBE_MAPS).then(cubeMaps => {
                        resolve({ assetsGLB, maps, cubeMaps })
                    })
                })
            })
        })
    }


    _createLetters (assets) {
        const { assetsGLB, maps, cubeMaps } = assets

        const envMap = cubeMaps[0].asset
        const bumpMap = maps[0].asset

        const mat = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            emissive: 0x7795d3,
            specular: 0xffffff,
            shininess: 100,
            envMap: envMap,
            bumpMap: bumpMap,
            bumpScale: 0.003,
            reflectivity: 1,
            transparent: true,
            opacity: 0.8,
        });

        Letter.setMaterial(mat)

        const letters = assetsGLB[0].asset.scene.children

        for (let i = 0; i < letters.length; i++) {
            const letter = new Letter(letters[i])

            this._scene.add(letter.mesh)
            //this._scene.add(letter.rigidHelper)
            this._collisionWorld.addRigidLetter(letter.rigid)
            this._letters.push(letter)

            i--
        }
    }


    _createUser () {
        this._user = new User(this._camera, this.renderer)
        this._collisionWorld.addRigidUser(this._user.rigid)
        //this._scene.add(this._user.helperRigid)
    }


    _animate () {
        this._collisionWorld.update()

        for (let letter of this._letters) letter.update()
        this._user && this._user.update()

        this.renderer.render(this._scene, this._camera)
        this._animateNextRequest = requestAnimationFrame(this._animate.bind(this))
    }
}






const FIXED_TIME_STEP = 1.0 / 60.0
const MAX_SUB_STEPS = 3


class CollisionWorld {
    constructor() {
        this._world = new CANNON.World()
        this._world.gravity.x = 0
        this._world.gravity.y = 0
        this._world.gravity.z = 0

        this._arrLettersBodies = []
        this._userBody = null

        this._lastTime = null
    }


    addRigidUser (userBody) {
        this._userBody = userBody
        this._world.addBody(this._userBody)
    }


    addRigidLetter (letterBody) {
        this._world.addBody(letterBody)
        this._arrLettersBodies.push(letterBody)
    }


    update () {
        const time = Date.now()
        if (this._lastTime !== null) {
            const dt = (time - this._lastTime) / 1000;
            this._world.step(FIXED_TIME_STEP, dt, MAX_SUB_STEPS)

            for (let i in this._arrLettersBodies)
                this._arrLettersBodies[i].position.z = 0
        }
        this._lastTime = time;
    }
}






class User {
    constructor (camera, renderer) {
        const userSize = 0.2
        const shape = new CANNON.Sphere(userSize)
        this.rigid = new CANNON.Body({
            mass: 5,
            position: new CANNON.Vec3(0, 0, 0),
            shape,
        });

        this.helperRigid = shape2mesh(this.rigid)

        this._cursour3dCoord = initRayCaster(camera, renderer.domElement)
    }


    update () {
        this.rigid.position.x = this._cursour3dCoord.x
        this.rigid.position.y = this._cursour3dCoord.y
        this.rigid.position.z = 0
        this.helperRigid.position.copy(this._cursour3dCoord)
    }
}






class Letter {
    static material = null

    static setMaterial (mat) {
        Letter.material = mat
    }

    constructor (mesh) {
        this.mesh = mesh
        this.mesh.position.z = 0
        this.mesh.material = Letter.material
        this._defaultPosition = new THREE.Vector3().copy(mesh.position)


        const { x, y, z } = mesh.position
        const shape = new CANNON.Sphere(0.4)
        this.rigid = new CANNON.Body({
            mass: 10,
            linearDamping: 0.9999,
            position: new CANNON.Vec3(x, y, z),
            shape,
        });

        this.rigidHelper = shape2mesh(this.rigid)
    }

    update () {
        this.mesh.rotation.z += 0.01
        this.mesh.position.copy(this.rigid.position)
        this.rigidHelper.position.copy(this.rigid.position)
    }
}





