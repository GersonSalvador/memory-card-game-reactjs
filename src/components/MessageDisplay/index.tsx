import { Container, Message, Title } from "./styles";

interface MessageDisplayProps {
  won: boolean;
}

export const winnerTitle = 'Congatulations!';
export const loserTitle = 'Shame on you!';
export const winnerMessage = 'You won the game!';
export const loserMessage = 'You lost the game!';

export default function MessageDisplay({won}: MessageDisplayProps) {
  return (
    <Container data-testid="message-container">
      <Title 
        data-testid="message-title" 
        isWon={won}
      >
          {won ? winnerTitle : loserTitle}
      </Title>
      <Message 
        data-testid="message-sub"
      >
        {won ? winnerMessage : loserMessage}
      </Message>
    </Container>
  )
}