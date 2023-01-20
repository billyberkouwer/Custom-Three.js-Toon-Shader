import styles from '@/styles/Home.module.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useEffect, useState, useRef } from 'react'
import { ShaderMaterial, PointLight, AmbientLight, Mesh } from 'three'
import { MutableRefObject } from 'react'
import { UniformsUtils } from 'three/src/renderers/shaders/UniformsUtils.js'
import { createShaderMaterial } from "@/helpers/materialHelpers"
import { ToonShaderHatching } from '@/glsl/ToonShader'
import SphereMesh from '@/meshes/SphereMesh'
import CylinderMesh from '@/meshes/CylinderMesh'
import BeerFlowMesh from '@/meshes/NewBeerFlowMesh'
import NewBeerFlowMesh from '@/meshes/NewBeerFlowMesh'


export default function Home() {
  const pointLight = useRef() as MutableRefObject<PointLight | null>;
  const ambientLight = useRef() as MutableRefObject<AmbientLight | null>
  
  return (
    <div className={styles.main} style={{backgroundColor: 'white'}}>
      <Canvas>
        <directionalLight castShadow ref={el => pointLight.current = el} position={[2, 10, 0]} intensity={0.5}/>
        <ambientLight ref={el => ambientLight.current = el} intensity={0.1}/>
        <NewBeerFlowMesh />
        <OrbitControls />
      </Canvas>
    </div>
  )
}
