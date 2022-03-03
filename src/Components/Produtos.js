import React from 'react'
import { Link } from 'react-router-dom'
import Head from './Head'
import styles from './Produtos.module.css'

const Produtos = () => {

  const [dados, setDados] = React.useState(null)

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, [])

  if (dados === null) return null;
  return (
      <section className={`${styles.produtos} animeLeft`}>
        <Head title="Ranek | Produtos"/>
        {dados.map((produto) => (
          <Link to={`produto/${produto.id}`} className={styles.item} key={produto.id}>
            <h1 className={styles.nome}>{produto.nome}</h1>
            <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          </Link>
      ))}
      </section>
  )
}

export default Produtos