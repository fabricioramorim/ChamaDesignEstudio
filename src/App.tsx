import LogoChama from '/Logo_chama.png'
import SeloChama from '/Selo_chama_pro_job.png'
import BehanceImage from '/behance.svg'
import YoutubeImage from '/youtube.svg'
import InstagramImage from '/instagram.svg'
import VimeoImage from '/vimeo.svg'
import WhatsappImage from '/whatsapp.svg'
import EmailImage from '/email.svg'

import './App.css'

function App() {

  return (
    <>
      <div>
        <img src={LogoChama} className="logo"/>
      </div>
      <h1>Site em construção...</h1>
      <div>
        <img src={SeloChama} className="seloChama"/>
      </div>
      <div>
        <h2>Nos acompanhe</h2>
        <p>Chama Design Estúdio</p>
        <div>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src={BehanceImage} className="social"/>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src={YoutubeImage} className="social"/>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src={InstagramImage} className="social"/>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src={VimeoImage} className="social"/>
          </a>
        </div>
        <h2>Contatos</h2>
        <div className='contactDiv'>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src={WhatsappImage} className="social"/>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <h2>(11) 93758-3014</h2>
          </a>
          <div></div>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src={EmailImage} className="social"/>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <h2>contato@chamaestudio.com</h2> 
          </a>
        </div>
      </div>      
    </>
  )
}

export default App
