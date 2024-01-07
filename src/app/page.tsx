"use client"
import Clicker from "@/components/Clicker";
import Score from "@/components/Score";
import { useState } from "react";

export default function Home() {
  const [score, setScore] = useState(0);

  const updateCount = () => {
    setScore(score + 1)
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Score score={score} />
      <Clicker setCount={updateCount} />
    </main>
  )
}
