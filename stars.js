var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var star1;
var star2;
var star3;
var star4;
var star5;
var stars;
var platforms;
var ground;


function preload() {
    game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/platform.png');
	game.load.image('star', 'assets/star.png');
}


function create() {
	
	
	game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0, 0, 'sky');
	
    platforms = game.add.group();
    platforms.enableBody = true;
	
	
    ground = platforms.create(0, game.world.height - 64, 'ground');
	ground.scale.setTo(2, 2);
    ground.body.immovable = true;
	
	stars = game.add.group();
    stars.enableBody = true;
	
    star1 = stars.create(35, 0, 'star');
    star1.body.gravity.y = 200;
	
	star2 = stars.create(85, 0, 'star');
    star2.body.gravity.y = 200;
	
	star3 = stars.create(135, 0, 'star');
    star3.body.gravity.y = 200;
	
	star4 = stars.create(185, 0, 'star');
    star4.body.gravity.y = 200;
	
	star5 = stars.create(235, 0, 'star');
    star5.body.gravity.y = 200;
	
}

function update() {
	
	game.physics.arcade.collide(stars, ground);
	
	if(star1.position.y >= 510){
		star1.kill();
		star1 = stars.create(35, 0, 'star');
		star1.body.gravity.y = 200;
	}
	
	if(star2.position.y >= 510){
		star2.kill();
		star2 = stars.create(85, 0, 'star');
		star2.body.gravity.y = 200;
	}
	
	if(star3.position.y >= 510){
		star3.kill();
		star3 = stars.create(135, 0, 'star');
		star3.body.gravity.y = 200;
	}
	
	if(star4.position.y >= 510){
		star4.kill();
		star4 = stars.create(185, 0, 'star');
		star4.body.gravity.y = 200;
	}
	
	if(star5.position.y >= 510){
		star5.kill();
		star5 = stars.create(235, 0, 'star');
		star5.body.gravity.y = 200;
	}
}









