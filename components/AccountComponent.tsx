import React from 'react';
import styled from 'styled-components';

const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
  padding: 10px;
  margin: 10px;
  width: 400px;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

interface AccountProps {
  username: string;
  email: string;
  profileImage: string;
}

const Account: React.FC<AccountProps> = ({ username, email, profileImage }) => (
  <AccountContainer>
    <h1>Account Information</h1>
    <ProfileContainer>
      <ProfileImage src={profileImage} alt={`${username}'s profile picture`} />
      <h2>{username}</h2>
      <p>Email: {email}</p>
    </ProfileContainer>
  </AccountContainer>
);

export default Account;
