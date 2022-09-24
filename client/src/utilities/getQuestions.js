const questionArray = [
  {
    question: "Please Select your Gender",
    options: ["Male", "Female"],
    id: 1,
  },
  {
    question: "Do you smoke?",
    options: ["Yes", "No"],
    id: 2,
  },
  {
    // Question Based on response of Do you Smoke (Yes)
    question: "How often do you smoke?",
    options: ["Often", "Sometimes", "Rarely"],
    id: 3,
  },
  {
    question: "How often do you exercise?",
    options: ["Everyday", "Multiple Times a Week", "Never"],
    id: 4,
  },
  {
    question:
      "How would you describe your nutritional habits? (Balanced, Somewhat Balanced, Unbalanced)",
    options: ["Healthy", "Somewhat Healthy", "Not Healthy"],
    id: 5,
  },
  {
    question: "How has your Mental Health been the past month?",
    options: ["Balanced", "Unbalanced", "Poor"],
    id: 7,
  },
  {
    // Question based on Response of Mental Health Question (Unbalanced and Poor);
    question: "Have you considered speaking with a Professional?",
    options: ["Yes", "No"],
    id: 8,
  },
  {
    question: "Have you had a Mammography within the past 6 months?",
    options: ["Yes", "No"],
    id: 9,
  },
];

module.exports = questionArray;
