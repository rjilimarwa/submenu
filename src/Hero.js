import React from 'react'
import {useGlobalContext} from './context'
const Hero = () => {
    const {closeSubmenu}=useGlobalContext();
    return <section className="hero">
             <div className="hero-center">
              <article className="hero-info">
                vente des vetements  <br />
                en ligne

               <button className="btn">Start now</button>
              </article>

              </div>
            </section>
}

export default Hero