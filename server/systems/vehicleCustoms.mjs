import * as alt from 'alt';

export function handleModification(player, changes) {
  const list = JSON.parse(changes);

  if (player.vehicle) {
    player.vehicle.modKit = 1;
    Object.keys(list).forEach(key => {
      player.vehicle.setMod(key, list[key] + 1);
    });
  }
}