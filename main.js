import './style.css'
import * as THREE from 'three'

// Creo la scena
const scene = new THREE.Scene()

// Creo un cubo verde
const geometry = new THREE.BoxGeometry(1, 1, 1)
//const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const material = new THREE.MeshNormalMaterial()

// Creo la mesh
const mesh = new THREE.Mesh(geometry, material)

// Aggiungo il cubo alla scena
scene.add(mesh)

// Imposto temporaneamente le dimensione del render.
// Il rapporto tra questi due valori determina l'aspect ratio (secondo parametro della camera)
const tmp = {
  width: 1024,
  height: 720,
}

// Creo la camera prospettica
const camera = new THREE.PerspectiveCamera(
  75,
  tmp.width / tmp.height,
  0.1,
  10
)

// Creo il renderer e imposto la dimensione del frame
const renderer = new THREE.WebGLRenderer()
renderer.setSize(tmp.width, tmp.height)

// Append la canvas (renderer.domElement) al body del document
document.body.appendChild( renderer.domElement )

// Sposto indietro la camera
camera.position.z = 6

/*
// Applico una rotazione alla mesh
mesh.rotation.y = Math.PI / 4
mesh.rotation.x = Math.PI / 4

// Renderizzo la scena dalla camera
renderer.render(scene, camera)
*/

// Crea una animazione tramite frame loop
function tic() {
  // Renderizzo la scena dalla camera
  renderer.render(scene, camera)
  // Applico una rotazione alla mesh
  mesh.rotation.x += 0.01
  mesh.rotation.y += 0.01
  // invochiamo la funzione tic al prossimo frame
  requestAnimationFrame(tic)
}

// Start frame loop
requestAnimationFrame(tic)
