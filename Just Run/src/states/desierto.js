var playdesiertoState = function(Just_run){
	playdesiertoState.prototype.create = function() {        	
		//inicializacion de los sprites
	    this.background = game.add.sprite(0,0,'snowfield');

	    //variables del movimiento
	    this.velocidadmaxima = 300;
	    this.aceleracion = 500;
	    this.frenada = 3600;
	    this.gravedad = 1500; 
	    this.salto = -600; 
		
	    //crear bola de nieve
	    this.bola = this.game.add.sprite(1100, 380, 'tweed');
	    var rodar = this.bola.animations.add('rodar');
	    this.game.physics.enable(this.bola, Phaser.Physics.ARCADE);
	    this.bola.body.immovable = true;
	    this.bola.body.allowGravity = false;

	    //crear chuzo de punta
	    this.b1 = this.game.add.sprite(-50, this.game.height-220, 'bala');
	    this.game.physics.enable(this.b1, Phaser.Physics.ARCADE);
	    this.b1.body.immovable = true;
	    this.b1.body.allowGravity = false;
	   
	    //crear penguinos
	    this.p1 = this.game.add.sprite(-200,48, 'buitre');
	    var rodar = this.p1.animations.add('rodar');
	    this.game.physics.enable(this.p1, Phaser.Physics.ARCADE);
	    this.p1.body.immovable = true;
	    this.p1.body.allowGravity = false;

	    this.p2 = this.game.add.sprite(-200,300, 'buitre');
	    var rodar = this.p2.animations.add('rodar');
	    this.game.physics.enable(this.p2, Phaser.Physics.ARCADE);
	    this.p2.body.immovable = true;
	    this.p2.body.allowGravity = false;

	    this.p3 = this.game.add.sprite(-200,200, 'buitre');
	    var rodar = this.p3.animations.add('rodar');
	    this.game.physics.enable(this.p3, Phaser.Physics.ARCADE);
	    this.p3.body.immovable = true;
	    this.p3.body.allowGravity = false;

	    //crear plataformas que se caen
	    this.plataforma1 = this.game.add.sprite(460, this.game.height - 520, 'plataforma');
	    this.game.physics.enable(this.plataforma1, Phaser.Physics.ARCADE);
	    this.plataforma1.body.immovable = true;
	    this.plataforma1.body.allowGravity = false;

		this.plataforma2 = this.game.add.sprite(460, this.game.height - 350, 'plataforma');
	    this.game.physics.enable(this.plataforma2, Phaser.Physics.ARCADE);
	    this.plataforma2.body.immovable = true;
	    this.plataforma2.body.allowGravity = false;

	    // crear jugadores
	    this.chaser = this.game.add.sprite(60, this.game.height - 300, 'chaser');
	    this.game.physics.enable(this.chaser, Phaser.Physics.ARCADE);
	    this.chaser.body.collideWorldBounds = true;
	    this.chaser.body.maxVelocity.setTo(this.velocidadmaxima, this.velocidadmaxima * 10);
	    this.chaser.body.drag.setTo(this.frenada, 0);
	    game.physics.arcade.gravity.y = this.gravedad;
	    //animaciones chaser
	    this.chaser.animations.add('run', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,34,35,36], 33, true);
	    this.chaser.animations.add('dash', [37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58], 33, true);
	    this.chaser.animations.add('doblejump', [59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113], 122, true);
	    this.chaser.animations.add('jump', [114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135], 21, true);
	    this.chaser.animations.add('idle', [136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178], 42, true);

	    this.chaser.animations.play('idle');

	    this.escapist = this.game.add.sprite(1000, this.game.height - 300, 'escapist');
	    this.game.physics.enable(this.escapist, Phaser.Physics.ARCADE);
	    this.escapist.body.collideWorldBounds = true;
	    this.escapist.body.maxVelocity.setTo(this.velocidadmaxima, this.velocidadmaxima * 10);
	    this.escapist.body.drag.setTo(this.frenada, 0);
	    game.physics.arcade.gravity.y = this.gravedad;

	    //Cambio de Eje
	    this.chaser.anchor.setTo(0.3,0.5);
	    this.escapist.anchor.setTo(0.3,0.5);

	    //animaciones escapist
	  	this.escapist.animations.add('run', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,34,35,36], 33, true);
	    this.escapist.animations.add('dash', [37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58], 33, true);
	    this.escapist.animations.add('doblejump', [59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113], 122, true);
	    this.escapist.animations.add('jump', [114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135], 21, true);
	    this.escapist.animations.add('idle', [136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157], 21, true);

	    this.escapist.animations.play('idle');

	    //crear botones
	    this.botonpinguino = this.game.add.sprite(1040, 300, 'bebuitre');
	    this.botonestalactita = this.game.add.sprite(1040, 330, 'bevaquero');
	    this.botonbola = this.game.add.sprite(1040, 360, 'beTW');

	    //variable para comprobar el salto
	    this.jumping = false;
	    this.jumping1 = false;

	    //variable para las trampas
	    this.activatedg = false;
	    this.activatedb = false;
	    this.activatedc = false;
	    this.activatedgp = false;

	    // suelo
	    this.crearmundo();	 

	  // Create a custom timer
        this.timer = this.game.time.create();
        
        // Create a delayed event 1m and 30s from now
        this.timerEvent = this.timer.add(	Phaser.Timer.SECOND * 30, this.endTimer, this);
        
        // Start the timer
        this.timer.start();
	    //control de las teclas, para evitar los usos por defecto, que pueden dar problemas
	    this.game.input.keyboard.addKeyCapture([
	        Phaser.Keyboard.LEFT,
	        Phaser.Keyboard.RIGHT,
	        Phaser.Keyboard.UP,
	        Phaser.Keyboard.DOWN,
	        Phaser.Keyboard.A,
	        Phaser.Keyboard.D,
	        Phaser.Keyboard.W,
	        Phaser.Keyboard.S,
	        Phaser.Keyboard.I,
	        Phaser.Keyboard.O,
	        Phaser.Keyboard.P,
	        Phaser.Keyboard.SPACEBAR,
	        Phaser.Keyboard.SHIFT,
	        Phaser.Keyboard.MINUS
	    ]);
	};

	playdesiertoState.prototype.update = function() {
	    var onTheGround = game.physics.arcade.collide(this.chaser, this.ground);
	    var onTheLedge = game.physics.arcade.collide(this.chaser, this.ice);
	    var onTheLedge2 = game.physics.arcade.collide(this.chaser, this.plataforma1);
	    var onTheLedge4 = game.physics.arcade.collide(this.chaser, this.plataforma2);
	    var hitWTrap = game.physics.arcade.collide(this.chaser, this.itrap);
	    game.physics.arcade.collide(this.chaser, this.bola);
	    game.physics.arcade.collide(this.chaser, this.p1);
	    game.physics.arcade.collide(this.chaser, this.p2);
	    game.physics.arcade.collide(this.chaser, this.p3);
	    game.physics.arcade.collide(this.chaser, this.cactus);
	    game.physics.arcade.collide(this.chaser, this.b1);
	    var hitITrap = game.physics.arcade.collide(this.chaser, this.itrap);
	    var onTheGround1 = game.physics.arcade.collide(this.escapist, this.ground);
	    var onTheLedge1 = game.physics.arcade.collide(this.escapist, this.ice);
	    var onTheLedge3 = game.physics.arcade.collide(this.escapist,	 this.plataforma1);
	    var onTheLedge5 = game.physics.arcade.collide(this.escapist, this.plataforma2);
	    game.physics.arcade.collide(this.escapist, this.wtrap);
	    game.physics.arcade.collide(this.escapist, this.itrap);
	    this.catched = game.physics.arcade.collide(this.escapist, this.chaser);
	    if(this.timer.running){
	    if(!this.catched){
	     if(this.chaser.body.position.y > this.game.height - 64){
	    	this.chaser.body.position.x = 60;
	    	this.chaser.body.position.y = this.game.height - 300;
	    }
	    if(this.escapist.body.position.y > this.game.height - 64){
	    	this.escapist.body.position.x = 60;
	    	this.escapist.body.position.y = this.game.height - 300;
	    }

	    if (this.AInputIsActive()) {
	    	this.chaser.scale.setTo(-1, 1);
	    	if(onTheGround|| onTheLedge || onTheLedge2 || onTheLedge4){
	    		this.chaser.animations.play('run');
	    	}
	        	this.chaser.body.acceleration.x = -this.aceleracion;

	    } else if (this.DInputIsActive()) {
	    	this.chaser.scale.setTo(1, 1);
	    	if(onTheGround || onTheLedge || onTheLedge2 || onTheLedge4){
	    		this.chaser.animations.play('run');
	    	}
	        	this.chaser.body.acceleration.x = this.aceleracion;
	    	
	    	
	    } else {
	    	this.chaser.animations.play('idle');
	        this.chaser.body.acceleration.x = 0;
	    }

	    if (this.leftInputIsActive()) {
	    	if(onTheGround1 || onTheLedge1 || onTheLedge3 ||onTheLedge5){
	    		this.escapist.scale.setTo(-1,1);
	    		this.escapist.animations.play('run');
	    	}
	        	this.escapist.body.acceleration.x = -this.aceleracion;
	    	
	    } else if (this.rightInputIsActive()) {
	    	if(onTheGround1 || onTheLedge1 || onTheLedge3 || onTheLedge5){
	    		this.escapist.scale.setTo(1,1);
	    		this.escapist.animations.play('run');
	    	}
	    		this.escapist.body.acceleration.x = this.aceleracion;
	           	
	    } else {
	    	this.escapist.animations.play('idle');
	        this.escapist.body.acceleration.x = 0;
	    }
	    //control del doble salto
	     if (onTheGround || onTheLedge || onTheLedge2 || onTheLedge4) {
	    	this.jumps = 2;
	        this.jumping = false;     
	    }
	    if (this.jumps > 0 && this.WInputIsActive(5)) {
	    	this.chaser.animations.play('doblejump');
	    		this.chaser.body.velocity.y = this.salto;
	        	this.jumping = true;        
	    }
	    if (this.jumping && this.WInputReleased()) {
	        this.jumps--;
	        this.jumping = false;
	    }
	    
	    if (onTheGround1 || onTheLedge1 || onTheLedge3 || onTheLedge5) {
	    	this.jumps1 = 2;
	        this.jumping1 = false;	       
	    }
	    if (this.jumps1 > 0 && this.upInputIsActive(5)) {
	    		this.escapist.animations.play('doblejump');
	    		this.escapist.body.velocity.y = this.salto;
	        	this.jumping1 = true;    
	    }
	    if (this.jumping1 && this.upInputReleased()) {
	        this.jumps1--;
	        this.jumping1 = false;
	    }
	    if (this.spaceInputIsActive() && !this.activatedg) {
	    		this.activatedg = true;
	    		this.sandtrap();
	    }
	    if (this.QInputIsActive() && !this.activatedb){
	    		this.activatedb = true;	    		
		    	this.balltrap();	
	    }
	    if (this.EInputIsActive() && !this.activatedc){
	    		this.activatedc = true;
	    		this.strap();
	    }
	    if (this.RInputIsActive() && !this.activatedgp){
	    		this.activatedgp = true;
		    	this.ptrap();
	    }
	    }else{	
			this.game.add.sprite(0,0,"catched");
	    	game.time.events.add(Phaser.Timer.SECOND * 2,this.cambio,this);
	}
	}
	};

	//controles con las flechas
	playdesiertoState.prototype.leftInputIsActive = function() {
	    var isActive = false;
	    isActive = this.input.keyboard.isDown(Phaser.Keyboard.LEFT);
	    isActive |= (this.game.input.activePointer.isDown &&
	        this.game.input.activePointer.x < this.game.width/4);
	    return isActive;
	};
	playdesiertoState.prototype.rightInputIsActive = function() {
	    var isActive = false;
	    isActive = this.input.keyboard.isDown(Phaser.Keyboard.RIGHT);
	    isActive |= (this.game.input.activePointer.isDown &&
	        this.game.input.activePointer.x > this.game.width/2 + this.game.width/4);
	    return isActive;
	};
	playdesiertoState.prototype.upInputIsActive = function(duration) {
	    var isActive = false;
	    isActive = this.input.keyboard.downDuration(Phaser.Keyboard.UP, duration);
	    isActive |= (this.game.input.activePointer.justPressed(duration + 1000/60) &&
	        this.game.input.activePointer.x > this.game.width/4 &&
	        this.game.input.activePointer.x < this.game.width/2 + this.game.width/4);
	    return isActive;
	};
	playdesiertoState.prototype.upInputReleased = function() {
	    var released = false;
	    released = this.input.keyboard.upDuration(Phaser.Keyboard.UP);
	    released |= this.game.input.activePointer.justReleased();
	    return released;
	};
	//control con WASD
	playdesiertoState.prototype.AInputIsActive = function() {
	    var isActive = false;
	    isActive = this.input.keyboard.isDown(Phaser.Keyboard.A);
	    isActive |= (this.game.input.activePointer.isDown &&
	        this.game.input.activePointer.x < this.game.width/4);
	    return isActive;
	};
	playdesiertoState.prototype.DInputIsActive = function() {
	    var isActive = false;
	    isActive = this.input.keyboard.isDown(Phaser.Keyboard.D);
	    isActive |= (this.game.input.activePointer.isDown &&
	        this.game.input.activePointer.x > this.game.width/2 + this.game.width/4);
	    return isActive;
	};
	playdesiertoState.prototype.WInputIsActive = function(duration) {
	    var isActive = false;
	    isActive = this.input.keyboard.downDuration(Phaser.Keyboard.W, duration);
	    isActive |= (this.game.input.activePointer.justPressed(duration + 1000/60) &&
	        this.game.input.activePointer.x > this.game.width/4 &&
	        this.game.input.activePointer.x < this.game.width/2 + this.game.width/4);
	    return isActive;
	};
	playdesiertoState.prototype.WInputReleased = function() {
	    var released = false;
	    released = this.input.keyboard.upDuration(Phaser.Keyboard.W);
	    released |= this.game.input.activePointer.justReleased();
	    return released;
	};
	//control de las trampas
	playdesiertoState.prototype.spaceInputIsActive = function() {
	    var isActive = false;
	    isActive = this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR);
	    isActive |= (this.game.input.activePointer.isDown &&
	        this.game.input.activePointer.x > this.game.width/2 + this.game.width/4);
	    return isActive;
	};
	playdesiertoState.prototype.QInputIsActive = function() {
	    var isActive = false;
	    isActive = this.input.keyboard.isDown(Phaser.Keyboard.I);
	    isActive |= (this.game.input.activePointer.isDown &&
	        this.game.input.activePointer.x > this.game.width/2 + this.game.width/4);
	    return isActive;
	};
	playdesiertoState.prototype.EInputIsActive = function() {
	    var isActive = false;
	    isActive = this.input.keyboard.isDown(Phaser.Keyboard.O);
	    isActive |= (this.game.input.activePointer.isDown &&
	        this.game.input.activePointer.x > this.game.width/2 + this.game.width/4);
	    return isActive;
	};
	playdesiertoState.prototype.RInputIsActive = function() {
	    var isActive = false;
	    isActive = this.input.keyboard.isDown(Phaser.Keyboard.P);
	    isActive |= (this.game.input.activePointer.isDown &&
	        this.game.input.activePointer.x > this.game.width/2 + this.game.width/4);
	    return isActive;
	};
	playdesiertoState.prototype.ControlInputIsActive = function() {
	    var isActive = false;
	    isActive = this.input.keyboard.isDown(Phaser.Keyboard.MINUS);
	    isActive |= (this.game.input.activePointer.isDown &&
	        this.game.input.activePointer.x > this.game.width/2 + this.game.width/4);
	    return isActive;
	};
	playdesiertoState.prototype.ShiftInputIsActive = function() {
	    var isActive = false;
	    isActive = this.input.keyboard.isDown(Phaser.Keyboard.SHIFT);
	    isActive |= (this.game.input.activePointer.isDown &&
	        this.game.input.activePointer.x > this.game.width/2 + this.game.width/4);
	    return isActive;
	};
	//metodos de las trampas
	playdesiertoState.prototype.sandtrap = function(){
		this.plataforma1.body.allowGravity = true;
		this.plataforma2.body.allowGravity = true;
		game.time.events.add(Phaser.Timer.SECOND * 4, this.releases, this);
	};	
	playdesiertoState.prototype.releases = function(){
		this.plataforma1.destroy();
		this.plataforma2.destroy();
		this.plataforma1 = this.game.add.sprite(460, this.game.height - 520, 'plataforma');
	    this.game.physics.enable(this.plataforma1, Phaser.Physics.ARCADE);
	    this.plataforma1.body.immovable = true;
	    this.plataforma1.body.allowGravity = false;

		this.plataforma2 = this.game.add.sprite(460, this.game.height - 350, 'plataforma');
	    this.game.physics.enable(this.plataforma2, Phaser.Physics.ARCADE);
	    this.plataforma2.body.immovable = true;
	    this.plataforma2.body.allowGravity = false;
		this.activatedg = false;
	};
	playdesiertoState.prototype.balltrap = function(){	
		this.bola.scale.setTo(0.5,0.5);		
	    this.bola.animations.play('rodar', 12, true);
		this.bola.body.velocity.x = -200;
		this.botonbola = this.game.add.sprite(1040, 360, 'baTW');
		game.time.events.add(Phaser.Timer.SECOND * 7, this.ballrelease, this);
	};
	playdesiertoState.prototype.ballrelease = function(){
		this.bola.destroy();
		this.bola = this.game.add.sprite(1100, 380, 'tweed');
	    var rodar = this.bola.animations.add('rodar');
	    this.game.physics.enable(this.bola, Phaser.Physics.ARCADE);
	    this.bola.body.immovable = true;
	    this.bola.body.allowGravity = false;	
	    this.botonbola = this.game.add.sprite(1040, 360, 'beTW');
	    this.activatedb = false;
	};	
	playdesiertoState.prototype.strap = function(){
		this.b1.body.velocity.x = (-this.b1.body.position.x + this.chaser.body.position.x)*2;
		this.b1.body.velocity.y = (-this.b1.body.position.y + this.chaser.body.position.y)*2;
	    this.botonestalactita = this.game.add.sprite(1040, 330, 'bavaquero');
	    game.time.events.add(Phaser.Timer.SECOND * 5, this.srelease, this);
	};
	playdesiertoState.prototype.srelease = function(){
		this.b1.destroy();
		this.b1 = this.game.add.sprite(-50, this.game.height-220, 'bala');
	    this.game.physics.enable(this.b1, Phaser.Physics.ARCADE);
	    this.b1.body.immovable = true;
	    this.b1.body.allowGravity = false;
	   
	    this.botonestalactita = this.game.add.sprite(1040, 330, 'bevaquero');
	    this.activatedc = false;
	};
	playdesiertoState.prototype.ptrap = function(){
		this.p1.scale.setTo(0.5,0.5);	
		this.p2.scale.setTo(0.5,0.5);	
		this.p3.scale.setTo(0.5,0.5);	
		this.p1.animations.play('rodar', 4, true);
		this.p2.animations.play('rodar', 4, true);
		this.p3.animations.play('rodar', 4, true);
		this.p1.body.velocity.x = 300;
		this.p2.body.velocity.x = 300;
		this.p3.body.velocity.x = 300;
		this.botonpinguino = this.game.add.sprite(1040, 300, 'babuitre');
		game.time.events.add(Phaser.Timer.SECOND * 7, this.prelease, this);
	};
	playdesiertoState.prototype.prelease = function(){
		this.p1.destroy();
		this.p2.destroy();
		this.p3.destroy();
		this.p1 = this.game.add.sprite(-200,48, 'buitre');
	    var rodar = this.p1.animations.add('rodar');
	    this.game.physics.enable(this.p1, Phaser.Physics.ARCADE);
	    this.p1.body.immovable = true;
	    this.p1.body.allowGravity = false;
	    this.p2 = this.game.add.sprite(-200,300, 'buitre');
	    var rodar = this.p2.animations.add('rodar');
	    this.game.physics.enable(this.p2, Phaser.Physics.ARCADE);
	    this.p2.body.immovable = true;
	    this.p2.body.allowGravity = false;
	    this.p3 = this.game.add.sprite(-200,200, 'buitre');
	    var rodar = this.p3.animations.add('rodar');
	    this.game.physics.enable(this.p3, Phaser.Physics.ARCADE);
	    this.p3.body.immovable = true;
	    this.p3.body.allowGravity = false;	
	    this.botonpinguino = this.game.add.sprite(1040, 300, 'bebuitre');
	    this.activatedgp = false;
	};
	playdesiertoState.prototype.crearmundo = function(){
		this.ground = this.game.add.group();
		this.cactus = this.game.add.group();
	    this.ice = this.game.add.group();
	    this.ice2 = this.game.add.group();


	    var block;
	    for(var i = 0; i <34; i++){
	    	block = this.game.add.sprite(32*i, this.game.height - 32, 'ground');
	    	this.game.physics.enable(block, Phaser.Physics.ARCADE);
		    block.body.immovable = true;
		    block.body.allowGravity = false;
		    this.ground.add(block);
		    block = this.game.add.sprite(i*32, this.game.height - 64, 'ground');
	    	this.game.physics.enable(block, Phaser.Physics.ARCADE);
		    block.body.immovable = true;
		    block.body.allowGravity = false;
		    this.ground.add(block);
		    block = this.game.add.sprite(i*32, this.game.height - 96, 'ground');
	    	this.game.physics.enable(block, Phaser.Physics.ARCADE);
		    block.body.immovable = true;
		    block.body.allowGravity = false;
		    this.ground.add(block);

		    block = this.game.add.sprite(i*32, this.game.height - 128, 'arena');
		    this.game.physics.enable(block, Phaser.Physics.ARCADE);
			block.body.immovable = true;
			block.body.allowGravity = false;
			this.ground.add(block);	
		    
	    }
	    //crear cactus
	    block= this.game.add.sprite(400, 381,'cactus');
		this.game.physics.enable(block, Phaser.Physics.ARCADE);
	    block.body.immovable = true;
	    block.body.allowGravity = false;
	    block.scale.setTo(0.40,0.40);
	    this.cactus.add(block);

	    block= this.game.add.sprite(635, 381,'cactus');
		this.game.physics.enable(block, Phaser.Physics.ARCADE);
	    block.body.immovable = true;
	    block.body.allowGravity = false;
	    block.scale.setTo(0.40,0.40);
	    this.cactus.add(block);
	    
	    //trampa arena

	    block = this.game.add.sprite(120, this.game.height - 250, 'ledge');
	    this.game.physics.enable(block, Phaser.Physics.ARCADE);
	    block.body.immovable = true;
	    block.body.allowGravity = false;
	    this.ice.add(block);
	    block = this.game.add.sprite(152, this.game.height - 250, 'ledge');
	    this.game.physics.enable(block, Phaser.Physics.ARCADE);
	    block.body.immovable = true;
	    block.body.allowGravity = false;
	    this.ice.add(block);
	    block = this.game.add.sprite(184, this.game.height - 250, 'ledge');
	    this.game.physics.enable(block, Phaser.Physics.ARCADE);
	    block.body.immovable = true;
	    block.body.allowGravity = false;
	    this.ice.add(block);
	    block = this.game.add.sprite(216, this.game.height - 250, 'ledge');
	    this.game.physics.enable(block, Phaser.Physics.ARCADE);
	    block.body.immovable = true;
	    block.body.allowGravity = false;
	    this.ice.add(block);
	    block = this.game.add.sprite(248, this.game.height - 250, 'ledge');
	    this.game.physics.enable(block, Phaser.Physics.ARCADE);
	    block.body.immovable = true;
	    block.body.allowGravity = false;
	    this.ice.add(block);
	    block = this.game.add.sprite(280, this.game.height - 250, 'ledge');
	    this.game.physics.enable(block, Phaser.Physics.ARCADE);
	    block.body.immovable = true;
	    block.body.allowGravity = false;
	    this.ice.add(block);

	    block = this.game.add.sprite(700+64, this.game.height - 250, 'ledge');
	    this.game.physics.enable(block, Phaser.Physics.ARCADE);
	    block.body.immovable = true;
	    block.body.allowGravity = false;
	    this.ice.add(block);
	    block = this.game.add.sprite(732+64, this.game.height - 250, 'ledge');
	    this.game.physics.enable(block, Phaser.Physics.ARCADE);
	    block.body.immovable = true;
	    block.body.allowGravity = false;
	    this.ice.add(block);
	    block = this.game.add.sprite(764+64, this.game.height - 250, 'ledge');
	    this.game.physics.enable(block, Phaser.Physics.ARCADE);
	    block.body.immovable = true;
	    block.body.allowGravity = false;
	    this.ice.add(block);
	    block = this.game.add.sprite(796+64, this.game.height - 250, 'ledge');
	    this.game.physics.enable(block, Phaser.Physics.ARCADE);
	    block.body.immovable = true;
	    block.body.allowGravity = false;
	    this.ice.add(block);
	    block = this.game.add.sprite(828+64, this.game.height - 250, 'ledge');
	    this.game.physics.enable(block, Phaser.Physics.ARCADE);
	    block.body.immovable = true;
	    block.body.allowGravity = false;
	    this.ice.add(block);
	    block = this.game.add.sprite(860+64, this.game.height - 250, 'ledge');
	    this.game.physics.enable(block, Phaser.Physics.ARCADE);
	    block.body.immovable = true;
	    block.body.allowGravity = false;
	    this.ice.add(block);



	    block = this.game.add.sprite(760+64, this.game.height - 450, 'ledge');
	    this.game.physics.enable(block, Phaser.Physics.ARCADE);
	    block.body.immovable = true;
	    block.body.allowGravity = false;
	    this.ice.add(block);
	    block = this.game.add.sprite(728+64, this.game.height - 450, 'ledge');
	    this.game.physics.enable(block, Phaser.Physics.ARCADE);
	    block.body.immovable = true;
	    block.body.allowGravity = false;
	    this.ice.add(block);
	    block = this.game.add.sprite(792+64, this.game.height - 450, 'ledge');
	    this.game.physics.enable(block, Phaser.Physics.ARCADE);
	    block.body.immovable = true;
	    block.body.allowGravity = false;
	    this.ice.add(block);
	    block = this.game.add.sprite(824+64, this.game.height - 450, 'ledge');
	    this.game.physics.enable(block, Phaser.Physics.ARCADE);
	    block.body.immovable = true;
	    block.body.allowGravity = false;
	    this.ice.add(block);
	    block = this.game.add.sprite(856+64, this.game.height - 450, 'ledge');
	    this.game.physics.enable(block, Phaser.Physics.ARCADE);
	    block.body.immovable = true;
	    block.body.allowGravity = false;
	    this.ice.add(block);

	    block = this.game.add.sprite(180, this.game.height - 450, 'ledge');
	    this.game.physics.enable(block, Phaser.Physics.ARCADE);
	    block.body.immovable = true;
	    block.body.allowGravity = false;
	    this.ice.add(block);
	    block = this.game.add.sprite(212, this.game.height - 450, 'ledge');
	    this.game.physics.enable(block, Phaser.Physics.ARCADE);
	    block.body.immovable = true;
	    block.body.allowGravity = false;
	    this.ice.add(block);
	    block = this.game.add.sprite(244, this.game.height - 450, 'ledge');
	    this.game.physics.enable(block, Phaser.Physics.ARCADE);
	    block.body.immovable = true;
	    block.body.allowGravity = false;
	    this.ice.add(block);
	    block = this.game.add.sprite(148, this.game.height - 450, 'ledge');
	    this.game.physics.enable(block, Phaser.Physics.ARCADE);
	    block.body.immovable = true;
	    block.body.allowGravity = false;
	    this.ice.add(block);
	    block = this.game.add.sprite(116, this.game.height - 450, 'ledge');
	    this.game.physics.enable(block, Phaser.Physics.ARCADE);
	    block.body.immovable = true;
	    block.body.allowGravity = false;
	    this.ice.add(block);

	    
	};
	playdesiertoState.prototype.render = function () {
        if (this.timer.running) {
            this.game.debug.text(this.formatTime(Math.round((this.timerEvent.delay - this.timer.ms) / 1000)), this.game.world.centerX-50, 590, "#ffffff",'50px Arial');
        }
        this.game.debug.text("Puntuacion Chaser: "+this.pchaser, 100, 590, "#ffffff",'20px Arial');
        this.game.debug.text("Puntuacion Escapist: "+this.pescapist, 750, 590, "#ffffff",'20px Arial');
    };
    playdesiertoState.prototype.endTimer = function() {
    	this.pescapist++;
	    this.game.add.sprite(0,0,"libre");
	    game.time.events.add(Phaser.Timer.SECOND * 2,this.cambio,this);
    };
    playdesiertoState.prototype.cambio = function(){
    	if(this.catched){
    		this.pchaser = this.game.state.states["playcastillo"].pchaser+1;
    	}
    	game.state.start('loadcarga_oceano');
    };
    playdesiertoState.prototype.formatTime = function(s) {
        var minutes = "0" + Math.floor(s / 60);
        var seconds = "0" + (s - minutes * 60);
        return minutes.substr(-2) + ":" + seconds.substr(-2);   
    };
    playdesiertoState.prototype.init = function(){
    	this.pchaser = this.game.state.states["playcastillo"].pchaser;
    	this.pescapist = this.game.state.states["playcastillo"].pescapist;
    }
}