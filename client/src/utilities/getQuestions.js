const questionArray = [
  {
    question: "Please Select your Gender",
    options: ["Male", "Female"],
    questionId: 1,
  },
  {
    question: "Do you smoke?",
    options: ["Yes", "No"],
    questionId: 2,
  },
  {
    // Question Based on response of Do you Smoke (Yes)
    question: "How often do you smoke?",
    options: ["Often", "Sometimes", "Rarely"],
    questionId: 3,
  },
  {
    question: "How often do you exercise?",
    options: ["Everyday", "Multiple Times a Week", "Never"],
    questionId: 4,
  },
  {
    question:
      "How would you describe your nutritional habits? (Balanced, Somewhat Balanced, Unbalanced)",
    options: ["Healthy", "Somewhat Healthy", "Not Healthy"],
    questionId: 5,
  },
  {
    question: "How has your Mental Health been the past month?",
    options: ["Balanced", "Unbalanced", "Poor"],
    questionId: 7,
  },
  {
    // Question based on Response of Mental Health Question (Unbalanced and Poor);
    question: "Have you considered speaking with a Professional?",
    options: ["Yes", "No"],
    questionId: 8,
  },
  {
    question: "Have you had a Mammography within the past 6 months?",
    options: ["Yes", "No"],
    questionId: 9,
  },
];

module.exports = questionArray;
