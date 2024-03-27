import React, { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import GameService from "../services/game.service";

export default function GamePage() {
  const [data, setData] = useState({ word: "" });
  const [score, setScore] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await GameService.checkWord(data);
      if (response) {
        setData({ ...data, word: "" });
        if (response.score) setScore(response.score);
        if (response.error) setError(response.error);
      }

      console.log(response);
    } catch (error) {}
  };

  return (
    <Container>
      <h1 className="mb-3">Word game</h1>
      <Form className="mb-3" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            required
            value={data.word}
            onChange={(e) => {
              setData({ ...data, word: e.target.value });
              setError("");
              setScore("");
            }}
            type="text"
            placeholder="Enter your word here"
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Check word
        </Button>
      </Form>
      {score && (
        <Alert variant="success">Good job! Your score is: {score} 😊</Alert>
      )}
      {error && (
        <Alert variant="danger">
          That word seems to not exist in english dictionary. Please try again.
          😞
        </Alert>
      )}
    </Container>
  );
}
