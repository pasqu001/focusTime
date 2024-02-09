import React from 'react';
import { View, StyleSheet, Text, FlatList} from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({history}) => {
  
  if(!history || !history.length) return <Text style={styles.notification}> We haven't focused on anything yet! </Text>

  const renderItem = ({item}) => <Text style={styles.item}> - { item }</Text>

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList 
        data={history}
        renderItem={renderItem}

      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: spacing.lg,
    flex: 1,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,

  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,

    fontWeight: 'bold',
  },
  notification: {
    paddingLeft: spacing.lg,
    fontSize: fontSizes.xl,
    color: colors.white,

  }
})