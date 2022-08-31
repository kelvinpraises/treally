import React from "react";
import styled from "styled-components";

interface IAvatarProps {
  className?: any;
  imgUrl?: string;
  id?: string;
  height: string;
  width: string;
}

interface ISImgContainerProps {
  className?: any;
  height: string;
  width: string;
}

const SImgContainer = styled.div<ISImgContainerProps>`
  display: grid;
  place-items: center;
  border-radius: 50%;
  /* background-color: #282a30; */
  min-width: ${(props) => props.width};
  height: ${(props) => props.height};
  overflow: hidden;
`;

const Avatar: React.FC<IAvatarProps> = ({
  className,
  imgUrl,
  id,
  height,
  width,
}) => {
  if (!imgUrl) {
    return (
      <SImgContainer width={width} height={height}>
        <img height="45" src="Profile.png" alt="chat" />
      </SImgContainer>
    );
  }

  return (
    <SImgContainer width={width} height={height}>
      <img className={className} src={imgUrl} width={width} />
    </SImgContainer>
  );
};

export default Avatar;
