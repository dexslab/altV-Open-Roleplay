import * as alt from 'alt';
import { WebView } from 'client/utility/webview.mjs';

alt.log(`Loaded: panels->atm.mjs`);

let webview;
let updateTryCount = 0;

// Show the Dialogue for the ATM Menu.
export function showDialogue() {
    webview = new WebView('atm');
    webview.on('withdraw', withdrawBalance);
    webview.on('deposit', depositBalance);
}

export function closeDialogue() {
    // This won't work because this is undefined inside the class :/
    // Need to figure out how to store the class reference globally so you can re-access it to call close
    webview.close(webview);
}

// Update the cash value on the Webview.
export function updateCash(value) {
    if (webview.view === undefined) return;

    if (webview.ready) {
        webview.emit(webview, 'setCash', value);
        updateTryCount = 0;
    } else {
        if (updateTryCount <= 25) {
            alt.log(`Update Try Count: ${updateTryCount}`);

            alt.setTimeout(() => {
                updateCash(value);
            }, 100);
            updateTryCount++;
        } else {
            updateTryCount = 0;
        }
    }
}

// Show the bank value for the atm menu.
export function updateBank(value) {
    if (webview.view === undefined) return;

    if (webview.ready) {
        webview.emit(webview, 'setBank', value);
        updateTryCount = 0;
    } else {
        if (updateTryCount <= 25) {
            alt.log(`Update Try Count: ${updateTryCount}`);
            alt.setTimeout(() => {
                updateBank(value);
            }, 100);
            updateTryCount++;
        } else {
            updateTryCount = 0;
        }
    }
}

// Called when the user is withdrawing balance from the Bank.
function withdrawBalance(value) {
    alt.emitServer('atm:Withdraw', value);
}

// Called when the user is depositing cash into the Bank.
function depositBalance(value) {
    alt.emitServer('atm:Deposit', value);
}

// Show a success message on the ATM.
export function showSuccess(msg) {
    if (webview.view === undefined) return;

    alt.log(msg);

    webview.emit(webview, 'showSuccess', msg);
}
