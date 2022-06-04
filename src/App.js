/* eslint-disable */
import { useState } from "react";
import "./App.css";
import Box from "./component/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPaper,
  faHandRock,
  faHandScissors,
  faScissors,
} from "@fortawesome/free-solid-svg-icons";

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
// 5. 3번 4번의 결과를  가지고 누가 이겼는지 승패를 따진다
// 6. 승패결과에따라 테두리 색이 바뀐다
//    (이기면-초록, 지면-빨강 비기면-검은색)

const choice = {
  rock: {
    name: "Rock",
    img: "https://us.123rf.com/450wm/topvectors/topvectors1807/topvectors180700221/104023301-%EB%B9%9B%EA%B3%BC-%EA%B7%B8%EB%A6%BC%EC%9E%90%EA%B0%80%EC%9E%88%EB%8A%94-%ED%9A%8C%EC%83%89-%EA%B1%B0%EB%8C%80%ED%95%9C-%EB%8F%8C-%ED%81%B0-%EB%8F%8C%EB%A7%B9%EC%9D%B4%EC%9D%98-%EB%A7%8C%ED%99%94-%EC%95%84%EC%9D%B4%EC%BD%98%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%82%B0-%EB%B0%94%EC%9C%84-%EC%9E%90%EC%97%B0%EB%AC%BC-%EB%B9%84%EB%94%94%EC%98%A4-%EA%B2%8C%EC%9E%84%EC%9D%98-%ED%92%8D%EA%B2%BD-%EB%B0%B0%EA%B2%BD%EC%9D%84-%EB%A7%8C%EB%93%A4%EA%B8%B0%EC%9C%84%ED%95%9C-%EC%9A%94%EC%86%8C%EC%9E%85%EB%8B%88%EB%8B%A4-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%A0%88%EC%97%B0.jpg?ver=6",
  },
  scissors: {
    name: "Scissors",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPNfyt4Cr8tdlb7rWEYM11G0xM-XwmhSHu_w&usqp=CAU",
  },
  paper: {
    name: "Paper",
    img: "https://img.freepik.com/free-vector/realistic-paper-sheet-with-folded-corner_257312-1159.jpg?w=2000",
  },
};
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);

    // user == computer 비김(tie)
    // user == rock, computer == scissors  user 승
    // user == rock, computer == paper     user 패
    // user == scissors, computer == paper user 승
    // user == scissors, computer == rock  user 패
    // user == paper, computer == rock     user 승
    // user == paper, computer == scissors user 패
    if (user.name == computer.name) {
      return "tie";
    } else if (user.name == "Rock")
      return computer.name == "Scissors" ? "win" : "lose";
    else if (user.name == "Scissors")
      return computer.name == "Paper" ? "win" : "lose";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "win" : "lose";
  };
  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어레이로 만들어주는 함수
    console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log("random value", randomItem);
    let final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <div>
      <div className="main">
        <Box title="you" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">  
        <div onClick={() => play("scissors")}><FontAwesomeIcon className="hand-scissors" icon={faHandScissors} /></div>
        <div onClick={() => play("rock")}><FontAwesomeIcon className="hand-rock" icon={faHandRock} /></div>
        <div onClick={() => play("paper")}><FontAwesomeIcon className="hand-paper" icon={faHandPaper} /></div>
      </div>
    </div>
  );
}

export default App;
