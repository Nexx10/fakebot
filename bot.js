const question = document.getElementById("question");
const answer = document.getElementById("answer");
const loaders = document.getElementById("loaders");
const container = document.getElementsByClassName("container");

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

  if(answer.value.length < 1) return alert("Isi dulu")
  
  init++;

  // if (init === 1) {
  //   botDelay({ nama: answer.value });
  // } else if (init === 2) {
  //   botDelay({ usia: answer.value });
  // } else if (init === 3) {
  //   botDelay({ hobby: answer.value });
  // } else if (init === 4) {
  //   finishing();
  // } else {
  //   botEnd();
  // }

  switch (init) {
    case 1:
      botDelay({ nama: answer.value });
      break;

    case 2:
      botDelay({ usia: answer.value });
      break;

    case 3:
      botDelay({ hobby: answer.value });
      break;

    case 4:
      finishing();
      break;

    case 5:
      botEnd();
    default:
      break;
  }
}

function botDelay(userAnswer) {
  loaders.style.display = "block";
  container[0].style.filter = "blur(8px)";
  setTimeout(() => {
    question.innerHTML = botSay(userAnswer)[init];
    loaders.style.display = "none";
    container[0].style.filter = "none";
  }, 1700);
  usersData.push(answer.value);
  answer.value = "";
}

function finishing() {
  question.innerHTML = `terimakasih ya ${usersData[0]} sudah mau bermain dengan bot ini 🤩`;
  answer.value = "oke sama sama!";
}

function botEnd() {
  alert(`Terimakasih ${usersData[0]} sudah berkunjung, anda akan diarahkan ke halaman utama`);  
  window.location.reload();
}
