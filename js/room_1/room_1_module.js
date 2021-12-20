import { GLTFLoader } from '../GLTFLoader.js';
const loader = new GLTFLoader();
let tree, tree2;
loader.load( './gltf/room_1/tree_blender_file.gltf', function ( gltf ) {
    tree = gltf.scene;
    let scale = 175;
    tree.scale.set(scale,scale,scale);
    tree.rotateY(-Math.PI*3/4);
    tree.position.set(room_1_posx-2000,0,room_1_posz+3500);

    tree2 = tree.clone();
    tree2.position.set(room_1_posx-2000,0,room_1_posz-3500);
    scene_r1.add( tree );
    scene_r1.add( tree2 );
});