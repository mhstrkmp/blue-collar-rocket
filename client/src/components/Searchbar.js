import styled from "styled-components/macro";

const Searchbar = styled.input`
  height: 2rem;
  width: 340px;
  border-radius: 6px;
  padding: 0 1rem;
  background: var(--primary-third);
  border: none;
  color: var(--neutral-dark-N900);
  font-weight: bold;
  filter: drop-shadow(2px 2px 2px var(--neutral-mid-N60));
`;

export default Searchbar;
