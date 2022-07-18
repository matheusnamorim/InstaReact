import React from "react";

export default function Post(props){

    const [textName, setTextName] = React.useState('heart-outline')

    function teste(){
      if(textName === 'heart') setTextName('heart-outline');
      else setTextName('heart');
      console.log('entrou');
    }
    return (
        <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src= {props.imgUser} />
            {props.user}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src={props.img} />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon onClick={teste} name={textName}></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src= {props.imgEmphasis} />
            <div class="texto">
              Curtido por <strong>{props.emphasis}</strong> e <strong>outras {props.likes} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
        
    );
}