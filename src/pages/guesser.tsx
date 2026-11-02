import Navbar from "../components/navbar";
import MapGuesserUI from "../components/mapguesserUI";

export default function Guesser() {
    return <>
        <Navbar></Navbar>
        <MapGuesserUI className="flex items-center justify-center flex-col"></MapGuesserUI>
    </>;
}