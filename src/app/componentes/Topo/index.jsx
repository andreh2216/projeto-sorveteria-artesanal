import Image from "next/image";
import Logo from '../../../../public/logo.png'
import Link from "next/link";
import estilos from "./topo.module.css"

export default function Topo(){
    return(
     
        <header className={estilos.container_topo}>
                <Image className={estilos.logotipo} src={Logo} />

                <nav>

                                <Link className={estilos.link_topo}  href="/">Home</Link>
                                <Link className={estilos.link_topo} href="/Sabores">Sabores</Link>
                                <Link className={estilos.link_topo} href="/Sobre">Sobre</Link>

                </nav>

        </header>
      
    )
}