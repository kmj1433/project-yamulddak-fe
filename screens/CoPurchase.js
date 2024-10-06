import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import DropDownPicker from 'react-native-dropdown-picker'
import Posts from '../components/Posts'
import { useNavigation } from '@react-navigation/native'

const CoPurchase = () => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: '과일', value: '과일' },
    { label: '야채', value: '야채' },
    { label: '제철 재료', value: '제철 재료' },
    { label: '자주 쓰는 재료', value: '자주 쓰는 재료' },
    { label: '특색 있는 재료', value: '특색 있는 재료' },
    { label: '마트 특가', value: '마트 특가' },
  ]);

  const [dropdownWidth, setDropdownWidth] = useState(110);

  // 텍스트 길이에 따른 width 계산
  useEffect(() => {
    if (value) {
      const textWidth = value.length * 14 + 30; // 각 글자당 약 14의 width, 여유 padding 30 추가
      setDropdownWidth(Math.max(textWidth, 120)); // 최소 110의 width 유지
    }
  }, [value]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Location */}
      <View style={styles.rowContainer}>
        <View style={styles.topContainer}>
          <Text style={styles.locationText}>상수동</Text>
        </View>

        <View style={styles.topContainer}>
          <TouchableOpacity activeOpacity={0.8}>
            <Feather name='search' size={25} style={{ marginRight: 14 }} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.push('Notify')}
          >
            <Feather name='bell' size={25} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Category Dropdown */}
      <View style={styles.category}>
        <DropDownPicker
          style={[styles.categoryTag, { width: dropdownWidth }]}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder='카테고리'
          placeholderStyle={{
            color: 'black',
            fontSize: 14,
            fontWeight: '600'
          }}
          dropDownContainerStyle={{
            width: dropdownWidth,
            borderWidth: 1,
            borderColor: '#EEEEEE',
            borderRadius: 16,
            fontSize: 10,
            backgroundColor: '#FFFFFF',
            position: 'absolute'
          }}
        />
      </View>

      {/* Float Button */}
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.floatButton}
        onPress={() => navigation.push('PostWrite')}
      >
        <Feather name='edit-2' size={24} />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={{ paddingBottom: 86 }}>
        <Posts />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CoPurchase;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff'
  },
  rowContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  // Top Container
  topContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  // Category
  category: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F5F5F5',
    borderTopColor: '#EEEEEE',
    borderBottomColor: '#EEEEEE',
    zIndex: 1,
  },
  categoryTag: {
    minHeight: 36,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 16,
    paddingHorizontal: 14,
    fontSize: 10,
  },

  // Float Button
  floatButton: {
    width: 56,
    height: 56,
    backgroundColor: '#8BFF2A',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
    bottom: 100,
    zIndex: 1,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
  },
});