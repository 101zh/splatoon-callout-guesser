import Navbar from "../components/navbar";
import Barnacle from "../assets/splat3/splat3maps/Barnacle-RM-OVER.png";
import BarnacleSVG from "../assets/splat3mapsSVG/Barnacle-Optimized-RM-OVER.svg?react"

export default function Guesser() {
    return <>
        <Navbar></Navbar>
        <h1>Guesser</h1>
        <div>
            <img className="absolute" src = {Barnacle} alt="" />
            <BarnacleSVG/>
        </div>
    </>;
}