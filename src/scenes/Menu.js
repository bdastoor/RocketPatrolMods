class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/start.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/bzzbzz.wav');        
        this.load.audio('caw', './assets/noiseBird.wav')
        this.load.audio('background', './assets/background.mp3')
        this.load.image('rocket', './assets/bee.png');  
        this.load.image('beehive', './assets/menu.png');

    }

    create() {
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'beehive').setOrigin(0, 0);

        this.p1Rocket = new Rocket(this, game.config.width/2 - 8, 100, 'rocket').setScale(0.5, 0.5).setOrigin(0, 0);

        // menu display
        let menuConfig = {
            font: "bold 30px Arial",
            backgroundColor: '#fff080',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // show menu text
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        let textSpacer = 64;

        this.add.text(centerX, centerY- textSpacer, 'BEE PATROL', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY, 'Use ←→ arrows to move & (F) to Fire', menuConfig).setOrigin(0.5);
       // menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(centerX, centerY + textSpacer, 'Press ← for Easy', menuConfig).setOrigin(0.5);  
        this.add.text(centerX, centerY + textSpacer + 50, 'or', menuConfig).setOrigin(0.5);  
        this.add.text(centerX, centerY + textSpacer + 100, '→ for Hard', menuConfig).setOrigin(0.5);  

        
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        this.sound.stopAll(); 
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 20000    
            }
            this.sound.play('sfx_select');
            
            this.sound.play('background'); 
            this.scene.start("playScene");    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45000    
            }
            this.sound.play('sfx_select');
            this.sound.play('background'); 
            this.scene.start("playScene");    
        }
    }
}