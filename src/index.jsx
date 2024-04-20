import './style.css'
import ReactDOM from 'react-dom/client'

import { Canvas } from '@react-three/fiber'
import Experience from './Experience'

import * as THREE from 'three'


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <Canvas
            dpr={ [1, 2] }
            // flat
            orthographic
            gl={
                // { antialias: true, toneMapping: THREE.ACESFilmicToneMapping, outputColorSpace: THREE.SRGBColorSpace }
                { antialias: true, toneMapping: THREE.CineonToneMapping, outputColorSpace: THREE.SRGBColorSpace }
            }
            camera={
                { fov: 45, near: 0.1, far: 200, position: [3, 2, 6], zoom: 100 }
            }
        >
            <Experience />
        </Canvas>
    </>
)