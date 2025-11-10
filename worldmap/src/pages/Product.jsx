import PageNav from "../components/PageNav";
import styles from "./Product.module.css";


function Product() {
  return (
    <div>
        
 
      <main className={styles.product}>
             <PageNav />
        <section>
          <img height={300} src="img-1.jpg" alt="person with dog ...." />
<div className={styles.info}>
              <h2>About world map</h2>
    
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
                hic saepe laboriosam ducimus aut, consequatur cumque mollitia
                laborum libero obcaecati ex nihil? Natus tempora ipsum numquam
                fugiat cupiditate aliquam hic alias, quas inventore enim odit non
                blanditiis magni voluptatem error id vel voluptates autem fuga.
                Dignissimos eveniet fugit ullam inventore!
              </p>
    
              <p>
    
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
                hic saepe laboriosam ducimus aut, consequatur cumque mollitia
                laborum libero obcaecati ex nihil? Natus tempora ipsum numquam
                fugiat cupiditate aliquam hic alias, quas inventore enim odit non
                blanditiis magni voluptatem error id vel voluptates autem fuga.
                Dignissimos eveniet fugit ullam inventore!
              </p>
</div>
        </section>
      </main>
    </div>
  );
}

export default Product;
