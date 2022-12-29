import React, {useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, useFBX } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";
import Samba from "./Silly Dancing.fbx"
import "./styles.css";


const App = () => {
    const [play, setplay] = useState(true)
    const [text, settext] = useState("Pause")
	// const ref = useRef()
	// useFrame((state, delta) => (ref.current.rotation.x += 0.01));

// 	function Box() {
// 	const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
// 	return (
// 		<mesh
// 			onClick={() => {
// 				api.velocity.set(0, 2, 0);
// 			}}
// 			ref={ref}
// 			position={[0, 2, 0]}
// 		>
// 			<boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
// 			<meshLambertMaterial attach="material" color="red" />
// 		</mesh>
// 	);
// }
// useFBX(url)

function SuzanneFBX() {
	let fbx = useFBX(Samba)
	return <primitive object={fbx}  />
}
// function Plane() {
// 	const [ref] = usePlane(() => ({
// 		rotation: [-Math.PI / 2, 0, 0],
// 	}));
// 	return (
// 		<mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
// 			<planeBufferGeometry attach="geometry" args={[100, 100]} />
// 			<meshLambertMaterial attach="material" color="transparent" />
// 		</mesh>
// 	);
// }

  return (
    <>
    <Canvas style={{display : "grid", placeItems: "center", width: "100vw", height: "100vh"}}>
    <OrbitControls
        minDistance={100}
        autoRotate= {play}
        rotateSpeed={1}
        maxDistance={320}
    />
    <Stars />
    {/* <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} /> */}
    <ambientLight intensity={0.5} />
    <spotLight position={[10, 15, 10]} angle={0.3} />
    <Physics>
        <SuzanneFBX />
    </Physics>
    {/* <App/> */}
</Canvas>
<button onClick={()=> {setplay(play === true ? false : true); settext(text === "Pause" ? "Play" : "Pause")}} style={{position: "absolute", top: "100px", right: "100px", background: "none", border: "1px solid #fff", color: "#fff", cursor: "pointer", padding: "8px 30px"}}>{text}</button>
</>
  )
}

export default App
