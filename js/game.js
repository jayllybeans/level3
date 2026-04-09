//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player1;
var player2;
var p1Wins;
var p2Wins;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player1 = new GameObject(0, 300, 25, 100);
	player2 = new GameObject(canvas.width, 300, 25, 100, "blue");
	ball = new GameObject(canvas.width/2, canvas.height/2, 50, 50, "purple");

	ball.vx = 5;
	ball.vy = 5;

	p1Wins = 0;
	p2Wins = 0;

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	
	//Move the Player to the right
	/*if(d)
	{
		console.log("Moving Right");
		player.x += 2;
	}
	if(a)
	{
		console.log("Moving Left");
		player.x += -2;
	}*/
	if(w)
	{
		//console.log("Moving Up");
		if (player1.y - player1.height <= -50)
		{
			player1.vy = 0;
		}
		else
		{
			player1.y += -2;
		}
	}
	if(s){
		//console.log("Moving Down");
		if (player1.y + player1.height >= (canvas.height + 50))
		{
			player1.vy = 0;
		}
		else
		{
			player1.y += 2;
		}
	}
	if(arrowUp)
	{
		if (player2.y - player2.height <= -50)
		{
			player2.vy = 0;
		}
		else
		{
			player2.y += -2;
		}
	}
	if(arrowDown)
	{
		if (player2.y + player2.height >= (canvas.height + 50))
		{
			player2.vy = 0;
		}
		else
		{
			player2.y += 2;
		}
	}

		let collisionp1 = player1.hitTestObject(ball);
		let collisionp2 = player2.hitTestObject(ball);

		if(collisionp1 || collisionp2)
		{
			if(collisionp1)
			{
				ball.color = "red";
				if (ball.y < player1.y - player1.y/6)
				{
					ball.vx++;
					ball.vy--;
				}
				else if (ball.y > player1.y - player1.y/6)
				{
					ball.vx++;
					ball.vy++;
				}
			}
			else if (collisionp2)
			{
				ball.color = "blue";
				if (ball.y < player2.y - player2.y/6)
				{
					ball.vx++;
					ball.vy--;
				}
				else if (ball.y > player2.y - player2.y/6)
				{
					ball.vx++;
					ball.vy++;
				}
			}
			ball.vx *= -1;
		}

        if(ball.y + ball.height/2 >= canvas.height || ball.y - ball.height/2 <= 0)
        {
            ball.vy *= -1;
			ball.color = "purple";
        }

        ball.x += ball.vx;
        ball.y += ball.vy;

		if (ball.x + ball.width/2 <= 0 || ball.x - ball.width/2 >= canvas.width)
		{
			if(ball.x + ball.width/2 <= 0)
			{
				p2Wins++;
			}
			else if(ball.x - ball.width/2 >= canvas.width)
			{
				p1Wins++;
			}
			ball.x = canvas.width/2;
			ball.y = canvas.height/2;
		}
	//Update the Screen
	player1.drawRect();
	player2.drawRect();
	ball.drawCircle();
	console.log(p1Wins);
	console.log(p2Wins);
}

