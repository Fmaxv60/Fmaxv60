"use client"

import React, { useState, useRef, Suspense } from "react"
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm'
import { group } from "console"

const StarBackground = (props: any) => {
    const ref: any = useRef();
    const [sphere] = useState(() => 
        random.inSphere(new Float32Array(500), {radius: 1.2})
    );

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta/10;
        ref.current.rotation.y -= delta/15;
    })

    return (
        <group rotation={[0,0, Math.PI / 4]}>
            <Points
            ref={ref}
            positions={sphere}
            stride={3}
            frustumCulled
            {...props}
            >
                <PointMaterial
                    transparent
                    color='$fff'
                    size={0.002}
                    sizeAttenuation={true}
                    dethWrite={false} 
                />
            </Points>
        </group>
    )
}

const StarCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-[20]">
        <Canvas camera={{position: [0, 0, 1]}}>
            <Suspense>
                <StarBackground />
            </Suspense>
        </Canvas>
    </div>
)

export default StarCanvas