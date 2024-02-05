import './style.css'
import * as THREE from 'three'

// Creo la scena
const scene = new THREE.Scene()

// Creo un cubo verde
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })

// Creo la mesh
const mesh = new THREE.Mesh(geometry, material)

// Aggiungo il cubo alla scena
scene.add(mesh)

// imposto temporaneamente le dimensione del render
const tmp = {
  width: 1024,
  height: 720,
}

// Creo la camera prospettica
const camera = new THREE.PerspectiveCamera(
  75,
  tmp.width / tmp.height,
  //0.1,
  //10
)

// Creo il renderer
const renderer = new THREE.WebGLRenderer()
renderer.setSize(tmp.width, tmp.height)

// Append la canvas al body del document
document.body.appendChild(renderer.domElement)

// Sposto indietro la camera
camera.position.z = 6
// mesh.rotation.y = Math.PI / 4
// mesh.rotation.x = Math.PI / 4

// Renderizzo la scena dalla camera
renderer.render(scene, camera)
