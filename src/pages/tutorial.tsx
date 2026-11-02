import Navbar from "../components/navbar";
import image1 from "/src/assets/tutorial/1.webp";
import image2 from "/src/assets/tutorial/2.webp";
import image3 from "/src/assets/tutorial/3.webp";
import image4 from "/src/assets/tutorial/4.webp";
import image5 from "/src/assets/tutorial/5.webp";


export default function Tutorial() {
    return <>
        <Navbar></Navbar>
        <div className="flex justify-center mt-4 mb-4">
            <h1 className="flex text-4xl">
                Tutorial
            </h1>
        </div>
        <div className="w-2/3 h-auto flex ml-auto mr-auto mt-20 flex-col gap-4">
            <div>
                1. Select a map from the dropdown
                <img className="ml-8" src={image1} alt="" />
            </div>
            <div>
                2. Guess the region that the callout is referring to by clicking on the map
                <img className="ml-8" src={image2} alt="" />
            </div>
            <div>
                3. If guessed correctly, the region will turn green
                <img className="ml-8" src={image3} alt="" />
            </div>
            <div>
                4. If guessed incorrectly, the region will be revealed as red
               <img className="ml-8" src={image4} alt="" />
            </div>
            <div>
                5. After all the regions have been guessed, you'll have practiced callouts for one map!
               <img className="ml-8" src={image5} alt="" />
            </div>
        </div >
    </>;
}