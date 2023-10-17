const fs = require('fs').promises;

// Calcola le frequenze delle parole in un testo
function calculateWordFrequencies(text) {
  const wordFrequencies = {};

  const lines = text.split('\n');

  for (const line of lines) {
    const word = line.toLowerCase().trim();

    if (wordFrequencies[word]) {
      wordFrequencies[word]++;
    } else {
      wordFrequencies[word] = 1;
    }
  }

  return wordFrequencies;
}

// Stampa le frequenze delle parole con un titolo
function printWordFrequencies(frequencies, title) {
  console.log(`\n${title}\n`);
  const totalWords = Object.values(frequencies).reduce((acc, value) => acc + value, 0);

  for (const word in frequencies) {
    const frequency = frequencies[word];
    const relativeFrequency = frequency / totalWords;
    const percentage = (relativeFrequency * 100).toFixed(2);
    console.log(`${word}: ${frequency} (Relative: ${relativeFrequency.toFixed(2)}, Percentage: ${percentage}%)`);
  }
}

// Calcola la distribuzione congiunta dei dati
function calculateJointDistribution(dataArrays) {
  const jointDistribution = {};

  const numDataArrays = dataArrays.length;

  for (let i = 0; i < dataArrays[0].length; i++) {
    const values = dataArrays.map((dataArray) =>
      dataArray[i].toLowerCase().trim()
    );

    const key = values.join('|');

    if (!jointDistribution[key]) {
      jointDistribution[key] = 1;
    } else {
      jointDistribution[key]++;
    }
  }

  return jointDistribution;
}


// Legge un file, calcola le frequenze delle parole e stampa i risultati con un titolo
async function readFileAndProcess(filename, title) {
  try {
    const fileData = await fs.readFile(filename, 'utf8');
    const wordFrequencies = calculateWordFrequencies(fileData);
    printWordFrequencies(wordFrequencies, title);
    return fileData;
  } catch (error) {
    console.error(`Error reading file "${filename}"`, error);
    throw error;
  }
}


// Stampa la distribuzione congiunta con un titolo
function printJointDistribution(jointDistribution, title) {
    console.log(`\n${title}\n`);
    for (const key in jointDistribution) {
      const frequency = jointDistribution[key];
      const values = key.split('|');
  
      const totalFrequencies = Object.values(jointDistribution).reduce(
        (acc, value) => acc + value,
        0
      );
      const relativeFrequency = frequency / totalFrequencies;
      const percentage = (relativeFrequency * 100).toFixed(2);
      console.log(
        `Data: ${values.join(', ')} \t Frequency: ${frequency}, Relative Frequency: ${relativeFrequency.toFixed(2)}%, Percentage: ${percentage}%`
      );
    }
  }

// Funzione principale che gestisce l'elaborazione dei file e le stampe
async function main() {
  try {
    const [degreesData, ambitiousnessData, weightData] = await Promise.all([
      readFileAndProcess('degrees.txt', '---Background Degree Frequencies---'),
      readFileAndProcess('ambitiousness.txt', '---Ambitious Values Frequencies---'),
      readFileAndProcess('weights.txt', '---Weight Frequencies---'),
    ]);

    const jointDistribution = calculateJointDistribution([ambitiousnessData.split('\n'), weightData.split('\n')]);
    printJointDistribution(jointDistribution, '---Joint Distribution of Ambitiousness and Weight (Data: A | H)---');
  } catch (error) {
    console.error('General Error:', error);
  }
}

