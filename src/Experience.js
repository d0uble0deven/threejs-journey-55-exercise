import { useFrame, extend, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import CustomObject from './CustomObject.js'

extend({ OrbitControls })

export default function Experience() {

    const three = useThree()

    const cubeRef = useRef()
    const groupRef = useRef()

    useFrame((state, delta) => {
        console.log('tick')
        console.log('delta: ', delta)
        cubeRef.current.rotation.y += delta
        // groupRef.current.rotation.y += delta
        // cubeRef.current.rotation.y += 0.01

        const angle = state.clock.elapsedTime

        state.camera.position.x = Math.sin(angle) * 8
        state.camera.position.z = Math.cos(angle) * 8

        state.camera.lookAt(groupRef.current.position)
        // state.camera.lookAt(0,0,0)
    })

    return <>

        <orbitControls args={ [three.camera, three.gl.domElement] } />

        <directionalLight position={ [1, 2, 3] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />

        <group ref={ groupRef }>
            <mesh rotation-y={ Math.PI * 0.25 } position={[-3, 0, 0]} >
                <sphereGeometry />
                <meshStandardMaterial color="orange" wireframe />
            </mesh>

            <mesh ref={ cubeRef } rotation-y={ Math.PI * 0.25 } position={[3, 0, 0]} scale={ 1.5 }>
                {/* <sphereGeometry args={[1.5, 32, 32]} /> */}
                <boxGeometry scale={1.5} />
                <meshStandardMaterial color="mediumpurple" />

                {/* <torusKnotGeometry/>
                <meshNormalMaterial/> */}
            </mesh>
        </group>

        <mesh rotation-x={ - Math.PI * 0.5 } position-y={ -1.5 } scale={ 10 }>
        {/* <mesh rotation-x={ Math.PI * .4 } rotation-z={ Math.PI * .4 } position={[0, -2, -5]} scale={ 2 }> */}
            <planeGeometry />
            {/* <boxGeometry scale={1.5} /> */}
            <meshStandardMaterial color="greenyellow" />

            {/* <torusKnotGeometry/>
            <meshNormalMaterial/> */}
        </mesh>

        <CustomObject />
    </>
}