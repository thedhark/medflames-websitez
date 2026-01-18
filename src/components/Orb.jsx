import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Orb = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Force cleanup of any existing canvases
        while (mountRef.current.firstChild) {
            mountRef.current.removeChild(mountRef.current.firstChild);
        }

        // --- SCENE SETUP ---
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000); // Aspect ratio updated in resize
        camera.position.z = 6;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mountRef.current.appendChild(renderer.domElement);

        // --- SETTINGS (From User Snippet) ---
        const settings = {
            speed: 0.35,
            distortion: 0.00,
            rotation: 1.0,
            vibrancy: 1.2,
            angle: 90,
            orbSize: 1.4,
            colors: [
                new THREE.Color(139 / 255, 92 / 255, 248 / 255),
                new THREE.Color(167 / 139, 139 / 255, 250 / 255),
            ]
        };
        // Re-declaring colors cleanly to avoid division typos in comment
        const c1 = new THREE.Color(139 / 255, 92 / 255, 248 / 255);
        const c2 = new THREE.Color(167 / 255, 139 / 255, 250 / 255);
        const c3 = new THREE.Color(124 / 255, 58 / 255, 237 / 255);
        const c4 = new THREE.Color(76 / 255, 29 / 255, 149 / 255);


        // --- SHADERS ---
        const vertexShader = `
            uniform float uTime;
            uniform float uDistortion;
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vLocalPosition;

            void main() {
                vUv = uv;
                vNormal = normalize(normalMatrix * normal);
                vec3 pos = position;
                
                // Turbulent Wave Function
                // We use the normal to push the vertex out based on the wave intensity
                float wave = sin(pos.x * 2.5 + uTime) * cos(pos.y * 2.5 + uTime) * sin(pos.z * 2.5 + uTime);
                
                // Apply distortion
                pos += normal * wave * uDistortion * 0.1; // Multiplier tweaked for visual clarity
                
                vLocalPosition = position; // Pass original position for consistent coloring
                gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
        `;

        const fragmentShader = `
            uniform float uTime;
            uniform float uSpeed;
            uniform float uVibrancy;
            uniform float uAngle;
            uniform vec3 uColor1;
            uniform vec3 uColor2;
            uniform vec3 uColor3;
            uniform vec3 uColor4;
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vLocalPosition;

            void main() {
                // Normalize the interpolated normal to prevent artifacts
                vec3 normal = normalize(vNormal);

                float rad = radians(uAngle);
                vec2 dir = vec2(cos(rad), sin(rad));
                
                // 90 degree vertical coloring logic based on local position
                float currentP = dot(vLocalPosition.xy, dir);
                float normalizedP = (currentP + 1.0) / 2.0; 
                
                float t = uTime * uSpeed;
                float flowBase = normalizedP - t;
                float flow = fract(flowBase);

                vec3 color;
                // Gradient stops
                if(flow < 0.25) color = mix(uColor1, uColor2, smoothstep(0.0, 0.25, flow));
                else if(flow < 0.5) color = mix(uColor2, uColor3, smoothstep(0.25, 0.5, flow));
                else if (flow < 0.75) color = mix(uColor3, uColor4, smoothstep(0.5, 0.75, flow));
                else color = mix(uColor4, uColor1, smoothstep(0.75, 1.0, flow));

                // Lighting calculations
                // Boosted ambient light to prevent "black line" artifacts on the shadow side
                float lighting = max(0.0, dot(normal, normalize(vec3(0.5, 1.0, 0.5))));
                
                // Magical shimmer effect
                float shimmer = pow(sin(flow * 3.14159), 18.0) * 0.6;
                
                // Increased base ambient from 0.4 to 0.6 to soften the dark side
                vec3 finalColor = color * (0.6 + lighting * 0.4) * uVibrancy;
                finalColor += (shimmer * color);

                // Fresnel rim intensity (Edge glow)
                float viewDot = max(0.0, dot(normal, vec3(0.0, 0.0, 1.0)));
                float fresnel = pow(1.0 - viewDot, 2.8);
                finalColor += fresnel * uColor1 * 2.5;

                gl_FragColor = vec4(finalColor, 1.0);
            }
        `;

        // --- MESH & MATERIAL ---
        const material = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uSpeed: { value: settings.speed },
                uDistortion: { value: settings.distortion },
                uVibrancy: { value: settings.vibrancy },
                uAngle: { value: settings.angle },
                uColor1: { value: c1 },
                uColor2: { value: c2 },
                uColor3: { value: c3 },
                uColor4: { value: c4 }
            },
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            transparent: false, // Disabled transparency to fix potential depth-sorting artifacts or background bleed-through
            side: THREE.FrontSide
        });

        const geometry = new THREE.SphereGeometry(1, 256, 256);
        const mainOrb = new THREE.Mesh(geometry, material);
        mainOrb.scale.setScalar(settings.orbSize);
        scene.add(mainOrb);

        // --- ANIMATION LOOP ---
        const clock = new THREE.Clock(); // Use clock for consistent time if desired, or performance.now like snippet

        const animate = () => {
            if (!mountRef.current) return;
            const time = performance.now() * 0.001;

            material.uniforms.uTime.value = time;

            // Rotational physics
            mainOrb.rotation.y += 0.003 * settings.rotation;
            mainOrb.rotation.z += 0.001 * settings.rotation;

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        // --- RESIZE HANDLER ---
        const handleResize = () => {
            if (!mountRef.current) return;
            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        const resizeObserver = new ResizeObserver(() => handleResize());
        resizeObserver.observe(mountRef.current);

        animate();

        // --- CLEANUP ---
        return () => {
            resizeObserver.disconnect();
            if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
                mountRef.current.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} className="w-full h-full" />;
};

export default Orb;
