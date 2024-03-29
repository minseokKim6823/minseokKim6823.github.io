import React from "react";
import styled from 'styled-components';

const TemplateBlock = styled.div`
    width: 512px;
    height: 768px;

    position : relative;
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8ps 0 rgba(0, 0, 0, 0.04);
    
    margin: 0 auto;

    margin-top: 96px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
`;

const Template=({children}) =>{
    return <TemplateBlock>{children}</TemplateBlock>;
}

export default Template;