import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  View, 
  TextInput, 
  TouchableOpacity, 
  Text, 
  FlatList, 
  Image, 
  KeyboardAvoidingView, 
  Platform,
  ScrollView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

type JournalEntry = {
  id: string;
  text: string;
  date: Date;
  image?: string;
};

const GeneralScreen = ({ navigation }: any) => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [newEntry, setNewEntry] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    // Aquí cargarías las entradas desde tu base de datos al iniciar
    // loadEntries();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const addEntry = () => {
    if (!newEntry.trim() && !selectedImage) return;

    const entry: JournalEntry = {
      id: Date.now().toString(),
      text: newEntry,
      date: new Date(date),
      image: selectedImage || undefined
    };

    setEntries([entry, ...entries]);
    setNewEntry('');
    setSelectedImage(null);
    setDate(new Date());
    
    // Aquí guardarías la entrada en tu base de datos
    // saveEntry(entry);
  };

  const renderEntry = ({ item }: { item: JournalEntry }) => (
    <View style={styles.entryContainer}>
      <Text style={styles.entryDate}>
        {item.date.toLocaleDateString()} - {item.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
      </Text>
      
      {item.image && (
        <Image source={{ uri: item.image }} style={styles.entryImage} />
      )}
      
      {item.text && <Text style={styles.entryText}>{item.text}</Text>}
      
      <View style={styles.timelineConnector} />
    </View>
  );

  const onChangeDate = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <LinearGradient
      colors={['#4c669f', '#242afb', '#58fd03']}
      style={styles.container}
    >
      <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate('Todo')}
      >
        {/* icono usado para devolver a todoScreen */}
            <AntDesign name="doubleleft" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.content}> 
        <Text style={styles.title}>Mantenimiento General</Text>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <FlatList
          data={entries}
          renderItem={renderEntry}
          keyExtractor={(item) => item.id}
          inverted
          contentContainerStyle={styles.entriesList}
          ListHeaderComponent={<View style={styles.listFooter} />}
        />
        
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={pickImage} style={styles.mediaButton}>
            <Ionicons name="camera" size={24} color="white" />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateButton}>
            <Ionicons name="calendar" size={24} color="white" />
          </TouchableOpacity>
          
          <TextInput
            style={styles.input}
            value={newEntry}
            onChangeText={setNewEntry}
            placeholder="Escribe tu comentario aquí..."
            placeholderTextColor="#aaa"
            multiline
          />
          
          <TouchableOpacity onPress={addEntry} style={styles.sendButton}>
            <Ionicons name="send" size={24} color="white" />
          </TouchableOpacity>
        </View>
        
        {selectedImage && (
          <View style={styles.imagePreviewContainer}>
            <Image source={{ uri: selectedImage }} style={styles.imagePreview} />
            <TouchableOpacity 
              style={styles.removeImageButton} 
              onPress={() => setSelectedImage(null)}
            >
              <Ionicons name="close" size={20} color="white" />
            </TouchableOpacity>
          </View>
        )}
      </KeyboardAvoidingView>
      
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="datetime"
          display="default"
          onChange={onChangeDate}
        />
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    alignItems: 'center',
    width: '100%',
  },
  keyboardAvoidingView: {
    flex: 1,
   
  },
  backButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 10,
    padding: 10,
  },
  entriesList: {
    paddingBottom: 20,
  },
  entryContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 8,
    position: 'relative',
  },
  entryDate: {
    color: '#555',
    fontSize: 12,
    marginBottom: 8,
  },
  entryText: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
  entryImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginTop: 10,
  },
  timelineConnector: {
    position: 'absolute',
    left: -15,
    top: 30,
    bottom: -8,
    width: 2,
    backgroundColor: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  input: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 5,
    maxHeight: 100,
    color: '#333',
  },
  mediaButton: {
    padding: 8,
  },
  dateButton: {
    padding: 8,
  },
  sendButton: {
    padding: 8,
    marginLeft: 5,
  },
  imagePreviewContainer: {
    position: 'relative',
    padding: 10,
  },
  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  removeImageButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 10,
    padding: 2,
  },
  listFooter: {
    height: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
    marginTop: 30,
    right: 20,
  },
});

export default GeneralScreen;
