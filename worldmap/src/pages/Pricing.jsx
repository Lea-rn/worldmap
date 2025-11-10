import PageNav from "../components/PageNav"
import styles from "./Product.module.css";

function Pricing() {
    return (
       <div>
 
      <main className={styles.product}>
             <PageNav />
        <section className={styles.pricing}>
  
<div className={styles.info}>
              <h2>Simple pricing</h2>
              <br />
              just $9/month
    
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
                hic saepe laboriosam ducimus aut, consequatur cumque mollitia
                laborum libero obcaecati ex nihil? Natus tempora ipsum numquam
                fugiat cupiditate aliquam hic alias, quas inventore enim odit non
                blanditiis magni voluptatem error id vel voluptates autem fuga.
                Dignissimos eveniet fugit ullam inventore!
              </p>
              <button className="btnstart">star tracking now</button>
    
    
</div>
<img style={{marginLeft:"80px"}} height={200} src="img-2.jpg" alt="yyyyyyyyyyyyyyyyy" />
        </section>
      </main>
    </div>
    )
}

export default Pricing
