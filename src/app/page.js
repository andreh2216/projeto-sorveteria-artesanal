import estilos from "./page.module.css";


export default function Home() {
  return (
    <main className={estilos.main}>

      <section className={estilos.container_banner}>
          <h1>SORVETE ARTESANAL</h1>
      </section>

      <section className={estilos.container_info}>



        <div className={estilos.imagem_um}></div>


        <div className={estilos.card_info}>

          <h2 className={estilos.subtitulo}>NOSSOS SABORES</h2>
          <h3 className={estilos.subtitulo_dois}>Novos e deliciosos!</h3>
          <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!
          </p>

        </div>

        
        <div className={estilos.card_info}>

        <h2 className={estilos.subtitulo}>NOSSOS EVENTOS</h2>
        <h3 className={estilos.subtitulo_dois}>Delicias com sorvete!</h3>
        <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>

        </div>

        <div className={estilos.imagem_dois}></div>
        <div className={estilos.imagem_tres}></div>
      



            

                      <div className={estilos.card_info}>

                <h2 className={estilos.subtitulo}>SOBRE NÓS</h2>
              <h3 className={estilos.subtitulo_dois}>Alegria em cada casquinha!</h3>
              <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso   cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>

              </div>      

   


      </section>
        
 
     
    </main>
  );
}
