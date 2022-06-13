import React from 'react';
import {Text} from 'react-native';

export const OptionRequired = ({option, hasErrors = true}) => {
  const optionRequired =
    (option.isRequired && option.type === 'SINGLE') ||
    (option.type === 'MULTIPLE' && option.enableMinimumSelections) ||
    false;

  if (!optionRequired) {
    return null;
  }

  return <Text>required</Text>;
};
