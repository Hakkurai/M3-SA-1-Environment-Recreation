import * as THREE from './js/three.js';
import { OrbitControls } from './js/OrbitControls.js';
import { GLTFLoader } from './js/GLTFLoader.js';

// Mouse Control
let isRightMouseDown = false;
let prevMouseX = 0;
let prevMouseY = 0;

function onMouseDown(event) {
    if (event.button === 2) { // Right mouse button
        isRightMouseDown = true;
        prevMouseX = event.clientX;
        prevMouseY = event.clientY;
    }
}

function onMouseUp(event) {
    if (event.button === 2) { // Right mouse button
        isRightMouseDown = false;
    }
}

function onMouseMove(event) {
    if (isRightMouseDown) {
        const deltaX = event.clientX - prevMouseX;
        const deltaY = event.clientY - prevMouseY;

        const sensitivity = 0.001;
        camera.rotation.y -= deltaX * sensitivity;
        camera.rotation.x -= deltaY * sensitivity;

        prevMouseX = event.clientX;
        prevMouseY = event.clientY;
    }
}

document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);
document.addEventListener('mousemove', onMouseMove);

// WASD Movement
const keyboard = {};
document.addEventListener('keydown', (event) => {
    keyboard[event.key] = true;
});
document.addEventListener('keyup', (event) => {
    keyboard[event.key] = false;
});

const moveSpeed = 0.1;
const flySpeed = 0.1;

function updateCameraPosition() {
    const moveVector = new THREE.Vector3(); // Vector to store movement direction

    if (keyboard['w']) {
        moveVector.z -= moveSpeed; // Move camera forward
    }
    if (keyboard['s']) {
        moveVector.z += moveSpeed; // Move camera backward
    }
    if (keyboard['a']) {
        moveVector.x -= moveSpeed; // Move camera left
    }
    if (keyboard['d']) {
        moveVector.x += moveSpeed; // Move camera right
    }
    if (keyboard[' ']) { // Spacebar
        camera.position.y += flySpeed; // Move camera upwards
    }

    // Apply movement vector to the camera's position
    camera.position.add(moveVector);
}

// Render Loop
function animate() {
    requestAnimationFrame(animate);

    updateCameraPosition();
    renderer.render(scene, camera);
}

const controls = new OrbitControls(camera, renderer.domElement);
const loader = new GLTFLoader();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 4;

// Floor
const textureLoader = new THREE.TextureLoader();
const Fgeometry = new THREE.PlaneGeometry(15, 6);
const Ftexture = textureLoader.load('https://cdn.polyhaven.com/asset_img/primary/leather_red_02.png?height=760');
const Fmaterial = new THREE.MeshStandardMaterial({ map: Ftexture, side: THREE.DoubleSide });
const plane = new THREE.Mesh(Fgeometry, Fmaterial);
plane.rotation.x = -Math.PI / 2;
plane.position.y = -2;

// Front Wall
const Frgeometry = new THREE.PlaneGeometry(15, 4);
const Frtexture = textureLoader.load('https://cdn.polyhaven.com/asset_img/primary/gravel_concrete_03.png?height=760');
const Frmaterial = new THREE.MeshBasicMaterial({ map: Frtexture, side: THREE.DoubleSide });
const Frplane = new THREE.Mesh(Frgeometry, Frmaterial);
Frplane.position.z = -2.7;
Frplane.rotation.y = 0;

// Right Wall
const Rgeometry = new THREE.PlaneGeometry(6, 4);
const Rtexture = textureLoader.load('https://cdn.polyhaven.com/asset_img/primary/gravel_concrete_03.png?height=760');
const Rmaterial = new THREE.MeshBasicMaterial({ map: Rtexture, side: THREE.DoubleSide });
const Rplane = new THREE.Mesh(Rgeometry, Rmaterial);
Rplane.position.x = 7.5;
Rplane.position.z = 0;
Rplane.rotation.y = Math.PI / 2;

// Left Wall
const Lgeometry = new THREE.PlaneGeometry(6, 4);
const Ltexture = textureLoader.load('https://cdn.polyhaven.com/asset_img/primary/gravel_concrete_03.png?height=760');
const Lmaterial = new THREE.MeshBasicMaterial({ map: Ltexture, side: THREE.DoubleSide });
const Lplane = new THREE.Mesh(Lgeometry, Lmaterial);
Lplane.position.x = -7.5;
Lplane.position.z = 0;
Lplane.rotation.y = -Math.PI / 2;

// Roof
const roofGeometry = new THREE.PlaneGeometry(15, 6);
const roofTexture = textureLoader.load('https://cdn.polyhaven.com/asset_img/renders/painted_plaster_wall/clay.png?height=760');
const roofMaterial = new THREE.MeshToonMaterial({ map: roofTexture, side: THREE.DoubleSide });
const roof = new THREE.Mesh(roofGeometry, roofMaterial);
roof.rotation.x = Math.PI / 2;
roof.position.y = 2;

// Staircase 1
const S1geometry = new THREE.BoxGeometry(3.5, 0.4, 1);
const S1texture = textureLoader.load('https://cdn.polyhaven.com/asset_img/primary/concrete_floor_worn_001.png?height=760');
const S1material = new THREE.MeshStandardMaterial({ map: S1texture });
const S1cube = new THREE.Mesh(S1geometry, S1material);
S1cube.position.x = 4;
S1cube.position.y = -2;
S1cube.position.z = -2;

// Staircase 2
const S2geometry = new THREE.BoxGeometry(2, 0.2, 1);
const S2texture = textureLoader.load('https://cdn.polyhaven.com/asset_img/primary/concrete_floor_worn_001.png?height=760');
const S2material = new THREE.MeshStandardMaterial({ map: S2texture });
const S2cube = new THREE.Mesh(S2geometry, S2material);
S2cube.position.x = 4;
S2cube.position.y = -1.74;
S2cube.position.z = -2;

// Staircase 3
const S3geometry = new THREE.BoxGeometry(2, 0.2, 1);
const S3texture = textureLoader.load('https://cdn.polyhaven.com/asset_img/primary/concrete_floor_worn_001.png?height=760');
const S3material = new THREE.MeshStandardMaterial({ map: S3texture });
const S3cube = new THREE.Mesh(S3geometry, S3material);
S3cube.position.x = 4.78;
S3cube.position.y = -1.56;
S3cube.position.z = -2;

// Door
const DRgeometry = new THREE.BoxGeometry(0.1, 3, 1);
const DRtexture = textureLoader.load('https://cdn.polyhaven.com/asset_img/renders/laminate_floor_02/clay.png?height=760');
const DRmaterial = new THREE.MeshToonMaterial({ map: DRtexture, side: THREE.DoubleSide });
const DRcube = new THREE.Mesh(DRgeometry, DRmaterial);
DRcube.position.x = 5;
DRcube.position.y = 0.11;
DRcube.position.z = -2;

// Door Knob
const DKgeometry = new THREE.BoxGeometry(0.13, 0.13, 0.13);
const DKtexture = textureLoader.load('https://cdn.polyhaven.com/asset_img/renders/green_metal_rust/clay.png?height=760');
const DKmaterial = new THREE.MeshBasicMaterial({ map: DKtexture, side: THREE.DoubleSide });
const DKcube = new THREE.Mesh(DKgeometry, DKmaterial);
DKcube.position.x = 5;
DKcube.position.y = 0.11;
DKcube.position.z = -1.8;

scene.add(plane, Frplane, Rplane, Lplane, roof, S1cube, S2cube, S3cube, DRcube, DKcube);

// Ambient Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// Point Lights
const pointLight1 = new THREE.PointLight(0xffffff, 1);
pointLight1.position.set(0, 2, -2.5);
scene.add(pointLight1);

const pointLight2 = new THREE.PointLight(0xffffff, 1);
pointLight2.position.set(0, 2, 4);
scene.add(pointLight2);

