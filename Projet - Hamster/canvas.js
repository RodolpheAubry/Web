<<<<<<< HEAD
//ensemble des variables n�cessaires au fonctionnement du jeu
=======
>>>>>>> origin/master
var widthCanvas = 500;
var heightCanvas = 500;
var mouvement = 100;
var x = 200;
var y = 400;
var tailleHamster = 100;
var tailleCookie = 30;
var taillePiege = 50;
var tailleGrosCookie = 70;
var gameloop;
var refresh = 10;
var cookieOuPiege = 0;
<<<<<<< HEAD
=======
var canvas = document.getElementById("canvas");
>>>>>>> origin/master
var nbre = 0;
var modulo = 70;
var vie = 2;
var score = 0;
var piegeEvite = 0;
<<<<<<< HEAD
var grandCookie = 0;
var cent = 0;
var sec = 0;
var min = 0;
var modeDeJeu = 0;
CookiesArray = new Array();
=======
var cent = 0;
var sec = 0;
var min = 0;
>>>>>>> origin/master
var imageObj = new Image();
var imageObj2 = new Image();
var imageObj3 = new Image();
var imageObj4 = new Image();
var imageObj5 = new Image();

<<<<<<< HEAD
//affichage des champs vues, score, temps, pieges, nombres de grands cookies
var alert1 = document.getElementById("vie");
alert1.innerHTML = "VIES : "+vie;
var alert2 = document.getElementById("score");
alert2.innerHTML = "SCORE : "+score;
var alert3 = document.getElementById("temps");
alert3.innerHTML = + min + " : " + sec + " : " + cent;
var alert4 = document.getElementById("piege");
alert4.innerHTML = "PIEGES EVITES : "+piegeEvite;
var alert5 = document.getElementById("grandcookie");
alert5.innerHTML = "GRANDS COOKIES : "+grandCookie;

var canvas = document.getElementById("canvas");
=======

var alert1 = document.getElementById("vie");
alert1.innerHTML = "VIES : "+vie;

var alert2 = document.getElementById("score");
alert2.innerHTML = "SCORE : "+score;

var alert3 = document.getElementById("temps");
alert3.innerHTML = + min + " : " + sec + " : " + cent;

var alert4 = document.getElementById("piege");
alert4.innerHTML = "PIEGES EVITES : "+piegeEvite;

CookiesArray = new Array();

>>>>>>> origin/master
canvas.width = widthCanvas;
canvas.height = heightCanvas;
context = canvas.getContext("2d");
context.fillStyle = "white"

<<<<<<< HEAD
window.addEventListener('keydown',pause,true);
window.addEventListener('keydown',triche,true);

function pause(e){
	if(e.keyCode==80){
		clearTimeout(compte);
		reset();
	}
}
function triche(e){
	if(e.keyCode==65){
		clearTimeout(compte);
		reset();
		var codeTriche = prompt("Entrez le code triche","");
		if (codeTriche=="plusdepoint"){
			score+=5;
			alert2.innerHTML = "SCORE : "+score;
		}
		else if (codeTriche=="quedescookies"){
			modeDeJeu=1;
		}
		else if (codeTriche=="modeextreme"){
			modeDeJeu=2;
		}
		else if (codeTriche=="normal"){
			modeDeJeu=0;
		}
			
	}
}
//fonction chrono pour d�terminer le temps de jeu
=======

>>>>>>> origin/master
function chrono(){
	cent++;
	if (cent>99){
		cent=0;
		sec++;
	}
	if (sec>59){
		sec=0;
		min++;
	}
	var alert3 = document.getElementById("temps");
	alert3.innerHTML = min + " : " + sec + " : " + cent;
	
	compte=setTimeout('chrono()',10);
}
<<<<<<< HEAD
//fonction reinitialise permet de tout remettre � 0 lorsque le nombre de vie tombe � 0
=======

>>>>>>> origin/master
function reinitialise(){
	
	vie=2;
	score=0;
	piegeEvite=0;
	alert1.innerHTML = "VIES : "+vie;
	alert2.innerHTML = "SCORE : "+score;
	cent=0;
	sec=0;
	min=0;
	alert3.innerHTML = + min + " : " + sec + " : " + cent;
}
<<<<<<< HEAD
//fonction qui s'ex�cute lorsqu'on clique sur le bouton commencer
//raffraichissement toutes les 10 ms de l'affichage des cookies et hamster
=======

>>>>>>> origin/master
function commencer(){


	clearInterval(gameloop);
	gameloop = setInterval(update, 10);
	gameloop2 = setInterval(placerHamster, 10);
	


}
<<<<<<< HEAD
//fonction pour mettre � jour la position des images
=======

>>>>>>> origin/master
function update(){

	context.fillRect(0, 0, canvas.width, canvas.height);	

	if (nbre % modulo==0){

		var newObjet = new Object();
<<<<<<< HEAD
		if(modeDeJeu==0){
			var aleatoire = Math.random();
		}
		else if(modeDeJeu==1){
			var aleatoire = 0;
		}
		else if (modeDeJeu==2){
			var aleatoire =0.5;
		}
			
=======
		var aleatoire = Math.random();
>>>>>>> origin/master

		if (aleatoire < 0.48){
			newObjet.x = (Math.floor (Math.random() *5)*100+35);
			newObjet.cookieOuPiege = 0;
			newObjet.taille=tailleCookie;
		}
		
		if (aleatoire >= 0.48 && aleatoire < 0.96) {
			newObjet.x = (Math.floor (Math.random() *5)*100+25);
			newObjet.cookieOuPiege = 1;
			newObjet.taille=taillePiege;
		};
		
		if (aleatoire >= 0.96){
			newObjet.x = (Math.floor (Math.random() *5)*100+15);
			newObjet.cookieOuPiege = 2;
			newObjet.taille=tailleGrosCookie;
		}
		
		newObjet.y = -50;
		
		CookiesArray.push(newObjet);

	}
<<<<<<< HEAD
//parcours de la collection d'objets (tableau CookiesArray)
=======

>>>>>>> origin/master
	for (var i=CookiesArray.length - 1; i >= 0; i--){

		CookiesArray [i].y++;

		if (CookiesArray[i].y + CookiesArray[i].taille > canvas.height - tailleHamster + 5){
			if (CookiesArray[i].x+CookiesArray[i].taille/2==x+tailleHamster/2){
				collision(CookiesArray[i]);
			}
			else{
				if (CookiesArray[i].cookieOuPiege == 1){
					piegeEvite++;
<<<<<<< HEAD
					score++;
=======
>>>>>>> origin/master
				}
			}
			CookiesArray.splice(i, 1);
		}
		else{
			drawCookie(CookiesArray[i].x, CookiesArray[i].y, CookiesArray[i].cookieOuPiege, CookiesArray[i].taille);
		}	
	}
	var alert4 = document.getElementById("piege");
	alert4.innerHTML = "PIEGES EVITES : "+piegeEvite;
<<<<<<< HEAD
	var alert2 = document.getElementById("score");
	alert2.innerHTML = "SCORE : "+score;

	nbre++;
}
//fonction qui permet de dessiner les images selon 3 cas : cookie,piege,gros cookies
=======
	nbre++;
}

>>>>>>> origin/master
function drawCookie(xPos, yPos, test, taille){

	if(test == 0){
		imageObj3.src = 'img/cookie.png';
			context.drawImage(imageObj3,xPos,yPos, taille, taille);
	}
	
	if(test == 1){
		imageObj4.src = 'img/trap.jpg';
		context.drawImage(imageObj4,xPos,yPos, taille, taille);
			
		
	}
	
	if(test == 2){
		imageObj5.src = 'img/cookie.png';
		context.drawImage(imageObj5,xPos,yPos, taille, taille);

		
	}
}

function reset(){
	clearInterval(gameloop);
	clearInterval(gameloop2);
}
<<<<<<< HEAD
//fonction qui g�re les diff�rentes collisions entre les objets et le hamster
//changement de style selon les cas
=======

>>>>>>> origin/master
function collision(objet){
	if (objet.cookieOuPiege == 0){
		score++;
		alert2.innerHTML = "SCORE : "+score;
<<<<<<< HEAD
		alert1.style.color="#383a3c";
		alert2.style.color="green";
		var audio = new Audio('cookie.mp3');
		audio.play();
	}
	else if (objet.cookieOuPiege == 1){
=======
		var audio = new Audio('cookie.mp3');
		audio.play();
	}
	if (objet.cookieOuPiege == 1){
>>>>>>> origin/master
		var audio2 = new Audio('tapette.mp3');
		audio2.play();
		vie--;
		alert1.innerHTML = "VIES : "+vie;
<<<<<<< HEAD
		alert1.style.color="red";
		alert2.style.color="#383a3c";
		clearTimeout(compte);
		
		if (vie == 0){
=======
		clearTimeout(compte);
		
		if (vie == 0){

			//alert("GAME OVER \n Tu as joué pendant " + min + " minutes " + sec + " secondes et " + cent + " centièmes");
>>>>>>> origin/master
			var audio2 = new Audio('tapette.mp3');
			audio2.play();
			var classement = getCookie("highscore");
			var nomJoueur = getCookie("joueur");
			if (classement != "")
			{
				classement=getCookie("highscore");
				if (score > classement)
					{
						setCookie("highscore", score, 30);
<<<<<<< HEAD
						var nomJoueur = prompt("F�licitation vous avez r�alis� un meilleur score! Entrez votre nom","")
=======
						var nomJoueur = prompt("Félicitation vous avez réalisé un meilleur score! Entrez votre nom","")
>>>>>>> origin/master
						setCookie("joueur", nomJoueur, 30);
						classement=getCookie("highscore");
						alert("Meilleur score : " + classement + " Joueur " + nomJoueur);
						reinitialise();
						
					}
				else
				{
	
<<<<<<< HEAD
					alert("Dommage vous ferez mieux la prochaine fois! Record d�tenu par " + nomJoueur + " � " + classement + " points");
=======
					alert("Dommage vous ferez mieux la prochaine fois! Record détenu par " + nomJoueur + " à " + classement + " points");
>>>>>>> origin/master
					reinitialise();
				}
			}
			else
			{	
				setCookie("highscore", score, 30);
				var classement = getCookie("highscore");
<<<<<<< HEAD
				var nomJoueur = prompt("F�licitation vous avez r�alis� votre premier meilleur score! Entrez votre nom","")
				setCookie("joueur", nomJoueur, 30);
				alert("F�licitation votre premier meilleur score! : " + classement + " Joueur " + nomJoueur);
				reinitialise();
			}
=======
				var nomJoueur = prompt("Félicitation vous avez réalisé votre premier meilleur score! Entrez votre nom","")
				setCookie("joueur", nomJoueur, 30);
				alert("Félicitation votre premier meilleur score! : " + classement + " Joueur " + nomJoueur);
				reinitialise();

			}

>>>>>>> origin/master
		reinitialise();
		}
		reset();
	}
<<<<<<< HEAD
	else 
	{
		var audio3 = new Audio('groscookie.mp3');
		audio3.play();
		alert1.style.color="green";
		alert2.style.color="#383a3c";
		vie++;
		grandCookie++;
		alert1.innerHTML = "VIES : "+vie;
		alert5.innerHTML = "GRANDS COOKIES : "+grandCookie;
	}
}
//fonction qui place le hamster au centre du canvas au moment du lancement       
=======
	if (objet.cookieOuPiege == 2){
		vie++;
		alert1.innerHTML = "VIES : "+vie;
        score=score+5
        alert2.innerHTML = "SCORE : "+score;
	
	}

	
}

        
>>>>>>> origin/master
function placerHamster(){
	
	init();
	imageObj2.src = 'img/hamster.png';
	context.drawImage(imageObj2,x,y,tailleHamster,tailleHamster);
	

	window.addEventListener('keydown',deplacerHamster,true);
}
<<<<<<< HEAD
//fonction qui permet le d�placement du hamster selon la touche press�e (gauche ou droite)
=======

>>>>>>> origin/master
function deplacerHamster(e){

	switch (e.keyCode) {

		case 37:
		
	    if (x - mouvement > -tailleHamster){
	    	clear();
	    	x = x-mouvement;
	   		placerHamster(x,y,tailleHamster,tailleHamster);
		}
	    
	    break;
	    
	    case 39:
	    
	    if (x + mouvement < widthCanvas){
	    	clear();
	    	x = x+mouvement;
 			placerHamster(x,y,tailleHamster,tailleHamster);
	    }
 		break;
	}	
}

function init(){
	
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
}

function clear(){	

	context.clearRect(0, 0, widthCanvas, heightCanvas);

}
<<<<<<< HEAD
//fonction qui cr�e un cookie avec en param�tre le nom, la valeur et la date d'expiration
=======
>>>>>>> origin/master
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}
<<<<<<< HEAD
//fonction qui r�cup�re la valeur d'un cookie avec en param�tre le nom
=======
        
>>>>>>> origin/master
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
           var c = ca[i];
           while (c.charAt(0)==' ') c = c.substring(1);
                if (c.indexOf(name) != -1) {
                    return c.substring(name.length, c.length);
                }
            }
    return "";
}