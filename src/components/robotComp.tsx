"use client"

import LottieAnimation from "./lottieAnimation"
import robotData from "public/robot.json"

export default function RobotComp() {
  return (
    <div>
      <LottieAnimation animationData={robotData} />
    </div>
  )
}
