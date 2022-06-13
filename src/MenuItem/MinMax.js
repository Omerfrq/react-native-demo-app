import React from 'react';
import Helpers from 'foodbit-helpers';
import {View, Text} from 'react-native';

export const MinmaxRequirement = ({option, hasError = false}) => {
  const hasErrorClasses =
    'px-2 py-1 bg-red-100 text-error  rounded-md text-error';

  if (option.type === 'SINGLE' && option.isRequired) {
    return <Text>Choose atleast 1</Text>;
  }

  if (option.type === 'MULTIPLE') {
    return (
      <Text>
        {Helpers.MenuItemCartHelpers.getRequiredOptionsMessage(option)}
      </Text>
    );
  }
  return null;
};
