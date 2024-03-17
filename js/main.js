import * as THREE from './three.js';
import { OrbitControls } from './OrbitControls.js';
import { GLTFLoader } from './GLTFLoader.js';

// Scene
const scene = new THREE.Scene();
// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 10, 70); // Adjusted camera position
camera.lookAt(0, 0, 0);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// Ambient Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

// Point Lights
const pointLight1 = new THREE.PointLight(0xffffff, 0.5);
pointLight1.position.set(-3, 2, -2.5);
scene.add(pointLight1);

const pointLight2 = new THREE.PointLight(0xffffff, 0.5);
pointLight2.position.set(3, 2, -2.5);
scene.add(pointLight2);

camera.position.z = 4;
const cameraControl = new OrbitControls(camera, renderer.domElement);

// Floor
const textureLoader = new THREE.TextureLoader();
const Fgeometry = new THREE.PlaneGeometry(15, 15);
const Ftexture = textureLoader.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsPlj3wP5aDRbvOmFrnwLa6jYL7oRaQRTAZsMkSsn0iIM1dCP9');
const Fmaterial = new THREE.MeshStandardMaterial({ map: Ftexture, side: THREE.DoubleSide });
const plane = new THREE.Mesh(Fgeometry, Fmaterial);
plane.rotation.x = -Math.PI / 2;
plane.position.y = -2;

// Front Wall
const Frgeometry = new THREE.PlaneGeometry(15, 4);
const Frtexture = textureLoader.load('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRAlrKLwWAvXJocp1mCtSg7ZSWe_OG8AgFbp6RI_cYbrxNib_Z2');
const Frmaterial = new THREE.MeshBasicMaterial({ map: Frtexture, side: THREE.DoubleSide });
const Frplane = new THREE.Mesh(Frgeometry, Frmaterial);
Frplane.position.z = -7.5;
Frplane.rotation.y = 0;

// Right Wall
const Rgeometry = new THREE.PlaneGeometry(15, 4);
const Rtexture = textureLoader.load('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRAlrKLwWAvXJocp1mCtSg7ZSWe_OG8AgFbp6RI_cYbrxNib_Z2');
const Rmaterial = new THREE.MeshBasicMaterial({ map: Rtexture, side: THREE.DoubleSide });
const Rplane = new THREE.Mesh(Rgeometry, Rmaterial);
Rplane.position.x = 7.5;
Rplane.position.z = 0;
Rplane.rotation.y = Math.PI / 2;

// Left Wall
const Lgeometry = new THREE.PlaneGeometry(15, 4);
const Ltexture = textureLoader.load('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRAlrKLwWAvXJocp1mCtSg7ZSWe_OG8AgFbp6RI_cYbrxNib_Z2');
const Lmaterial = new THREE.MeshBasicMaterial({ map: Ltexture, side: THREE.DoubleSide });
const Lplane = new THREE.Mesh(Lgeometry, Lmaterial);
Lplane.position.x = -7.5;
Lplane.position.z = 0;
Lplane.rotation.y = -Math.PI / 2;

// Roof
const roofGeometry = new THREE.PlaneGeometry(15, 15);
const roofTexture = textureLoader.load('https://cdn.discordapp.com/attachments/1201639742006104165/1219012101583011840/image.png?ex=6609c07d&is=65f74b7d&hm=c6c25216c5e6f6f78bf1ab84cc4156cf433ef96e0c2cde265aa5f7f88ef3d8d5&');
const roofMaterial = new THREE.MeshToonMaterial({ map: roofTexture, side: THREE.DoubleSide });
const roof = new THREE.Mesh(roofGeometry, roofMaterial);
roof.rotation.x = Math.PI / 2;
roof.position.y = 2;

// Kitchen Floor
const KFgeometry = new THREE.BoxGeometry(4, 0.1, 5);
const KFtexture = textureLoader.load('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSKykeh3iRwFgCD2mg16zkxER8V8rXKauwumiEK2JOcPFhl7_v7');
const KFmaterial = new THREE.MeshStandardMaterial({ map: KFtexture });
const KFcube = new THREE.Mesh(KFgeometry, KFmaterial);
KFcube.position.x = 5.45;
KFcube.position.y = -1.93;
KFcube.position.z = -1.01;

// Refrigerator
const RFgeometry = new THREE.BoxGeometry(0.9, 3.2, 1.5);
const RFtexture = textureLoader.load('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTAXMcY5WNjRybbwKVBbWXJ52ouUZl0aHrse9r1b1gnZXWQEYdL');
const RFmaterial = new THREE.MeshToonMaterial({ map: RFtexture, side: THREE.DoubleSide });
const RFcube = new THREE.Mesh(RFgeometry, RFmaterial);
RFcube.position.x = 7;
RFcube.position.y = -0.4;
RFcube.position.z = 0.6;

// Refrigerator Handle 
const RHgeometry = new THREE.BoxGeometry(0.13, 1.1, 0.13);
const RHtexture = textureLoader.load('data:image/jpeg;base64,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');
const RHmaterial = new THREE.MeshBasicMaterial({ map: RHtexture, side: THREE.DoubleSide });
const RHcube = new THREE.Mesh(RHgeometry, RHmaterial);
RHcube.position.x = 6.5;
RHcube.position.y = 0.13;
RHcube.position.z = 1;

// Refrigerator Handle 1 
const RH1geometry = new THREE.BoxGeometry(0.13, 1.1, 0.13);
const RH1texture = textureLoader.load('data:image/jpeg;base64,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');
const RH1material = new THREE.MeshBasicMaterial({ map: RH1texture, side: THREE.DoubleSide });
const RH1cube = new THREE.Mesh(RH1geometry, RH1material);
RH1cube.position.x = 6.5;
RH1cube.position.y = 0.13;
RH1cube.position.z = 0.2;

// Room Wall - Front 
const RWgeometry = new THREE.PlaneGeometry(6, 4);
const RWtexture = textureLoader.load('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRAlrKLwWAvXJocp1mCtSg7ZSWe_OG8AgFbp6RI_cYbrxNib_Z2');
const RWmaterial = new THREE.MeshBasicMaterial({ map: RWtexture, side: THREE.DoubleSide });
const RWplane = new THREE.Mesh(RWgeometry, RWmaterial);
RWplane.position.z = 1.5;
RWplane.rotation.y = 0;
RWplane.position.x = -4.5;

// Room Wall 1 - Right
const RW1geometry = new THREE.PlaneGeometry(6, 4);
const RW1texture = textureLoader.load('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRAlrKLwWAvXJocp1mCtSg7ZSWe_OG8AgFbp6RI_cYbrxNib_Z2');
const RW1material = new THREE.MeshBasicMaterial({ map: RW1texture, side: THREE.DoubleSide });
const RW1plane = new THREE.Mesh(RW1geometry, RW1material);
RW1plane.position.x = 1;
RW1plane.position.z = 4.5;
RW1plane.rotation.y = Math.PI / 2;

// Room Wall 2 - Kitchen Side
const RW2geometry = new THREE.PlaneGeometry(7, 4);
const RW2texture = textureLoader.load('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRAlrKLwWAvXJocp1mCtSg7ZSWe_OG8AgFbp6RI_cYbrxNib_Z2');
const RW2material = new THREE.MeshBasicMaterial({ map: RW2texture, side: THREE.DoubleSide });
const RW2plane = new THREE.Mesh(RW2geometry, RW2material);
RW2plane.position.z = 1.5;
RW2plane.rotation.y = 0;
RW2plane.position.x = 4;

// Back Wall
const Bgeometry = new THREE.PlaneGeometry(15, 4);
const Btexture = textureLoader.load('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRAlrKLwWAvXJocp1mCtSg7ZSWe_OG8AgFbp6RI_cYbrxNib_Z2');
const Bmaterial = new THREE.MeshBasicMaterial({ map: Btexture, side: THREE.DoubleSide });
const Bplane = new THREE.Mesh(Bgeometry, Bmaterial);
Bplane.position.z = 7.5;
Bplane.rotation.y = 0;

// White Wall Design - Front
const WWgeometry = new THREE.PlaneGeometry(15, 1);
const WWtexture = textureLoader.load('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT2IwZ7ohzt1kvqgAVLuWO-k3LAevEt-O8O5DOVs94suZ85A17S');
const WWmaterial = new THREE.MeshBasicMaterial({ map: WWtexture, side: THREE.DoubleSide });
const WWplane = new THREE.Mesh(WWgeometry, WWmaterial);
WWplane.position.z = -7.49;
WWplane.position.y = -1.5;
WWplane.rotation.x = 0;

// White Wall Design 1 - Right
const WW1geometry = new THREE.PlaneGeometry(15, 1);
const WW1texture = textureLoader.load('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT2IwZ7ohzt1kvqgAVLuWO-k3LAevEt-O8O5DOVs94suZ85A17S');
const WW1material = new THREE.MeshBasicMaterial({ map: WW1texture, side: THREE.DoubleSide });
const WW1plane = new THREE.Mesh(WW1geometry, WW1material);
WW1plane.position.x = 7.49;
WW1plane.position.y = -1.5;
WW1plane.rotation.y = Math.PI / 2;

// White Wall Design 2 - Left
const WW2geometry = new THREE.PlaneGeometry(15, 1);
const WW2texture = textureLoader.load('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT2IwZ7ohzt1kvqgAVLuWO-k3LAevEt-O8O5DOVs94suZ85A17S');
const WW2material = new THREE.MeshBasicMaterial({ map: WW2texture, side: THREE.DoubleSide });
const WW2plane = new THREE.Mesh(WW2geometry, WW2material);
WW2plane.position.x = -7.49;
WW2plane.position.y = -1.5;
WW2plane.rotation.y = -Math.PI / 2;

// White Wall Design 3 - Back
const WW3geometry = new THREE.PlaneGeometry(15, 1);
const WW3texture = textureLoader.load('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT2IwZ7ohzt1kvqgAVLuWO-k3LAevEt-O8O5DOVs94suZ85A17S');
const WW3material = new THREE.MeshBasicMaterial({ map: WW3texture, side: THREE.DoubleSide });
const WW3plane = new THREE.Mesh(WW3geometry, WW3material);
WW3plane.position.z = 7.49;
WW3plane.position.y = -1.5;

// White Wall Design 4 - Room Wall Front 
const WW4geometry = new THREE.PlaneGeometry(6, 1);
const WW4texture = textureLoader.load('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT2IwZ7ohzt1kvqgAVLuWO-k3LAevEt-O8O5DOVs94suZ85A17S');
const WW4material = new THREE.MeshBasicMaterial({ map: WW4texture, side: THREE.DoubleSide });
const WW4plane = new THREE.Mesh(WW4geometry, WW4material);
WW4plane.position.z = 1.51;
WW4plane.position.y = -1.5;
WW4plane.position.x = -4.5;

// White Wall Design 5 - Room Wall Right 
const WW5geometry = new THREE.PlaneGeometry(6, 1);
const WW5texture = textureLoader.load('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT2IwZ7ohzt1kvqgAVLuWO-k3LAevEt-O8O5DOVs94suZ85A17S');
const WW5material = new THREE.MeshBasicMaterial({ map: WW5texture, side: THREE.DoubleSide });
const WW5plane = new THREE.Mesh(WW5geometry, WW5material);
WW5plane.position.x = 0.99;
WW5plane.position.z = 4.5;
WW5plane.position.y = -1.5;
WW5plane.rotation.y = Math.PI / 2;

// White Wall Design 6 - Kitchen Side 
const WW6geometry = new THREE.PlaneGeometry(7, 1);
const WW6texture = textureLoader.load('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT2IwZ7ohzt1kvqgAVLuWO-k3LAevEt-O8O5DOVs94suZ85A17S');
const WW6material = new THREE.MeshBasicMaterial({ map: WW6texture, side: THREE.DoubleSide });
const WW6plane = new THREE.Mesh(WW6geometry, WW6material);
WW6plane.position.z = 1.49;
WW6plane.position.y = -1.5;
WW6plane.position.x = 4;

// White Wall Design 7 - Living Room Side 
const WW7geometry = new THREE.PlaneGeometry(6, 1);
const WW7texture = textureLoader.load('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT2IwZ7ohzt1kvqgAVLuWO-k3LAevEt-O8O5DOVs94suZ85A17S');
const WW7material = new THREE.MeshBasicMaterial({ map: WW7texture, side: THREE.DoubleSide });
const WW7plane = new THREE.Mesh(WW7geometry, WW7material);
WW7plane.position.z = 1.49;
WW7plane.position.y = -1.5;
WW7plane.position.x = -4.5;

// White Wall Design 8 - Kitchen Back-Side
const WW8geometry = new THREE.PlaneGeometry(7, 1);
const WW8texture = textureLoader.load('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT2IwZ7ohzt1kvqgAVLuWO-k3LAevEt-O8O5DOVs94suZ85A17S');
const WW8material = new THREE.MeshBasicMaterial({ map: WW8texture, side: THREE.DoubleSide });
const WW8plane = new THREE.Mesh(WW8geometry, WW8material);
WW8plane.position.z = 1.51;
WW8plane.position.y = -1.5;
WW8plane.position.x = 4;

// L - Shape Counter Top 
const LSgeometry = new THREE.BoxGeometry(0.9, 1.5, 3.2);
const LStexture = textureLoader.load('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRM_XAUScwsDWJ7iW6h3pEMvh7g4s9dibx8FH3WVrSQBX4XF0qJ');
const LSmaterial = new THREE.MeshBasicMaterial({ map: LStexture, side: THREE.DoubleSide });
const LScube = new THREE.Mesh(LSgeometry, LSmaterial);
LScube.position.x = 6.9;
LScube.position.y = -1.2;
LScube.position.z = -1.9;

// L - Shape Counter Top 1
const LS1geometry = new THREE.BoxGeometry(2.75, 1.5, 1);
const LS1texture = textureLoader.load('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRM_XAUScwsDWJ7iW6h3pEMvh7g4s9dibx8FH3WVrSQBX4XF0qJ');
const LS1material = new THREE.MeshBasicMaterial({ map: LS1texture, side: THREE.DoubleSide });
const LS1cube = new THREE.Mesh(LS1geometry, LS1material);
LS1cube.position.x = 5.1;
LS1cube.position.y = -1.2;
LS1cube.position.z = -3;

// Couch 
const Cgeometry = new THREE.BoxGeometry(0.2, 1.5, 3.2);
const Ctexture = textureLoader.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuFMvvbzjtQbhintBybEBl_8fRMqjNeA9pZNuL_Dv3zq0qUsiY');
const Cmaterial = new THREE.MeshBasicMaterial({ map: Ctexture, side: THREE.DoubleSide });
const Ccube = new THREE.Mesh(Cgeometry, Cmaterial);
Ccube.position.x = -1.9;
Ccube.position.y = -1.2;
Ccube.position.z = -5.8;

// Couch Seat
const CSgeometry = new THREE.BoxGeometry(1, 0.5, 3.2);
const CStexture = textureLoader.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuFMvvbzjtQbhintBybEBl_8fRMqjNeA9pZNuL_Dv3zq0qUsiY');
const CSmaterial = new THREE.MeshBasicMaterial({ map: CStexture, side: THREE.DoubleSide });
const CScube = new THREE.Mesh(CSgeometry, CSmaterial);
CScube.position.x = -2.5;
CScube.position.y = -1.7;
CScube.position.z = -5.8;

// Bed Foam
const BFgeometry = new THREE.BoxGeometry(2.5, 0.5, 3.2); 
const BFtexture = textureLoader.load('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSr15abpEg5mDDcSQVzXxZxjMGba4ATtQ0_fr0av0NtkEKG_Mhs');
const BFmaterial = new THREE.MeshBasicMaterial({ map: BFtexture, side: THREE.DoubleSide });
const BFcube = new THREE.Mesh(BFgeometry, BFmaterial);
BFcube.position.x = -5.9;
BFcube.position.y = -1.7;
BFcube.position.z = 5.8;

// Bed Blanket 
const BBgeometry = new THREE.BoxGeometry(2.5, 0.1, 2.2);
const BBtexture = textureLoader.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiVgP6Fn7TTG_kwg_51yTye0EVrY8LKcsnM-spuHO3A6FSu2Y5');
const BBmaterial = new THREE.MeshBasicMaterial({ map: BBtexture, side: THREE.DoubleSide });
const BBcube = new THREE.Mesh(BBgeometry, BBmaterial);
BBcube.position.x = -5.9;
BBcube.position.y = -1.4;
BBcube.position.z = 5.3;

// TV Table 
const TVTgeometry = new THREE.BoxGeometry(1, 0.5, 2.2);
const TVTtexture = textureLoader.load('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQxHXgjrken5QkXt8nv7XMNVr0siHo-8KX3INJClCwPXvCyZwje');
const TVTmaterial = new THREE.MeshBasicMaterial({ map: TVTtexture, side: THREE.DoubleSide });
const TVTcube = new THREE.Mesh(TVTgeometry, TVTmaterial);
TVTcube.position.x = -6.9;
TVTcube.position.y = -1.7;
TVTcube.position.z = -5.8;

// Television 
const TVgeometry = new THREE.BoxGeometry(0.1, 1.5, 3.2);
const TVtexture = textureLoader.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJOFBenHUEJthIs597dZWvuwz5ftMqIBGKlfDQmPvZN52OFUce');
const TVmaterial = new THREE.MeshBasicMaterial({ map: TVtexture, side: THREE.DoubleSide });
const TVcube = new THREE.Mesh(TVgeometry, TVmaterial);
TVcube.position.x = -6.9;
TVcube.position.y = -0.65;
TVcube.position.z = -5.8;

// Kitchen Cabinet 
const KCgeometry = new THREE.BoxGeometry(0.9, 2.5, 1.5);
const KCtexture = textureLoader.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyLnc0FIlyfidopVshyXiU6Q3Frh6WprSHbUZdurfBsbSegdbX');
const KCmaterial = new THREE.MeshToonMaterial({ map: KCtexture, side: THREE.DoubleSide });
const KCcube = new THREE.Mesh(KCgeometry, KCmaterial);
KCcube.position.x = 7;
KCcube.position.y = -0.75;
KCcube.position.z = -6.5;

// Kitchen Cabinet Handle 
const KCHgeometry = new THREE.BoxGeometry(0.13, 0.2, 0.13);
const KCHtexture = textureLoader.load('data:image/jpeg;base64,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');
const KCHmaterial = new THREE.MeshBasicMaterial({ map: KCHtexture, side: THREE.DoubleSide });
const KCHcube = new THREE.Mesh(KCHgeometry, KCHmaterial);
KCHcube.position.x = 6.4;
KCHcube.position.y = -0.75;
KCHcube.position.z = -6.9;

// Kitchen Cabinet Handle 1
const KCH1geometry = new THREE.BoxGeometry(0.13, 0.2, 0.13);
const KCH1texture = textureLoader.load('data:image/jpeg;base64,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');
const KCH1material = new THREE.MeshBasicMaterial({ map: KCH1texture, side: THREE.DoubleSide });
const KCH1cube = new THREE.Mesh(KCH1geometry, KCH1material);
KCH1cube.position.x = 6.4;
KCH1cube.position.y = -0.75;
KCH1cube.position.z = -6;

// Front Door 
const FDgeometry = new THREE.PlaneGeometry(2, 3.5);
const FDtexture = textureLoader.load('https://cdn.discordapp.com/attachments/1201639742006104165/1219058922011496468/image.png?ex=6609ec18&is=65f77718&hm=3eaaa34274de22c7ccf8379d560b785ec5f858c112a80eedc3fe1216c6c92b57&');
const FDmaterial = new THREE.MeshBasicMaterial({ map: FDtexture, side: THREE.DoubleSide });
const FDplane = new THREE.Mesh(FDgeometry, FDmaterial);
FDplane.position.x = 1;
FDplane.position.z = -7.4;
FDplane.position.y = -0.25;

// Window 
const Wgeometry = new THREE.PlaneGeometry(2, 2.5);
const Wtexture = textureLoader.load('https://cdn.discordapp.com/attachments/1201639742006104165/1219058229473054720/image.png?ex=6609eb72&is=65f77672&hm=3e892d46fdf0ef2f4bcb58d18f0ec756edbf39192805c9cb6584674c240156f1&');
const Wmaterial = new THREE.MeshBasicMaterial({ map: Wtexture, side: THREE.DoubleSide });
const Wplane = new THREE.Mesh(Wgeometry, Wmaterial);
Wplane.position.x = -7.4;
Wplane.position.z = 0;
Wplane.rotation.y = -Math.PI / 2;

scene.add(plane, Frplane, Rplane, Lplane, roof, KFcube, RFcube, RHcube, RWplane, RW1plane, 
          RW2plane, Bplane, RH1cube, WWplane, WW1plane, WW2plane, WW3plane, WW4plane, 
          WW5plane, WW6plane, WW7plane, WW8plane, LScube, LS1cube, Ccube, CScube, BBcube, 
          BFcube, TVTcube, TVcube, KCcube, KCHcube, KCH1cube, FDplane, Wplane);

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

animate ();
