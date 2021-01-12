import styled from "styled-components/macro";

const Searchbar = styled.input`
  width: 100%;
  max-width: 500px;
  font-size: 1em;
  border-radius: 6px;
  padding: 1rem;
  margin: 1em auto;
  background: var(--primary-third);
  border: none;
  color: var(--neutral-mid-N400);
  filter: drop-shadow(2px 2px 2px var(--neutral-mid-N60));
  :focus {
    outline: none;
  }
  @media (max-width: 768px) {
    max-width: 310px;
  }
`;

export default Searchbar;
