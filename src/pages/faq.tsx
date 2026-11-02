import Navbar from "../components/navbar";

export default function FAQ() {
    return <>
        <Navbar></Navbar>
        <div className="flex justify-center mt-4 mb-4">
            <h1 className="flex text-4xl">
                Frequently Asked Questions
            </h1>
        </div>
        <div className="w-2/3 h-auto flex ml-auto mr-auto mt-20 flex-col gap-8">
            <div>
                <p>Q: Who decides these callouts?</p>
                <p>A: These callouts are compiled by <a className="underline text-blue-600" href="https://www.youtube.com/c/SquidSchool">Squid School</a>,
                    a youtube channel that makes Splatoon competitive content. The link to the drive of the community
                    callouts are <a className="underline text-blue-600" href="https://drive.google.com/drive/folders/1qJ2j1VtQnHWvJEqf0Qv0L0WiLHADV0Bv">here</a></p>
            </div>
            <div>
                <p>Q: How do I get something fixed on this website if it's wrong?</p>
                <p>A: The code for this website is open source. Please open an issue
                    on <a className="underline text-blue-600" href="https://github.com/101zh/splatoon-callout-guesser/issues">this website's github repository</a>.
                    Please label the issue so that someone can respond promptly</p>
            </div>
            <div>
                <p>Q: Why is there an asterisk "*" on some of the callouts?</p>
                <p>A: The asterisks are callouts that are not on the community callouts images. Most of them are added because of map reworks or personal choice.</p>
            </div>
            <div>
                <p>Q: I want to make this website better! How can I contribute?</p>
                <p>A: The code for this website is open source on github.
                    Feel free to suggest features/improvements on the <a className="underline text-blue-600" href="https://github.com/101zh/splatoon-callout-guesser/issues">issues page</a>.
                    I will attempt to quickly respond and assign you the job. </p>
                    <p>(〃￣︶￣)人(￣︶￣〃)</p>
            </div>
        </div>
    </>;
}