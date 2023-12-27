import Seq from '../Asset/images/seq_align.jpg';
import Astar from '../Asset/images/Astar.png';
import Bacon from '../Asset/images/Bacon.jpg';
import binarytree from '../Asset/images/binarytree.jpg';
import BubbleSort from '../Asset/images/bubblesort.jpg';
import dijkstra from '../Asset/images/dijkstra.jpg';
import longseq from '../Asset/images/LongestSequence.jpg';
import MP3 from '../Asset/images/MP3.PNG';
import Terminal from '../Asset/images/terminalweb.png';
import ANM from '../Asset/images/ANM.jpg';
import RSA from '../Asset/images/RSA.jpg';
import blackbackground from '../Asset/images/blackbackground.jpg';

const Image_file = [
    {
        language: '',
        title: '',
        description: '',
        image: blackbackground,
    },
    {
        language: 'Java',
        title: 'Sequence Alignment',
        description: 'Implementing DNA alignment using Dynamic Programming',
        image: Seq,
    },
    {
        language: 'Java',
        title: 'Map Routing A* algorithm',
        description: 'Implementing shortest route from start node to end node using A* version of dijkstra algorithm. (Greedy Algorithm)',
        image: Astar,
    },
    {
        language: 'Java',
        title: 'Bacon Number',
        description: 'Finding the actors number of connections away from actor Kevin Bacon',
        image: Bacon,
    },
    {
        language: 'C',
        title: 'Binary Tree',
        description: 'Implemented Binary Tree with remove and sort function. Printing forward and reverse directions.',
        image: binarytree,
    },
    {
        language: 'C',
        title: 'BubbleSort And Counting Duplicates',
        description: 'Implementing BubbleSort and for each word, count the repetition',
        image: BubbleSort,
    },
    {
        language: 'Java',
        title: 'Map Routing Dijkstra algorithm',
        description: 'Implementing shortest route from start node to end node using dijkstra algorithm',
        image: dijkstra,
    },
    {
        language: 'Java',
        title: 'Maximum Increasing Subsequence',
        description: 'Finding the maximum increasing subsequence using dynamic programming',
        image: longseq,
    },
    {
        language: 'ASM C',
        title: 'Accessing I/O Ports Using Assembly Language',
        description: 'Accessing I/O ports to keep listening to user input or the data ready address and checking for termination character.',
        image: MP3,
    },
    {
        language: 'HTML CSS React',
        title: 'Terminal Website',
        description: 'Implemented Terminal landing page and built portfolio website',
        image: Terminal,
    },
    {
        language: 'Python',
        title: 'Atomic Nature of Matter',
        description: 'Finding the particle(blob) using Depth First Search Algorithm',
        image: ANM,
    },
    {
        language: 'Python',
        title: 'RSA Cryptosystem',
        description: 'Implemented RSA Encryption using Python',
        image: RSA,
    },
    {
        language: '',
        title: '',
        description: '',
        image: blackbackground,
    },
  ];

export default Image_file;