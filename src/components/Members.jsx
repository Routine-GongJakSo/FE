import React from 'react';
import styled from 'styled-components';

const Members = (props) => {
  return (
    <Userdata>
      {props.e.userName}
    </Userdata>
  );
};

const Userdata = styled.div`
  width : 200px;
  height : 30px;
  border : 1px solid black;
  border-radius : 5px;
  margin-top : 10px;
  text-align : center;
  line-height : 30px;
`

export default Members;