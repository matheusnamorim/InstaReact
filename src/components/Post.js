import React from "react";

export default function Post(props){

    const [textName, setTextName] = React.useState('heart-outline');
    const [corIonHeart, setCorIonHeart] = React.useState("my hydrated");

    function likePhoto(typeObject){
      if(typeObject === 'photo'){
        setTextName('heart');
        setCorIonHeart('my hydrated colorRed');
      }else if(typeObject === 'button'){
        if(textName === 'heart') {
          setTextName('heart-outline');
          setCorIonHeart('my hydrated');
        }else{
          setTextName('heart');
          setCorIonHeart('my hydrated colorRed');
        }
      }
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

        <div class="conteudo" onClick={() => likePhoto('photo')}>
          <img src={props.img} />
        </div>
      
        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon onClick={() => likePhoto('button')} class={corIonHeart} name={textName}></ion-icon>
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