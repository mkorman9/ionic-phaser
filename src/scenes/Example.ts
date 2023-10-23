import Phaser from 'phaser';

export class Example extends Phaser.Scene {
  preload() {
    this.load.image('starfield', '/assets/starfield.jpg');
    this.load.image('logo', '/assets/phaser3-logo.png');
    this.load.image('red', '/assets/red.png');
  }

  create() {
    this.add.tileSprite(0, 0, 1080, 1920, 'starfield');

    const particles = this.add.particles(0, 0, 'red', {
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD'
    });

    const logo = this.physics.add.image(100, 100, 'logo');
    logo.setScale(0.5, 0.5);
    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    particles.startFollow(logo);
  }
}
