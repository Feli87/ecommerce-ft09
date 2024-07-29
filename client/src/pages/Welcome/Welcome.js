import React from 'react'
import {useHistory} from 'react-router-dom'
import logoBeatStore from '../../assets/images/icon-logo.png'
import styles from './Welcome.module.css'

const Welcome = () => {

    const history = useHistory();

    const handleClick = () => {
        history.push('/home')
    }
    return (
        <>  
        <p className={styles.p}>¡The best beat created by people that love the music so much like you!</p>
            <div className={styles.div}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img className={styles.img} src={logoBeatStore} alt='cassete'/>
                    <h1 className={styles.h1}>BeatStore</h1> 
                </div>
                <div className={styles.text} >
                   <h2 className={styles.h2}>Welcome</h2>
                    <h3 className={styles.h3}> Press enter to continue</h3>
                    <button className={styles.button} onClick={handleClick}>Enter</button>   
                </div>              
            </div>  
            </div>

        </>
    )
}

export default Welcome;