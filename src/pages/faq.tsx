import Navbar from "../components/navbar";

export default function FAQ() {
    return <>
        <Navbar></Navbar>
        <div className="flex justify-center mt-4 mb-4">
            <h1 className="flex text-4xl">
                Tutorial
            </h1>
        </div>
        <div className="w-2/3 h-auto flex ml-auto mr-auto mt-20 flex-col gap-4">
            <div>
                <p>Q: Who decides these callouts?</p>
                <p>A: These callouts are compiled by <a className="underline text-blue-600" href="https://www.youtube.com/c/SquidSchool">Squid School</a>,
                    a youtube channel that makes Splatoon competitive content. The link to the drive of the community
                    callouts are <a className="underline text-blue-600" href="https://drive.google.com/drive/folders/1qJ2j1VtQnHWvJEqf0Qv0L0WiLHADV0Bv">here</a></p>
            </div>
            <div>
                <p>Q: How do I request a feature or ask to work on this project?</p>
                <p>A: This is WIP. The project will soon be a public repo, but details on how to support the project are still being ironed out.</p>
            </div>
        </div>
    </>;
}