const {PIXI} = window;

export const background = PIXI.Sprite.from(`${process.env.PUBLIC_URL}/assets/background.png`);
background.scale.set(0.6);

export const app = new PIXI.Application({ width: 1024, height: 512 });

app.stage.addChild(background);

// Create object to store sprite sheet data
const idleData = {
	frames: {
		idle1: {
			frame: { x: 0, y:0, w:24, h:24 },
			sourceSize: { w: 24, h: 24 },
			sprxiteSourceSize: { x: 0, y: 0, w: 24, h: 24 }
		},
		idle2: {
			frame: { x: 24, y:0, w:24, h:24 },
			sourceSize: { w: 24, h: 24 },
			spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 }
		},
	},
	meta: {
		image: `${process.env.PUBLIC_URL}/assets/spritesheet.png`,
		format: 'RGBA8888',
		size: { w: 192, h: 72 },
		scale: 1
	},
	animations: {
		main: ['idle1','idle2'] 
	}
}

const walkingData = {
	frames: {
		walking11: {
			frame: { x: 0, y:24, w:24, h:24 },
			sourceSize: { w: 24, h: 24 },
			sprxiteSourceSize: { x: 0, y: 0, w: 24, h: 24 }
		},
		walking22: {
			frame: { x: 24, y:24, w:24, h:24 },
			sourceSize: { w: 24, h: 24 },
			spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 }
		},
        walking33: {
			frame: { x: 48, y:24, w:24, h:24 },
			sourceSize: { w: 24, h: 24 },
			sprxiteSourceSize: { x: 0, y: 0, w: 24, h: 24 }
		},
		walking44: {
			frame: { x: 72, y:24, w:24, h:24 },
			sourceSize: { w: 24, h: 24 },
			spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 }
		},
        walking55: {
			frame: { x: 96, y:24, w:24, h:24 },
			sourceSize: { w: 24, h: 24 },
			spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 }
		},
	},
	meta: {
		image: `${process.env.PUBLIC_URL}/assets/spritesheet.png`,
		format: 'RGBA8888',
		size: { w: 192, h: 72 },
		scale: 1
	},
	animations: {
		main: ['walking11','walking22','walking33','walking44', 'walking55'] 
	}
}

const walkingDataRight = {
	frames: {
		walking1: {
			frame: { x: 0, y:48, w:24, h:24 },
			sourceSize: { w: 24, h: 24 },
			sprxiteSourceSize: { x: 0, y: 0, w: 24, h: 24 }
		},
		walking2: {
			frame: { x: 24, y:48, w:24, h:24 },
			sourceSize: { w: 24, h: 24 },
			spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 }
		},
        walking3: {
			frame: { x: 48, y:48, w:24, h:24 },
			sourceSize: { w: 24, h: 24 },
			sprxiteSourceSize: { x: 0, y: 0, w: 24, h: 24 }
		},
		walking4: {
			frame: { x: 72, y:48, w:24, h:24 },
			sourceSize: { w: 24, h: 24 },
			spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 }
		},
        walking5: {
			frame: { x: 96, y:48, w:24, h:24 },
			sourceSize: { w: 24, h: 24 },
			spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 }
		},
	},
	meta: {
		image: `${process.env.PUBLIC_URL}/assets/spritesheet.png`,
		format: 'RGBA8888',
		size: { w: 192, h: 72 },
		scale: 1
	},
	animations: {
		main: ['walking1','walking2','walking3','walking4', 'walking5'] 
	}
}

// Create the SpriteSheet from data and image
const idleSpritesheet = new PIXI.Spritesheet(
	PIXI.BaseTexture.from(idleData.meta.image),
	idleData
);


// Create the SpriteSheet from data and image
const walkingSpritesheet = new PIXI.Spritesheet(
	PIXI.BaseTexture.from(walkingData.meta.image),
	walkingData
);

// Create the SpriteSheet from data and image
const walkingRightSpritesheet = new PIXI.Spritesheet(
	PIXI.BaseTexture.from(walkingDataRight.meta.image),
	walkingDataRight
);

const container = new PIXI.Container();
container.scale.set(5, 5)
container.position.set(550, 200)

app.stage.addChild(container)

let walkingSprite;
let walkingRightSprite;
let idleSprite;

idleSpritesheet.parse().then(() => walkingSpritesheet.parse()).then(() => walkingRightSpritesheet.parse())
    .then(() => {
    // spritesheet is ready to use!
    idleSprite = new PIXI.AnimatedSprite(idleSpritesheet.animations.main);
    walkingSprite = new PIXI.AnimatedSprite(walkingSpritesheet.animations.main);
    walkingRightSprite = new PIXI.AnimatedSprite(walkingRightSpritesheet.animations.main);

    idleSprite.play();
    idleSprite.animationSpeed = 0.05
    
    walkingSprite.play();
    walkingSprite.animationSpeed = 0.05

    walkingRightSprite.play();
    walkingRightSprite.animationSpeed = 0.05

    const initWalking = () => {
        const rand = Math.random();
    
        if (rand < 0.15) {
            walkLeft();
    
        } else if (rand > 0.15 && rand < 0.3) {
            walkRight();
        } else if (rand > 0.3 && rand < 1) {
            idle();
        }
        
        setTimeout(initWalking, 2000)
    }
    
    initWalking();
}).catch(err => console.log(err));


let direction = 1;


const update = () => {
    container.x += (direction * 0.5);
}

const clearChildren = () => {
    container.children.forEach(child => container.removeChild(child))
}

const walkRight = () => {
    clearChildren()
    container.addChild(walkingRightSprite);
    direction = 1;
}

const walkLeft = () => {
    clearChildren()
    container.addChild(walkingSprite);

    direction = -1;
}


const idle = () => {
    clearChildren()
    container.addChild(idleSprite);
    direction = 0
}
app.ticker.add(update);