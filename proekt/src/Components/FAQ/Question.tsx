import React from "react";

interface Props {
  question: string;
  answer: string;
  backgroundColor: string;
}

const Question: React.FC<Props> = ({question, answer, backgroundColor}) => {
  return (
      <div className="col-10">
        <div className="card" style={{ backgroundColor }}>
          <div className="card-body mx-3 my-2">
            <h5 className="card-title gold-title">{question}</h5>
            <p className="card-text">{answer}
            </p>
          </div>
        </div>
      </div>
      
  );
};

export default Question;
