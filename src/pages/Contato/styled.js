import styled, { css, keyframes } from "styled-components"; // Adicione css e keyframes

// ... todos os seus estilos existentes (ContactPageContainer, Form, etc.) ...

// Adicione este novo componente de estilo no final do arquivo

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

export const Notification = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 1.5rem;
  background-color: ${({ type }) => (type === "error" ? "#fb4121" : "#2ecc71")};
  color: white;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  z-index: 1000;
  transition: transform 0.5s ease-in-out;
  transform: translateY(-100%); /* Começa escondido acima da tela */

  /* Animação para mostrar e esconder */
  ${({ show }) =>
    show &&
    css`
      animation: ${slideIn} 0.5s forwards;
    `}

  ${({ show }) =>
    !show &&
    css`
      animation: ${slideOut} 0.5s forwards;
    `}

  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.8rem 1rem;
  }
`;

export const ContactPageContainer = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  background-color: #fdfaf7; /* Cor de fundo suave do exemplo */
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 2rem;
`;

export const FormTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
  font-family: "Lucida Handwriting", "Brush Script MT", normal;
  font-size: clamp(2rem, 5vw, 2.5rem);
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Coluna única em telas menores */
  }
`;

export const FormGroup = styled.div`
  width: 100%;
`;

const commonInputStyles = `
  width: 100%;
  padding: 0.9rem 1.2rem;
  border-radius: 30px; /* Bordas bem arredondadas */
  border: 1px solid #e0e0e0;
  background-color: #fff;
  font-size: 1rem;
  color: #333;
  transition: border-color 0.3s, box-shadow 0.3s;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    border-color: #1bb7d1;
    box-shadow: 0 0 0 3px rgba(27, 183, 209, 0.2);
  }
`;

export const Input = styled.input`
  ${commonInputStyles}
`;

export const Select = styled.select`
  ${commonInputStyles}
  appearance: none;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%208l5%205%205-5z%22%20fill%3D%22%23999%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
`;

export const Textarea = styled.textarea`
  ${commonInputStyles}
  border-radius: 20px; /* Borda um pouco menos arredondada para o textarea */
  resize: vertical;
  min-height: 150px;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0.5rem 0;

  label {
    font-size: 0.9rem;
    color: #555;

    a {
      color: #1bb7d1;
      text-decoration: underline;
      &:hover {
        color: #158b9d;
      }
    }
  }
`;

export const StyledCheckbox = styled.input`
  width: 18px;
  height: 18px;
  accent-color: #1bb7d1; /* Cor do checkbox quando marcado */
`;

export const Button = styled.button`
  align-self: flex-end; /* Alinha o botão à direita */
  padding: 0.9rem 2rem;
  background-color: #3c3c3c; /* Cor escura do botão */
  color: #fff;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover:not(:disabled) {
    background-color: #2a2a2a;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #999;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    align-self: center; /* Centraliza o botão em telas menores */
    width: 100%;
  }
`;
