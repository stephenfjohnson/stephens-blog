import React from 'react';
import styled from 'styled-components';

const Stamp = props => {
  return (
    <StyledStamp>
      <div className="date-month-day">
        <small>{props.monthDay}</small>
      </div>
      <div className="date-year">
        <small>{props.year}</small>
      </div>
      <div className="name">
        <small>stephen</small>
      </div>
      <div className="x">
        <small>x</small>
      </div>
    </StyledStamp>
  );
};

export default Stamp;

const StyledStamp = styled.div`
  margin-right: 2rem;
  border: 1px solid white;
  width: 100px;
  transform: rotate(-40deg);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'date-year date-month-day date-month-day date-month-day ' 'name name name x';
  @media only screen and (max-width: 800px) {
    margin: 2rem 0 3rem 0;
  }
  div {
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  small {
    font-family: Montserrat, sans-serif;
    text-transform: uppercase;
    text-align: center;
  }

  .date-month-day {
    grid-area: date-month-day;
  }

  .date-year {
    grid-area: date-year;
  }

  .name {
    grid-area: name;
  }

  .x {
    grid-area: x;
  }
`;
