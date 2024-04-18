import { GLView } from "expo-gl";
import { Renderer } from "expo-three";
import * as THREE from "three";

export default function CustomShapeScene() {

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

    const dodecahedronGeometry = new THREE.DodecahedronGeometry(0.5); 
    const dodecahedronMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
    const dodecahedron = new THREE.Mesh(dodecahedronGeometry, dodecahedronMaterial);
    scene.add(dodecahedron);

    const animate = () => {
      requestAnimationFrame(animate);
      dodecahedron.rotation.x += 0.01;
      dodecahedron.rotation.y += 0.01;
      renderer.render(scene, camera);
      gl.endFrameEXP();
    };
    animate();
  };

  return (
      <GLView style={{ flex: 1 }} onContextCreate={onGLContextCreate} />
  );
}

