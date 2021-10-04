console.clear();
const result = ['정상', '가벼운 우울', '중등도 우울','높은 우울'];

const DB = [
  {
    question: '01. 나는 슬프고 기분이 울적하다',
    buttonAnswer: [
      {answer: '전혀 아니다', ball: 0},
      {answer: '가끔 그렇다', ball: 1},
      {answer: '    그렇다', ball: 2},
      {answer: '항상 그렇다', ball: 3}
    ]
  },
  {
    question: '02. 나의 앞날에 희망이 없다고 느껴진다',
    buttonAnswer: [
      {answer: '전혀 아니다', ball: 0},
      {answer: '가끔 그렇다', ball: 1},
      {answer: '    그렇다', ball: 2},
      {answer: '항상 그렇다', ball: 3}
    ]
  },
  {
    question: '03. 내 자신이 무가치한 실패자라고 생각된다',
    buttonAnswer: [
      {answer: '전혀 아니다', ball: 0},
      {answer: '가끔 그렇다', ball: 1},
      {answer: '    그렇다', ball: 2},
      {answer: '항상 그렇다', ball: 3}
    ]
  },
  {
    question: '04. 나는 다른 삶에 비해 열등하고 뭔가 잘못되어 있다고 느껴진다',
    buttonAnswer: [
      {answer: '전혀 아니다', ball: 0},
      {answer: '가끔 그렇다', ball: 1},
      {answer: '    그렇다', ball: 2},
      {answer: '항상 그렇다', ball: 3}
    ]
  },

  {
    question: '05. 나는 매사에 내 자신을 비판하고 자책한다',
    buttonAnswer: [
      {answer: '전혀 아니다', ball: 0},
      {answer: '가끔 그렇다', ball: 1},
      {answer: '    그렇다', ball: 2},
      {answer: '항상 그렇다', ball: 3}
    ]
  },

  {
    question: '06. 어떤 일을 판단하고 결정하기가 어렵다',
    buttonAnswer: [
      {answer: '전혀 아니다', ball: 0},
      {answer: '가끔 그렇다', ball: 1},
      {answer: '    그렇다', ball: 2},
      {answer: '항상 그렇다', ball: 3}
    ]
  },

  {
    question: '07. 나는 쉽게 화가 나고 짜증이 난다',
    buttonAnswer: [
      {answer: '전혀 아니다', ball: 0},
      {answer: '가끔 그렇다', ball: 1},
      {answer: '    그렇다', ball: 2},
      {answer: '항상 그렇다', ball: 3}
    ]
  },

  {
    question: '08. 진로, 취미, 가족, 친구에 대한 관심을 잃었다',
    buttonAnswer: [
      {answer: '전혀 아니다', ball: 0},
      {answer: '가끔 그렇다', ball: 1},
      {answer: '    그렇다', ball: 2},
      {answer: '항상 그렇다', ball: 3}
    ]
  },

  {
    question: '09. 어떤 일에 내 자신을 억지로 내몰지 않으면 일을 하기가 힘들다',
    buttonAnswer: [
      {answer: '전혀 아니다', ball: 0},
      {answer: '가끔 그렇다', ball: 1},
      {answer: '    그렇다', ball: 2},
      {answer: '항상 그렇다', ball: 3}
    ]
  },

  {
    question: '10. 나의 외모는 추하다고 생각한다',
    buttonAnswer: [
      {answer: '전혀 아니다', ball: 0},
      {answer: '가끔 그렇다', ball: 1},
      {answer: '    그렇다', ball: 2},
      {answer: '항상 그렇다', ball: 3}
    ]
  },

  {
    question: '11. 식욕이 없다. 또는 지나치게 많이 먹는다',
    buttonAnswer: [
      {answer: '전혀 아니다', ball: 0},
      {answer: '가끔 그렇다', ball: 1},
      {answer: '    그렇다', ball: 2},
      {answer: '항상 그렇다', ball: 3}
    ]
  },

  {
    question: '12. 불면으로 고생하며 잠을 개운하게 자지 못한다. 또는 지나치게 피곤하여 너무 많이 잔다',
    buttonAnswer: [
      {answer: '전혀 아니다', ball: 0},
      {answer: '가끔 그렇다', ball: 1},
      {answer: '    그렇다', ball: 2},
      {answer: '항상 그렇다', ball: 3}
    ]
  },

  {
    question: '13. 성(SEX)에 대한 관심을 잃었다',
    buttonAnswer: [
      {answer: '전혀 아니다', ball: 0},
      {answer: '가끔 그렇다', ball: 1},
      {answer: '    그렇다', ball: 2},
      {answer: '항상 그렇다', ball: 3}
    ]
  },
  {
    question: '14. 나의 건강에 대한 걱정을 많이 한다',
    buttonAnswer: [
      {answer: '전혀 아니다', ball: 0},
      {answer: '가끔 그렇다', ball: 1},
      {answer: '    그렇다', ball: 2},
      {answer: '항상 그렇다', ball: 3}
    ]
  },
  {
    question: '15. 인생은 살 가치가 없으면 죽는게 낫다는 생각을 한다',
    buttonAnswer: [
      {answer: '전혀 아니다', ball: 0},
      {answer: '가끔 그렇다', ball: 1},
      {answer: '    그렇다', ball: 2},
      {answer: '항상 그렇다', ball: 3}
    ]
  }


];

const makeQuestion = data => {
  const { question, buttonAnswer } = data;
  return `
    <div class="test-answer-buttons">
      <p class="test-question">${question}</p>
      ${buttonAnswer.map(({ answer, ball }) => `
        <button class="test-button" data-ball="${ball}">${answer}</button>
      `).join``}
    </div>
  `
}

const form = document.querySelector('.test-wrapper');
const container = document.querySelector('.questions');
const resultWrap = document.querySelector('.test-result');
let ballCounter = 0;

const calcResult = () => {
  switch (true) {
      case ballCounter <= 10: return 0;
    case ballCounter <= 20: return 1;
    case ballCounter <= 30: return 2;
    default: return 3
  }
}


const generateForm = (i = 0, max = DB.length) => (e) => {
  e && e.preventDefault()
  if (i === max) {
    container.remove();
    return resultWrap.innerHTML = result[calcResult()]
  }
  return container.innerHTML = makeQuestion(DB[i++])
}

const next = generateForm()

form.onsubmit = next;
form.onclick = e => {
  if (e.target.matches('button')) {
    ballCounter += +e.target.dataset.ball;
  }
}

next()
