var Play = 1;
var End = 0;
var gameState = Play;//tinha chamado a variável PLAY, mas ela se chama Play
var imageFundo, imagemFundo;//criei uma nova variável para a imagem e outra pra o sprite, pq não podemos colocar as duas juntas
var mario, marioImg;
var gameOver,restart;//criei uma nova variável para a imagem e outra pra o sprite, pq não podemos colocar as duas juntas
var ground; //precisamos de um chão invisível para o sprite não cair no além kkkk
var gameOverImg;

var score = 0;//a pontuação inicial tem que omeçar com 0

function preload(){
  imagemFundo = loadImage("fundodejogo.jpg");//loadimage estava com i minúsculo
  marioImg = loadAnimation("mario.png");//loadimage estava com i minúsculo
  gameOverImg = loadImage("gameOver.png");
  restart = loadImage("restart.png");
}

function setup() {
    createCanvas(500,400);
    imageFundo = createSprite(200,height-50,400,20);//o s de sprite estava minúsculo
    imageFundo.addImage("imageFundo",imagemFundo);//tinha chamado a variável errada
    imageFundo.x = imageFundo.width /2;//tinha chamado a variável errada, faltando um n

    mario = createSprite(50,height-80,20,50);//estava escrito createspite
    mario.addAnimation('jogador', marioImg);
    mario.scale = 0.1;//estava score

    gameOver = createSprite(width/2,height/2);
    gameOver.addImage(gameOverImg);//chamou uma variável que ainda não existia
    gameOver.scale = 0.5;

    gameOver.visible = false;//o o estava minúsculo
    restart.visible =  false;

    ground = createSprite(200, 370, 400, 2)
    ground.visible = false;
}

function draw() {
 background(0);
 
  text("pontos:" + score, width-100, 50);
  
    if(gameState === Play){//escreveu PLAY
      
      imageFundo.velocityX = -5;
      score = score + Math.round(getFrameRate()/60);
      mario.velocityY = mario.velocityY + 0.8; //era velocityY para adicionar gravidade, e teu sprite em movimento se chama mario
      if(keyDown('space') && mario.y >= 320){//o k estava maiúsculo e faltava mario.y, estava só y
        mario.velocityY = -12;//faltava o Y
      }

      if(imageFundo.x < 200){
          imageFundo.x = imageFundo.width/2;
      } 
      mario.collide(ground)
      /*
      if(obstaculo.isTouching(mario)){
        gameState = End;
      }
      */
    } else if (gameState === End) {//estava escrito END
        gameOver.visible = true;
        restart.visible = true;
        imageFundo.velocityX = 0;
        mario.velocityY = 0
    }

  
  drawSprites(); //faltava para desenhar os sprites
}
      
