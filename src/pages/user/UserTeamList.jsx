import React from 'react';
import styled from "styled-components";

import UserCheckInList from './UserCheckInList';

const UserTeamList = (props) => {

  const userCheckInList = props.e.memberList

  return (
    <TeamTable>
      <TeamNameTable>{props.e.teamName}</TeamNameTable>
      {
        userCheckInList.map((e, idx)=>{
          return(
            <UserCheckInList key={idx} e={e}></UserCheckInList>
          )
        })
      }
    </TeamTable>
  );
};

const TeamTable = styled.div`
  height : 204px;
  width : 259px;
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  margin : 10px 10px;
  display: inline-block;
  overflow : scroll;
  overflow-x : hidden;
  &::-webkit-scrollbar {
    width: 0px;
  }
  &::-webkit-scrollbar-thumb {
    height: 100%;
    background: black;
    border-radius: 50px;
  }
`

const TeamNameTable = styled.div`
  position: static;
  width: 259px;
  height: 40px;
  background: #1F3A5E;
  border-radius: 8px 8px 0px 0px;
  font-weight: 700;
  font-size: 16px;
  line-height: 40px;
  color: #FFFFFF;
  margin-bottom : 10px
`

export default UserTeamList;