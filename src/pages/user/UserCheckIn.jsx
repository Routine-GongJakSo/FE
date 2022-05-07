import React ,{ useState } from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import UserSidebar from '../../components/UserSideBar';
import StopWatch from '../../components/StopWatch';
import UserTeamList from './UserTeamList';

import mascot from '../../img/mascot.svg';
import studyData from '../../img/studydata.svg';

import { loadCheckList } from '../../redux/modules/CheckIn';

const UserCheckIn = () => {

  const dispatch = useDispatch();

  // UserList 조회를 위한 useEffect
  React.useEffect(() => {
    dispatch(loadCheckList("1주차"));
  },[]);

  const teamList = useSelector((state) => state);

  console.log(teamList);


  const [team, setTeam] = React.useState(
    [
      {
          teamName : "장미반",
          memberList : [
                {
                      userId : 2,
                      userName : "신짱구",
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
                      userName : "신짱아",
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
                      userName : "신짱구",
                      userEmail : "zzangubrother",
                      phoneNumber : "010-5346-8907"
                },
                {
                      userId : 4,
                      userName : "신짱아",
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
                  userName : "신짱구",
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
                    userName : "신짱구",
                    userEmail : "zzangubrother"
              },
              {
                    userId : 3,
                    userName : "짱구",
                    userEmail : "zzangubrother"
              },
              {
                    userId : 4,
                    userName : "신짱아",
                    userEmail : "zzangusister"
              },
        ]
    },
    {
      teamName : "새싹반",
      memberList : [
            {
                  userId : 2,
                  userName : "신짱구",
                  userEmail : "zzangubrother"
            },
            {
                  userId : 3,
                  userName : "짱구",
                  userEmail : "zzangubrother"
            },
            {
                  userId : 4,
                  userName : "신짱아",
                  userEmail : "zzangusister"
            },
      ]
  },{
    teamName : "잡초반",
    memberList : [
          {
                userId : 2,
                userName : "신짱구",
                userEmail : "zzangubrother"
          },
          {
                userId : 3,
                userName : "짱구",
                userEmail : "zzangubrother"
          },
          {
                userId : 4,
                userName : "신짱아",
                userEmail : "zzangusister"
          },
    ]
}
    ])

  return (
    <React.Fragment>
      <div style={{display : 'flex'}}>
        <BackgroundDiv>
          <UserSidebar />
            <UpDataBox>
              <UpDataLeftBox>
                <img src={mascot} style={{height : 'auto' ,margin : '30px 39px', float : 'left'}}></img>
                <StudyData>
                  <div style={{height : '70%'}}>
                    <p style={{fontSize : '26px', fontWeight : '400'}}>
                      홍길동님 지금까지 <span style={{color : '#FF5F00', fontWeight : '600'}}>000</span> 시간 <br />학습하셨어요!
                    </p>
                  </div>
                  <div style={{marginLeft : '55%'}}>
                    <img src={studyData} style={{}}></img>
                  </div>
                </StudyData>
              </UpDataLeftBox>
              
              <UpDataRightBox>
                <StopWatch>
                </StopWatch>  
              </UpDataRightBox>

            </UpDataBox>

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
        </BackgroundDiv>
      </div>
    </React.Fragment>
  );
};

const BackgroundDiv = styled.div`
  height : 100vh;
  float : left;
  background-color : #F4F6F9;
  flex-grow : 1;
`

const UpDataBox = styled.div`
  height : 23%;
  margin-top : 4%;
  display : flex;
  // background-color : gray;
`

const UpDataLeftBox = styled.div`
  width : 50%;
  height : 100%;
  float : left;
  display : flex;
  align-items: center;
`

const UpDataRightBox = styled.div`
  width : 50%;
  height : 100%;
  float : left;
  // display : flex;
  // align-items: center;
`

const StudyData = styled.div`
  height : 140px;
  width : 400px;
  float : left;
  box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;
  background-color : white;
  border-radius : 40px;
  padding : 20px;
`

const CheckInList = styled.div`
  width : auto;
  height : 800px;
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
  @media screen and (max-height: 1000px) {
    height : 500px;
  }
  @media screen and (max-height: 650px) {
    height : 200px;
  }
`

export default UserCheckIn;