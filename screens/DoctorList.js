import React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Block, theme } from "galio-framework";

import { Card, Input, Icon } from "../components";
import doctors from "../constants/doctors";
const { width } = Dimensions.get("screen");

class DoctorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctorList: doctors,
      doctorSearchText: ''
    };
  };

  searchDoctor = param => {
    this.setState({ doctorSearchText: param }, () => {
      if (this.state.doctorSearchText === '') {
        this.setState({ doctorList: doctors });
      } else {
        this.setState({ doctorList: doctors.filter(doctor => doctor.name.indexOf(this.state.doctorSearchText) !== -1) });
      }
    });
  };

  renderDoctorList = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}
      >
        <Input
          right
          color="black"
          style={styles.search}
          placeholder="Pencarian dokter..."
          placeholderTextColor={'#8898AA'}
          value={this.state.doctorSearchText}
          iconContent={<Icon size={16} color={theme.COLORS.MUTED} name="zoom-bold2x" family="NowExtra" />}
          onChangeText={this.searchDoctor}
        />
        <Block flex>
          {this.state.doctorList.map((doctor, index) => <Card key={index} item={doctor} horizontal />)}
        </Block>
      </ScrollView>
    );
  };

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderDoctorList()}
      </Block>
    );
  };
}

const styles = StyleSheet.create({
  home: {
    width: width
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
    paddingHorizontal: 2,
    fontFamily: 'montserrat-regular'

  }
});

export default DoctorList;
