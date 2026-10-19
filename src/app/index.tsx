import { StyleSheet, View } from 'react-native';
import ItemCard from '@/components/ItemCard';

type Item = {
  id: string;
  title: string;
  place: string;
};

const ITEMS: Item[] = [
  { id: '1', title: 'Blue water bottle', place: 'Library, 2nd floor' },
  { id: '2', title: 'Student card', place: 'Cafeteria' },
  { id: '3', title: 'Keys on a red keychain', place: 'Sports center' },
];

export default function Index() {
  return (
    <View style={styles.container}>
      {ITEMS.map((item) => (
        <ItemCard key={item.id} title={item.title} place={item.place} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f3f4f6',
    gap: 10,
  },
});