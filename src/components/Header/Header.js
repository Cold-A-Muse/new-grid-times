import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <ActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroup>
        <Logo />
        <SubscribeContainer>
          <Button>Subscribe</Button>
          <Link>Already a member?</Link>
        </SubscribeContainer>
      </MainHeader>
    </header>
  );
};


const SubscribeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const Link = styled.a`
  cursor: pointer;
  font-family: 'Crimson Pro';
  font-style: italic;
  color: var(--color-gray-900);
  text-decoration: underline;
`

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  & ${ActionGroup} {
    display: none;
  }

  & ${SubscribeContainer} {
    display: none;
  }

  @media ${QUERIES.laptopAndUp} {
    justify-content: space-between;

    & ${ActionGroup} {
      display: flex;
    }

    & ${SubscribeContainer} {
      display: flex;
    }
  }
`;

export default Header;
