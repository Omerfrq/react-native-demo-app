// import {RadioGroup} from '@mui/material';
import {Controller, get, useFormContext} from 'react-hook-form';

import {SingleSelectionItem} from './SingleSelectionItem';
// import {useTypedTranslation} from '@/src/hooks/useTypedTranslations';
import {RadioButton, Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import Helpers from 'foodbit-helpers';
import {View} from 'react-native';
import React from 'react';
import {MinmaxRequirement} from '../MinMax';
import {OptionRequired} from '../OptionRequired';

// interface IFBSingleSelectionOption {
//   option: any;
//   optionIndex: number;
// }

export const SingleSelectionOption = ({option, optionIndex}) => {
  const {
    control,
    formState: {errors, isSubmitted},
  } = useFormContext();

  // const {t} = useTypedTranslation('common');

  // const {primaryLanguage} = useSelector(state => state.StoreInfo);

  const primaryLanguage = 'en';

  const {labelOrDefault} = Helpers.StringsHelper;

  const getDefaultValue =
    option && option.items.find(option => option?.isDefault)?.id;

  const hasErrors = get(
    errors,
    `options[${optionIndex}].items[${optionIndex}].itemId`,
  );

  // const optionRequiredStatus = hasErrors === undefined && isSubmitted;

  return (
    <View>
      <View>
        <Text>{labelOrDefault(option.name, primaryLanguage)}</Text>
      </View>
      <OptionRequired option={option} hasErrors={false} />

      <MinmaxRequirement
        option={option}
        hasError={hasErrors === undefined ? false : true}
      />
      <Controller
        name={`options[${optionIndex}].items[${optionIndex}].itemId`}
        control={control}
        rules={{
          required: {
            value: option.isRequired,
            message: 'tada',
          },
        }}
        defaultValue={getDefaultValue}
        render={({field: {onChange, value}}) => (
          <RadioButton.Group onValueChange={onChange} value={value}>
            {option.items.map(option => (
              <SingleSelectionItem key={option.id} option={option} />
            ))}
          </RadioButton.Group>
        )}
      />
    </View>
  );
};
