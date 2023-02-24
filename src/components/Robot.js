import { useState } from "react"
import './../App.css'
import img1 from './../images/img1.jpeg'
import img2 from './../images/img2.jpeg'
import img3 from './../images/img3.jpeg'
import img4 from './../images/img4.jpeg'
import img5 from './../images/img5.jpeg'
import img6 from './../images/img6.jpeg'
import img7 from './../images/img7.jpeg'
import img8 from './../images/img8.jpeg'
import img9 from './../images/img9.jpeg'
function Robot() {

    const [showReset, shouldShoeReset] = useState(false)
    const [showVerify, shouldShowVerify] = useState(false)
    const [count, setCount] = useState(1)
    const [arr, setArr] = useState([])
    const [showtiles, shouldShowTiles] = useState(true)
    const [messege, showMessege] = useState("")

    function clickCounter() {
        shouldShoeReset(true)
        setCount(() => count + 1)// do this by callback
        console.log(count)
        if (count ===2) {
            shouldShowVerify(true)
        }
        else if(count >2){
            shouldShowVerify(false)
            setCount(1)
        }

    }
    const verification = (array) => {
        shouldShowVerify(false)
        shouldShowTiles(false)
        if (array.length > 2 || array[0] !== array[1]) {
            showMessege("We can't verify you as a human. You selected the non-identical tiles")
        }
        else {
            shouldShoeReset(false)
            showMessege("You are a human. Congratulations!")
        }
    }//[1,1]
    return <div id="box-holder">
        <div id="messege">{messege}</div>
        {showtiles && <h3>Please click on the identical tiles to verify that you are not a robot</h3>}
        {showtiles && <div id="image-container">
            <div className="images"><img src={img1} alt="img1" onClick={() => {
                clickCounter()
                setArr([...arr, 1])
                // console.log(arr)
            }} /></div>
            <div className="images"><img src={img4} alt="img4" onClick={() => {
                clickCounter()
                setArr([...arr, 2])

            }} /></div>
            <div className="images"><img src={img3} alt="img3" onClick={() => {
                clickCounter()
                setArr([...arr, 3])

            }} /></div>
            <div className="images"><img src={img6} alt="img6" onClick={() => {
                clickCounter()
                setArr([...arr, 4])

            }} /></div>
            <div className="images"><img src={img2} alt="img2" onClick={() => {
                clickCounter()
                setArr([...arr, 1])


            }} /></div>
            <div className="images"><img src={img5} alt="img5" onClick={() => {
                clickCounter()
                setArr([...arr, 5])

            }} /></div>
            <div className="images"><img src={img7} alt="img7" onClick={() => {
                clickCounter()
                setArr([...arr, 6])

            }} /></div>
            <div className="images"><img src={img9} alt="img9" onClick={() => {
                clickCounter()
                setArr([...arr, 7])

            }} /></div>
            <div className="images"><img src={img8} alt="img8" onClick={() => {
                clickCounter()
                setArr([...arr, 8])

            }} /></div>
        </div>}
        {showReset && <div>
            <button onClick={() => {
                shouldShoeReset(false)
                shouldShowVerify(false)
                setCount(1)
                showMessege("")
                shouldShowTiles(true)
                setArr([])
            }}>Reset</button>
        </div>}
        {showVerify && <div>
            <button onClick={() => {
                verification(arr)
            }}>Verify</button>
        </div>}
        {/* <div>
            {arr.map((item,i)=>{
                return <li key="i">{item}</li>
            })}
        </div> */}

    </div>
}
export default Robot