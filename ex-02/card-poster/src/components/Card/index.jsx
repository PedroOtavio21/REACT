import posterImg from '../../assets/poster-sw.jpg'
import './styles.css'

export default function Card(){
    return (
        <div className='container'>
            <img src={posterImg} alt="" />
            <div className='content'>
                <h1 className='title'>Pôster: Star Wars</h1>
                <p className='description'>Um poster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar esta linda memória ao seu acervo.</p>
                <button className='btn'>Comprar agora</button>
            </div>
        </div>
    )
}