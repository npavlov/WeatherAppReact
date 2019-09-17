import React from "react";
import { createSelector } from "reselect";
import styled from "styled-components";
import { IWeatherState } from "../../Interfaces";
import { useSelector } from "react-redux";
import { ImgStyled, BigText, SmallText, Break } from "../../Controls";
import { getFormatedDate } from "../../Helpers";

const Today = () => {
  const forecastSelector = createSelector(
    (x: any) => x.forecast,
    (x: IWeatherState) => x
  );

  const MiddleImage = styled(ImgStyled)`
    width: 10rem;
    margin: 1rem;
    margin-top: 3rem;
  `;

  const weather = useSelector(forecastSelector);

  if (weather.days.length === 0) return <div />;

  const { pic, temp_avg } = weather.days[0];

  const TopBlock = styled.div`
    height: 10%;
  `;

  const MiddleBlock = styled.div`
    height: 60%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  `;

  const BottomBlock = styled.div`
    height: 15%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-wrap: wrap;
  `;

  const Space = styled(Break)`
    height: 1rem;
  `;

  return (
    <>
      <TopBlock>
        <MiddleImage src={pic} alt="today" />
      </TopBlock>
      <MiddleBlock>
        <BigText>{temp_avg.toFixed()}°</BigText>
      </MiddleBlock>
      <BottomBlock>
        <SmallText>{getFormatedDate(new Date())}</SmallText>
        <Break />
        <SmallText>{weather.timezone}</SmallText>
        <Space />
      </BottomBlock>
    </>
  );
};

export default Today;
