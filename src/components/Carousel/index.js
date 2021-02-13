import React from "react";
import Carousel from "react-elastic-carousel";

import Cartao from "../Cartao";

import carolImg from '../../assets/img/carol.png';
import jeskaImg from '../../assets/img/jeska.jpeg';
import mayarImg from '../../assets/img/mayara.jpeg';
import mainhaImg from '../../assets/img/mainha.jpeg';
import juninhoImg from '../../assets/img/juninho.jpeg';

import './styles.css';

const Carrossel = () => (
    <Carousel itemsToShow={1}>
        <Cartao foto={mainhaImg} emissor="Solange (Mainha)" mensagem={
            <div>
                <p>
                🎀🎀Feliz aniversário filha, que Deus em sua infinita bondade esteja te abençoando nesta data tão sublime, rogo a Deus pela sua
                vida e pela vida de MARIANA, que vcs sejam muito felizes , vc é uma pessoa de sorte faz aniversário e vai ser mãe no
                mêsque Mariana chegue logo pra animar nossos dias, pq assim fazemos uma festa só 🎉🎉🎉, receba meu carinho e
                meu abraço 🌹🌹🌹. Beijo no 💓💓💓🎀🎀
                </p>
                <p>
                "Ensina a criança o caminho que deve andar e quando for velha não se desviará dele." Provérbios 22.6. 🌻
                </p>
            </div>
        }/>

        <Cartao foto={juninhoImg} emissor="Juninho" mensagem={
            <div>
                <p>
                Parabéns meu amor!! ❤️ Hoje tem um significado mais especial e representa bem mais que celebrar um ano em sua vida...
                isso porque nossa família está crescendo.
                </p>
                <p>
                Desejo que seu dia seja maravilhoso, porque você merece tudo de bom na vida e toda felicidade do mundo. Você é uma esposa incrível e é por isso também que nosso amor fortalece a cada dia.
                </p>
                <p>
                Obrigado por tudo e por tanto. Feliz aniversário! Te amo! ❤️
                </p>
            </div>
        }/>

        <Cartao foto={carolImg} emissor="Carol" mensagem={
            <div>
                <p>
                Mariana, eu espero de verdade que você já esteja aí nesse momento dando trabalho a sua mãe no aniversário dela (brincadeira kkkkk).
                </p>
                <p> 
                    Meu amor, é seu aniversário, queria te dar um presente perfeito, mas tenho certeza que não existe presente mais lindo que sua
                    filha (é bom de verdade você já ter nascido pro meu texto ter sentido) Você agora é uma mamãe... uma mãe guerreira, incrível,
                    protetora e entre milhares de coisas boas. Que sorte de Mariana de te ter como mãe. Você é maravilhosa, forte, determinada
                    e a minha oração é pra que Deus continue te conservando assim.
                </p>
                <p>
                    Que o Senhor abençoe você e sua família, que Ele te dê forças
                    em qualquer situação que você passar. Eu te desejo um aniversário abençoado, posso não ter ficado muito do seu lado nesses dias,
                    mas você sempre esteve nas minhas orações e nas orações da igreja ( toda terça orávamos por vocês). Eu amo você de um tanto que
                    tu nem imagina. Feliz vida, Raves❤️.
                </p>
            </div>
        }/>

        <Cartao foto={jeskaImg} emissor="Jéssica" mensagem={
            <div>
                <p>
                    Tem gente que não é parente, mas se torna família pelo afeto que sentimos e pelo valor que a pessoa nos dá. Nossa.. como eu
                    sou grata a Deus, pois eu ganhei uma verdadeira irmã no ano de 2015 e agora uma sobrinha no ano de 2020, que não possuem meu
                    sangue, mas possuem todo o meu amor, meu afeto, apreço e dedicação.
                </p>

                <p>
                    O carinho que sinto por você SIS é tão grande que foi dividido por dois e ainda possui uma grande proporção e tamanho,
                    é imenso, é de um tamanho que você nem imagina, as vezes até eu custo a acreditar. No meu aniversário você me disse que
                    eu era a pessoa que mais marcou a sua vida (fiquei literalmente emocionada com isso), e no seu aniversário eu não poderia
                    dizer menos a você.
                </p>

                <p>
                    Você foi uma grande e inesperada surpresa de Deus na minha vida e com certeza uma das mais marcantes e
                    especiais. Agradeço incansavelmente a Deus por ter te colocado no meu caminho, na minha história e no meu coração.
                </p>

                <p>
                    Amo você imensamente, Sister! Feliz vida, agora mais feliz do que nunca, com Mariana. ♥️✨
                </p>
            </div>
        }/>


        <Cartao foto={mayarImg} emissor="Mayara" mensagem={
            <div>
                <p>
                    Pra te parabenizar, pensei em iniciar o texto com o significado do seu nome, mas você é tão única que não encontrei 😅
                    então resolvi formular uma definição pra Ravanna: uma nova mãe, entrando em um novo mundo, com maestria, doçura e entusiamo.
                </p>

                <p>
                    Além de mãe, uma mulher incrível, generosa, companheira. Ravanna é organizada, responsável, pulso firme, sabe ouvir, sabe como
                    falar, é linda por dentro e por fora, baixa em estatura mas gigante de coração! Um exemplo de esposa, profissional, dona de casa,
                    amiga... inclusive é um ombro amigo sempre presente, tem as palavras certas com sua serenidade (nem sempre tão serena assim, as
                    vezes ela é bravinha) 😂.
                </p>

                <p>
                    Acho que tá boa essa definição, eu te vejo exatamente assim! Agora quero que saiba o quanto te admiro!
                    Eu te desejo as melhores coisas que possam existir, você merece! Que Deus te abençoe, minha amiga, que seu caminho seja de luz e
                    paz, que Ele te dê sabedoria pra cuidar e educar nossa pequena. Obrigada por me deixar participar de momentos importantes da sua vida!
                    Amo você, amo ser sua amiga! Estarei sempre ao seu lado! Conte comigo pra tudo.
                </p>

                <p>
                    Eu sei que não sou a pessoa mais carinhosa e delicada do
                    mundo 😂 mas é meu jeitinho! Que essa data se repita por muitos anos e que você seja cada dia mais feliz!! Que seus sonhos e planos se
                    realizem! Você está sempre em minhas orações. Feliz aniversário 🎉 Atenciosamente: tia Mayara pra mamãe mais linda do mundo! 💖
                </p>
                
                <p>
                    🌻 “Reveste-se de força e dignidade; sorri diante do futuro. Fala com sabedoria e ensina com amor.” Provérbios 31:25-26 🌻
                </p>
            </div>
        }/>
    </Carousel>
)

export default Carrossel;