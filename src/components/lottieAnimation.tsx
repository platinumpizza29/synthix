/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// components/LottieAnimation.tsx
import dynamic from "next/dynamic";
import { type FC } from "react";

// Import the Lottie component dynamically with no SSR
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

// Define the props interface
interface LottieAnimationProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  animationData: any; // Replace 'any' with the appropriate type if known
}

const LottieAnimation: FC<LottieAnimationProps> = ({ animationData }) => {
  return <Lottie animationData={animationData} />;
};

export default LottieAnimation;
