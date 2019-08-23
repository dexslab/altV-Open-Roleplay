import * as alt from 'alt';
import * as native from 'natives';
import { WebView } from 'client/utility/webview.mjs';

export const Interiors = [
  196609, // Bennys
  234753,
  164353,
  153601,
  201729,
  179457,
];

let webview = null;
let interactionShown = false;
let vehicleChanges = {};

alt.on('interior:entered', id => {
  const vehicle = alt.Player.local.vehicle;
  if (Interiors.includes(id)) {
    if (vehicle) {
      if (alt.Player.local.scriptID === native.getPedInVehicleSeat(vehicle.scriptID, -1)) {
        alt.log(`Entered Garage: ${id}`);

        alt.on('update', interactionKey);
        interactionShown = true;

        alt.on('keydown', keyhandler);
      }
    }
  }
});

alt.on('interior:left', id => {
  if (Interiors.includes(id)) {
    const vehicle = alt.Player.local.vehicle;
    if (vehicle) {
      if (alt.Player.local.scriptID === native.getPedInVehicleSeat(vehicle.scriptID, -1)) {
        alt.log(`Left Garage: ${id}`);

        if (interactionShown) {
          alt.off('update', interactionKey);
          interactionShown = false;
        }
        
        alt.off('keydown', keyhandler);
      }
    }
  }
});


function interactionKey() {
  native.beginTextCommandDisplayHelp('STRING');
  native.addTextComponentSubstringPlayerName(
      `Press ~INPUT_CONTEXT~ for vehicle customization`
  );
  native.endTextCommandDisplayHelp(0, false, true, -1);

  if (native.isControlJustPressed(0, 38)) {
      alt.emitServer('interaction:Exec');
  }
}

function keyhandler(key) {
  if (key === 69) {
    const vehicle = alt.Player.local.vehicle;
    if (vehicle) {
      if (alt.Player.local.scriptID === native.getPedInVehicleSeat(vehicle.scriptID, -1)) {
        alt.off('update', interactionKey);
        interactionShown = false;
  
        webview = new WebView('vehicleCustomization');
        webview.on('fetchModList', buildModList);
        webview.on('updateLocalVehicle', updateLocalVehicle);
        webview.on('saveChanges', saveVehicle);
      }
    } else {
      alt.off('keydown', keyhandler);
    }
  }
}


function buildModList() {
  const vehID = alt.Player.local.vehicle.scriptID;
  native.setVehicleModKit(vehID, 0);
  
  for (let i = 0; i <= 49; i++) {
    const mod = {
      index: i,
      numMods: 0,
      modLabels: [],
    };
    mod.numMods = native.getNumVehicleMods(vehID, i);
    mod.slotName = native.getModSlotName(vehID, i);


    if (mod.numMods >= 1) {
      for (let modIndex = 0; modIndex < mod.numMods; modIndex++) {
        const displayName = native.getLabelText(native.getModTextLabel(vehID, i, modIndex));
        if (displayName !== 'NULL') {
          mod.modLabels.push({
            displayName,
            index: modIndex,
          });
        }
      }

      if (mod.modLabels.length > 0) {
        webview.emit(webview, 'parseMod', JSON.stringify(mod));
      }
    }
  }
}

function updateLocalVehicle({ modType, modIndex }) {
  const veh = alt.Player.local.vehicle.scriptID;

  native.setVehicleModKit(veh, 0);
  native.setVehicleMod(veh, modType, modIndex, false);

  vehicleChanges[modType] = modIndex;
}

function saveVehicle() {
  // const veh = alt.Player.local.vehicle.scriptID;

  alt.log(JSON.stringify(vehicleChanges));
  
  // native.setVehicleModKit(veh, 1);
  alt.emitServer('vehicle:modify', JSON.stringify(vehicleChanges));
}