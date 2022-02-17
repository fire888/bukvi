import * as THREE from 'three'





export const initRayCaster = (camera, canvas) => {
    const backPlane = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(20, 20),
        new THREE.MeshBasicMaterial({ color: 0x000000 })
    )

    const mouse = new THREE.Vector2(1000, 1000)
    const raycaster = new THREE.Raycaster()
    const coord = new THREE.Vector3()

    document.body.addEventListener("mousemove", e => {
        mouse.x = ( (e.pageX - canvas.offsetLeft) /  canvas.clientWidth ) * 2 - 1
        mouse.y = - ( (e.pageY - canvas.offsetTop) / canvas.clientHeight )  * 2 + 1
        raycaster.setFromCamera(mouse, camera)
        const intersects = raycaster.intersectObject(backPlane)
        if (intersects && intersects[0]) {
            coord.x = intersects[0].point.x
            coord.y = intersects[0].point.y
            coord.z = intersects[0].point.z
        }
    })

    return coord
}
