import React from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import styled, { css } from "styled-components";

	interface IButtonProps {
    selected: boolean;
	}

const Nav = ({ location, match }: RouteComponentProps) => {

	
  const Button = styled.button<IButtonProps>`
    background: transparent;
    border-radius: 15px;
    border: 0;
    color: black;
    margin: 0.5em;
    margin-top: 3em;
    padding: 0.25em 1em;
    font-weight: 700;
    font-size: 1em;
    ${(props: IButtonProps) =>
      props.selected &&
      css`
        background: gray;
        color: white;
        font-weight: 400;
      `};
  `;

  const contains = (path : any, v: any) => path.endsWith(v);

  return (
    <div>
      <Link to="day">
        <Button selected={contains(location.pathname, "day")}>Day</Button>
      </Link>
      <Link to="week">
        <Button selected={contains(location.pathname, "week")}>Week</Button>
      </Link>
    </div>
  );
};

export default withRouter(Nav);
