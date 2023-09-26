import { CanvasProps } from '@react-three/fiber';
import React, { useRef, useEffect, useState } from 'react'; 
import * as THREE from 'three';

const AngelCanvas: React.FC<CanvasProps> = () => {

  const mount = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const animationId = useRef<number | null>(null);


  useEffect(() => {
    if (!mount.current || !videoRef.current) return;

    const { width, height } = mount.current.getBoundingClientRect();
    let desiredAspectRatio = 1080 / 1080; 
    const computedWidth = height * desiredAspectRatio;

    const scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(100, desiredAspectRatio, 0.5, 1000); // Use the fov state here
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(computedWidth, height);
    mount.current.appendChild(renderer.domElement);

    const handleResize = () => {
      if(!mount.current) return;

      const { height } = mount.current.getBoundingClientRect();
      const computedWidth = height * desiredAspectRatio;

      camera.aspect = computedWidth / height;
      camera.updateProjectionMatrix();

      renderer.setSize(computedWidth, height);
    };

    window.addEventListener('resize', handleResize);

    videoRef.current.src = require(`../../images/socialMedia/Amor_canvas.mp4`);
    videoRef.current.crossOrigin = "Anonymous";
    videoRef.current.loop = true;
    videoRef.current.muted = true;
    videoRef.current.playsInline = true;
    if (videoRef.current && !document.body.contains(videoRef.current)) {
      mount.current.appendChild(videoRef.current);
    }

    const texture = new THREE.VideoTexture(videoRef.current);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBAFormat;

    const videoMaterial = new THREE.ShaderMaterial({
      uniforms: {
        videoTexture: { value: texture },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D videoTexture;
        varying vec2 vUv;
        void main() {
          vec4 baseColor = texture2D(videoTexture, vec2(vUv.x, 1.0 - vUv.y * 0.5));
          vec4 maskColor = texture2D(videoTexture, vec2(vUv.x, 0.5 - vUv.y * 0.5));
          gl_FragColor = vec4(baseColor.rgb, maskColor.r);
        }
      `,
      transparent: true,
    });

    const planeGeometry = new THREE.PlaneGeometry(10.8, 10.8, 1)
    const videoMesh = new THREE.Mesh(planeGeometry, videoMaterial);
    scene.add(videoMesh);

    camera.position.z = 6;

    const animate = () => {
      renderer.render(scene, camera);
      animationId.current = requestAnimationFrame(animate);
    };

    videoRef.current.addEventListener("loadedmetadata", () => videoRef.current?.play());

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (animationId.current === null) {
              animate();
            }
          } else {
            if (animationId.current !== null) {
              cancelAnimationFrame(animationId.current);
              animationId.current = null;
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      }
    );

    observer.observe(mount.current);

    return () => {
      observer.disconnect();

      if (animationId.current !== null) {
        cancelAnimationFrame(animationId.current);
      }

      mount.current?.removeChild(renderer.domElement);

      if (videoRef.current && mount.current && mount.current.contains(videoRef.current)) {
        mount.current.removeChild(videoRef.current);
      }

      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={mount} style={{ transform: 'rotate(180deg) scaleX(-1)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: "visible", height: "100%" }}>
      <video ref={videoRef} style={{ display: 'none' }} />
    </div>
  );
};

export default AngelCanvas;