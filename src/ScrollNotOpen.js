import OpenScroll from "./assets/imgs/openScroll.mp4"

const ScrollNotOpen = ({setScrollFalse}) => {
    return(
        <div className="unOpenScroll">
            <video className="image" alt={"test"} onEnded={()=>{setScrollFalse()}}autoPlay muted preload>
                <source src={OpenScroll} type="video/mp4" />
            </video>
        </div>
    )
}

export default ScrollNotOpen;