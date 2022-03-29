{/* ---------- Details ----------
    Title: Interactive Narrative Group Project VR Display
    Purpose: Interactive Digital 3D object investigation
    Code Version: 1.1
    Availability: Sheridan Servers
    Creator: Minos Labs*/}

{// ---------- Import Statements ----------
    //
}

{// ---------- Variable Declaration ----------
    var displayObject;
    var displayObjectTexture;

    var verticalRotation;
    var horizontalRotation;
}

// ---------- Define Actions and dependancies ----------
    preload = () => {
        displayObject = loadModel('assets/david.obj', true);// replace path with new object's path
        //texture = loadImage();// haven't worked with this before so it might need some tweaking
        //displayObjectTexture = loadImage('img/asset4.png');
    }

    setup = () => {
        createCanvas(windowWidth, windowHeight, WEBGL);
        // frameRate(60); pixelDensity(2); // this can provide a sharper image but is very demanding

        verticalRotation = windowHeight / 2;
        horizontalRotation = windowWidth / 2;
        mouseX = windowWidth / 2;
        mouseY = windowHeight / 2;
    }

{// ---------- Define Main Sequence(s) ----------
    //
}

{// ---------- Define Main Loop(s) ----------
    draw = () => {
        clear();
        // background(255, 255, 255);
        noStroke(); strokeWeight(2); fill(255, 0, 0, 0);
        // Adjust materials for visual effect if necessary
        directionalLight(255, 255, 255, 10, 20, -50);
        ambientLight(50);
        ambientMaterial(255, 255, 255);

        // Add or remove "+PI" to end of equation below depending on if model imports upside down
        horizontalRotation = map(mouseX, 0, windowWidth, PI, -PI) + PI;
        verticalRotation = map(mouseY, 0 , windowHeight, PI, -PI) + PI;

        rotateX(verticalRotation);
        rotateY(horizontalRotation);
        // scale(2);// Adjust scale if necessary
        if(windowWidth > windowHeight){
            scale(windowHeight * 0.003);
        } else {
            scale(windowWidth * 0.003);
        }
        

        model(displayObject);
    }
}

{// ---------- Define Tertiary Processes ----------
    //
}

{// ---------- Active Testing ----------
    //
    var mode;
}

{// ---------- Backup Testing ----------
    //
}

{// ---------- Upon entering page ----------
    //https://www.w3schools.com/jsref/event_onload.asp
}

{// ---------- While Running Page ----------
    //https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    function windowResized(){
        resizeCanvas(windowWidth, windowHeight);
    }
}

{// ---------- Upon Exiting Page ----------
    //https://www.w3schools.com/jsref/event_onunload.asp
}