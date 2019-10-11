///
/// 電話のプッシュ音再現
/// http://jsdo.it/reosablo/dtmf
/// author: reosablo(http://jsdo.it/reosablo)(http://www.hatena.ne.jp/reosablo/)(https://twitter.com/reosablo)
/// License: MIT License
///
var DTMFToner = (function() {
    const freqMap = {
        '1': [ 697, 1209 ], '2': [ 697, 1336 ], '3': [ 697, 1477 ], 'A': [ 697, 1633 ],
        '4': [ 770, 1209 ], '5': [ 770, 1336 ], '6': [ 770, 1477 ], 'B': [ 770, 1633 ],
        '7': [ 852, 1209 ], '8': [ 852, 1336 ], '9': [ 852, 1477 ], 'C': [ 852, 1633 ],
        '*': [ 941, 1209 ], '0': [ 941, 1336 ], '#': [ 941, 1477 ], 'D': [ 941, 1633 ]
    };
    const buttons = Object.getOwnPropertyNames(freqMap);

    return class DTMFToner {
        constructor(audioContext) {
            if(audioContext == null) {
                throw new Error('audioContext must not be null');
            }
            Object.defineProperties(this, {
                context: { value: audioContext, enumerable: true },
                _currentID: { value: null, writable: true },
                _currentButton: { value: null, writable: true },
                _tones: { value: {} },
                _gains: { value: {} }
            });
            buttons.forEach(btn => {
                let g = this._gains[btn] = this.context.createGain();
                g.gain.value = 1 / freqMap[btn].length;
                _prepareTone.call(this, btn);
            });
        }
        connect(audioNode) {
            buttons.forEach(btn => this._gains[btn].connect(audioNode));
        }
        disconnect() {
            buttons.forEach(btn => this._gains[btn].disconnect());
        }
        press(button) {
            if(this._currentButton !== null || !~buttons.indexOf(button)) {
                return;
            }
            this._tones[button].forEach(o => o.start());
        }
        release(button) {
            let btn = button;
            this._tones[btn].forEach(o => {
                o.stop();
                o.disconnect();
            });
            _prepareTone.call(this, btn);
        }
    }

    function _prepareTone(button) {
        this._tones[button] = freqMap[button].map(f => {
            let osc = this.context.createOscillator();
            osc.connect(this._gains[button]);
            osc.frequency.value = f;
            return osc;
        });
    }
})();
