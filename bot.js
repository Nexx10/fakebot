const question = document.getElementById("question");
const answer = document.getElementById("answer");

let init = 0;

const botSay = (data) => {
  return [
    "Perkenalkan nama saya NexBot. Nama kamu siapa?",
    `Halo ${data?.nama}, berapa usia kamu?`,
    `Ohhhh ${data?.usia}, kamu hobinya apa?`,
    `wahhh ${data?.hobby}, kerennn, yaudah gitu aja deh wkwkkw`,
  ];
};

question.innerHTML = botSay()[0];

let usersData = [];

function botStart() {
  init++;
  if (init === 1) {
    botDelay({ nama: answer.value });
  } else if (init === 2) {
    botDelay({ usia: answer.value });
  } else if (init === 3) {
    botDelay({ hobby: answer.value });
  } else if (init === 4) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(userAnswer) {
  setTimeout(() => {
    question.innerHTML = botSay(userAnswer)[init];
  }, 2000);
  usersData.push(answer.value);
  answer.value = "";
}

function finishing() {
  question.innerHTML = `terimakasih ya ${usersData[0]} sudah mau bermain dengan bot ini 🤩`;
  answer.value = "oke sama sama!";
}

function botEnd() {
  window.location.reload();
}
