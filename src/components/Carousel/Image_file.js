import Astar from '../Asset/images/Astar.png';
import Bacon from '../Asset/images/Bacon.jpg';
import binarytree from '../Asset/images/binarytree.jpg';
import BubbleSort from '../Asset/images/bubblesort.jpg';
import dijkstra from '../Asset/images/dijkstra.jpg';
import longseq from '../Asset/images/LongestSequence.jpg';
import MP3 from '../Asset/images/MP3.PNG';
import Terminal from '../Asset/images/terminalweb.png';
import ANM from '../Asset/images/ANM.jpg';
import blackbackground from '../Asset/images/blackbackground.jpg';
import hada from '../Asset/images/hada.png';
import finds from '../Asset/images/substring.png';
import todo from '../Asset/images/todo.png';
import pagerank from '../Asset/images/pagerank.jpg';
import KatApp from '../Asset/images/katapp.png';
import unix_func from '../Asset/images/file_search.jpg';
import matrix from '../Asset/images/3d_matrix.png';
import rsa_encryption from '../Asset/images/ciphyer.jpg';
import sequence from '../Asset/images/sequence.png';
import c_func from '../Asset/images/console.png';
import gaussian_elimination from '../Asset/images/gelimination.png';
import matrix_operations from '../Asset/images/matrix_op.png';
import vector from '../Asset/images/vector.png';
import poem from '../Asset/images/poem.png';
import housing from '../Asset/images/housing.jpg';

const Image_file = [
    {
        language: '',
        title: '',
        description: '',
        image: blackbackground,
    },
    {
        web_address: '',
        language: 'React Native',
        title: 'Hada',
        description: 'Hada is a Korean flashcard learning app that leverages the power of spaced repetition to optimize the learning process.',
        image: hada,
    },
    {
        web_address: 'https://github.com/SPC-Toad/unix_file_string_search',
        language: 'C language',
        title: 'Unix File String Search',
        description: '"Finds" is a powerful command-line tool designed to search for a specified string within files and directories.',
        image: finds,
    },
    {
        web_address: 'https://github.com/CS-411-To-Do-Calendar/cs411-to-do-calendar',
        language: 'React && Firebase',
        title: 'To Do Calendar',
        description: 'Calendar optimization, CRUD functionailties for your schedules and to-do list.',
        image: todo,
    },
    {
        web_address: 'https://github.com/SPC-Toad/pagerank',
        language: 'Python',
        title: 'PageRank Algorithm',
        description: 'PageRank is a method for ranking web pages based on their link structures, initially developed by Larry Page and Sergey Brin, the founders of Google.',
        image: pagerank,
    },
    {
        web_address: 'https://github.com/neezacoto/KatApp',
        language: 'C# && React Native',
        title: 'KatApp',
        description: 'Leveraging the power of AI, users can scan cat food barcodes, get product details, find Amazon best sellers, and maintain a record of past QR codes scanned.',
        image: KatApp,
    },
    {
        web_address: 'https://github.com/SPC-Toad/unix-function-public',
        language: 'C language',
        title: 'Unix Function',
        description: 'This project consists of tools for examining sections and symbols of object files. The tools implement functionalities similar to objdump -h and nm commands.',
        image: unix_func,
    },
    {
        web_address: 'https://github.com/SPC-Toad/3d_effect_matrix',
        language: 'Python',
        title: '3D Graphics Demo',
        description: 'Visualize and interact with 3D shapes using Matplotlib in Python, featuring shape transformation and manipulation with sliders and radio buttons.',
        image: matrix,
    },
    {
        web_address: 'https://github.com/SPC-Toad/rsa_encryption',
        language: 'Python',
        title: 'RSA Cryptosystem',
        description: 'Implemented RSA Encryption using Python. (Eulers Theorem version)',
        image: rsa_encryption,
    },
    {
        web_address: 'https://github.com/SPC-Toad/DNA_sequence_alignment',
        language: 'Java',
        title: 'Sequence Alignment',
        description: 'Implementing DNA sequence alignment using Dynamic Programming',
        image: sequence,
    },
    {
        web_address: 'https://github.com/SPC-Toad/A--algorithm',
        language: 'Java',
        title: 'Map Routing A* algorithm',
        description: 'Implementing shortest route from start node to end node using A* version of dijkstra algorithm. (Greedy Algorithm)',
        image: Astar,
    },
    {
        web_address: 'https://github.com/SPC-Toad/bacon_number',
        language: 'Java',
        title: 'Bacon Number',
        description: 'Finding the actors number of connections away from actor Kevin Bacon',
        image: Bacon,
    },
    {
        web_address: 'https://github.com/SPC-Toad/atomic_nature_of_matter',
        language: 'Python',
        title: 'Atomic Nature of Matter',
        description: 'Finding the particle(blob) using Depth First Search Algorithm',
        image: ANM,
    },
    {
        web_address: 'https://github.com/SPC-Toad/binary_search_tree',
        language: 'C',
        title: 'Binary Tree Sort',
        description: 'Implemented Binary Tree with remove and sort function. Printing forward and reverse directions.',
        image: binarytree,
    },
    {
        web_address: 'https://github.com/SPC-Toad/map-routing-dijkstra',
        language: 'Java',
        title: 'Map Routing Dijkstra algorithm',
        description: 'Implementing shortest route from start node to end node using dijkstra algorithm',
        image: dijkstra,
    },
    {
        web_address: 'https://github.com/SPC-Toad/movetofront',
        language: 'Java',
        title: 'Maximum Increasing Subsequence',
        description: 'Finding the maximum increasing subsequence using dynamic programming',
        image: longseq,
    },
    {
        web_address: 'https://github.com/SPC-Toad/bubblesort_2D',
        language: 'C',
        title: 'BubbleSort 2D',
        description: 'Implementing BubbleSort and for each word, count the repetition',
        image: BubbleSort,
    },
    {
        web_address: 'https://github.com/SPC-Toad/accessing_IO',
        language: 'ASM C',
        title: 'I/O Accessing',
        description: 'This project demonstrates how to access and handle input and output operations using assembly language.',
        image: MP3,
    },
    {
        web_address: 'https://github.com/SPC-Toad/console_functions',
        language: 'ASM C',
        title: 'Console Functions',
        description: 'This project implements terminal functions to interact with memory addresses and symbol tables in both SAPC and LINUX environments.',
        image: c_func,
    },
    {
        web_address: 'https://github.com/SPC-Toad/gaussian_elimination',
        language: 'Python',
        title: 'Gaussian Elimination',
        description: 'This project is a Python3 implementation of a Gaussian Elimination calculator using NumPy.',
        image: gaussian_elimination,
    },
    {
        web_address: 'https://github.com/SPC-Toad/matrix_operations',
        language: 'Python',
        title: 'Matrix Operations',
        description: 'This project implements various matrix operations in Python, including Gaussian elimination and other matrix manipulations.',
        image: matrix_operations,
    },
    {
        web_address: 'https://github.com/SPC-Toad/vector_multiplication',
        language: 'Python',
        title: 'Vector Multiplication',
        description: 'This project provides a Python script for performing vector and matrix multiplication operations.',
        image: vector,
    },
    {
        web_address: 'https://github.com/SPC-Toad/stochastic_poem',
        language: 'Python',
        title: 'Poem Generator',
        description: 'This project generates a poem using a Markov chain-based random walk over the words in a text file.',
        image: poem,
    },
    {
        web_address: 'https://github.com/SPC-Toad/dataset_matrix',
        language: 'Python',
        title: 'Housing Data Analysis',
        description: 'Analysis on California Housing dataset using different polynomial regression models to predict the median house values.',
        image: housing,
    },
    {
        web_address: 'https://github.com/SPC-Toad/Terminal-Portfolio',
        language: 'React JS',
        title: 'Terminal Website',
        description: 'Implemented Terminal landing page and built portfolio website',
        image: Terminal,
    },
    {
        language: '',
        title: '',
        description: '',
        image: blackbackground,
    },
  ];

export default Image_file;