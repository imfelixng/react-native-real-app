import React from "react";
import { Platform } from 'react-native';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
const Search = (props) => {
  const { onLocationSeleted } = props;

  const [searchFocused, setSearchFocused] = React.useState(false);

  return (
    <GooglePlacesAutocomplete
      placeholder="Search location"
      placeholderTextColor = '#CDCDCD'
      minLength={1}
      autoFocus={false}
      returnKeyType={"search"}
      keyboardAppearance={"light"}
      fetchDetails={true}
      nearbyPlacesAPI='GooglePlacesSearch'
      debounce={100}
      renderDescription={row => row.description}
      listViewDisplayed = { searchFocused }
      onPress={onLocationSeleted}
      query={{
        key: 'AIzaSyAMz1rZwha7UV3-FOzksnI6_EZcfCeJVU4',
        language: 'vi', // language of the results
      }}
      textInputProps = {
        {
          onFocus: () => {
            setSearchFocused(true);
          },
          onBlur: () => {
            setSearchFocused(false);
          }
        }
      }
      styles = {{
        container: {
          position: 'absolute',
          top: Platform.select({ ios: 60, android: 50 }),
          width: '100%'
        },
        textInputContainer: {
          flex: 1,
          backgroundColor: 'transparent',
          height: 40,
          marginHorizontal: 20,
          borderTopWidth: 0,
          borderBottomWidth: 0,
        },
        textInput: {
          height: '100%',
          margin: 0,
          padding: 0,
          borderRadius: 5,
          elevation: 5, //create shadow
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { x: 0, y: 0 },
          shadowRadius: 15,
          borderWidth: 1,
          borderColor: '#DDD',
          fontSize: 16,
          paddingHorizontal: 10,
        },
        listView: {
          borderWidth: 1,
          borderRadius: 5,
          borderColor: '#DDD',
          backgroundColor: '#FFF',
          marginHorizontal: 20,
          paddingHorizontal: 10,
          elevation: 5,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { x: 0, y: 0 },
          shadowRadius: 15,
          marginTop: 10,
        },
        description: {
          fontSize: 16,

        },
        row: {
          padding: 20,
          height: 58,
        }
      }}
    />
  );
};

export default Search;
