"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Box, RoundedBox, Cylinder, Html } from "@react-three/drei";
import { Mesh, Color } from "three";

interface ButtonProps {
  position: [number, number, number];
  text: string;
  isPressed: boolean;
  onClick: () => void;
}

const Button = ({ position, text, isPressed, onClick }: ButtonProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.z = isPressed ? position[2] - 0.02 : position[2];
    }
  });

  return (
    <group position={position} onClick={onClick} ref={meshRef}>
      <Cylinder scale={[0.05, 0.02, 0.05]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color={isPressed ? "#444" : "#333"} />
      </Cylinder>
      <Text position={[0, 0, 0.015]} scale={[0.05, 0.05, 0.05]}>
        {text}
      </Text>
    </group>
  );
};

const PhoneDisplay = ({ inputNumber }: { inputNumber: string }) => {
  return (
    <group position={[0, 0.5, 0.25]}>
      <Box args={[0.8, 0.3, 0.02]}>
        <meshStandardMaterial color="#000" />
      </Box>
      <Text
        position={[0, 0.1, 0.02]}
        fontSize={0.03}
        color="#ff6600"
        anchorX="center"
        anchorY="middle"
        maxWidth={0.7}
      >
        国際通話カードでご利用できます。{"\n"}
        International (card only) & Domestic
      </Text>
      <Text
        position={[0, -0.08, 0.02]}
        fontSize={0.06}
        color="#00ff00"
        anchorX="center"
        anchorY="middle"
        maxWidth={0.7}
      >
        {inputNumber || "番号を入力してください"}
      </Text>
    </group>
  );
};

const CardSlot = () => {
  return (
    <group position={[0, 0.2, 0.25]}>
      <Box args={[0.4, 0.05, 0.1]}>
        <meshStandardMaterial color="#111" />
      </Box>
      <Text
        position={[0, -0.1, 0]}
        fontSize={0.03}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        テレフォンカード / TELEPHONE CARD
      </Text>
    </group>
  );
};

const Handset = () => {
  return (
    <group position={[-0.4, 0.4, 0.1]}>
      <RoundedBox
        args={[0.08, 0.4, 0.08]}
        radius={0.02}
        smoothness={4}
        rotation={[0, 0, Math.PI / 6]}
      >
        <meshStandardMaterial color="#8BC34A" />
      </RoundedBox>
      <RoundedBox
        args={[0.12, 0.08, 0.12]}
        radius={0.02}
        smoothness={4}
        position={[0, 0.15, 0]}
        rotation={[0, 0, Math.PI / 6]}
      >
        <meshStandardMaterial color="#8BC34A" />
      </RoundedBox>
      <RoundedBox
        args={[0.12, 0.08, 0.12]}
        radius={0.02}
        smoothness={4}
        position={[0, -0.15, 0]}
        rotation={[0, 0, Math.PI / 6]}
      >
        <meshStandardMaterial color="#8BC34A" />
      </RoundedBox>
    </group>
  );
};

const PhoneBoxModel = () => {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());
  const [inputNumber, setInputNumber] = useState<string>("");

  const buttons = useMemo(
    () => [
      { key: "1", position: [-0.15, 0, 0.25] as [number, number, number] },
      { key: "2", position: [0, 0, 0.25] as [number, number, number] },
      { key: "3", position: [0.15, 0, 0.25] as [number, number, number] },
      { key: "4", position: [-0.15, -0.2, 0.25] as [number, number, number] },
      { key: "5", position: [0, -0.2, 0.25] as [number, number, number] },
      { key: "6", position: [0.15, -0.2, 0.25] as [number, number, number] },
      { key: "7", position: [-0.15, -0.4, 0.25] as [number, number, number] },
      { key: "8", position: [0, -0.4, 0.25] as [number, number, number] },
      { key: "9", position: [0.15, -0.4, 0.25] as [number, number, number] },
      { key: "*", position: [-0.15, -0.6, 0.25] as [number, number, number] },
      { key: "0", position: [0, -0.6, 0.25] as [number, number, number] },
      { key: "#", position: [0.15, -0.6, 0.25] as [number, number, number] },
    ],
    []
  );

  const addDigit = (key: string) => {
    if (key === "*") {
      setInputNumber("");
    } else if (key === "#") {
      // 通話開始などの処理
    } else {
      setInputNumber((prev) => prev + key);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;
      if (buttons.some((btn) => btn.key === key)) {
        setPressedKeys((prev) => new Set(prev).add(key));
        addDigit(key);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      const key = event.key;
      setPressedKeys((prev) => {
        const newSet = new Set(prev);
        newSet.delete(key);
        return newSet;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [buttons]);

  const handleButtonClick = (key: string) => {
    setPressedKeys((prev) => new Set(prev).add(key));
    addDigit(key);
    setTimeout(() => {
      setPressedKeys((prev) => {
        const newSet = new Set(prev);
        newSet.delete(key);
        return newSet;
      });
    }, 150);
  };

  return (
    <group>
      <RoundedBox
        args={[1.2, 2, 0.4]}
        radius={0.05}
        smoothness={4}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial color="#456323ff" />
      </RoundedBox>

      <Box args={[1, 1.8, 0.05]} position={[0, 0, 0.2]}>
        <meshStandardMaterial color="#1a1a1a" />
      </Box>

      <PhoneDisplay inputNumber={inputNumber} />
      <CardSlot />
      <Handset />

      {buttons.map((button) => (
        <Button
          key={button.key}
          position={button.position}
          text={button.key}
          isPressed={pressedKeys.has(button.key)}
          onClick={() => handleButtonClick(button.key)}
        />
      ))}

      <Text
        position={[0, -0.8, 0.25]}
        fontSize={0.03}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        SOS 110 119
      </Text>
    </group>
  );
};

export const PhoneBox = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <PhoneBoxModel />
    </>
  );
};
