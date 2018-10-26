var bootState = function(Just_Run){
	bootState.prototype.preload = function(){
		game.load.spritesheet('carga', 'assets/sprites/pantalla de carga/CargaBien2.png', 350, 350, 26);
		game.load.image('tutorial', 'assets/fondos/Tutorial.png');
		game.load.image('catched', 'assets/sprites/Animacion Entre Niveles/Cazado.png');
		game.load.image('libre', 'assets/sprites/Animacion Entre Niveles/Libre.png');
	},
	bootState.prototype.create = function(){
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.stage.backgroundColor = 0xffc966;
		game.state.start('loadcarga_menu');
	}
}