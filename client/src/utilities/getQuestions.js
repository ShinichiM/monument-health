const questionArray = [
  {
    prompt: "Please Select your Gender",
    options: ["Male", "Female"],
    id: 1,
  },
  {
    prompt: "Do you smoke?",
    options: ["Yes", "No"],
    id: 2,
  },
  {
    // Question Based on response of Do you Smoke (Yes)
    prompt: "How often do you smoke?",
    options: ["Often", "Sometimes", "Rarely"],
    requiredResponse: [{ id: 2, answer: 0 }],
    id: 3,
    recommendation: "Stop smoking",
  },
  {
    prompt: "How often do you exercise?",
    options: ["Everyday", "Multiple Times a Week", "Never"],
    id: 4,
    recommendation: "Exercise atleast 3x week"
  },
  {
    prompt: "How would you describe your nutritional habits?",
    options: ["Healthy", "Somewhat Healthy", "Not Healthy"],
    id: 5,
    recommendation: "Diet consisting of x, y, z"
  },
  {
    prompt: "When was your last physical examination?",
    options: [
      "Within the past 6 months",
      "within the past year",
      "Over one year",
    ],
    id: 6,
    recommendation: "Physical examinations every 6 months"
  },
  {
    prompt: "How has your Mental Health been the past month?",
    options: ["Balanced", "Unbalanced", "Poor"],
    id: 7,
  },
  {
    // Question based on Response of Mental Health Question (Unbalanced and Poor);
    prompt: "Have you considered speaking with a Professional?",
    options: ["Yes", "No"],
    requiredResponse: [
      { id: 7, answer: 1 },
      { id: 7, answer: 2 },
    ],
    id: 8,
    recommendation: "Seek proper professional care"
  },
  {
    prompt: "Have you had a Mammography within the past 6 months?",
    options: ["Yes", "No"],
    requiredResponse: [{ id: 1, answer: 1 }],
    id: 9,
    recommendation: "Mammographies every 6 months"
  },
];

const recommendations = [];

module.exports = questionArray;
