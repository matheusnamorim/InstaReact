import Stories from './Stories';
import Post from './Post';
import Sugestions from './Sugestions';

const users = [
  {user: '9gag', url: 'assets/img/9gag.svg'}, 
  {user: 'meowed', url: 'assets/img/meowed.svg'}, 
  {user: 'barked', url: 'assets/img/barked.svg'}, 
  {user: 'nathanwpylestrangeplanet', url: 'assets/img/nathanwpylestrangeplanet.svg'}, 
  {user: 'wawawicomics', url: 'assets/img/wawawicomics.svg'}, 
  {user: 'respondeai', url: 'assets/img/respondeai.svg'}, 
  {user: 'filomoderna', url: 'assets/img/filomoderna.svg'}, 
  {user: 'memeriagourmet', url: 'assets/img/memeriagourmet.svg'}];

const post = [
  {user: 'meowed', imgUser: 'assets/img/meowed.svg', img: 'assets/img/gato-telefone.svg', imgEmphasis: 'assets/img/respondeai.svg', emphasis: 'respondeai', likes: 101.523},
  {user: 'barked', imgUser: 'assets/img/barked.svg', img: 'assets/img/dog.svg', imgEmphasis: 'assets/img/adorable_animals.svg', emphasis: 'adorable_animals', likes: 99.159}
];

const sugestions = [
  {user: 'bad.vibes.memes', img: 'assets/img/bad.vibes.memes.svg', text: 'Segue você'},
  {user: 'chibirdart', img: 'assets/img/chibirdart.svg', text: 'Segue você'},
  {user: 'razoesparaacreditar', img: 'assets/img/razoesparaacreditar.svg', text: 'Novo no Instagram'},
  {user: 'adorable_animals', img: 'assets/img/adorable_animals.svg', text: 'Segue você'},
  {user: 'smallcutecats', img: 'assets/img/smallcutecats.svg', text: 'Segue você'}
];

export default function Corpo(){
    return (
        <div class="corpo">
        <div class="esquerda">
          <div class="stories">

            {users.map(item => <Stories user={item.user} url = {item.url}/>)}

            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
          </div>

          <div class="posts">
            {post.map(item => <Post user={item.user} imgUser={item.imgUser} img={item.img} imgEmphasis={item.imgEmphasis} emphasis={item.emphasis} likes={item.likes}/>)}
          </div>
        </div>

        <div class="sidebar">
          <div class="usuario">
            <img src="assets/img/catanacomics.svg" />
            <div class="texto">
              <strong>catanacomics</strong>
              Catana
            </div>
          </div>

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>
          
          {sugestions.map(item => <Sugestions user={item.user} img={item.img} text={item.text}/>)}

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
      </div>
      </div>
    );
}