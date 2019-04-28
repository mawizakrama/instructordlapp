import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Header, Left, Right, Body, Icon, Card, CardItem, Title, Content } from 'native-base';

class LessonsBookScreen extends React.Component {
  static navigationOptions ={
    drawerLabel: 'Lessons Book',
    drawerIcon: ({ tintColor }) => (
      <Icon name="book" style={{ fontSize: 24, color: tintColor }} />
      )
  };
  render() {
    return (
    <ScrollView>

    <Header style={{ backgroundColor: '#455a64' }}>
    <Left>
    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
    <Icon 
    name="menu" 
    style={{ color: 'white' }} 
    />
    </TouchableOpacity>
    </Left>
    <Body>
    <Title style={{ color: 'white' }}>Lessons Book</Title>
    </Body>
    <Right>
    <Icon name="more" style={{ color: '#455a64' }} />
    </Right>
    </Header>

    <Card style={{ paddingRight: 2, paddingLeft: 2, paddingTop: 2, paddingBottom: 2, backgroundColor: 'white' }}>
            <CardItem 
            header bordered 
            style={{ backgroundColor: '#455a64' }}
            >
            <Text style={{ fontSize: 18, fontWeight: '200', color: 'white' }}>Lesson 1:  Cockpit Drill</Text>
            </CardItem>

            <CardItem>
              <Body>
              <Text style={{ fontSize: 16 }}>
              In this lesson learner will get basic know how and placements of various levers 
              and paddles placed inside of cockpit. Like
              </Text>
              <Text style={{ fontSize: 16 }}>1.	Details about gears shifting.</Text>
              <Text style={{ fontSize: 16 }}>2.	Placements of brake, accelerator and clutch paddle.</Text>
              <Text style={{ fontSize: 16 }}>3.	How turning indicators and other indicators works.</Text>
              <Text style={{ fontSize: 16 }}>4.	How to set mirrors to get maximum visibility of traffic.</Text>
              <Text style={{ fontSize: 16 }}>5.	What different indication light means.</Text>
              <Text style={{ fontSize: 16 }}>6.	Safety drill in case of any emergency.</Text>
              </Body>
            </CardItem>
    </Card>

    <Card style={{ paddingRight: 2, paddingLeft: 2, paddingTop: 2, paddingBottom: 2, backgroundColor: 'white' }}>
            <CardItem 
            header bordered 
            style={{ backgroundColor: '#455a64' }}
            >
            <Text style={{ fontSize: 18, fontWeight: '200', color: 'white' }}>Lesson 2:  Moving Off and Stopping</Text>
            </CardItem>

            <CardItem>
              <Body>
              <Text style={{ fontSize: 16 }}>
              How to take off a car will be taught in this lesson thoroughly and what will be the amount of 
              acceleration and clutch paddle will be required to initiate the movement without turning off engine.
              </Text>
              </Body>
            </CardItem>
    </Card>

    <Card style={{ paddingRight: 2, paddingLeft: 2, paddingTop: 2, paddingBottom: 2, backgroundColor: 'white' }}>
            <CardItem 
            header bordered 
            style={{ backgroundColor: '#455a64' }}
            >
            <Text style={{ fontSize: 18, fontWeight: '200', color: 'white' }}>Lesson 3:  Merging with Traffic</Text>
            </CardItem>

            <CardItem>
              <Body>
              <Text style={{ fontSize: 16 }}>
              How to meet the real time traffic and merge with traffic basic rules and regulation provided by 
              Traffic police will be taught initially to avoid any mishap meeting other drivers.
              </Text>
              </Body>
            </CardItem>
    </Card>

    <Card style={{ paddingRight: 2, paddingLeft: 2, paddingTop: 2, paddingBottom: 2, backgroundColor: 'white' }}>
            <CardItem 
            header bordered 
            style={{ backgroundColor: '#455a64' }}
            >
            <Text style={{ fontSize: 18, fontWeight: '200', color: 'white' }}>Lesson 4:  Approaching Junctions</Text>
            </CardItem>

            <CardItem>
              <Body>
              <Text style={{ fontSize: 16 }}>
              There are certain laws that are provided by traffic police. The 
              implementation of such laws will be taught thoroughly in this lesson.
              </Text>
              </Body>
            </CardItem>
    </Card>

    <Card style={{ paddingRight: 2, paddingLeft: 2, paddingTop: 2, paddingBottom: 2, backgroundColor: 'white' }}>
            <CardItem 
            header bordered 
            style={{ backgroundColor: '#455a64' }}
            >
            <Text style={{ fontSize: 18, fontWeight: '200', color: 'white' }}>Lesson 5:  Emerging</Text>
            </CardItem>

            <CardItem>
              <Body>
              <Text style={{ fontSize: 16 }}>
              How to emerge from allies and drive ways to the main roads and highways will be 
              taught at various locations with maximum traffic to get total perfections.
              </Text>
              </Body>
            </CardItem>
    </Card>

    <Card style={{ paddingRight: 2, paddingLeft: 2, paddingTop: 2, paddingBottom: 2, backgroundColor: 'white' }}>
            <CardItem 
            header bordered 
            style={{ backgroundColor: '#455a64' }}
            >
            <Text style={{ fontSize: 18, fontWeight: '200', color: 'white' }}>Lesson 6:  Emergency Brakes</Text>
            </CardItem>

            <CardItem>
              <Body>
              <Text style={{ fontSize: 16 }}>
              How to apply emergency brakes and complete procedures of looking around and 
              safety procedures of emergency brakes.
              </Text>
              </Body>
            </CardItem>
    </Card>

    <Card style={{ paddingRight: 2, paddingLeft: 2, paddingTop: 2, paddingBottom: 2, backgroundColor: 'white' }}>
            <CardItem 
            header bordered 
            style={{ backgroundColor: '#455a64' }}
            >
            <Text style={{ fontSize: 18, fontWeight: '200', color: 'white' }}>Lesson 7:  Pedestrian Crossing</Text>
            </CardItem>

            <CardItem>
              <Body>
              <Text style={{ fontSize: 16 }}>
              All the information relating to pedestrian rights and crossing and how to approach pedestrian 
              crossing and what are rights pertained by pedestrian will be explicitly taught during this lesson.
              </Text>
              </Body>
            </CardItem>
    </Card>

    <Card style={{ paddingRight: 2, paddingLeft: 2, paddingTop: 2, paddingBottom: 2, backgroundColor: 'white' }}>
            <CardItem 
            header bordered 
            style={{ backgroundColor: '#455a64' }}
            >
            <Text style={{ fontSize: 18, fontWeight: '200', color: 'white' }}>Lesson 8:  Hazard Awareness</Text>
            </CardItem>

            <CardItem>
              <Body>
              <Text style={{ fontSize: 16 }}>
              All the hazards and safety condition that anyone can face during driving will be 
              taught and how to cope up in hazardous situations like:
              </Text>
              <Text style={{ fontSize: 16 }}>1.	Someone crossing the road without crossing.</Text>
              <Text style={{ fontSize: 16 }}>2.	Animal approaching from woods.</Text>
              <Text style={{ fontSize: 16 }}>3.	Emergency brakes by front car.</Text>
              <Text style={{ fontSize: 16 }}>4.	Engine breakdown scenario.</Text>
              </Body>
            </CardItem>
    </Card>

    <Card style={{ paddingRight: 2, paddingLeft: 2, paddingTop: 2, paddingBottom: 2, backgroundColor: 'white' }}>
            <CardItem 
            header bordered 
            style={{ backgroundColor: '#455a64' }}
            >
            <Text style={{ fontSize: 18, fontWeight: '200', color: 'white' }}>Lesson 9:  Main Roads</Text>
            </CardItem>

            <CardItem>
              <Body>
              <Text style={{ fontSize: 16 }}>
              How to drive on main roads rule and regulations will be taught in 
              this lesson mainly these points will be emphasized:
              </Text>
              <Text style={{ fontSize: 16 }}>1.	How to switch between lanes on main road.</Text>
              <Text style={{ fontSize: 16 }}>2.	Speed limits for lanes.</Text>
              <Text style={{ fontSize: 16 }}>3.	How to approach the main road.</Text>
              <Text style={{ fontSize: 16 }}>4.	How to leave the main road.</Text>
              <Text style={{ fontSize: 16 }}>5.	How to approach junctions and U-turns.</Text>
              </Body>
            </CardItem>
    </Card>

    <Card style={{ paddingRight: 2, paddingLeft: 2, paddingTop: 2, paddingBottom: 2, backgroundColor: 'white' }}>
            <CardItem 
            header bordered 
            style={{ backgroundColor: '#455a64' }}
            >
            <Text style={{ fontSize: 18, fontWeight: '200', color: 'white' }}>Lesson 10:  Round Abouts</Text>
            </CardItem>

            <CardItem>
              <Body>
              <Text style={{ fontSize: 16 }}>
              How to enter and exit from a round about what is the exact lane of you wants to 
              go to a certain side will be practiced.
              </Text>
              </Body>
            </CardItem>
    </Card>

    <Card style={{ paddingRight: 2, paddingLeft: 2, paddingTop: 2, paddingBottom: 2, backgroundColor: 'white' }}>
            <CardItem 
            header bordered 
            style={{ backgroundColor: '#455a64' }}
            >
            <Text style={{ fontSize: 18, fontWeight: '200', color: 'white' }}>Lesson 11:  Two Way Carriage</Text>
            </CardItem>

            <CardItem>
              <Body>
              <Text style={{ fontSize: 16 }}>
              How to drive in two way traffic road and what are the rule and precaution 
              one should take while driving and overtaking in two way roads.
              </Text>
              </Body>
            </CardItem>
    </Card>

    <Card style={{ paddingRight: 2, paddingLeft: 2, paddingTop: 2, paddingBottom: 2, backgroundColor: 'white' }}>
            <CardItem 
            header bordered 
            style={{ backgroundColor: '#455a64' }}
            >
            <Text style={{ fontSize: 18, fontWeight: '200', color: 'white' }}>Lesson 12:  Turning on Roads</Text>
            </CardItem>

            <CardItem>
              <Body>
              <Text style={{ fontSize: 16 }}>
              How to turn in an empty road safety procedures and road signs to follow to 
              avoid any possible collisions will be taught in this  lesson.
              </Text>
              </Body>
            </CardItem>
    </Card>

    <Card style={{ paddingRight: 2, paddingLeft: 2, paddingTop: 2, paddingBottom: 2, backgroundColor: 'white' }}>
            <CardItem 
            header bordered 
            style={{ backgroundColor: '#455a64' }}
            >
            <Text style={{ fontSize: 18, fontWeight: '200', color: 'white' }}>Lesson 13:  Reverse in Bay</Text>
            </CardItem>

            <CardItem>
              <Body>
              <Text style={{ fontSize: 16 }}>
              How to go in backward directions and to maneuver in backward directions how to 
              turn and rules and regulations to be followed while reversing. 
              </Text>
              </Body>
            </CardItem>
    </Card>

    <Card style={{ paddingRight: 2, paddingLeft: 2, paddingTop: 2, paddingBottom: 2, backgroundColor: 'white' }}>
            <CardItem 
            header bordered 
            style={{ backgroundColor: '#455a64' }}
            >
            <Text style={{ fontSize: 18, fontWeight: '200', color: 'white' }}>Lesson 14:  Parking</Text>
            </CardItem>

            <CardItem>
              <Body>
              <Text style={{ fontSize: 16 }}>
              How to park and where to park will be taught in this lesson mainly it will focus on 
              rules and regulation and how to carry out the three following ways of parking:
              </Text>
              <Text style={{ fontSize: 16 }}>1.	Parallel parking.</Text>
              <Text style={{ fontSize: 16 }}>2.	Side by side parking.</Text>
              <Text style={{ fontSize: 16 }}>3.	Reverse parking.</Text>
              </Body>
            </CardItem>
    </Card>

    <Card style={{ paddingRight: 2, paddingLeft: 2, paddingTop: 2, paddingBottom: 2, backgroundColor: 'white' }}>
            <CardItem 
            header bordered 
            style={{ backgroundColor: '#455a64' }}
            >
            <Text style={{ fontSize: 18, fontWeight: '200', color: 'white' }}>Lesson 15:  Final Test</Text>
            </CardItem>

            <CardItem>
              <Body>
              <Text style={{ fontSize: 16 }}>
              This will be the final lesson of the series in which the assessment will be carried out by 
              the instructor who will ask and judge you from outside. He may ask any question and ask you 
              to do any drill taught in above lessons. 
              </Text>
              </Body>
            </CardItem>
    </Card>
    </ScrollView>
    );
  }
}

export default LessonsBookScreen;
