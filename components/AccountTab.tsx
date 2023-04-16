import React from 'react';
import styled from 'styled-components';

const AccountTabContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
`;

const AccountTabButton = styled.button`
  background-color: transparent;
  color: #333;
  border: none;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    text-decoration: underline;
  }
`;


interface AccountTabProps {
    username: string;
    onLogout: () => void;
  }
  
  const AccountTab: React.FC<AccountTabProps> = ({ username, onLogout }) => (
    <AccountTabContainer>
      <div>{username}</div>
      <AccountTabButton onClick={onLogout}>Logout</AccountTabButton>
    </AccountTabContainer>
  );

export default AccountTab;
