import React from "react";
import styled from "styled-components";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";

const PostCard = () => {
  return (
    <> 
    
    <Container>
      <LocationBox>동네질문</LocationBox>
      <ContentBox>
        <div style={{color:"orange"}}>Q.</div>
        <div>체육관에서 같이 배드민턴 치실 분 구합니다~</div>
      </ContentBox>
      <img style={{margin:"right", maxWidth:"200px"}} src="https://t1.daumcdn.net/cfile/tistory/202FA7334ED73EDD10"></img>
      <WriterInfoBox>작성자,동네
        <div style={{marginLeft:"auto"}}>11시간전</div></WriterInfoBox>
      <hr />
      <div style={{ display: "flex" }}>
        <IconBox>
          <TaskAltIcon color="action" />
          <div>궁금해요</div>
        </IconBox>
        <IconBox>
          <MapsUgcOutlinedIcon color="action" />
          답변
        </IconBox>
        <div style={{marginLeft:"auto"}}>😀1</div>
      </div>
    </Container>

    <Container>
      <LocationBox>동네질문</LocationBox>
      <ContentBox>
        <div style={{color:"orange"}}>Q.</div>
        <div>어후 졸려</div>
      </ContentBox>
      <WriterInfoBox>작성자,동네
        <div style={{marginLeft:"auto"}}>14시간전</div></WriterInfoBox>
      <hr />
      <div style={{ display: "flex" }}>
        <IconBox>
          <TaskAltIcon color="action" />
          <div>궁금해요</div>
        </IconBox>
        <IconBox>
          <MapsUgcOutlinedIcon color="action" />
          답변
        </IconBox>
        <div style={{marginLeft:"auto"}}>👍️😀2000</div>
      </div>
    </Container>
    

    <Container>
      <LocationBox>동네질문</LocationBox>
      <ContentBox>
        <div style={{color:"orange"}}>Q.</div>
        <div>어후 졸려</div>
      </ContentBox>
      <WriterInfoBox>작성자,동네
        <div style={{marginLeft:"auto"}}>14시간전</div></WriterInfoBox>
      <hr />
      <div style={{ display: "flex" }}>
        <IconBox>
          <TaskAltIcon color="action" />
          <div>궁금해요</div>
        </IconBox>
        <IconBox>
          <MapsUgcOutlinedIcon color="action" />
          답변
        </IconBox>
        <div style={{marginLeft:"auto"}}>👍️😀2000</div>
      </div>
    </Container>


    <Container>
      <LocationBox>동네질문</LocationBox>
      <ContentBox>
        <div style={{color:"orange"}}>Q.</div>
        <div>어후 졸려</div>
      </ContentBox>
      <WriterInfoBox>작성자,동네
        <div style={{marginLeft:"auto"}}>14시간전</div></WriterInfoBox>
      <hr />
      <div style={{ display: "flex" }}>
        <IconBox>
          <TaskAltIcon color="action" />
          <div>궁금해요</div>
        </IconBox>
        <IconBox>
          <MapsUgcOutlinedIcon color="action" />
          답변
        </IconBox>
        <div style={{marginLeft:"auto"}}>👍️😀2000</div>
      </div>
    </Container>


    <Container>
      <LocationBox>동네질문</LocationBox>
      <ContentBox>
        <div style={{color:"orange"}}>Q.</div>
        <div>어후 졸려</div>
      </ContentBox>
      <WriterInfoBox>작성자,동네
        <div style={{marginLeft:"auto"}}>14시간전</div></WriterInfoBox>
      <hr />
      <div style={{ display: "flex" }}>
        <IconBox>
          <TaskAltIcon color="action" />
          <div>궁금해요</div>
        </IconBox>
        <IconBox>
          <MapsUgcOutlinedIcon color="action" />
          답변
        </IconBox>
        <div style={{marginLeft:"auto"}}>👍️😀2000</div>
      </div>
    </Container>


    

    </>
   
  );
};

export default PostCard;
const Container = styled.div`
  border-bottom: 8px solid #dee2e6;
  display: flex;
  flex-direction: column;
  min-height: 60px;
  padding: 20px;
`;

const LocationBox = styled.div`
  font-size: 13px;
  border: 1px solid none;
  border-radius: 3px;
  background-color: #f1f3f5;
  /* width:80px; */
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  height: 25px;
  padding: 1px 4px 1px 4px;
`;

const WriterInfoBox = styled.div`
 color: gray;
 margin-top: 20px;
 display: flex;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
`;

const ContentBox = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 20px;
`
