import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #263238;
  color: #eceff1;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.25);
`;

const BountyList = styled.div`
  margin-top: 20px;
`;

const BountyItem = styled.div`
  background: #37474f;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const Title = styled.h2`
  color: #fdd835;
`;

const Description = styled.p`
  color: #b0bec5;
`;

const Reward = styled.span`
  display: inline-block;
  background: #00c853;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  margin-top: 10px;
`;

// Replace this with your actual Bounty type
type Bounty = {
  id: string;
  title: string;
  description: string;
  reward: string;
};

const BountyBoard = () => {
  const [bounties, setBounties] = useState<Bounty[]>([]);

  useEffect(() => {
    // Fetch the bounties from an API or service
    // For demonstration, we'll use mock data
    const mockBounties: Bounty[] = [
      {
        id: '1',
        title: 'New Blockchain Explorer',
        description: 'Create a new explorer that can index and search transactions faster than current solutions.',
        reward: '10 ETH',
      },
      // Add more bounties here
    ];

    setBounties(mockBounties);
  }, []);

  return (
    <Container>
      <Title>Hackathon Bounty Board</Title>
      <BountyList>
        {bounties.map((bounty) => (
          <BountyItem key={bounty.id}>
            <h3>{bounty.title}</h3>
            <Description>{bounty.description}</Description>
            <Reward>{bounty.reward}</Reward>
          </BountyItem>
        ))}
      </BountyList>
    </Container>
  );
};

export default BountyBoard;

/**
 * For BountyBoard.tsx to be effective:

Implement a fetch from a backend service or smart contract to retrieve the latest bounties.
Include functionality for users to submit their projects or progress on bounties.
Consider real-time updates, perhaps using WebSockets, to show new bounties as they are posted or when bounties are claimed.
Add search and filter capabilities to help users find the most relevant bounties for them.
Integrate a voting system if the community helps decide on bounty winners.
Provide user authentication to ensure only eligible participants can claim and submit for bounties.
Include detailed views for each bounty with submission guidelines, evaluation criteria, and submission deadlines.
The bounty board would become a central feature for community engagement in your Netsoul game environment. 
It should promote a sense of competition and accomplishment, encouraging participation and contribution within the game's ecosystem.
 */