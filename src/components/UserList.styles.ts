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
  padding: 16px 20px;
  background: white;
  border-radius: 12px;
  margin-bottom: 16px;
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
export const EditButton = styled.button`
  padding: 6px 12px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s ease;

  &:hover {
    background-color: #2563eb;
  }
`;

export const SaveButton = styled.button`
  margin-left: 10px;
  padding: 6px 12px;
  background-color: #10b981;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s ease;

  &:hover {
    background-color: #059669;
  }
`;

export const EditInput = styled.input`
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;
