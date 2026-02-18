import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  gap: 12px;
  margin-bottom: 22px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid #334155;
  background: #1e293b;
  color: #f1f5f9;
  font-size: 14px;
  transition: 0.2s ease;

  &:focus {
    border-color: #38bdf8;
    box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.2);
    outline: none;
  }

  &::placeholder {
    color: #64748b;
  }
`;

export const Button = styled.button`
  padding: 12px 20px;
  border-radius: 12px;
  border: none;
  font-weight: 600;
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  color: white;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 25px rgba(6, 182, 212, 0.3);
  }

  &:active {
    transform: scale(0.96);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.p`
  color: #f87171;
  font-size: 13px;
`;
