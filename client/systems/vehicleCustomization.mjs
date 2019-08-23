import * as alt from 'alt';
import * as native from 'natives';

export const Interiors = [
  196609, // Bennys
  234753,
  164353,
  153601,
  201729,
  179457,
];

let inGarage = false;

alt.on('interior:entered', id => {
  if (Interiors.includes(id)) {
    const vehicle = alt.Player.local.vehicle;
    if (vehicle) {
      alt.log(`Entered Garage: ${id}`);
      alt.on('update', interactionKey);
    }
  }
});

alt.on('interior:left', id => {
  if (Interiors.includes(id)) {
    const vehicle = alt.Player.local.vehicle;
    if (vehicle) {
      alt.log(`Left Garage: ${id}`);
      alt.off('update', interactionKey);
    }
  }
});


function interactionKey() {
  native.beginTextCommandDisplayHelp('STRING');
  native.addTextComponentSubstringPlayerName(
      `Press ~INPUT_CONTEXT~ for garage lulz`
  );
  native.endTextCommandDisplayHelp(0, false, true, -1);

  if (native.isControlJustPressed(0, 38)) {
      alt.emitServer('interaction:Exec');
  }
}