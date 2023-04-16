import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const FeedItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid gray;
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FeedItemContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 10px;

  @media (min-width: 768px) {
    margin-left: 20px;
  }
`;

const FeedItemUsername = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const FeedItemDate = styled.div`
  font-size: 12px;
  color: gray;
  margin-bottom: 10px;
`;

const FeedItemTitle = styled.h2`
  margin-bottom: 10px;
`;

const FeedItemDescription = styled.p`
  margin-bottom: 10px;
`;

const FeedItemEquipment = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const FeedItemEquipmentItem = styled.li`
  background-color: #f5f5f5;
  border-radius: 20px;
  padding: 5px 10px;
  margin-right: 10px;
  margin-bottom: 5px;
  font-size: 12px;
`;

interface FeedItemType {
  id: string;
  username: string;
  date: Date;
  title: string;
  description: string;
  equipment: string[];
}

const FeedItemComponent: React.FC<FeedItemType> = ({
  username,
  date,
  title,
  description,
  equipment,
}) => (
  <FeedItem>
    <div>
      <img
        src="https://via.placeholder.com/50x50.png?text=Profile+Pic"
        alt="Profile Pic"
        style={{ borderRadius: "50%", marginRight: "10px" }}
      />
    </div>
    <FeedItemContent>
      <FeedItemUsername>{username}</FeedItemUsername>
      <FeedItemDate>{format(date, "dd MMM yyyy")}</FeedItemDate>
      <FeedItemTitle>{title}</FeedItemTitle>
      <FeedItemDescription>{description}</FeedItemDescription>
      <FeedItemEquipment>
        {equipment.map((item, index) => (
          <FeedItemEquipmentItem key={index}>{item}</FeedItemEquipmentItem>
        ))}
      </FeedItemEquipment>
    </FeedItemContent>
  </FeedItem>
);

interface FeedProps {
  items: FeedItemType[];
}

const Feed: React.FC<FeedProps> = ({ items }) => (
  <FeedContainer>
    {items.map((item) => (
      <FeedItemComponent key={item.id} {...item} />
    ))}
  </FeedContainer>
);

export default Feed;
