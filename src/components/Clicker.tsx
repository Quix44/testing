"use client"
import { Button } from "@/components/ui/button";

function Clicker({ setCount }: { setCount: () => void }) {


    return (
        <Button variant="outline" onClick={() => setCount()}>Click this to increase</Button>
    )
}

export default Clicker