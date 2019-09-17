import React from "react";
import { createSelector } from "reselect";
import styled, { css } from "styled-components";
import { IWeatherState, IDate } from "../../Interfaces";
import { useSelector } from "react-redux";
import { ImgStyled, SmallText, Break } from "../../Controls";
import { getDayName, getDateFormatted, getColorByAbbr } from "../../Helpers";

const WeekDay = (props: { day: IDate }) => {
  const {
    pic,
    applicable_date,
    weather_state_abbr,
    temp_min,
    temp_max
  } = props.day;

  const LittleImage = styled(ImgStyled)`
    width: 3rem;
    margin: 1rem;
  `;

  const Block = styled.div`
    display: flex;
    flex-wrap: wrap;
    ${(props: any) => {
      return (
        props.color &&
        css`
          background-color: ${props.color};
        `
      );
    }};
  `;

  const Left = styled.div`
    margin-left: 2rem;
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
  `;

  const TopDiv = styled(SmallText)`
    padding-top: 20px;
  `;
  const BottmonDiv = styled(SmallText)`
    padding-bottom: 20px;
  `;

  const Right = styled.div`
    padding-right: 2rem;
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  `;

  const VerticallyCentered = styled(SmallText)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-right: 1rem;
  `;

  return (
    <Block color={getColorByAbbr(weather_state_abbr)}>
      <Left>
        <TopDiv>{getDayName(applicable_date)}</TopDiv>
        <Break />
        <BottmonDiv>{getDateFormatted(applicable_date)}</BottmonDiv>
      </Left>
      <Right>
        <VerticallyCentered>
          {temp_max.toFixed()}°/{temp_min.toFixed()}°
        </VerticallyCentered>
        <div>
          <LittleImage src={pic} alt="pic" />
        </div>
      </Right>
      <div style={{ clear: "both" }} />
    </Block>
  );
};

const Week = () => {
  const forecastSelector = createSelector(
    (x: any) => x.forecast,
    (x: IWeatherState) => x
  );

  const weather = useSelector(forecastSelector);

  if (weather.days.length === 0) return <div />;

  const renderBlock = weather.days.map(x => <WeekDay day={x} key={x.id} />);

  return <div>{renderBlock}</div>;
};

export default Week;
