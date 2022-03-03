import React from 'react'
import styles from './Contato.module.css'
import foto from '../img/contato.jpg'
import Head from './Head'

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description='Entre em Contato'/>
      <img src={foto} alt='maquina de escrever'/>
      <div>
      <h1>Entre em Contato.</h1>
      <ul className={styles.dados}>
        <li>contato@contato.com</li>
        <li>9999-9999</li>
        <li>Av. Paulista, 1288 - SP</li>
      </ul>
      </div>
    </section>
  )
}

export default Contato