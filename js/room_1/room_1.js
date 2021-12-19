//nạp hình vách ngoài
let room_1_out_mat = [];
let room_1_texout_ft = new THREE.TextureLoader().load( './image/room_1/room_out_ft.jpg');
let room_1_texout_bk = new THREE.TextureLoader().load( './image/room_1/room_out_bk.jpg');
let room_1_texout_up = new THREE.TextureLoader().load( './image/room_1/room_out_up.jpg');
let room_1_texout_dn = new THREE.TextureLoader().load( './image/room_1/room_out_dn.jpg');
let room_1_texout_rt = new THREE.TextureLoader().load( './image/room_1/room_out_rt.jpg');
let room_1_texout_lf = new THREE.TextureLoader().load( './image/room_1/room_out_lf.jpg');

room_1_out_mat.push(new THREE.MeshBasicMaterial( { map: room_1_texout_ft }));
room_1_out_mat.push(new THREE.MeshBasicMaterial( { map: room_1_texout_bk }));
room_1_out_mat.push(new THREE.MeshBasicMaterial( { map: room_1_texout_up }));
room_1_out_mat.push(new THREE.MeshBasicMaterial( { map: room_1_texout_dn }));
room_1_out_mat.push(new THREE.MeshBasicMaterial( { map: room_1_texout_rt }));
room_1_out_mat.push(new THREE.MeshBasicMaterial( { map: room_1_texout_lf }));

//nạp hình vách trong
let room_1_in_mat = [];
let room_1_texin_ft = new THREE.TextureLoader().load( './image/room_1/room_ft.jpg');
let room_1_texin_bk = new THREE.TextureLoader().load( './image/room_1/room_bk.jpg');
let room_1_texin_up = new THREE.TextureLoader().load( './image/room_1/room_up.jpg');
let room_1_texin_dn = new THREE.TextureLoader().load( './image/room_1/room_dn.jpg');
let room_1_texin_rt = new THREE.TextureLoader().load( './image/room_1/room_rt.jpg');
let room_1_texin_lf = new THREE.TextureLoader().load( './image/room_1/room_lf.jpg');

room_1_in_mat.push(new THREE.MeshBasicMaterial( { map: room_1_texin_ft }));
room_1_in_mat.push(new THREE.MeshBasicMaterial( { map: room_1_texin_bk }));
room_1_in_mat.push(new THREE.MeshBasicMaterial( { map: room_1_texin_up }));
room_1_in_mat.push(new THREE.MeshBasicMaterial( { map: room_1_texin_dn }));
room_1_in_mat.push(new THREE.MeshBasicMaterial( { map: room_1_texin_rt }));
room_1_in_mat.push(new THREE.MeshBasicMaterial( { map: room_1_texin_lf }));

for (let i=0;i<6;i++) {
    room_1_in_mat[i].side = THREE.BackSide;
}

//nạp video
let video = document.getElementById('video1');
video.src = './video/big_buck.mp4';
video.poster = './image/room_rt.jpg';
let videoTex = new THREE.VideoTexture(video);

//Tạo phòng
const room_1_geo = new THREE.BoxGeometry(4000,3500,4000);
let room_1_out = new THREE.Mesh( room_1_geo, room_1_out_mat );
scene.add( room_1_out );        
let room_1_in = new THREE.Mesh( room_1_geo, room_1_in_mat );
scene.add( room_1_in );
let room_1_posx = 5000; //3 tọa độ quan trọng để xếp phòng vào central
let room_1_posy = 1751;
let room_1_posz = -1000;
room_1_out.position.set(room_1_posx, room_1_posy, room_1_posz);
room_1_in.position.set(room_1_posx, room_1_posy, room_1_posz);
room_1_geo.rotateY(Math.PI / 8);

//Tạo button chiếu clip
room_1_button = button.clone();
let room_1_bposx = room_1_posx + 1500;
let room_1_bposy = room_1_posy + 0;
let room_1_bposz = room_1_posz - 1200;
room_1_button.position.set(room_1_bposx, room_1_bposy, room_1_bposz);
scene.add(room_1_button);

//Tạo nút mở cửa
room_1_dop = button.clone();
let room_1_dopposx = room_1_posx - 2000;
let room_1_dopposy = room_1_posy - 100;
let room_1_dopposz = room_1_posz + 800;
room_1_dop.position.set(room_1_dopposx, room_1_dopposy, room_1_dopposz);
scene.add(room_1_dop);

//Chiếu clip event
function room_1_ClickEvents(event){
    if (event.target == room_1_button) {
        room_1_button.visible = false;
        room_1_in_mat[0] = new THREE.MeshBasicMaterial( { map: videoTex });
        room_1_in_mat[0].side = THREE.BackSide;
        video.muted = false;
        video.play();
        video.onended = function(){
            room_1_in_mat[0] = new THREE.MeshBasicMaterial( { map: room_1_texin_ft });
            room_1_in_mat[0].side = THREE.BackSide;
            room_1_button.visible = true;
        }
    }
    if (event.target == room_1_dop) {
        moveCam(room_1_posx-1600,camera.position.y,room_1_posz+600,0,0,0);
    }
}

//Khai báo event
var domEvents = new THREEx.DomEvents(camera, renderer.domElement);
domEvents.addEventListener(room_1_button, 'click', room_1_ClickEvents, false);
domEvents.addEventListener(room_1_dop, 'click', room_1_ClickEvents, false);


