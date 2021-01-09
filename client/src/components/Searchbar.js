import styled from "styled-components/macro";

const Searchbar = styled.input`
  font-size: 1em;
  min-width: 300px;
  max-width: 340px;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1em;
  background: var(--primary-third);
  border: none;
  color: var(--neutral-dark-N900);
  filter: drop-shadow(2px 2px 2px var(--neutral-mid-N60));
  :focus {
    outline: none;
  }
`;

export default Searchbar;
