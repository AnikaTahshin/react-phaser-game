import { Scene } from "phaser";
class PreloadScene extends Scene {
    constructor() {
        super("preload");
    }
    preload() {
        this.load.image("sky", "../../../public/assets/platform.png");
    }

    create() {
        this.add.image(400, 300, "sky");
        this.input.on("pointerdown", () => this.scene.start("game"));
    }
}

export default PreloadScene;
