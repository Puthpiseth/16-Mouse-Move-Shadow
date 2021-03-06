(() => {
    const hero = document.querySelector('.hero'),
      text = hero.querySelector('h1'),
      walk = 300;

    const shadow = (e) => {
      // Get the width & height properties of the 'hero' div
      const { offsetWidth: width, offsetHeight: height } = hero;
      // Get the distance of the mouse from the event's target node in X and Y
      // coordinates
      let { offsetX: x, offsetY: y } = e;

      // If the element that the mouse is hovering over is different than the event's target element...
      if (e.currentTarget !== e.target) {
        // Increment the x & y coordinates by the distance between the element and the event's target
        // element on the x & y axis.
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
      }

      // how far should the text shadow go
      const xWalk = Math.round((x / width * walk) - (walk / 2)),
        yWalk = Math.round((y / height * walk) - (walk / 2));

      // styling text shadow
      text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
      ${-xWalk}px ${yWalk}px 0 rgba(0,255,255,0.7),
      ${yWalk}px ${-xWalk}px 0 rgba(0,255,0,0.7),
      ${-yWalk}px ${-xWalk}px 0 rgba(0,0,255,0.7)
      `;

    }
    // When the mouse is moved, we gonna run the shadow function
    hero.addEventListener('mousemove', shadow);
  })();