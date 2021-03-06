import React, { Component } from "react";
import { QuizData } from "../QuizData";
// import { useEasybase } from "easybase-react";

export class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userAnswer: null,
      currentIndex: 0,
      options: [],
      quizEnd: false,
      score: 0,
      disabled: true,
    };
  }

  loadQuiz = () => {
    const { currentIndex } = this.state;
    this.setState(() => {
      return {
        question: QuizData[currentIndex].question,
        options: QuizData[currentIndex].options,
        answer: QuizData[currentIndex].answer,
      };
    });
  };

  nextQuestionHandler = () => {
    const { userAnswer, answer, score } = this.state;

    if (userAnswer === answer) {
      this.setState({
        score: score + 1,
      });
    }

    this.setState({
      currentIndex: this.state.currentIndex + 1,
      userAnswer: null,
    });
  };

  componentDidMount() {
    this.loadQuiz();
  }

  checkAnswer = (answer) => {
    this.setState({
      userAnswer: answer,
      disabled: false,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { currentIndex } = this.state;
    if (this.state.currentIndex !== prevState.currentIndex) {
      this.setState(() => {
        return {
          question: QuizData[currentIndex].question,
          options: QuizData[currentIndex].options,
          answer: QuizData[currentIndex].answer,
        };
      });
    }
  }
  finishHandler = () => {
    if (this.state.currentIndex === QuizData.length - 1) {
      this.setState({
        quizEnd: true,
      });
    }
  };

  render() {
    const { question, options, currentIndex, userAnswer, quizEnd } = this.state;

    if (quizEnd) {
      return (
        <div className="QuizEnd">
          <h2>Your final score is {this.state.score} points out of 30!</h2>
          <h3>
            You have reached the end of your smuggling journey! As well as
            completed the test to see you recieved a score of 25 or higher,
            you're a true Star Wars fan.
            <br />
            If you recieved anything less than 25, you need to do some studying!
          </h3>
          <h7>
            If you would like to know where you went wrong, here are the correct
            answers to all the questions
          </h7>

          <ol type="1">
            {QuizData.map((item, index) => (
              <li className="EndOptions" key={index}>
                {item.answer}
              </li>
            ))}
          </ol>

          <h2 className="EndCredits">
            Whether you succeeded or failed on your mission to deliver the cargo
            and put your Star Wars knowledge to the test, I hope you had a
            blast!
          </h2>
          <h1 className="MTFBWY">May The Force Be With You</h1>
        </div>
      );
    }
    return (
      <div className="AnswersDiv">
        <h2 className="Questions">{question}</h2>
        <span>{`Question ${currentIndex + 1} of ${QuizData.length}`}</span>
        {options.map((option) => (
          <p
            key={option.id}
            className={`options ${userAnswer === option ? "selected" : null}`}
            onClick={() => this.checkAnswer(option)}
          >
            {option}
          </p>
        ))}
        {currentIndex < QuizData.length - 1 && (
          <button
            className="NextQButton"
            disabled={this.state.disabled}
            onClick={this.nextQuestionHandler}
          >
            Next Question
          </button>
        )}
        {currentIndex === QuizData.length - 1 && (
          <button
            className="FinishButton"
            onClick={this.finishHandler}
            disabled={this.state.disabled}
          >
            Finish
          </button>
        )}
        )
      </div>
    );
  }
}

export default Quiz;
