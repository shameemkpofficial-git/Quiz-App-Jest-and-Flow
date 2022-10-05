//@flow

const Questions: Array<any> = [
  {
    id:1,
    category: 'General Knowledge',
    type: 'multiple',
    difficulty: 'medium',
    question:
      'How many days do we have in a week?',
    correct_answer: 'Seven',
    incorrect_answers: ['Nine', 'Six', 'Eight'],
  },
  {
    id:2,
    category: 'General Knowledge',
    type: 'multiple',
    difficulty: 'medium',
    question: ' How many days are there in a year?',
    correct_answer: '365',
    incorrect_answers: ['355', '346', '364'],
  },
  {
    id:3,
    category: 'General Knowledge',
    type: 'boolean',
    difficulty: 'hard',
    question:
      'How many colors are there in a rainbow?',
    correct_answer: '7',
    incorrect_answers: ['8','5','14'],
  },
  {
    id:4,
    category: 'General Knowledge',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'Which animal is known as the "Ship of the Desert?"',
    correct_answer: 'Camel',
    incorrect_answers: ['Lion', 'Goat', 'Eagle'],
  },
  {
    id:5,
    category: 'General Knowledge',
    type: 'multiple',
    difficulty: 'medium',
    question:
      'In which direction does the sun rise?',
    correct_answer: 'East',
    incorrect_answers: ['West', 'South', 'North'],
  }
];


export default Questions