import {SingleSelectionOption} from './SingleSelection/SingleSelectionOption';
import {View, Text} from 'react-native';
import React from 'react';
import {MultipleSelectionOption} from './MultipleSelection/MultipleSelectionOption';

// interface IFBOptionGroupProps {
//   options?: any[];
// }

export const OptionGroup = ({options}) => {
  return (
    <View>
      {options?.map((option, optionIndex) => (
        <View key={option.id}>
          {option.type === 'SINGLE' ? (
            <SingleSelectionOption option={option} optionIndex={optionIndex} />
          ) : (
            <MultipleSelectionOption
              option={option}
              optionIndex={optionIndex}
            />
          )}
        </View>
      ))}
    </View>
  );
};
