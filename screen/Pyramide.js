import { GLView } from "expo-gl";
import { Renderer } from "expo-three";
import * as THREE from "three";

export default function PyramidScene() {

  const onGLContextCreate = async (gl) => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      gl.drawingBufferWidth / gl.drawingBufferHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);
    const renderer = new Renderer({ gl });
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

 
    const ambientLight = new THREE.AmbientLight(0x101010);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);


    const pyramidGeometry = new THREE.ConeGeometry(0.5, 1, 4); 
    const pyramidMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
    const pyramid = new THREE.Mesh(pyramidGeometry, pyramidMaterial);
    scene.add(pyramid);

    const animate = () => {
      requestAnimationFrame(animate);
      pyramid.rotation.x += 0.01;
      pyramid.rotation.y += 0.01;
      renderer.render(scene, camera);
      gl.endFrameEXP();
    };
    animate();
  };

  return (
      <GLView style={{ flex: 1 }} onContextCreate={onGLContextCreate} />
  );
}


