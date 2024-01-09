import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FooterDiv = styled.div`
  .color {
    .test {
      font-size: 20px;
    }
  }
`;

const Footer = () => {
  const [datas, setData] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/visitor/count');
        setData(response.data);
        console.log("datas 상태",datas)
      } catch (error) {
        console.error('방문자 수를 가져오는 중 오류 발생:', error);
      }
    };

    // 컴포넌트가 마운트될 때 데이터 가져오기
    fetchData();

    // 5초마다 데이터 업데이트
    //const intervalId = setInterval(fetchData, 5000);

    // 컴포넌트가 언마운트되면 interval 제거
    //return () => clearInterval(intervalId);
  }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행되도록 함

  return (
    <FooterDiv className="color">
      {datas && 
        <div className="test">
          <br />
          방문자 수 : {datas.count} 
        </div>
      }
    </FooterDiv>
  );
}

export default Footer;
