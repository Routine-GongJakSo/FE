import React ,{ useState } from 'react';
import styled from "styled-components";

import UserSidebar from '../components/UserSideBar';
import StopWatch from '../components/StopWatch';
import UserTeamList from './UserTeamList';

const UserCheckIn = () => {

  const [team, setTeam] = React.useState(
    [
      {
          teamName : "장미반",
          memberList : [
                {
                      userId : 2,
                      userName : "짱구",
                      userEmail : "zzangubrother",
                      phoneNumber : "010-1234-5678"
                },
                {
                      userId : 3,
                      userName : "짱구",
                      userEmail : "zzangubrother",
                      phoneNumber : "010-5346-8907"
                },
                {
                      userId : 4,
                      userName : "짱아",
                      userEmail : "zzangusister",
                      phoneNumber : "010-7777-9777"
                },
                {
                  userId : 2,
                  userName : "짱구",
                  userEmail : "zzangubrother",
                  phoneNumber : "010-1234-5678"
                },
                {
                      userId : 3,
                      userName : "짱구",
                      userEmail : "zzangubrother",
                      phoneNumber : "010-5346-8907"
                },
                {
                      userId : 4,
                      userName : "짱아",
                      userEmail : "zzangusister",
                      phoneNumber : "010-7777-9777"
                },
                {
                  userId : 2,
                  userName : "짱구",
                  userEmail : "zzangubrother",
                  phoneNumber : "010-1234-5678"
            },
            {
                  userId : 3,
                  userName : "짱구",
                  userEmail : "zzangubrother",
                  phoneNumber : "010-5346-8907"
            },
            {
                  userId : 4,
                  userName : "짱아",
                  userEmail : "zzangusister",
                  phoneNumber : "010-7777-9777"
            },
          ]
      },
      {
        teamName : "튤립반",
        memberList : [
              {
                    userId : 2,
                    userName : "짱구",
                    userEmail : "zzangubrother"
              },
              {
                    userId : 3,
                    userName : "짱구",
                    userEmail : "zzangubrother"
              },
              {
                    userId : 4,
                    userName : "짱아",
                    userEmail : "zzangusister"
              },
        ]
    },
    {
      teamName : "새싹반",
      memberList : [
            {
                  userId : 2,
                  userName : "짱구",
                  userEmail : "zzangubrother"
            },
            {
                  userId : 3,
                  userName : "짱구",
                  userEmail : "zzangubrother"
            },
            {
                  userId : 4,
                  userName : "짱아",
                  userEmail : "zzangusister"
            },
      ]
  },{
    teamName : "잡초반",
    memberList : [
          {
                userId : 2,
                userName : "짱구",
                userEmail : "zzangubrother"
          },
          {
                userId : 3,
                userName : "짱구",
                userEmail : "zzangubrother"
          },
          {
                userId : 4,
                userName : "짱아",
                userEmail : "zzangusister"
          },
    ]
}
    ])

  return (
    <React.Fragment>
      <div style={{width : "100%", height : '1080px'}}>
        <UserSidebar />
        <div style={{width: "81.3%", height : "1080px", float : "left", backgroundColor : "#F3F6F9"}}>
          <div style={{float : "left", width : "50%", backgroundColor : "red"}}>안녕?</div>

          <StopWatch></StopWatch>

          <CheckInList>
            {
              team.map((e, idx)=>{
                return(
                  <UserTeamList key={idx} e={e}></UserTeamList>
                )
              })
            }
            {
              team.map((e, idx)=>{
                return(
                  <UserTeamList key={idx} e={e}></UserTeamList>
                )
              })
            }
            {
              team.map((e, idx)=>{
                return(
                  <UserTeamList key={idx} e={e}></UserTeamList>
                )
              })
            }
          </CheckInList>
        </div>
      </div>
    </React.Fragment>
  );
};

const CheckInList = styled.div`
  border : 1px solid black;
  border-radius : 5px;
  width : 95%;
  height : 70%;
  margin : 5px auto;
  padding : 10px;
  text-align: center;
  overflow : scroll;
  overflow-x : hidden;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    height: 10%;
    background: gray;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: transition;
  }
`

export default UserCheckIn;