import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';

import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';

import { Container, Avatar, Name, Time, SubmitButton } from './styles';

import api from '~/services/api';

export default function Confirm({ navigation }) {
    const provider = navigation.getParam('provider');    
    const time = navigation.getParam('time');

    const dateFormatted = useMemo(
        () => formatRelative(parseISO(time), new Date(), { locale: pt }),
        [time]
    );

    function handleAddAppointment() {
        api.post('appointments', {
            provider_id: provider.id, 
            date: time
        }); 

        navigation.navigate('Dashboard');
    }

    return (
        <Background>
            <Container>
                <Avatar
                    source={{
                        uri: provider.avatar
                            ? provider.avatar.url
                            : 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                <Name>{provider.name}</Name>
                <Time>{dateFormatted}</Time>
                <SubmitButton onPress={handleAddAppointment}>
                    Confirmar agendamento
                </SubmitButton>
            </Container>
        </Background>
    );
}

Confirm.navigationOptions = ({ navigation }) => ({
    title: 'Confirmar Agendamento',
    headerLeft: () => (
        <TouchableOpacity
            onPress={() => {
                navigation.goBack();
            }}
        >
            <Icon name="chevron-left" size={20} color="#FFF" />
        </TouchableOpacity>
    ),
});