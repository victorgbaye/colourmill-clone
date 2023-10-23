// import React from 'react'
import styles from "./Navigation.module.scss"
const Navigation = () => {
  return (
    <header>
        <section className={styles.FreeShipingContainer}>
            <p className={styles.FreeShipingText}>Free express shipping over $150*</p>
        </section>
        <main className={styles.navigstionFlex}>
            <nav>
                <ul className={styles.navList}>
                    <li>LOREM</li>
                    <li>IPSUM</li>
                    <li>DOLOR</li>
                </ul>
            </nav>
            <section>
                <h1>COLOUR MILL</h1>
            </section>
            <section  className={styles.headerIcons}>

            </section>
        </main>
    </header>
  )
}

export default Navigation