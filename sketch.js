var tijolo,bola,raquete,estadoJogo,tijolos,
vidas,pontuacao

function setup(){
  createCanvas(400,400)
estadoJogo='parado'
  

  
montarJogo() 
pontuacao=0
vidas=3
}







function draw(){
  background(0)
  textSize(15)
  text('pontuaçao:' + pontuacao, 40, 25)
  text('vidas: ' + vidas,300, 25)
  
  
if(estadoJogo == 'parado') {
  
  tijolos.setVelocityYEach(0)  
  
  
    bola.velocityY=0  
  bola.velocityY=0
  bola.x=200
  bola.y=250
  
  raquete.velocityY=0
  raquete.velocityY=0
  raquete.x=200
  raquete.y=350
  
  
    textSize(20)
   text('Pressione "ESPAÇO" para iniciar',60,200)

  if(keyDown("SPACE")) {
    
    tijolos.setVelocityYEach(0.2)
    
    estadoJogo = "play";
bola.velocityY = -5;
bola.velocityX = -6;
    
  }





} 
  
  
  if(estadoJogo=='play') {
    
  
    if(!tijolos[0]) {
      textSize(25)
       text('parabens agora some', 80,220)
    
   bola.remove ()
  raquete.remove  ()
      
      
      
    }
    
  
   if(tijolos.isTouching(bordas[3])) {
     
        estadoJogo = 'gameOver'
   }
 
    
    
    fimDeJogo()
       
for (i=0;i< 3;i++) {
  
bola.bounceOff(bordas[i]);
   
}
  
  
if(keyDown('left')) {
  raquete.velocityX = -8
} 
  
if(keyDown('right')) {
  raquete.velocityX = +8
}
raquete.collide(bordas)  
 bola. bounceOff(raquete) 
 bola.bounceOff(tijolos,removertijolo) 
  
  }
  
  

 if(estadoJogo == 'gameOver') {
   
   tijolos.destroyEach()
   
    
   textSize(30)
   text('gameOver sai do meu jogo'  , 18,220)
   bola.remove()
   raquete.remove()
 

 
 }
  
  
  drawSprites()
  
}

function fimDeJogo(){
  
  if(bola.y > 400) {
       vidas=vidas-1
   if(vidas<1) {
     
     estadoJogo='gameOver'
   }else{
     
     estadoJogo='parado'
   }

  
    
    
  }

  
}















function removertijolo(bola,tijolo){
  
  tijolo.remove()
  
  pontuacao = pontuacao+1
  
}







function montarJogo() {
   
  tijolos = createGroup()
    criarLinha(0,'red')
  criarLinha(29,'blue')
  criarLinha(29+29, 'yellow')
criarLinha(29+29+29, 'green')
bordas=createEdgeSprites()

bola=createSprite(200,250,20,20)
bola.shapeColor='white'


raquete=createSprite(200,350,120,10)
raquete.shapeColor='white'


  
  
  
}




function criarLinha(y,cor) {
    for(i=0;i<=5;i++) {
    
 
tijolo = createSprite(65 + 54 * i,50 + y,50,25)
tijolo.shapeColor=cor
    tijolos.add(tijolo)  
   }
  
  
  
}
    

































































































































































































































                                      














































