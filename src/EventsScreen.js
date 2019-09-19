import React from 'react';
import axios from 'axios';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import Background from './components/Background'
import EventItem from './components/ListComponents/EventItem';

class EventsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarEvents: [],
      isLoading: true
    }
  }

  componentDidMount() {
    this.getCalendarEvents();
  }

  getCalendarEvents() {
    axios.get('https://clients6.google.com/calendar/v3/calendars/ufabcpratodos@gmail.com/events?calendarId=ufabcpratodos%40gmail.com&singleEvents=true&timeZone=America%2FSao_Paulo&maxAttendees=1&maxResults=250&sanitizeHtml=true&timeMin=2019-09-10T00%3A00%3A00-03%3A00&timeMax=2019-10-15T00%3A00%3A00-03%3A00&key=AIzaSyBNlYH01_9Hc5S1J9vuFmu2nUqBZJNAXxs')
      .then((response) => {
        if (
          response.data &&
          response.data.items
        ) {
          this.setState({
            calendarEvents: this.sortEventsByDate(this.formatEvents(response.data.items))
          })
        }
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .finally(() => {
        this.setState({
          isLoading: false
        })
      });
  }

  formatEvents(events) {
    return events.map(({ summary, location, description, start, end, id }) => {
      return {
        id,
        summary,
        location,
        description,
        start: new Date(start.dateTime),
        end: new Date(end.dateTime)
      }
    })
  }

  sortEventsByDate(events) {
    return [...events].sort((a, b) => {
      if (a.start > b.start) {
        return 1
      }

      return -1
    })
  }

  render() {
    const {
      isLoading,
      calendarEvents
    } = this.state;

    if (isLoading) {
      return (
        <Background>
          <View style={styles.containerLoading}>
            <Text style={styles.title}>Carregando...</Text>
          </View>
        </Background>
      )
    }

    return (
      <Background>
        <View style={styles.container}>
          <FlatList
            keyExtractor={event => event.id}
            data={calendarEvents}
            renderItem={({ item }) => (
              <EventItem {
                ...{
                  ...item,
                  navigation: this.props.navigation
                }
              } />
            )}
          />
        </View>
      </Background>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  containerLoading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    position: 'relative',
    fontFamily: 'ScriptoramaMarkdownJF',
    textAlign: "center",
    fontSize: 35,
    color: '#752bff'
  }
});

export default EventsScreen;
