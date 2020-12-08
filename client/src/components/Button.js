import styled from "styled-components/macro";

const Button = styled.button`
  height: 3rem;
  width: 150px;
  border-radius: 6px;
  background: var(--secondary-success);
  border: none;
  cursor: pointer;
  color: var(--primary-third);
  font-weight: bold;
  margin: 1.5em 0 3em 0;
  filter: drop-shadow(2px 2px 2px var(--neutral-mid-N60));
`;

export default Button;
