import React from 'react';
import AlgoliaPlaces from 'algolia-places-react';

// Anglia Places config
// TODO: API Key and App Id should be fetched from env variables
const ANGOLIA_PLACES_CONFIG = {
  appId: 'plJXSL15FVYB',
  apiKey: '32ee25315f3be220818ca4db278bb2df',
  countries: ['us'],
  templates: {
    value: (suggestion) => {
      return (
        (suggestion.name + ', ' || '') +
        (suggestion.city + ', ' || '') +
        (suggestion.administrative + ' ' || '') +
        (suggestion.postcode || '')
      );
    },
  },
  // Other options from https://community.algolia.com/places/documentation.html#options
};

const isNumber = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const isFractionalChar = (n) => {
  var c = n.charCodeAt();
  return (c >= 188 && c <= 190) || (c >= 8531 && c <= 8542);
};

const indexFractionalChar = (m) => {
  var a = m.split(''),
    i;
  for (i in a) {
    if (isFractionalChar(a[i])) return i;
  }
  return false;
};

const splitAddress = (x) => {
  var a = x.trim().split(' '),
    number;
  if (a.length <= 1) return { number: '', space: '', street: a.join('') };
  if (isNumber(a[0].substr(0, 1)) || isFractionalChar(a[0].substr(0, 1))) {
    number = a.shift();
  } else {
    // If there isn't a leading number, just return the trimmed input as the street
    return { number: '', space: '', street: x.trim() };
  }
  if (/[0-9]\/[0-9]/.exec(a[0]) || indexFractionalChar(a[0]) !== false)
    number += ' ' + a.shift();
  return { number: number, space: ' ', street: a.join(' ') };
};

const AddressField = ({ placeholder, name, required, onChange, onBlur }) => {
  let inputRef;
  const onChangeHandler = (changes) => {
    const { suggestion } = changes;

    // Custom mapping from suggestion
    let premise, thoroughfare;
    if (suggestion.name) {
      const splittedAddress = splitAddress(suggestion.name);
      premise = splittedAddress && splittedAddress.number;
      thoroughfare = splittedAddress && splittedAddress.street;
    } else {
      premise = undefined;
      thoroughfare = undefined;
    }

    // Custom formatting
    let formatted =
      suggestion &&
      String(
        (suggestion.name + ', ' || '') +
          (suggestion.city + ', ' || '') +
          (suggestion.administrative + ' ' || '') +
          (suggestion.postcode || ''),
      );

    // Update the input value through the ref
    inputRef.setVal(formatted);

    // Pass the change to the form that host that component
    onChange({
      premise,
      thoroughfare,
      locality: suggestion.city || '',
      administrativeArea: suggestion.administrative || '',
      postalCode: suggestion.postcode || '',
      country: suggestion.country || '',
    });
  };
  return (
    <AlgoliaPlaces
      placeholder={placeholder}
      options={ANGOLIA_PLACES_CONFIG}
      placesRef={(ref) => (inputRef = ref)}
      onBlur={onBlur}
      onChange={onChangeHandler}
      onClear={() => {
        onChange(null);
      }}
      onLimit={() =>
        console.log('Reached current rate limit of Angolia Places')
      }
      onError={() => console.log('Something went wrong with Angolia Places')}
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="none"
      spellCheck="false"
      required={required ? 'required' : null}
      name={name}
    />
  );
};

export default AddressField;
