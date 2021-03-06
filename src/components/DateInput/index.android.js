import React, { useMemo } from 'react';

import DateTimePicker, { DatePickerAndroid } from '@react-native-community/datetimepicker';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, DateButton, DateText } from './styles';

export default function DateInput({ date, onChange }) {
    const dateFormatted = useMemo(
        () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
        [date]
    );

    async function handleOpenPicker() {
        setDate = (event, date) => {
            if (date !== undefined) {
                const selectedDate = new Date(date);
            }
          };
         
          <RNDateTimePicker mode="date" onChange={this.setDate} />;

    }

    return (
        <Container>
            <DateButton onPress={handleOpenPicker}>
                <Icon name="event" color="#FFF" size={20} />
                <DateText>{dateFormatted}</DateText>
            </DateButton>
        </Container>
    );
}