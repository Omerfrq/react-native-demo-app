// import { useAnalytics } from '@/src/hooks/useAnalytics';
// import { useTypedTranslation } from '@/src/hooks/useTypedTranslations';
// import { RootState } from '@/src/redux/store';
// import { MenuItemOption } from '@/src/types/Menu/Menu';
import Helpers from 'foodbit-helpers';
// import { Radio } from '@mui/material';
// import { useRouter } from 'next/router';
// import { DisplayCurrency } from '../../DisplayCurrency';
import {RadioButton} from 'react-native-paper';
import {Text, View, TextInput, Button} from 'react-native';
import React from 'react';

export const SingleSelectionItem = ({option}) => {
  const {availability, name, price, id} = option || {};

  // const router = useRouter();

  // const {t} = useTypedTranslation('common');

  const {labelOrDefault} = Helpers.StringsHelper;

  // const {logEvent} = useAnalytics();
  const {isUnAvailable, isTimeAvailable, isHidden} = availability || {};

  // const {primaryLanguage, merchantInfo} = useSelector(
  //   (state: RootState) => state.StoreInfo,
  // );

  const isUnAvailableOption = isTimeAvailable || isUnAvailable;

  return (
    <View>
      <RadioButton value={id} />
      <View>
        <Text>{labelOrDefault(name, 'en')}</Text>
      </View>
    </View>
  );
};
