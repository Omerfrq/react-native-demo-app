import {useFormContext, get} from 'react-hook-form';

import {MultipleSelectionItem} from './MultipleSelectionItem';
import React, {useState} from 'react';
import Helpers from 'foodbit-helpers';
import {MinmaxRequirement} from '../MinMax';
import {OptionRequired} from '../OptionRequired';
import {View, Text} from 'react-native';

export const MultipleSelectionOption = ({option, optionIndex}) => {
  const {
    formState: {errors, isSubmitted},
  } = useFormContext();

  const primaryLanguage = 'en';
  const {labelOrDefault} = Helpers.StringsHelper;

  const [isDisabled, setIsDisabled] = useState(false);

  const hasErrors = get(errors, `options[${optionIndex}].items[${0}]`);

  // const optionRequiredStatus = hasErrors === undefined && isSubmitted;

  return (
    <View>
      <View>
        <Text>{labelOrDefault(option.name, primaryLanguage)}</Text>
        <OptionRequired option={option} hasErrors={false} />
      </View>
      <MinmaxRequirement
        option={option}
        hasError={hasErrors === undefined ? false : true}
      />
      {option.items.map((item, index) => (
        <MultipleSelectionItem
          optionGroup={option}
          key={item.id}
          option={item}
          optionIndex={index}
          isDisabled={isDisabled}
          setIsDisabled={setIsDisabled}
          optionGroupIndex={optionIndex}
        />
      ))}
    </View>
  );
};
