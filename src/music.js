import createBoomBox from './boombox';

const frequencyData = new Uint8Array(200);
const receivedElements = {};

const createFrequency = (analyser) => {
  // const frequencyData = new Uint8Array(200);
  requestAnimationFrame(() => createFrequency(analyser));
  // Copy frequency data to frequencyData array
  analyser.getByteFrequencyData(frequencyData);
  createBoomBox(frequencyData);
};

const createAudio = (audioId) => {
  // create audio ctx
  console.log('in audio');
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  // get audioElement
  const audioElement = document.getElementById(audioId);

  if (receivedElements[audioId]) {
  } else {
    receivedElements[audioId] = true;
    // turn audioElement into MediaElementAudioSourceNode to manipulate its data
    const audioSrc = audioCtx.createMediaElementSource(audioElement);

    // creates analyser node
    const analyser = audioCtx.createAnalyser();

    // connects output of audio element to input of analyser
    audioSrc.connect(analyser);

    // then connects to audioCtx.destination (our speakers)
    audioSrc.connect(audioCtx.destination);

    createFrequency(analyser);
  }
};

export default createAudio;
