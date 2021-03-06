import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex: 1;
  background: #4C42DB;
  
`;

export const Header = styled.View`
    padding: 32px 32px 48px 32px;
`;

export const HeaderText = styled.Text`
    margin-top: 16px;
    font-weight: bold;
    color: #f0f0f5;
    font-size: 22px;
`;
export const ProfileImage = styled.Image`
    width: 100%;
    height: 80px;
    max-width: 80px;

    border-radius: 40px;
`;
export const TravelerProfile = styled.View`
    flex-direction: row;
    margin-top: 24px;
    justify-content: space-between;
`;
export const ProfileContent = styled.View`
    justify-content: center;
    /* margin-left: 64px; */
    
`;
export const Info = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 180px;
    margin-top: 4px;
`;
export const TextInfo = styled.Text`
    color: #BBC0D0;
    font-weight: bold;
    font-size: 16px;
`;
export const SubTextInfo = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    
`;

export const TripInfo = styled.View`
    padding: 32px 16px;
    flex: 1;
    background: #f0f0f5;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;

`;
export const TripText = styled.Text`
    color: #3B455F;
    font-weight: bold;
    font-size: 22px;
`;

export const TripContainer = styled.View`
    flex-direction: row;
    border-radius: 10px;
    background: #fff;
    margin-top: 24px;
    height: 120px;
    
`;
export const CityContainer = styled.View`
    /* background: #6c63ef; */
    background: #4C42DB;
    width: 80px;
    justify-content: center;
    align-items: center;
    padding: 0 10px;

    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`;
export const CityText = styled.Text`
    color: #fff;
    font-weight: bold;
`;

export const MiddleContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    padding-left: 6px;
  
`;
export const Infos = styled.View`
    /* margin-left: 6px; */
    justify-content: center;
    align-items: center;
`;
export const TripTopText = styled.Text`
    color: #323232;
`;
export const TripBottomText = styled.Text`
    color: #4C42DB;
    
`;
export const AsideContent = styled.View`
    justify-content: center;
    align-items: center;
    margin-left: 8px;
    border-left-width: 2px;
    border-left-color: #c4c4c4;
    padding: 4px;
    
`;

export const AsideTripInfo = styled.View`
    justify-content: center;
    align-items: center;
    
`;
export const AsideTopText = styled.Text`
    color: #323232;
`;
export const AsideBottomText = styled.Text`
    color: #4C42DB;
    font-size: 12px;
`;


export const ContactContainer = styled.View`
    /* position: absolute;
    bottom: 0;
    left: 0; */
    border-top-width: 2px;
    border-top-color: #999;
    background: #fff;
    width: 100%;

    padding: 16px;

    
`;
export const Content = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
export const ButtonContact = styled(RectButton)`
    background: #4C42DB;
    flex-direction: row;
    height: 50px;
    width: 150px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
`;
export const TextContact = styled.Text`
    color: #f0f0f5;
    font-size: 16px;
    font-weight: bold;

    margin-left: 8px;

`;

export const IconContact = styled.Image`
    width: 20px;
    height: 20px;
`;