import Image from "next/image"

import Soreo from "../../../public/sabor-oreo.png";
import Spistache from "../../../public/sabor-pistache.png";
import SCEavela from "../../../public/sabor-cookies-avela.png";
import Skiwi from "../../../public/sorbet-kiwi.png";
import Smorango from "../../../public/sorbet-morango.png";
import SLsiciliano from "../../../public/sorbet-limao.png";





import estilos from "./sabores.module.css";

export default function Sabores(){
    return(

    <section className={estilos.main}>


       <div className={estilos.container_banner}>
          <h1>NOSSOS SABORES</h1>
       </div>


    <section className={estilos.secao}>

        <div className={estilos.container_card}>





                     <div className={estilos.card}>

                    <Image src={Soreo} className={estilos.sorvete}/>

                    <h2>Sorvete de Oreo</h2>
                    <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>


                    </div>



                <div className={estilos.card}>

                    <Image src={Spistache} className={estilos.sorvete}/>

                    <h2>Sorvete Pistache</h2>
                    <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>


                </div>





                
                <div className={estilos.card}>

                    <Image src={SCEavela} className={estilos.sorvete}/>

                    <h2>Sorvete Cookies & Avelã</h2>
                    <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>


                </div>






                <div className={estilos.card}>

                    <Image src={Skiwi} className={estilos.sorvete}/>

                    <h2>Sorvete de Kiwi</h2>
                    <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>


                </div>







                <div className={estilos.card}>

                    <Image src={Smorango} className={estilos.sorvete}/>

                    <h2>Sorvete de Morango</h2>
                    <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>


                </div>





                
                <div className={estilos.card}>

                    <Image src={SLsiciliano} className={estilos.sorvete}/>

                    <h2>Sorvete de Limão Siciliano</h2>
                    <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>


                </div>

             
                </div>


  
      
                </section>
        </section>

     
    )
}