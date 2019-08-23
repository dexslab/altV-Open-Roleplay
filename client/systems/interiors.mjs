import * as alt from 'alt';
import * as native from 'natives';

let lastShop = 0;

alt.setInterval(() => {
  const currInterior = native.getInteriorFromEntity(alt.Player.local.scriptID);

  if (currInterior === 0) {
    if (lastShop !== 0) {
      alt.emit("interior:left", lastShop);
      lastShop = 0;
    }
  }

  if (currInterior !== 0) {
    if (lastShop !== currInterior) {
      alt.emit("interior:entered", currInterior);
      lastShop = currInterior;
    }
  }
}, 500);