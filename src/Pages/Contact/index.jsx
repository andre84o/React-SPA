import styles from './contact.module.css';


const Contact = () => {
    return (
        <div className={styles.wrapper}>
        <div className={styles.box}><img src="/images/contactus.jpg" alt="contact"/>
        <p>Telefon 08-525 184 15</p>
        <p> info@novabygg.se</p>
        <p>Adress</p>
        <p>Nova Bygg Stockholm AB
           Org.nr: 556720-1255
           Fridhemsgatan 11, Box 1209
           102 23 Stockholm</p>
        </div>

        <div className={styles.box}>
            <div className={styles.formText}>Please contact us for any questions.</div>
            <form className={styles.form} method="post">
            <input type="text" name="name" placeholder="Enter Name" required />
            <input type="email" name="Mail"  placeholder="Your Email" required/>
            <textarea name="message" placeholder="Message"/>
        
            <button type="submit">Send</button>
          </form>
        
        </div>
  </div>
      
    )
}

export default Contact