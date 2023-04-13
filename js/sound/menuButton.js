// Création du contexte audio
const context = new AudioContext();

// Création d'un oscillateur
const oscillator = context.createOscillator();
oscillator.type = 'square';
oscillator.frequency.value = 440; // Hz

// Création d'un échantillonneur
const sampler = context.createSampleRate();
sampler.bitDepth = 8;
sampler.sampleRate = 8000;

// Connexion de l'oscillateur à l'échantillonneur
oscillator.connect(sampler);

// Génération d'un buffer de 1 seconde
const buffer = sampler.createBuffer(1, sampler.sampleRate, sampler.sampleRate);

// Remplissage du buffer avec le son généré par l'oscillateur
for (let channel = 0; channel < buffer.numberOfChannels; channel++) {
  const channelData = buffer.getChannelData(channel);
  for (let i = 0; i < channelData.length; i++) {
    channelData[i] = oscillator.type === 'square' ? (oscillator.frequency.value > sampler.sampleRate / 2 ? 1 : -1) : Math.sin(2 * Math.PI * oscillator.frequency.value * i / sampler.sampleRate);
  }
}

// Création d'une source audio à partir du buffer
const source = context.createBufferSource();
source.buffer = buffer;

// Connexion de la source audio à la destination (les haut-parleurs)
source.connect(context.destination);

const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  // Jouer le son
  source.start(0);
});