using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

class Program
{
    // Calcola le frequenze delle parole in un testo
    static Dictionary<string, int> CalculateWordFrequencies(string text)
    {
        Dictionary<string, int> wordFrequencies = new Dictionary<string, int>();

        string[] lines = text.Split('\n');

        foreach (string line in lines)
        {
            string word = line.ToLower().Trim();

            if (wordFrequencies.ContainsKey(word))
            {
                wordFrequencies[word]++;
            }
            else
            {
                wordFrequencies[word] = 1;
            }
        }

        return wordFrequencies;
    }

    // Stampa le frequenze delle parole con un titolo
    static void PrintWordFrequencies(Dictionary<string, int> frequencies, string title)
    {
        Console.WriteLine($"\n{title}\n");
        int totalWords = frequencies.Values.Sum();

        foreach (var word in frequencies)
        {
            int frequency = word.Value;
            double relativeFrequency = (double)frequency / totalWords;
            string percentage = (relativeFrequency * 100).ToString("F2");
            Console.WriteLine($"{word.Key}: {frequency} (Relative: {relativeFrequency.ToString("F2")}, Percentage: {percentage}%)");
        }
    }

    // Calcola la distribuzione congiunta dei dati
    static Dictionary<string, int> CalculateJointDistribution(List<string[]> dataArrays)
    {
        Dictionary<string, int> jointDistribution = new Dictionary<string, int>();

        int numDataArrays = dataArrays.Count;

        for (int i = 0; i < dataArrays[0].Length; i++)
        {
            List<string> values = dataArrays.Select(dataArray => dataArray[i].ToLower().Trim()).ToList();
            string key = string.Join("|", values);

            if (jointDistribution.ContainsKey(key))
            {
                jointDistribution[key]++;
            }
            else
            {
                jointDistribution[key] = 1;
            }
        }

        return jointDistribution;
    }

    // Stampa la distribuzione congiunta con un titolo
    static void PrintJointDistribution(Dictionary<string, int> jointDistribution, string title)
    {
        Console.WriteLine($"\n{title}\n");
        int totalFrequencies = jointDistribution.Values.Sum();

        foreach (var item in jointDistribution)
        {
            int frequency = item.Value;
            string[] values = item.Key.Split('|');

            double relativeFrequency = (double)frequency / totalFrequencies;
            string percentage = (relativeFrequency * 100).ToString("F2");

            Console.WriteLine($"Data: {string.Join(", ", values)} \t Frequency: {frequency}, Relative Frequency: {relativeFrequency.ToString("F2")}, Percentage: {percentage}%");
        }
    }

    // Legge un file, calcola le frequenze delle parole e stampa i risultati con un titolo
    static string ReadFileAndProcess(string filename, string title)
    {
        try
        {
            string fileData = File.ReadAllText(filename);
            var wordFrequencies = CalculateWordFrequencies(fileData);
            PrintWordFrequencies(wordFrequencies, title);
            return fileData;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error reading file \"{filename}\": {ex.Message}");
            throw ex;
        }
    }

    static void Main()
    {
        try
        {
            var degreesData = ReadFileAndProcess("degrees.txt", "---Background Degree Frequencies---");
            var ambitiousnessData = ReadFileAndProcess("ambitiousness.txt", "---Ambitious Values Frequencies---");
            var weightData = ReadFileAndProcess("weights.txt", "---Weight Frequencies---");

            var jointDistribution = CalculateJointDistribution(new List<string[]>{ ambitiousnessData.Split('\n'), weightData.Split('\n') });
            PrintJointDistribution(jointDistribution, "---Joint Distribution of Ambitiousness and Weight (Data: A | H)---");
        }
        catch (Exception ex)
        {
            Console.WriteLine("General Error: " + ex.Message);
        }
    }
}
