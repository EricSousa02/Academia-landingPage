import ReviewsCarousel from "./components/Reviews";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from 'next/image';


export default function Home() {
  return (
    <main>
      <Navbar />
      <header className="section__container header__container" id="Início">
        <div className="header__content">
          <span className="bg__blur"></span>
          <span className="bg__blur header__blur"></span>
          <h4>MELHOR ACADEMIA DA CIDADE</h4>
          <h1>
            <span>MODELE</span> SEU CORPO
          </h1>
          <p>
            Liberte seu potencial e embarque em uma jornada rumo a um você mais
            forte, mais saudável e mais confiante. Inscreva-se no &ldquo;Modele Seu
            Corpo&rdquo; agora e veja a incrível transformação que seu corpo é capaz
            de alcançar!
          </p>


          <button className="btn">Comece Agora</button>
        </div>
        <div className="header__image">
          <Image height={500} width={500} src="/assets/header.png" alt="header" />
        </div>
      </header>
      <section className="section__container explore__container" id="Programa">
        <div className="explore__header">
          <h2 className="section__header">EXPLORE NOSSO PROGRAMA</h2>
          <div className="explore__nav">

          </div>
        </div>
        <div className="explore__grid">
          <div className="explore__card">
            <span>
              <i className="ri-boxing-fill"></i>
            </span>
            <h4>Força</h4>
            <p>
              Abraçe a essência da força enquanto exploramos suas diversas
              dimensões físicas, mentais e emocionais.
            </p>
            <a href="#">
              Junte-se Agora <i className="ri-arrow-right-line"></i>
            </a>
          </div>
          <div className="explore__card">
            <span>
              <i className="ri-heart-pulse-fill"></i>
            </span>
            <h4>Fitness Físico</h4>
            <p>
              Engloba uma variedade de atividades que melhoram a saúde, força,
              flexibilidade e bem-estar geral.
            </p>
            <a href="#">
              Junte-se Agora <i className="ri-arrow-right-line"></i>
            </a>
          </div>
          <div className="explore__card">
            <span>
              <i className="ri-run-line"></i>
            </span>
            <h4>Perda de Gordura</h4>
            <p>
              Através de uma combinação de rotinas de treino e orientação
              especializada, iremos capacitá-lo a alcançar seus objetivos.
            </p>
            <a href="#">
              Junte-se Agora <i className="ri-arrow-right-line"></i>
            </a>
          </div>
          <div className="explore__card">
            <span>
              <i className="ri-shopping-basket-fill"></i>
            </span>
            <h4>Ganho de Peso</h4>
            <p>
              Projetado para indivíduos, nosso programa oferece uma abordagem
              eficaz para ganhar peso de maneira sustentável.
            </p>
            <a href="#">
              Junte-se Agora <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </section>
      <section className="section__container class__container" id="Serviços">
        <div className="class__image">
          <span className="bg__blur"></span>
          <img src="assets/class-1.jpg" alt="class" className="class__img-1" />
          <img src="assets/class-2.jpg" alt="class" className="class__img-2" />
        </div>
        <div className="class__content">
          <h2 className="section__header">A AULA QUE VOCÊ TERÁ AQUI</h2>
          <p>
            Conduzida por nossa equipe de instrutores especializados e
            motivadores, &ldquo;A Aula Que Você Terá Aqui&rdquo; é uma sessão de alta
            energia e focada em resultados que combina perfeitamente cardio,
            treinamento de força e exercícios funcionais. Cada aula é
            cuidadosamente elaborada para mantê-lo envolvido e desafiado,
            garantindo que você nunca atinja um platô em seus esforços de
            fitness.
          </p>
          <button className="btn">Agende uma Aula</button>
        </div>
      </section>
      <section className="section__container join__container" id="Sobre">
        <h2 className="section__header">POR QUE NOS JUNTAR?</h2>
        <p className="section__subheader">
          Nossa base de membros diversificada cria uma atmosfera amigável e de
          apoio, onde você pode fazer amigos e se manter motivado.
        </p>
        <div className="join__image">
          <Image height={1200} width={1200} src="/assets/join.jpg" alt="Junte-se" />
          <div className="join__grid">
            <div className="join__card">
              <span>
                <i className="ri-user-star-fill"></i>
              </span>
              <div className="join__card__content">
                <h4>Personal Trainer</h4>
                <p>
                  Desbloqueie seu potencial com nossos especialistas em
                  Treinamento Pessoal.
                </p>
              </div>
            </div>
            <div className="join__card">
              <span>
                <i className="ri-vidicon-fill"></i>
              </span>
              <div className="join__card__content">
                <h4>Sessões de Prática</h4>
                <p>Eleve seu condicionamento físico com sessões de prática.</p>
              </div>
            </div>
            <div className="join__card">
              <span>
                <i className="ri-building-line"></i>
              </span>
              <div className="join__card__content">
                <h4>Boa Administração</h4>
                <p>Gestão de apoio, para o seu sucesso no fitness.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section__container price__container" id="Preços">
        <h2 className="section__header">NOSSO PLANO DE PREÇOS</h2>
        <p className="section__subheader">
          Nosso plano de preços vem com várias camadas de associação, cada uma
          adaptada para atender a diferentes preferências e aspirações de
          fitness.
        </p>
        <div className="price__grid">
          <div className="price__card">
            <div className="price__card__content">
              <h4>Plano Básico</h4>
              <h3>R$16</h3>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                Plano de treino inteligente
              </p>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                Treinos em casa
              </p>
            </div>
            <button className="btn price__btn">Junte-se Agora</button>
          </div>

          <div className="price__card">
            <div className="price__card__content">
              <h4>Plano Mensal</h4>
              <h3>R$45</h3>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                Academias & Aulas ELITE
              </p>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                Academias PRO
              </p>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                Plano de treino inteligente
              </p>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                Treinos em casa
              </p>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                Treinamento Pessoal
              </p>
            </div>
            <button className="btn price__btn">Junte-se Agora</button>
          </div>
        </div>
      </section>

      <ReviewsCarousel />
      <Footer />


    </main>
  );
}
