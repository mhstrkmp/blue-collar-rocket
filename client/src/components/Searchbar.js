import styled from "styled-components/macro";

const Searchbar = styled.input`
  min-width: 300px;
  max-width: 340px;
  border-radius: 6px;
  padding: 1rem;
  background: var(--primary-third);
  border: none;
  color: var(--neutral-dark-N900);
  filter: drop-shadow(2px 2px 2px var(--neutral-mid-N60));
`;

export default Searchbar;
