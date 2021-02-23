import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform, Divider } from 'react-native';
import { Block, Text, theme, Button as GaButton } from 'galio-framework';

import { Button } from '../components';
import { Images, nowTheme } from '../constants';
import { HeaderHeight } from '../constants/utils';

const { width, height } = Dimensions.get('screen');

const thumbMeasure = (width - 48 - 32) / 3;

const doctorSchedule = [
  {
    day: 'Senin',
    hour: '13.00 - 15.00'
  },
  {
    day: 'Selasa',
    hour: '10.00 - 15.00'
  },
  {
    day: 'Rabu',
    hour: null
  },
  {
    day: 'Kamis',
    hour: null
  },
  {
    day: 'Jumat',
    hour: '12.00 - 17.00'
  },
  {
    day: 'Sabtu',
    hour: null
  }
];

const Profile = () => {
  return (
    <Block style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}
    >
      <Block flex={0.4} >
        <Block flex style={styles.profileCard}>
          <Block style={{ position: 'absolute', width: width, zIndex: 5, paddingHorizontal: 20 }}>
            <Block middle style={{ top: height * 0.15 }}>
              <Image source={require('../assets/doctor.png')} style={styles.avatar} />
            </Block>
            <Block style={{ top: height * 0.175 }}>
              <Block middle >
                <Text
                  style={{
                    fontFamily: 'montserrat-bold',
                    marginBottom: theme.SIZES.BASE / 2,
                    fontWeight: '100',
                    fontSize: 22
                  }}
                >
                  dr. Dummy Doctor 1, Sp. PD
                </Text>
              </Block>
            </Block>
          </Block>

          <Block
            middle
            row
            style={{ position: 'absolute', width: width, top: height * 0.6 - 160, zIndex: 99 }}
          >
            <Button style={{ width: 120, height: 44, marginHorizontal: 5, elevation: 0 }} textStyle={{ fontSize: 14 }} round>
              Buat Janji
            </Button>
            <Button style={{ width: 120, height: 44, marginHorizontal: 5, elevation: 0 }} textStyle={{ fontSize: 14 }} round>
              Lihat Review
            </Button>
          </Block>
        </Block>

      </Block>
      <Block />
      <Block flex={0.6} style={{ padding: theme.SIZES.BASE, marginTop: 90 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block flex style={{ marginTop: 10 }}>
            <Block>
              <Text
                style={{
                  color: '#2c2c2c',
                  fontWeight: 'bold',
                  fontSize: 18,
                  fontFamily: 'montserrat-bold',
                  marginBottom: 8,
                  zIndex: 2
                }}
              >
                Spesialis
              </Text>
              <Text
                size={14}
                muted
                style={{
                  fontFamily: 'montserrat-regular',
                  zIndex: 2,
                  lineHeight: 25,
                  color: '#9A9A9A'
                }}
              >
                Penyakit Dalam, Reumatologi, Autoimmune
              </Text>
            </Block>

            <Block>
              <Text
                style={{
                  color: '#2c2c2c',
                  fontWeight: 'bold',
                  fontSize: 18,
                  fontFamily: 'montserrat-bold',
                  marginTop: 15,
                  marginBottom: 8,
                  zIndex: 2
                }}
              >
                Riwayat Pendidikan
              </Text>
              <Text
                size={14}
                muted
                style={{
                  fontFamily: 'montserrat-regular',
                  zIndex: 2,
                  lineHeight: 25,
                  color: '#9A9A9A',
                }}
              >
                Dokter Umum Universitas Airlangga (1996) {'\n'}
                Spesialis Penyakit Dalam Universitas Airlangga (2001)
              </Text>
            </Block>

            <Block>
              <Text
                style={{
                  color: '#2c2c2c',
                  fontWeight: 'bold',
                  fontSize: 18,
                  fontFamily: 'montserrat-bold',
                  marginTop: 15,
                  marginBottom: 8,
                  zIndex: 2
                }}
              >
                Riwayat Pekerjaan
              </Text>
              <Text
                size={14}
                muted
                style={{
                  fontFamily: 'montserrat-regular',
                  zIndex: 2,
                  lineHeight: 25,
                  color: '#9A9A9A'
                }}
              >
                RSUD Kabupaten Bekasi (2010) {'\n'}
                RS Vista Jakarta (2015)
              </Text>
            </Block>

            <Block>
              <Text
                style={{
                  color: '#2c2c2c',
                  fontWeight: 'bold',
                  fontSize: 18,
                  fontFamily: 'montserrat-bold',
                  marginTop: 15,
                  marginBottom: 8,
                  zIndex: 2
                }}
              >
                Jadwal Praktek
              </Text>
              <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
                <Block row style={{ flexWrap: 'wrap' }}>
                  {doctorSchedule.map((doctor, index) => doctor.hour != null ? (
                    <Text size={14} style={{
                      width: 125,
                      margin: 1,
                      padding: 10,
                      backgroundColor: nowTheme.COLORS.PRIMARY,
                      color: 'white'
                      }}>{doctor.day} {"\n"}
                    {doctor.hour} </Text>
                  ) : null )}
                </Block>
              </Block>
            </Block>
          </Block>
        </ScrollView>
      </Block>
    </Block>

  )
}

const styles = StyleSheet.create({

  profileContainer: {
    width,
    height,
    padding: 0,
    zIndex: 1
  },
  profileBackground: {
    width,
    height: height * 0.6
  },

  info: {
    marginTop: 30,
    paddingHorizontal: 10,
    height: height * 0.8
  },
  avatarContainer: {
    position: 'relative',
    marginTop: -80
  },
  avatar: {
    width: thumbMeasure,
    height: thumbMeasure,
    borderRadius: 50,
    borderWidth: 0
  },
  nameInfo: {
    marginTop: 35
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure
  },
  social: {
    width: nowTheme.SIZES.BASE * 3,
    height: nowTheme.SIZES.BASE * 3,
    borderRadius: nowTheme.SIZES.BASE * 1.5,
    justifyContent: 'center',
    zIndex: 99,
    marginHorizontal: 5
  }
});

export default Profile;
