import { Link } from "react-router-dom"
import PageNav from "../components/PageNav"
import AppNav from "../components/AppNav"
import styles from "./Homepage.module.css"

function Homepage() {
    return (
<div>
  
            <main className={styles.homepage}>
        <PageNav/>
       <section>
        <h1>You travel the world
            <br />
              Worldmap keeps track your adventures
        </h1>
        <h2>
         A world map that tracks your footsteps into every city you can think
              of . Never forget your wonderful experinces,and show your friends how
               you have wandered the world
        </h2>
    
       <button className="btnstart">Start trackin Now</button>
    
    
       </section>
               
             
            </main>
</div>
    )
}

export default Homepage
