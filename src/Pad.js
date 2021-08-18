import { useState } from "react";
function Pad() {
  const audioClips = [
    {
      key: "Q",
      id: "mario-bros",
      wav: "http://www.superluigibros.com/downloads/sounds/WII/MARIOKARTWII/wavs/kboo_1.wav",
    },
    {
      key: "W",
      id: "end-of-level",
      wav: "http://www.mario-museum.net/sons/smb_mat.wav",
    },
    {
      key: "E",
      id: "toad",
      wav: "http://www.superluigibros.com/downloads/sounds/WII/MARIOKARTWII/wavs/toad_yeow.wav",
    },
    {
      key: "A",
      id: "fanfare",
      wav: "http://www.ringophone.com/mp3poly/15959.mp3",
    },
    {
      key: "S",
      id: "pipe",
      wav: "http://www.superluigibros.com/downloads/sounds/SNES/SMRPG/wav/smrpg_mario_pipe.wav",
    },
    {
      key: "D",
      id: "donkey-kong",
      wav: "http://www.superluigibros.com/downloads/sounds/WII/MARIOKARTWII/wavs/dk_7.wav",
    },
    {
      key: "Z",
      id: "baby-mario",
      wav: "http://www.superluigibros.com/downloads/sounds/WII/MARIOKARTWII/wavs/babymario_woohoo.wav",
    },
    {
      key: "X",
      id: "bowser",
      wav: "http://www.superluigibros.com/downloads/sounds/WII/MARIOKARTWII/wavs/bowser_6.wav",
    },
    {
      key: "C",
      id: "jump",
      wav: "http://www.mario-museum.net/sons/smb_saut.wav",
    },
  ];
  return (
    <div>
      <button id="equals">=</button>
      <button id="zero">0</button>
      <button id="one">1</button>
      <button id="two">2</button>
      <button id="three">3</button>
      <button id="four">4</button>
      <button id="five">5</button>
      <button id="six">6</button>
      <button id="seven">7</button>
      <button id="eight">8</button>
      <button id="nine">9</button>
      <button id="add">+</button>
      <button id="subtract">-</button>
      <button id="multiply">X</button>
      <button id="divide">/</button>
      <button id="decimal">.</button>
      <button id="clear">AC</button>
    </div>
  );
}
export default Pad;
