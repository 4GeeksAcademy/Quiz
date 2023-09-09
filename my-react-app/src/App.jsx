
import { useState } from 'react';
import './App.css';
import Trivia from './components/Trivia';


function App() {

  const [questionNumber, setQuestionNumber] = useState(1)
  const [timeout, setTimeOut] = useState (false)

  const data = [
    {
      id: 1,
      question: "¿Quién es conocido como 'El Perro' en 'Juego de Tronos'?",
      answers: [
        {
          text: "Tyrion Lannister",
          correct: false,
        },
        {
          text: "Sandor Clegane",
          correct: true,
        },
        {
          text: "Jaime Lannister",
          correct: false,
        },
        {
          text: "Gregor Clegane",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "¿Cuál es el lema de la Casa Stark?",
      answers: [
        {
          text: "Nosotros no sembramos",
          correct: true,
        },
        {
          text: "Fuego y Sangre",
          correct: false,
        },
        {
          text: "Ours is the Fury",
          correct: false,
        },
        {
          text: "Hear Me Roar!",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "¿Quién es el autor de 'Canción de Hielo y Fuego', la serie de novelas en las que se basa 'Juego de Tronos'?",
      answers: [
        {
          text: "J.R.R. Tolkien",
          correct: false,
        },
        {
          text: "George R.R. Martin",
          correct: true,
        },
        {
          text: "J.K. Rowling",
          correct: false,
        },
        {
          text: "Stephen King",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "¿Cuál es el nombre del dragón de Daenerys Targaryen en 'Juego de Tronos'?",
      answers: [
        {
          text: "Rhaegar",
          correct: false,
        },
        {
          text: "Viserion",
          correct: false,
        },
        {
          text: "Drogon",
          correct: true,
        },
        {
          text: "Aegon",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "¿Cuál es el apodo de Petyr Baelish en 'Juego de Tronos'?",
      answers: [
        {
          text: "El Lobo Solitario",
          correct: false,
        },
        {
          text: "El Cuervo de Tres Ojos",
          correct: false,
        },
        {
          text: "Meñique",
          correct: true,
        },
        {
          text: "El Montaña",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "¿Cuál es la capital de los Siete Reinos en 'Juego de Tronos'?",
      answers: [
        {
          text: "Desembarco del Rey",
          correct: true,
        },
        {
          text: "Invernalia",
          correct: false,
        },
        {
          text: "Rocadragón",
          correct: false,
        },
        {
          text: "Dorne",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "¿Qué miembro de la Guardia de la Noche es conocido por su espada de acero valyrio?",
      answers: [
        {
          text: "Jon Snow",
          correct: true,
        },
        {
          text: "Samwell Tarly",
          correct: false,
        },
        {
          text: "Eddard Stark",
          correct: false,
        },
        {
          text: "Jeor Mormont",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "¿Cuál es el lema de la Casa Targaryen?",
      answers: [
        {
          text: "Fuego y Sangre",
          correct: true,
        },
        {
          text: "Nosotros no sembramos",
          correct: false,
        },
        {
          text: "Ours is the Fury",
          correct: false,
        },
        {
          text: "Hear Me Roar!",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "¿Quién es el 'Rey de la Noche' en 'Juego de Tronos'?",
      answers: [
        {
          text: "Jon Snow",
          correct: false,
        },
        {
          text: "Bran Stark",
          correct: false,
        },
        {
          text: "Night King",
          correct: true,
        },
        {
          text: "Joffrey Baratheon",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "¿Qué casa es conocida por su lema 'Fire and Blood'?",
      answers: [
        {
          text: "Casa Stark",
          correct: false,
        },
        {
          text: "Casa Lannister",
          correct: false,
        },
        {
          text: "Casa Targaryen",
          correct: true,
        },
        {
          text: "Casa Baratheon",
          correct: false,
        },
      ],
    },
    // Agrega más preguntas aquí
  ];
  




  
  const moneyPiramid = [
        { id: 1, amount: "€ 100" },
        { id: 2, amount: "€ 200" },
        { id: 3, amount: "€ 300" },
        { id: 4, amount: "€ 500" },
        { id: 5, amount: "€ 1.000" },
        { id: 6, amount: "€ 2.000" },
        { id: 7, amount: "€ 4.000" },
        { id: 8, amount: "€ 8.000" },
        { id: 9, amount: "€ 16.000" },
        { id: 10, amount: "€ 32.000" },
        { id: 11, amount: "€ 64.000" },
        { id: 12, amount: "€ 125.000" },
        { id: 13, amount: "€ 250.000" },
        { id: 14, amount: "€ 500.000" },
        { id: 15, amount: "€ 1.000.000" },
  ].reverse()
  return (
    <div className="app">
      <div className="main">
        <div className='top'>
          <div className='timer'>30</div>
        </div>
        <div className='bottom'>
          <Trivia data= {data} setTimeOut={setTimeOut}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}/>
        </div>
      </div>
      <div className="pyramid">
        <ul className='moneyList'>
          {moneyPiramid.map((m) =>(
          
          <li className= {questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}> 
          <span className='moneyListItemNumber'>{m.id}</span>
          <span className='moneyListItemAmount'>{m.amount}</span>
          
          </li>
          ))}
          
          
         
        
        </ul>
      </div>
  
    </div>
  );
}

export default App;
