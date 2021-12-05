/**
 * refs
 *  * https://codesandbox.io/s/physics-with-convex-polyhedrons-08s1u
 *  * https://codesandbox.io/s/glass-transmission-enx1u
 */
import React from 'react'
import { Geometry } from "three-stdlib"
import { Canvas } from '@react-three/fiber'
import useThemeContext from '@theme/hooks/useThemeContext';
import * as CANNON from "@react-three/cannon";
import * as THREE from "three"

function rand (from=0, to=1) {
    return from + Math.random() * (to - from)
}

function toConvexProps () {
    const bufferGeometry = new THREE.ConeGeometry(0.7, 0.7, 8, 1)
    const geo = new Geometry().fromBufferGeometry(bufferGeometry);
    geo.mergeVertices();
    return [
        geo.vertices.map((v: any) => [v.x, v.y, v.z]),
        geo.faces.map((f: any) => [f.a, f.b, f.c]), []
    ];
}

const materialProps = {
    thickness: 0,
    roughness: 1,
    opacity: 0.7,
    clearcoat: 0.4,
    clearcoatRoughness: 1,
    transmission: 1.5,
    ior: 1,
    envMapIntensity: 15,
    color: "#ff0000",
    attenuationTint: "#ffe79e",
    attenuationDistance: 0
}

function Cone (props: any) {
  const args = React.useMemo(toConvexProps, []);
  const [ref] = CANNON.useConvexPolyhedron(() => ({ mass: 100, ...props, args }));
  return (
    <mesh castShadow ref={ref} {...props}>
       <meshPhysicalMaterial transparent color="red" {...materialProps}/>
       <coneGeometry args={[0.7, 0.7, 8, 1]} />
    </mesh>
  );
}

function Plane (props: any) {
  const [ref] = CANNON.usePlane(() => ({ type: "Static", ...props }));
  return (
    <mesh ref={ref} receiveShadow {...props}>
      <planeGeometry args={[10, 10]} />
      <shadowMaterial color="#171717" />
    </mesh>
  );
}

const style = {
    position: "absolute",
    zIndex: -1,
    top: 0,
    left: 0,
    width: "100%",
    height: "calc(100% + 15px)"
}

export function Background (props: any) {
    const { ctrl, ...other } = props
    const { isDarkTheme } = useThemeContext()
    return (
      <Canvas {...other} dpr={[1, 2]} style={style}>
        <color attach="background" args={[isDarkTheme? "#781E1E": "#FF8080"]} />
        <spotLight position={[15, 15, 15]} angle={0.3} castShadow />
        <React.Suspense fallback={null}>
          <CANNON.Physics>
            <Plane position={[0,-.5,0]} rotation={[-Math.PI/2,0,0]} />
            {[...Array(5 + ctrl.size)].map((_, i=0) =>
                <Cone key={i}
                    position={[rand(-1, 0), rand(5, 10), rand()]}
                    rotation={[rand(.5, 1), rand(0.1, 0.4), 0.1]}
                />
            )}
          </CANNON.Physics>
        </React.Suspense>
      </Canvas>
    )
}
