//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 }    
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "d") {
          if (this.data.speedOfRotation < 0.1) {
            this.data.speedOfRotation += 0.1;
          }
        }
        if (e.key === "a") {
          if (this.data.speedOfRotation > -0.1) {
            this.data.speedOfRotation -= 0.1;
          }
        }
      });
    },
    tick: function () {
      var mapRotation = this.el.getAttribute("rotation");
  
      mapRotation.y += this.data.speedOfRotation;
  
      this.el.setAttribute("rotation", {
        x: mapRotation.x,
        y: mapRotation.y,
        z: mapRotation.z
      });
    }
  });
  // plane rotation componenet
  
  AFRAME.registerComponent('plane-rotation-reader', {
    schema: {
     speedOfRotation: { type:'number',default: 0},
     speedOfAscent: { type:'number',default: 0}
    },
  
    init: function () {
      window.addEventListener('keydown', (e) =>{
        this.data.speedOfRotation = this.el.getAttribute("rotation")
        this.data.speedOfAscent = this.el.getAttribute("position")
  
        var planeRotation = this.data.speedOfRotation;
        var planePosition = this.data.speedOfAscent;
  
       
        if (e.key === 'w'){
          if(planeRotation.z < 20){
            planeRotation.z += 0.5
            this.el.setAttribute("rotation", planeRotation)
          }
          if(planePosition.y < 2){
            planePosition.y += 0.01
            this.el.setAttribute("position", planePosition)
          }
        }
        
        if (e.key === 's'){
          if(planeRotation.z > -10){
            planeRotation.z -= 0.5
            this.el.setAttribute("rotation", planeRotation)
          }
          if(planePosition.y > -2){
            planePosition.y -= 0.01
            this.el.setAttribute("position", planePosition)
          }
        }
      })
    },
  
    update: function () {
      // Do something when component's data is updated.
    },
  
    remove: function () {
      // Do something the component or its entity is detached.
    },
  
    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    }
  });
  
  
  
  
  