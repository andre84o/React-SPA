import styles from './about.module.css'



const About = () => {
    return (
    
    <div className={styles.parent}>
      <div className={styles.grid}>
                    
        <div className={styles.div1}> <img src="/images/aboutus.jpg" alt="Bild1"/></div>
        <h2>Vilka är vi?</h2>
        <h3 className={styles.text}>Vi är idag 14 anställda i företaget. 10 snickare och 4 målare. Namnet Nova är inspirerat från ordet renovera. Vi ville hitta ett namn som är enkelt att komma ihåg. Vi utför det mesta inom bygg & renovering. Vi är specialiserade på totalrenoveringar, kök och platsbyggd inredning. Vi hjälper både företag och privatpersoner med  stora och små projekt. Vi lämnar alltid minst 2 års garanti på alla arbeten vi utför.</h3>
                    
      </div>
    </div>
        
       
    )
}

export default About;