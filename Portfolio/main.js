import * as THREE from 'three';

const scene = new THREE.Scene();

const geometry = new THREE.TorusKnotGeometry( 10, 2, 640, 640 ,6 ,14);
const material = new THREE.MeshStandardMaterial( { color: 0x91e3ff } );
const torusKnot = new THREE.Mesh( geometry, material );
scene.add( torusKnot );

const camera = new THREE.PerspectiveCamera(45, 800/ 600)
camera.position.z = 100
scene.add(camera)

const light = new THREE.PointLight(0xc5ff91, 1, 100)
light.position.set(0, 0, 10)
scene.add(light)

const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(800,600)
renderer.render(scene,camera)