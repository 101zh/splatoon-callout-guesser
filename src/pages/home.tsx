import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Home() {
    return <>
        <Navbar></Navbar>
        <div className="flex justify-center mt-4 mb-4">
            <h1 className="flex text-4xl">
                Splatoon 3 Callout Guesser
            </h1>

        </div>
        <div className="w-2/3 h-auto flex ml-auto mr-auto mt-4 justify-center">
            <Link to="/guesser">
                <div className="w-48 h-20 flex justify-center items-center bg-sky-300 radius rounded-4xl border-4 border-black relative
                hover:bg-sky-400 hover:-translate-y-1 ease-in-out duration-300 transition-all">
                    <div>Go to the Guesser!</div>
                </div>
            </Link>
        </div>
    </>;
}