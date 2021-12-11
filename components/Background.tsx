/**
 * refs
 *  * https://codesandbox.io/s/physics-with-convex-polyhedrons-08s1u
 *  * https://codesandbox.io/s/glass-transmission-enx1u
 */
import React from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from "three"
import * as CANNON from "@react-three/cannon";
import { Geometry } from "three-stdlib"
import useThemeContext from '@theme/hooks/useThemeContext';
import { useMax, range } from '../hooks'

export type BackgroundProps = Partial<{
    children: null | JSX.Element
    size: number
    shake: number
    debug: boolean
}>

export function Background (props: BackgroundProps) {
    const { size, shake, debug, children, ...other } = props
    const maxSize = useMax(size)
    const { isDarkTheme } = useThemeContext()
    const background = isDarkTheme? "#781E1E": "#FF8080"
    if (debug) return <div style={{...style, background}}/>
    return (
      <Canvas {...other} dpr={[1, 2]} style={style}>
        <color attach="background" args={[background]} />
        <spotLight position={[15, 15, 15]} angle={0.3} castShadow />
        <React.Suspense fallback={null}>
          <CANNON.Physics>
            { children }
            <Plane position={[0,-.5,0]} rotation={[-Math.PI/2,0,0]} />
            {range(5 + maxSize).map((_, i=0) =>
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

const style = {
    position: "absolute",
    zIndex: -1,
    top: 0,
    left: 0,
    width: "100%",
    height: "calc(100% + 15px)"
} as any

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

function Cone (props: any) {
    const args = React.useMemo(toConvexProps, []);
    const [ref] = CANNON.useConvexPolyhedron(() => ({ mass: 100, ...props, args }));
    return (
      <mesh castShadow ref={ref} {...props}>
        <meshPhysicalMaterial transparent {...materialProps}/>
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
