import { Container } from "./styles";

interface MessageDisplayProps {
  won: boolean;
}

export default function MessageDisplay({won}: MessageDisplayProps) {
  return (
    <Container data-testid="message-container">
      {won && <h1 data-testid="won">You won!</h1>}
    </Container>
  )
}