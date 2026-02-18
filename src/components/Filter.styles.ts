import styled from "styled-components";

export const FilterInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid #334155;
  margin-bottom: 22px;
  background: #1e293b;
  color: #f1f5f9;
  transition: 0.2s ease;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
    outline: none;
  }
`;
