const frequencyData = new Uint8Array(200);

const createFrequency = (analyser) => {
  requestAnimationFrame(() => createFrequency(analyser));

  // Copy frequency data to frequencyData array
  analyser.getByteFrequencyData(frequencyData);
  console.log(frequencyData);
};

const createAudio = (audioId) => {
  // create audio ctx
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  // get audioElement
  const audioElement = document.getElementById(audioId);

  // turn audioElement into MediaElementAudioSourceNode to manipulate its data
  const audioSrc = audioCtx.createMediaElementSource(audioElement);

  // creates analyser node
  const analyser = audioCtx.createAnalyser();

  // connects output of audio element to input of analyser
  audioSrc.connect(analyser);

  // then connects to audioCtx.destination (our speakers)
  audioSrc.connect(audioCtx.destination);

  createFrequency(analyser);
};

export default createAudio;
