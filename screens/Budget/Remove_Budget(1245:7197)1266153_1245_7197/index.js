import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1245_7198}>
        <View style={styles.View_1245_7199}>
          <View style={styles.View_1245_7200}>
            <View style={styles.View_1245_7201}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62c6/d87a/0bf84ae40e142be53ba658f70ecb36b8"
                }}
                style={styles.ImageBackground_1245_7202}
              />
              <View style={styles.View_1245_7203}>
                <Text style={styles.Text_1245_7203}>Medical</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_1245_7204}>
            <Text style={styles.Text_1245_7204}>$600/$1000</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90f7/166e/cb45aeb487c4d05dfb41979ecff1d599"
            }}
            style={styles.ImageBackground_1245_7205}
          />
        </View>
      </View>
      <View style={styles.View_1245_7208}>
        <View style={styles.View_I1245_7208_642_45}>
          <View style={styles.View_I1245_7208_642_46}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d59/441b/1eed4ad1a718cb5e2479f01e85da3ad5"
              }}
              style={styles.ImageBackground_I1245_7208_642_46_280_5123}
            />
          </View>
          <View style={styles.View_I1245_7208_642_47}>
            <Text style={styles.Text_I1245_7208_642_47}>Detail Budget</Text>
          </View>
          <View style={styles.View_I1245_7208_642_49}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b60/086d/597b8ecc1161603a563d28e887a4db8d"
              }}
              style={styles.ImageBackground_I1245_7208_642_49_280_7903}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1245_7209}>
        <View style={styles.View_I1245_7209_568_4137}>
          <Text style={styles.Text_I1245_7209_568_4137}>Edit</Text>
        </View>
      </View>
      <View style={styles.View_1245_7210}>
        <View style={styles.View_1245_7211}>
          <View style={styles.View_1245_7212}>
            <View style={styles.View_1245_7213}>
              <View style={styles.View_1245_7214}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/068b/dcbb/73d4f5fea782acb7ed7e34720cddc40e"
                  }}
                  style={styles.ImageBackground_I1245_7214_280_5910}
                />
              </View>
            </View>
            <View style={styles.View_1245_7215}>
              <View style={styles.View_1245_7216}>
                <Text style={styles.Text_1245_7216}>Shopping</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1245_7217}>
          <View style={styles.View_1245_7218}>
            <Text style={styles.Text_1245_7218}>Remaining</Text>
          </View>
          <View style={styles.View_1245_7219}>
            <Text style={styles.Text_1245_7219}>$0</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07c3/232f/10f02eab5f190a230ee612e13a3fffd3"
          }}
          style={styles.ImageBackground_1245_7220}
        />
        <View style={styles.View_1245_7221}>
          <View style={styles.View_1245_7222}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4174/cf9f/010631bdafa3856b75d1bae71d4a7980"
              }}
              style={styles.ImageBackground_I1245_7222_280_7917}
            />
          </View>
          <View style={styles.View_1245_7223}>
            <Text style={styles.Text_1245_7223}>You’ve exceed the limit</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1245_7224}>
        <View style={styles.View_I1245_7224_816_137}>
          <View style={styles.View_I1245_7224_816_138}>
            <Text style={styles.Text_I1245_7224_816_138}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_I1245_7224_816_139}>
          <View style={styles.View_I1245_7224_816_140}>
            <View style={styles.View_I1245_7224_816_141}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42fe/75df/eee86effef9007e53d20453d65f0d730"
                }}
                style={styles.ImageBackground_I1245_7224_816_142}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/323b/7a56/3bd8d761d4d553ed17394f5c34643bfe"
                }}
                style={styles.ImageBackground_I1245_7224_816_145}
              />
            </View>
            <View style={styles.View_I1245_7224_816_146} />
          </View>
          <View style={styles.View_I1245_7224_816_147}>
            <View style={styles.View_I1245_7224_816_148} />
            <View style={styles.View_I1245_7224_816_149} />
            <View style={styles.View_I1245_7224_816_150} />
            <View style={styles.View_I1245_7224_816_151} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a2b/c9ca/21b52f3f9fca9a68ca91e9ed4afad110"
            }}
            style={styles.ImageBackground_I1245_7224_816_152}
          />
        </View>
      </View>
      <View style={styles.View_1245_7263}>
        <View style={styles.View_I1245_7263_769_3805} />
      </View>
      <View style={styles.View_1245_7265}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2cb0/c19d/d7aeff4da82d6ea56dfa3a1189fe8f57"
          }}
          style={styles.ImageBackground_I1245_7265_802_4440}
        />
        <View style={styles.View_I1245_7265_802_4424}>
          <View style={styles.View_I1245_7265_802_4425}>
            <View style={styles.View_I1245_7265_802_4426}>
              <View style={styles.View_I1245_7265_802_4429}>
                <Text style={styles.Text_I1245_7265_802_4429}>
                  Remove this budget?
                </Text>
              </View>
            </View>
            <View style={styles.View_I1245_7265_802_4430}>
              <Text style={styles.Text_I1245_7265_802_4430}>
                Are you sure do you wanna remove this budget?
              </Text>
            </View>
          </View>
          <View style={styles.View_I1245_7265_802_4431}>
            <View style={styles.View_I1245_7265_802_4431_769_3818}>
              <View style={styles.View_I1245_7265_802_4431_769_3814}>
                <View style={styles.View_I1245_7265_802_4431_769_3814_769_3809}>
                  <Text
                    style={styles.Text_I1245_7265_802_4431_769_3814_769_3809}
                  >
                    No
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1245_7265_802_4431_769_3815}>
                <View style={styles.View_I1245_7265_802_4431_769_3815_769_3811}>
                  <Text
                    style={styles.Text_I1245_7265_802_4431_769_3815_769_3811}
                  >
                    Yes
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1245_7225}>
        <View style={styles.View_I1245_7225_217_6977} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_1245_7198: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("128%"),
    top: hp("43%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1245_7199: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1245_7200: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  View_1245_7201: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1245_7202: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1245_7203: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1245_7203: {
    color: "rgba(33, 35, 37, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1245_7204: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_1245_7204: {
    color: "rgba(33, 35, 37, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1245_7205: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%")
  },
  View_1245_7208: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1245_7208_642_45: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1245_7208_642_46: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1245_7208_642_46_280_5123: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I1245_7208_642_47: {
    width: wp("66%"),
    minWidth: wp("66%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1245_7208_642_47: {
    color: "rgba(13, 14, 15, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1245_7208_642_49: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1245_7208_642_49_280_7903: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_1245_7209: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("95%"),
    backgroundColor: "rgba(127, 61, 255, 1)"
  },
  View_I1245_7209_568_4137: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1245_7209_568_4137: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1245_7210: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1245_7211: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  View_1245_7212: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1245_7213: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 238, 212, 1)"
  },
  View_1245_7214: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1245_7214_280_5910: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_1245_7215: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1245_7216: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_1245_7216: {
    color: "rgba(13, 14, 15, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1245_7217: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1245_7218: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1245_7218: {
    color: "rgba(13, 14, 15, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1245_7219: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_1245_7219: {
    color: "rgba(13, 14, 15, 1)",
    fontSize: 51,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1245_7220: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33%")
  },
  View_1245_7221: {
    width: wp("58%"),
    minWidth: wp("58%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("37%"),
    backgroundColor: "rgba(253, 60, 74, 1)"
  },
  View_1245_7222: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1245_7222_280_7917: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_1245_7223: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1245_7223: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1245_7224: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1245_7224_816_137: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  View_I1245_7224_816_138: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1245_7224_816_138: {
    color: "rgba(22, 23, 25, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_I1245_7224_816_139: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I1245_7224_816_140: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  View_I1245_7224_816_141: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1245_7224_816_142: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1245_7224_816_145: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_I1245_7224_816_146: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(22, 23, 25, 1)",
    borderColor: "rgba(76, 217, 100, 1)",
    borderWidth: 1
  },
  View_I1245_7224_816_147: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1245_7224_816_148: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1245_7224_816_149: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1245_7224_816_150: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1245_7224_816_151: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1245_7224_816_152: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  View_1245_7263: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("111%"),
    minHeight: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1245_7263_769_3805: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(13, 14, 15, 1)"
  },
  View_1245_7265: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("77%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1245_7265_802_4440: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("2%")
  },
  View_I1245_7265_802_4424: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1245_7265_802_4425: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1245_7265_802_4426: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1245_7265_802_4429: {
    width: wp("92%"),
    minWidth: wp("92%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1245_7265_802_4429: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1245_7265_802_4430: {
    width: wp("92%"),
    minWidth: wp("92%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_I1245_7265_802_4430: {
    color: "rgba(145, 145, 159, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1245_7265_802_4431: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1245_7265_802_4431_769_3818: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1245_7265_802_4431_769_3814: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 229, 255, 1)"
  },
  View_I1245_7265_802_4431_769_3814_769_3809: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1245_7265_802_4431_769_3814_769_3809: {
    color: "rgba(127, 61, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1245_7265_802_4431_769_3815: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%"),
    backgroundColor: "rgba(127, 61, 255, 1)"
  },
  View_I1245_7265_802_4431_769_3815_769_3811: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1245_7265_802_4431_769_3815_769_3811: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1245_7225: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  View_I1245_7225_217_6977: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
