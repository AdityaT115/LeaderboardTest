import {Keyboard, ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Toast from 'react-native-toast-message';

import {styles} from './styles';

import leaderBoardData from '../../data/leaderboard.json';
import {CellView, Headers, LeaderBoradInput} from '../../components';

export const LeaderBoard = () => {
  const [inputValue, setInputValue] = useState('');
  const [sortedData, setSortedData] = useState([]);
  const [completeData, setCompleteData] = useState([]);

  const [searchedData, setSearchedData] = useState({});

  //----------To sort initial data------------------
  useEffect(() => {
    const data = Object.values(leaderBoardData)
      .sort((a, b) => b.bananas - a.bananas)
      .map((item, index) => {
        return {
          ...item,
          rank: index + 1,
        };
      });
    setCompleteData(data);
    setSortedData(data.slice(0, 10));
  }, [leaderBoardData]);

  //----------Search function--------------
  const onSearch = () => {
    if (inputValue) {
      let searchedIndex;
      const newSearchedData = completeData?.find((item, index) => {
        if (item?.name?.toLowerCase() === inputValue?.toLowerCase()) {
          return item;
        }
        searchedIndex = index;
      });
      setSearchedData(newSearchedData);
      console.log(newSearchedData);
      if (newSearchedData && searchedIndex >= 9) {
        sortedData.splice(9, 1, newSearchedData);
      } else if (!newSearchedData) {
        Toast.show({
          type: 'errorToast',
          props: {
            title: 'This user name does not exist!',
            desc: 'Please specify an existing user name!',
          },
        });
      }
    } else {
      setSortedData(completeData.slice(0, 10));
      setSearchedData(null);
    }
    Keyboard.dismiss();
  };

  return (
    <View style={styles.mainContainer}>
      <Headers />
      <LeaderBoradInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSearch={onSearch}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewStyle}>
        <View style={styles.tableView}>
          <View style={styles.tableCell}>
            <Text style={styles.tableHeading}>Name</Text>
            <Text style={styles.tableHeading}>Rank</Text>
            <Text style={styles.tableHeading}>Bananas</Text>
            <Text style={styles.tableHeading}>Searched?</Text>
          </View>
          {sortedData?.map(item => {
            const isSearched = searchedData?.name === item?.name;
            return (
              <View key={item?.rank} style={styles.tableCell}>
                <CellView text={item?.name} isSearched={isSearched} />
                <CellView text={item?.rank} />
                <CellView text={item?.bananas} />
                <CellView text={isSearched ? 'Yes' : 'No'} />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
