import styles from './home.module.css'



const Home = () => {
    return (
        
        <div className={styles.parent}>
          <div className={styles.grid}>
            
            <div className={styles.div1}> <img src="/images/bygg1.jpg" alt="Bild1"/></div>
            <h2>Välkommen till Nova Bygg!</h2>
            <h3>Platsbyggt - Funkiskök - Sekelskifte</h3>
            
            <div className={styles.div2}><img src="/images/bygg2.jpg" alt="Bild2"/></div>
            <h4>Funkiskök</h4>

            <div className={styles.div3}><img src="/images/bygg3.jpg" alt="Bild3"/></div>
            <p>Vi arbetar i hela Stockholmsområdet sedan 2017</p>
          
          </div>
        </div>
        

    )
}


export default Home