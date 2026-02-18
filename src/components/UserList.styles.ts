import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 500px;
  margin: 40px auto;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 18px;
  background: white;
  border-radius: 10px;
  margin-bottom: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
  }
`;
export const DeleteButton = styled.button`
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background: #ffecec;
  color: #d9363e;
  transition: all 0.2s ease;

  &:hover {
    background: #ffd6d6;
  }

  &:active {
    transform: scale(0.95);
  }
`;
