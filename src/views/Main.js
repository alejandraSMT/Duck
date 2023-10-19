import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./Main.css"
import sound from "../audio/squeak.mp3"
import surprise from "../audio/patricio.mp3"
import { useEffect } from "react";
let img = require("./duck_img.png")

function Main() {

    function playSqueak() {
        const rand = Math.floor(Math.random() * 91);
        console.log(rand)
        if (rand > 65 && rand <= 80) {
            new Audio(surprise).play()
        } else {
            new Audio(sound).play()
        }
    }


    return (
        <>
            <section class="vh-100" style={{ backgroundColor: "#f2ff43" }}>
                <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col col-xl-12">
                            <div class="container justify-items-center card-duck">
                                <div class="row g-0">
                                    <div class="row justify-content-center" style={{ marginBottom: "6rem" }}>
                                        <div class="col-xl-12">
                                            <h1 class="text-duck" style={{ textAlign: "center" }}>Click the duck!</h1>
                                        </div>
                                    </div>
                                    <div class="container container-duck d-flex align-items-center justify-content-center" style={{ backgroundColor: "white" }}>
                                        <img src={img} onClick={playSqueak} class="duck-img" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Main;
