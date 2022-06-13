import React from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import {useForm, Controller, FormProvider} from 'react-hook-form';
import {OptionGroup} from '../MenuItem/OptionGroup';
import Helpers from 'foodbit-helpers';

const item = {
  id: '1cee7d38-1b10-41b2-bff9-17ea427cea63',
  createdDate: '2022-01-11T16:12:12.859Z',
  lastUpdated: '2022-05-30T05:55:40.900Z',
  defaultMedia: {
    url: 'https://media.foodbit.io/images/background.png',
    type: null,
    thumbnail: 'https://media.foodbit.io/images/default.png',
  },
  availability: {
    unavailableForStores: [],
    unavailableForStoresIds: [],
    isUnAvailable: false,
    isHidden: false,
    isAvailableNow: true,
    isTimeAvailableNow: true,
  },
  merchant: {
    id: '538df7d7-97ab-4e1d-8c6f-f833f923a1aa',
    createdDate: '2021-09-22T05:24:05.168Z',
    businessName: {en: 'Delivery Hero'},
    businessLogo:
      'https://media.foodbit.io/images/original/stores/la_rustica/larustica.svg',
    accountId: '579a18ec-7752-4150-b1c7-203c2a6cca7d',
    country: 'Saudi Arabia',
    background: {
      url: 'https://media.foodbit.io/images/800x/stores/la_rustica/larustica_background.jpg',
      type: 'PHOTO',
      thumbnail:
        'https://media.foodbit.io/images/300x/stores/la_rustica/larustica_background.jpg',
    },
    social: {
      facebook: 'facebookUrl',
      instagram: 'instagram',
      shareImage:
        'https://safary.s3-us-west-1.amazonaws.com/stores/larustica_logo.png',
    },
    currency: {value: 'SAR', isPostLabel: true},
    languages: {
      supported: ['ar', 'en', 'ur'],
      primary: 'en',
      disabled: ['ar', 'ko', 'ur'],
      supportedDisplay: [
        {code: 'ar', displayName: 'Arabic'},
        {code: 'en', displayName: 'English'},
        {code: 'ur', displayName: 'Urdu'},
      ],
      primaryDisplay: {code: 'en', displayName: 'English'},
    },
    timezone: 'Asia/Karachi',
  },
  options: [
    {
      id: 'e160c882-f0dd-4249-96b1-d2b46b360a3f',
      createdDate: '2022-03-09T15:35:47.798Z',
      lastUpdated: '2022-03-09T15:35:47.798Z',
      availability: {
        isUnAvailable: false,
        isHidden: true,
        isAvailableNow: true,
      },
      merchantId: '538df7d7-97ab-4e1d-8c6f-f833f923a1aa',
      items: [
        {
          id: 'cfc2382d-070c-406a-bc17-f82211c5ada6',
          createdDate: '2022-01-11T22:52:17.520Z',
          nameAr: 'Suaces',
          nameEn: 'برجر دجاج',
          name: {en: 'برجر دجاج', ar: 'Suaces'},
          price: 119.0,
          entityType: 'MENU_OPTION',
          isHidden: false,
        },
        {
          id: 'ca6f0302-eec2-426e-bd37-5eca79917d91',
          createdDate: '2022-01-11T22:52:17.520Z',
          nameAr: 'Dips',
          nameEn: 'برجر لحم',
          name: {en: 'برجر لحم', ar: 'Dips'},
          price: 220.0,
          entityType: 'MENU_OPTION',
          isHidden: false,
        },
        {
          id: '41ea66de-51cd-40bd-85ca-6763c28a7c60',
          createdDate: '2022-01-11T22:52:17.520Z',
          nameAr: 'dips',
          nameEn: 'برجر زنجر',
          name: {en: 'برجر زنجر', ar: 'dips'},
          price: 200.0,
          entityType: 'MENU_OPTION',
          isHidden: false,
        },
      ],
      menuItems: [],
      nameEn: 'نوع برجر ٢',
      name: {en: 'نوع برجر ٢', ar: 'Dips'},
      type: 'SINGLE',
      enableMinimumSelections: false,
      enableMaximumSelections: false,
      menuItemsCount: 0,
      someOptionsUnavailable: false,
      isRequired: false,
      entityType: 'MENU_OPTIONS',
      isHidden: false,
    },
    {
      id: '607b4a42-028e-48b8-b7cb-07462050fbbc',
      createdDate: '2022-04-09T06:11:58.354Z',
      lastUpdated: '2022-04-09T06:11:58.354Z',
      availability: {
        isUnAvailable: false,
        isHidden: false,
        isAvailableNow: true,
      },
      merchantId: '538df7d7-97ab-4e1d-8c6f-f833f923a1aa',
      items: [
        {
          id: 'c241e71d-fe30-4f79-b03d-2bf03b159992',
          createdDate: '2022-01-11T22:53:28.125Z',
          availability: {
            start: '0000',
            end: '0000',
            isTimeAvailable: false,
            isUnAvailable: false,
            isEnabled: false,
            isHidden: false,
            isAvailableNow: true,
          },
          notTaxable: true,
          nameAr: 'Suaces',
          nameEn: 'Suaces',
          name: {en: 'Mayo', ar: 'Suaces', ur: 'face'},
          price: 200.0,
          entityType: 'MENU_OPTION',
          isHidden: false,
        },
      ],
      menuItems: [],
      nameEn: 'نوع برجر ٣',
      name: {en: 'Dips', ar: 'Suaces', ur: 'face'},
      type: 'MULTIPLE',
      enableMinimumSelections: false,
      enableMaximumSelections: false,
      menuItemsCount: 0,
      someOptionsUnavailable: false,
      isRequired: false,
      entityType: 'MENU_OPTIONS',
      isHidden: false,
    },
    {
      id: '8ca10090-76d3-4f07-afe4-370f7b92eb8a',
      createdDate: '2022-04-09T06:12:23.436Z',
      lastUpdated: '2022-04-09T06:12:23.436Z',
      availability: {
        isUnAvailable: false,
        isHidden: false,
        isAvailableNow: true,
      },
      merchantId: '538df7d7-97ab-4e1d-8c6f-f833f923a1aa',
      items: [
        {
          id: '49d5d153-4b06-42ab-a127-4fd72ba27995',
          createdDate: '2022-03-25T15:26:21.541Z',
          availability: {
            start: '0000',
            end: '0000',
            unavailableForStores: [
              {
                id: '0bfb8707-b55c-4599-8744-daeed0b337a8',
                createdDate: '2022-05-30T12:25:50.503Z',
                lastUpdated: '2021-10-13T18:11:24.587Z',
                location: {
                  address: {
                    street: {en: '', ar: ''},
                    city: {en: 'Riyadh', ar: 'الرياض'},
                    state: {en: 'Riyadh Province', ar: 'منطقة الرياض'},
                    country: {en: 'Saudi Arabia', ar: 'السعودية'},
                    zipCode: '',
                    neighborhood: {en: '', ar: ''},
                  },
                  coordinates: {
                    longitude: 72.6713843101102,
                    latitude: 30.153975507305496,
                  },
                  googlePlaceId: 'ChIJmZNIDYkDLz4R1Z_nmBxNl7o',
                  formattedAddress: {
                    en: '30.153976, 72.671384',
                    ar: ', \nالرياض, السعودية',
                  },
                  isHidden: true,
                },
                profilePic:
                  'https://foodbit-dev-original.s3-us-west-1.amazonaws.com/images/300x/stores/delivery_hero/718f2c53-c0f4-4b03-ad8e-497c1cef2012.jpeg',
                name: {en: 'KFC', ar: 'KFC', ur: 'KFC'},
                about: {en: 'Italian Restraunt', ar: 'kfc', ur: 'KFC'},
                menu: {
                  id: 'e5c0896c-f64a-4a70-8da8-394551733505',
                  createdDate: '2022-04-09T06:12:23.434Z',
                  name: {en: 'Unnamed'},
                  entityType: 'MENU',
                  isHidden: false,
                },
                menus: [
                  {
                    id: 'e5c0896c-f64a-4a70-8da8-394551733505',
                    createdDate: '2022-04-09T06:12:23.434Z',
                    name: {en: 'Unnamed'},
                    entityType: 'MENU',
                    isHidden: false,
                  },
                  {
                    id: '2819a3dc-884b-49dd-90ae-a323feddf15f',
                    createdDate: '2022-04-09T06:12:23.434Z',
                    name: {en: 'Unnamed'},
                    entityType: 'MENU',
                    isHidden: false,
                  },
                ],
                merchantId: '538df7d7-97ab-4e1d-8c6f-f833f923a1aa',
                settings: {
                  id: 'f42d3285-6618-4a81-886c-fe0be7b43c36',
                  createdDate: '2022-04-09T06:12:23.434Z',
                  orders: {
                    dineIn: {
                      isOpenTab: true,
                      isReviewEnabled: false,
                      isEnabled: true,
                    },
                    delivery: {
                      type: 'NO_FLEET_MANAGEMENT',
                      radius: {type: 'MI', value: 10.0},
                      fee: {type: null, base: 10.0, rate: null, finalFee: null},
                      secureCouriersBeforeAcceptingOrders: true,
                      isEnabled: true,
                    },
                    pickup: {isEnabled: true},
                  },
                  stores: {
                    businessHours: {
                      monday: {
                        hours: [{start: '0600', end: '0200'}],
                        isClosed: false,
                        isOpen24Hours: true,
                      },
                      tuesday: {
                        hours: [{start: '0600', end: '0200'}],
                        isClosed: false,
                        isOpen24Hours: true,
                      },
                      wednesday: {
                        hours: [{start: '0600', end: '0200'}],
                        isClosed: false,
                        isOpen24Hours: true,
                      },
                      thursday: {
                        hours: [{start: '0600', end: '0200'}],
                        isClosed: false,
                        isOpen24Hours: true,
                      },
                      friday: {
                        hours: [{start: '0600', end: '0200'}],
                        isClosed: false,
                        isOpen24Hours: true,
                      },
                      saturday: {
                        hours: [{start: '0600', end: '0200'}],
                        isClosed: false,
                        isOpen24Hours: true,
                      },
                      sunday: {
                        hours: [{start: '0600', end: '0200'}],
                        isClosed: false,
                        isOpen24Hours: true,
                      },
                      isOpenNow: true,
                    },
                  },
                  notifications: {
                    notifyIfDineInOrderAccepted: false,
                    notifyIfPickupOrderAccepted: true,
                    notifyIfDeliveryOrderAccepted: false,
                    notifyIfPickupOrderReady: true,
                    notifyIfDeliveryInProgress: true,
                    notifyIfPickupOrderRejected: true,
                    notifyIfDineInOrderRejected: true,
                    notifyIfDeliveryOrderRejected: true,
                  },
                  currency: {value: '$', isPostLabel: null},
                  tax: {
                    id: 'b8e89244-5f53-4665-b37b-f634d1374e72',
                    createdDate: '2022-04-09T06:12:23.434Z',
                    percentage: 0.0,
                    isTaxIncludedInPrices: false,
                  },
                  global: {globalSettingsId: null, isUsingGlobalSettings: true},
                  deliveryOnDemandEnabled: false,
                  dineInEnabled: true,
                },
                settingsId: 'f42d3285-6618-4a81-886c-fe0be7b43c36',
                branchName: {en: 'Riyadh', ar: 'Mainbranch', ur: 'Main branch'},
                type: 'RESTAURANT',
                region: 'SA',
                phoneNumber: '+1 (432) 432-4234',
                zoneId: 'Asia/Riyadh',
                isHidden: false,
                isBlocked: false,
                isActive: true,
                isReceivingOrders: true,
              },
            ],
            isTimeAvailable: false,
            isUnAvailable: true,
            isEnabled: false,
            isHidden: false,
            isAvailableNow: true,
          },
          notTaxable: false,
          nameAr: 'Dips',
          nameEn: 'Dips',
          name: {en: 'Dips', ar: 'Dips', ur: 'Dips'},
          price: 10.0,
          entityType: 'MENU_OPTION',
          isHidden: false,
        },
        {
          id: 'e83f6af3-351c-461b-83d5-04b853671b2e',
          createdDate: '2022-03-25T15:30:17.686Z',
          nameAr: 'Cheese',
          nameEn: 'Cheese',
          name: {en: 'Cheese', ar: 'Cheese', ur: 'Cheese'},
          price: 10.0,
          entityType: 'MENU_OPTION',
          isHidden: false,
        },
        {
          id: 'a6a31b4d-d11a-4396-9918-bce7d7ae3a5c',
          createdDate: '2022-03-25T15:31:01.070Z',
          availability: {
            start: '0000',
            end: '0000',
            isTimeAvailable: false,
            isUnAvailable: false,
            isEnabled: false,
            isHidden: false,
            isAvailableNow: true,
          },
          notTaxable: false,
          nameAr: 'mayo',
          nameEn: 'mayo',
          name: {en: 'mayo', ar: 'mayo', ur: 'Mayo'},
          price: 10.0,
          entityType: 'MENU_OPTION',
          isHidden: false,
        },
      ],
      menuItems: [],
      nameEn: 'Add ons',
      name: {en: 'Add ons', ar: 'Add ons', ur: 'sdfsd'},
      maximumNumberOfSelections: 2,
      minimumNumberOfSelections: 2,
      type: 'SINGLE',
      enableMinimumSelections: true,
      enableMaximumSelections: true,
      menuItemsCount: 0,
      someOptionsUnavailable: true,
      isRequired: true,
      entityType: 'MENU_OPTIONS',
      isHidden: false,
    },
  ],
  categories: [
    {
      id: 'a1ebcb2d-7e9a-448f-87f6-181605c0af24',
      createdDate: '2022-01-11T16:12:25.283Z',
      lastUpdated: '2022-05-30T09:00:19.481Z',
      availability: {
        start: '1200',
        end: '1200',
        unavailableForStores: [
          {
            id: '3d63745d-fb55-4503-b055-d98ae6e95121',
            createdDate: '2022-05-30T12:25:50.499Z',
            region: 'SA',
            zoneId: 'Asia/Riyadh',
            isHidden: false,
            isBlocked: false,
            isActive: true,
            isReceivingOrders: true,
          },
        ],
        unavailableForStoresIds: ['3d63745d-fb55-4503-b055-d98ae6e95121'],
        isTimeAvailable: false,
        isUnAvailable: true,
        isEnabled: false,
        isHidden: false,
        isAvailableNow: true,
      },
      merchantId: '538df7d7-97ab-4e1d-8c6f-f833f923a1aa',
      nameEn: 'Fries',
      name: {en: 'Fries'},
      entityType: 'MENU_CATEGORY',
      isTemporarilyUnavailable: true,
      isHidden: false,
    },
    {
      id: '4e5f5ec8-2d93-4bf7-ad88-1cfc116595c2',
      createdDate: '2022-01-22T15:57:09.124Z',
      lastUpdated: '2022-05-30T09:00:21.826Z',
      availability: {
        start: '0000',
        end: '0000',
        unavailableForStores: [
          {
            id: '3d63745d-fb55-4503-b055-d98ae6e95121',
            createdDate: '2022-05-30T12:25:50.499Z',
            region: 'SA',
            zoneId: 'Asia/Riyadh',
            isHidden: false,
            isBlocked: false,
            isActive: true,
            isReceivingOrders: true,
          },
        ],
        unavailableForStoresIds: ['3d63745d-fb55-4503-b055-d98ae6e95121'],
        isTimeAvailable: false,
        isUnAvailable: true,
        isEnabled: false,
        isHidden: false,
        isAvailableNow: true,
      },
      merchantId: '538df7d7-97ab-4e1d-8c6f-f833f923a1aa',
      nameEn: 'Chicken',
      name: {en: 'Chicken', ar: 'FriedChicken', ur: 'Chicken'},
      entityType: 'MENU_CATEGORY',
      isTemporarilyUnavailable: true,
      isHidden: false,
    },
  ],
  notTaxable: false,
  merchantId: '538df7d7-97ab-4e1d-8c6f-f833f923a1aa',
  backgroundPic:
    'https://foodbit-dev-original.s3-us-west-1.amazonaws.com/images/600x/stores/pam_pizza/beb1183a-e681-4ce9-9b9b-ef236cac3eb0.png',
  profilePic:
    'https://foodbit-dev-original.s3-us-west-1.amazonaws.com/images/300x/stores/pam_pizza/beb1183a-e681-4ce9-9b9b-ef236cac3eb0.png',
  name: {en: 'KFC Fries With Sause. Great'},
  description: {en: 'Great Fries.'},
  total: 290.0,
  price: 290.0,
  optionsCount: 2,
  categoriesCount: 2,
  entityType: 'MENU_ITEM',
  isHidden: false,
};

export const Form = () => {
  const methods = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });
  const onSubmit = data => {
    const {
      appendOptionIdWithItems,
      getPopulatedItemsWithDetails,
      getSelectedItems,
      getSelectedOptionTotal,
      getTaxableOptionsTotal,
    } = Helpers.MenuItemCartHelpers;

    // current viewing item
    const {price, options, discounts} = item || {};

    const hasDiscount = discounts?.length
      ? discounts[0]?.availability?.isAvailableNow
      : false;

    const itemsWithOptionId = options?.length
      ? appendOptionIdWithItems(options)
      : [];

    const selectedItems = data?.options?.length
      ? getSelectedItems(data, itemsWithOptionId)
      : [];

    const populatedItemsWithDetails = selectedItems?.length
      ? getPopulatedItemsWithDetails(selectedItems)
      : [];

    // tax calculated for all the selected Options.
    const selectedOptionTotal =
      options?.length && getSelectedOptionTotal(populatedItemsWithDetails);

    const totalPriceWithDiscounts =
      hasDiscount && discounts?.length && discounts[0]?.value
        ? discounts[0].value
        : price;

    const totalPrice =
      totalPriceWithDiscounts && selectedOptionTotal
        ? totalPriceWithDiscounts + selectedOptionTotal
        : totalPriceWithDiscounts
        ? totalPriceWithDiscounts
        : selectedOptionTotal
        ? selectedOptionTotal
        : 0;

    // tax calculated for only options which are taxable
    const taxableOptions =
      options?.length && getTaxableOptionsTotal(populatedItemsWithDetails);

    const taxableAmount =
      totalPriceWithDiscounts && taxableOptions
        ? totalPriceWithDiscounts + taxableOptions
        : totalPriceWithDiscounts
        ? totalPriceWithDiscounts
        : taxableOptions
        ? taxableOptions
        : 0;

    const payload = {
      notes: data.notes,
      id: item.id,
      itemId: item?.id,
      isPreviousItem: false,
      discounts:
        item?.discounts?.length &&
        item?.discounts[0]?.availability?.isAvailableNow
          ? item.discounts[0]
          : undefined,
      type: 'PICKUP',
      options: options ? populatedItemsWithDetails : [],
      profilePic: item?.profilePic ?? item?.backgroundPic,
      name: item?.name,
      price: totalPrice,
      taxableAmount,
      quantity: methods.watch('quantity'),
    };
    console.log(payload);
  };

  return (
    <View>
      <FormProvider {...methods}>
        <OptionGroup options={item.options} />
        <Button title="Submit" onPress={methods.handleSubmit(onSubmit)} />
      </FormProvider>
    </View>
  );
};
