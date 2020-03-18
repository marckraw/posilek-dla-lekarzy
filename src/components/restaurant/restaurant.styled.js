import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { Colors } from '../../theme/colors'

export const Container = styled.div`
  margin: 20px;
  border: 1px solid ${Colors.black_10};
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 0;
  }
`;

export const Name = styled.div`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 8px;
`;

export const Address = styled.div`
  font-size: 14px;
  margin-bottom: 8px;
`;

const BaseButton = styled(Button).attrs({
  variant: 'outlined',
})`
  text-decoration: none;
  padding: 15px 20px;
  flex: 1;
`;


export const PhoneNumber = styled(BaseButton)`
`;

export const Url = styled(BaseButton)`
  && {
    margin-right: 8px;
  }
`;

export const Actions = styled.div`
  display: flex;
  margin-top: 8px;
`;
