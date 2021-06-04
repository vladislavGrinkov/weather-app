import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type TProps = {
  logout: () => void
}

export const Header: FC<TProps> = ({ logout }: TProps) => {
  const a = '1';
  return (
    <nav style={{ background: '#fff' }}>
      <Wrapper>
        <Link className="brand-logo" to="/" style={{ color: 'black' }}>Weather App</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/" style={{ color: 'black' }}>О нас</Link></li>
          <li><Link to="/" style={{ color: 'black' }}>О нас</Link></li>
          <li><Link to="/login" style={{ color: 'black' }} onClick={logout}>Выход</Link></li>
        </ul>
      </Wrapper>
    </nav>
  );
};

export const Wrapper = styled.div`
  margin: 0 150px;
`;
