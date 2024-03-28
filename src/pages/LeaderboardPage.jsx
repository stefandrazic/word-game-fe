import React, { useState } from "react";
import { Button, Container, ListGroup, Table } from "react-bootstrap";

export default function LeaderboardPage() {
  const wordsScore = JSON.parse(localStorage.getItem("wordsScore"));
  const wordsScoreArray = wordsScore ? Object.entries(wordsScore) : [];
  wordsScoreArray?.sort(([, scoreA], [, scoreB]) => scoreB - scoreA);
  const [data, setData] = useState(wordsScoreArray);
  const resetData = () => {
    setData([]);
    localStorage.removeItem("wordsScore");
  };
  return (
    <Container>
      <h1>Leaderboard</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Word</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map(([word, score], i) => (
            <tr key={i + 1}>
              <td>{i + 1}</td>
              <td>{word}</td>
              <td>{score}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button
        onClick={() => {
          resetData();
        }}
        variant="danger"
      >
        Clear table
      </Button>
    </Container>
  );
}
