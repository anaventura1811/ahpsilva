import { AboutContainer } from "./styles";

type Props = {};

export default function About(props: Props) {
  return (
    <AboutContainer>
      <h2>Nossa história</h2>
      <article className='text'>
        <p>
          O Escritório AHP Silva foi criado e idealizado pelo advogado Antônio Henrique Pereira da Silva, com a ajuda e contribuição de inúmeros amigos, colegas e professores da Puc Minas/Betim, com foco em uma Advocacia voltada para o Cidadão. Daí o nome AHP Silva – Advocacia do Cidadão.
        </p>

        <p>
          Há mais de quinze anos o Escritório destaca-se pela atuação coordenada e, quase sempre, em parcerias com os demais profissionais do meio jurídico, o que resulta no histórico eficiente na entrega da prestação jurisdicional, característico de uma advocacia inclusiva, cooperativa, abrangente, reconhecida e consolidada.
        </p>
        <p>
          O Escritório AHP Silva  disponibiliza acessibilidade, análise, estudo e dedicação, orientado por valores fundamentais para assegurar uma defesa combativa, pautada pela ética, confiança, transparência, qualidade, compromisso e dignidade na representatividade do direito sub judice.
        </p>
        <p>
          O desafio, a complexidade e a aparente dificuldade da causa despertam a excelência técnica a ser alcançada pelo nosso trabalho, o que acaba por promover, consequentemente, a almejada obtenção dos melhores resultados previstos em nosso ordenamento jurídico, como forma de entregar justiça àqueles que dela necessitam!
        </p>
        <p>
          A nossa missão é a busca incansável pela correta aplicação da lei sobre o fato à luz da almejada Justiça.
        </p>
        <p>
          A lei, por mais perfeita que seja, é apenas um meio e não um fim em si mesma. Então a nossa filosofia é instrumentalizar o ordenamento jurídico como meio de viabilizar a vida, a liberdade, a dignidade, a honra e a justiça, mediante observância ao artigo 133 da Constituição Federal que, por sua vez, depositou sobre os ombros do advogado a indispensabilidade à administração da Justiça. Isso explica, porque não há justiça sem uma defesa efetiva, digna e combativa.
        </p>
            
      </article>
    </AboutContainer>
  );
};
