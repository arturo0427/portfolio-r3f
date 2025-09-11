import {
  Environment,
  useGLTF,
  OrbitControls,
  Float,
  PresentationControls,
  ContactShadows,
  Html,
  Text,
} from '@react-three/drei';

export default function Experience() {
  const computer = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf'
  );

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={5} />
      <Environment preset="night" />
      <color args={['#0D1117']} attach={'background'} />

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-0.5, 0.5]}
        config={{ mass: 1, tension: 170, friction: 26 }}
        snap
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={50}
            color={'#58A6FF'}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <primitive object={computer.scene} position-y={-1.2}>
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="https://arturo0427.github.io/portafolio-responsive/"></iframe>
            </Html>
          </primitive>
          <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={1}
            position={[2, 0.75, 0.75]}
            rotation-y={-1.25}
            maxWidth={2}
            textAlign="center"
          >
            Arturo Muñoz
          </Text>

          <mesh position={[-2, -0.54, -0.4]}>
            <torusKnotGeometry args={[0.1, 0.05, 64, 8]} />
            <meshNormalMaterial />
          </mesh>
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={1} scale={5} blur={3.4} />
    </>
  );
}
