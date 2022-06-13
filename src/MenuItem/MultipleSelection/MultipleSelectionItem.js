import {Checkbox} from 'react-native-paper';
import {useFormContext, Controller} from 'react-hook-form';
import Helpers from 'foodbit-helpers';
import React from 'react';
import {View, Text} from 'react-native';

export const MultipleSelectionItem = ({
  option,
  optionGroupIndex,
  optionIndex,
  optionGroup,
  isDisabled,
  setIsDisabled,
}) => {
  const primaryLanguage = 'en';

  const {labelOrDefault} = Helpers.StringsHelper;

  const {control, watch, clearErrors, getValues} = useFormContext();
  const [checked, setChecked] = React.useState(false);

  const {availability, name, price, id} = option || {};

  const {isUnAvailable, isTimeAvailable, isHidden} = availability || {};

  const optionDefault = getValues(`options[${optionGroupIndex}].items`);

  const {
    enableMaximumSelections,
    enableMinimumSelections,
    minimumNumberOfSelections,
    maximumNumberOfSelections,
  } = optionGroup || {};

  const currentItems = watch(`options[${optionGroupIndex}].items`);
  const filter = currentItems
    ?.filter(item => Boolean(item?.itemId))
    .map(item => item.itemId);

  const validateMultipleSelection = () => {
    const currentItems = watch(`options[${optionGroupIndex}].items`);
    const filter = currentItems
      ?.filter(item => Boolean(item?.itemId))
      .map(item => item.itemId);

    if (
      enableMaximumSelections &&
      enableMinimumSelections &&
      minimumNumberOfSelections &&
      maximumNumberOfSelections
    ) {
      if (
        filter.length >= minimumNumberOfSelections &&
        filter.length <= maximumNumberOfSelections
      ) {
        clearErrors(`options[${optionGroupIndex}]`);
        return true;
      } else return false;
    }

    if (enableMinimumSelections && minimumNumberOfSelections) {
      if (filter.length >= minimumNumberOfSelections) {
        clearErrors(`options[${optionGroupIndex}]`);
        return true;
      }
    }
    if (enableMaximumSelections && maximumNumberOfSelections) {
      if (filter.length <= maximumNumberOfSelections) {
        clearErrors(`options[${optionGroupIndex}]`);
        return true;
      }
    }
    if (!enableMinimumSelections) {
      if (filter.length <= (minimumNumberOfSelections || 0)) {
        clearErrors(`options[${optionGroupIndex}]`);
        return true;
      }
    }

    return false;
  };

  const applyFilter = enableMaximumSelections || enableMinimumSelections;

  const disableAfterMax =
    enableMaximumSelections && isDisabled && !filter?.includes(id)
      ? true
      : false;

  const isUnAvailableOption = isTimeAvailable || isUnAvailable;

  return (
    <View>
      {!isHidden ? (
        <View>
          <View>
            <Controller
              control={control}
              rules={{
                validate: applyFilter ? validateMultipleSelection : undefined,
              }}
              name={`options[${optionGroupIndex}].items[${optionIndex}].itemId`}
              render={({field}) => (
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  disabled={isTimeAvailable || isUnAvailable || disableAfterMax}
                  // defaultChecked={optionDefault?.some(
                  //   optionItem => optionItem?.id === id,
                  // )}
                  onPress={() => {
                    setChecked(!checked);
                    if (!checked) {
                      field.onChange(id);
                    } else {
                      field.onChange(undefined);
                    }

                    if (enableMaximumSelections) {
                      const currentItems = watch(
                        `options[${optionGroupIndex}].items`,
                      );

                      const filter = currentItems
                        ?.filter(item => Boolean(item?.itemId))
                        .map(item => item.itemId);

                      const disabled =
                        filter?.length === maximumNumberOfSelections;

                      setIsDisabled(disabled);
                    }
                  }}
                />
              )}
            />

            <View>
              <Text>{labelOrDefault(name, primaryLanguage)}</Text>
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
};
