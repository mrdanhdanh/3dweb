import { GLTFLoader } from '../GLTFLoader.js';
const loader = new GLTFLoader();
let tree, tree_blur, tree2;
loader.load( './gltf/room_1/tree_blender_file.gltf', function ( gltf ) {
    tree = gltf.scene;
    let scale = 175;
    tree.scale.set(scale,scale,scale);
    tree.rotateY(-Math.PI*3/4);
    tree.position.set(room_1_posx-2000,0,room_1_posz+3500);
    tree_blur = tree.clone();
    let blurMat = new THREE.MeshStandardMaterial({color: 0xffffff});

    let c=0;
    tree_blur.traverse((o) => {
        if (o.isMesh) {
            o.material = blurMat;
            o.material.opacity = 0.5;
            o.material.transparent = true;
            c++;
        } else {
            c++;
            //o.clear(this);
        }
    });
    alert(c);
    tree_blur.position.set(room_1_posx-2000,0,room_1_posz+4000);

    tree2 = tree.clone();
    tree2.position.set(room_1_posx-2000,0,room_1_posz-3500);
    scene_r1.add( tree );
    scene_r1.add( tree_blur );
    scene_r1.add( tree2 );
});