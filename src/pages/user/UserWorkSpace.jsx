/* eslint-disable */
import React from 'react';
import styled from "styled-components";
import { useDispatch } from 'react-redux';

import { editWorkSpace } from '../../redux/modules/teamBoard';

import workSpaceImg from '../../assets/img/workSpace.svg'
import editBtn from '../../assets/img/editBtn.svg'

const UserWorkSpace = (props) => {

  const dispatch = useDispatch();

  const [update, setupdate] = React.useState(false);

  const [work, setWork] = React.useState();

  const handleChange = (event) => {
    setWork(event.target.value);
  };

  const workSpace = props.TeamBoard.workSpace
  const teamId = props.TeamBoard.teamId

  const split = workSpace?.split("\n").map((line) => {
    return (
      <span>
        {line}
        <br />
      </span>
    );
  })

  return (
    <WorkspaceWrapper>
      <UpBar>
        <img src={workSpaceImg} style={{margin : '12.5px 0px 8.5px 12px'}} /> 
        {
          update === false
          ? <img 
            src={editBtn}
            style={{margin : '8px 8px 4px 0px'}} 
            onClick={()=>{
            setupdate(!update)}
            }></img>
          :<p 
            src={editBtn}
            style={{margin : '8px 10px 4px 0px', fontWeight : '700', color : '#1F3A5E'}} 
            onClick={() => {
            setupdate(!update)
            dispatch(editWorkSpace(teamId, work));
          }}>Done</p>
        }    
      </UpBar>
      <hr style={{width : '99%', margin : 'auto', border : '1px solid #E0E0E0'}}/>
        {
          update === false
          ? <Box>{split}</Box>
          :<UpdateBox defaultValue={workSpace} onChange={handleChange}></UpdateBox>
        }    

    </WorkspaceWrapper>
  );
};

const WorkspaceWrapper = styled.div`
  width : auto;
  height : 147px;
  margin : 0 24px 24px 32px;
  background-color: #FFFFFF;
  border-radius: 16px;
  // float : left;
  @media screen and (min-width: 2560px) {
    height: 350px;
  }
`

const UpBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Box = styled.div`
  width: 99%;
  height: 96px;
  margin : 6px auto;
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    width: 4px;
    background: #c4c4c4;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transition;
  }
  @media screen and (min-width: 2560px) {
    height: 290px;
    font-size: 20px;
  }
`

const UpdateBox = styled.textarea`
  width: 99%; 
  height: 85px;
  background-color : white;
  display : block;
  margin : 6px auto;
  border : 1px solid black;
  border-radius : 10px;
  resize : none;
  @media screen and (min-width: 2560px) {
    height: 290px;
    font-size: 20px;
  }
`

export default UserWorkSpace;