/**
 2.
For the following most important data structures (or others that you may want to suggest) find out how to:

-loop (break/continue)
-add/remove/get/check the existence of element

data structures:
array, list, dictionary, sorted list, HashSet, sorted set, queue, stack, linked list

Note in a very concise way your finding in your Js Cheatsheet, and, in case a corresponding Js object does not exists, create a simple equivalent class.
*/

using System;


class Program{
    
    static void Main(string[] args){
        //array
        int[] array = new int[5];
        for (int i = 0; i < array.Length; i++){
            array[i] = i;
        }
        Console.WriteLine("Array:");
        foreach (int i in array){
            Console.WriteLine(i);
            if (i == 3){
                break;
            }
        }

        Console.WriteLine("\nList:");
        //list
        List<string> list = new List<string>();
        list.Add("a");
        list.Add("b");
        list.Add("c");

        foreach (string s in list){
            Console.WriteLine(s);
            if (s == "b"){
                continue;
            }
        }

        Console.WriteLine("\nDictionary:");
        //dictionary
        System.Collections.Generic.Dictionary<string, int> dictionary = new System.Collections.Generic.Dictionary<string, int>();
        dictionary.Add("one", 1);
        dictionary.Add("two", 2);
        dictionary.Add("three", 3);

        foreach (System.Collections.Generic.KeyValuePair<string, int> pair in dictionary){
            Console.WriteLine(pair.Key + " : " + pair.Value);
        }
        Console.WriteLine("\nHashSet:");
        //HashSet
        HashSet<string> hashSet = new HashSet<string>();
        hashSet.Add("a");
        hashSet.Add("b");
        hashSet.Add("c");
        hashSet.Add("a");
        Console.WriteLine("Count: " + hashSet.Count);
        foreach (string s in hashSet){
            Console.WriteLine(s);
        }

        Console.WriteLine("\nSortedSet:");
        //SortedSet
        SortedSet<string> sortedSet = new SortedSet<string>();
        sortedSet.Add("c");
        sortedSet.Add("b");
        sortedSet.Add("a");
        sortedSet.Add("a");
        Console.WriteLine("Count: " + sortedSet.Count);
        foreach (string s in sortedSet){
            Console.WriteLine(s);
        }

        Console.WriteLine("\nQueue:");
        //Queue
        Queue<int> queue = new Queue<int>();
        queue.Enqueue(2);
        queue.Enqueue(4);
        queue.Enqueue(6);
        queue.Enqueue(8);
        queue.Dequeue();

        foreach (int i in queue){
            Console.WriteLine(i);

        }

        Console.WriteLine("\nStack:");
        //Stack
        Stack<int> stack = new Stack<int>();
        stack.Push(2);
        stack.Push(4);
        stack.Push(6);
        stack.Push(8);
        stack.Pop();

        foreach (int i in stack){
            Console.WriteLine(i);
            
        }

        Console.WriteLine("\nLinkedList:");
        //LinkedList
        LinkedList<int> linkedList = new LinkedList<int>();
        linkedList.AddLast(2);
        linkedList.AddLast(4);
        linkedList.AddLast(6);
        linkedList.AddLast(8);
        linkedList.RemoveFirst();

        foreach (int i in linkedList){
            Console.WriteLine(i);
        }

    }
}
