import * as React from 'react';
import styled  from 'styled-components';

interface WrapperProps {
  fontSize?: string;
  theme?: any;
};

const Wrapper = styled.div`
  font-family: ${(props: WrapperProps) => props.theme.primaryFont};
  font-size: ${(props: WrapperProps) => props.theme.fontSize[props.fontSize || 'XL']};
  
  @media (max-width: 500px) {
      font-size: ${(props: WrapperProps) => props.theme.fontSize.XXXL};
  }
`;

export interface CardTitleProps {
    children: string;
};

export default class CardTitle extends React.Component<CardTitleProps, undefined> {
    
    render() {
        return (
            <Wrapper>
                {this.props.children}
            </Wrapper>
        );
    }
}
