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
      <View style={styles.View_1225_6176}>
        <View style={styles.View_I1225_6176_568_4142} />
        <View style={styles.View_I1225_6176_568_4143}>
          <View style={styles.View_I1225_6176_568_4144}>
            <View style={styles.View_I1225_6176_1223_6279}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a636/473e/3a5f8dc8f3daeb624edca11722474ecd"
                }}
                style={styles.ImageBackground_I1225_6176_1223_6279_280_5910}
              />
            </View>
          </View>
          <View style={styles.View_I1225_6176_568_4149}>
            <View style={styles.View_I1225_6176_568_4150}>
              <View style={styles.View_I1225_6176_568_4151}>
                <Text style={styles.Text_I1225_6176_568_4151}>Shopping</Text>
              </View>
              <View style={styles.View_I1225_6176_568_4152}>
                <Text style={styles.Text_I1225_6176_568_4152}>
                  Buy some grocery
                </Text>
              </View>
            </View>
            <View style={styles.View_I1225_6176_568_4153}>
              <View style={styles.View_I1225_6176_568_4154}>
                <Text style={styles.Text_I1225_6176_568_4154}>- $120</Text>
              </View>
              <View style={styles.View_I1225_6176_568_4155}>
                <Text style={styles.Text_I1225_6176_568_4155}>10:00 AM</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1225_6177}>
        <View style={styles.View_I1225_6177_568_4142} />
        <View style={styles.View_I1225_6177_568_4143}>
          <View style={styles.View_I1225_6177_568_4144}>
            <View style={styles.View_I1225_6177_1223_6279}>
              <View style={styles.View_I1225_6177_1223_6279_280_6314}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c38/1624/bb2f26ed49ab625512dc7f1393145eb0"
                  }}
                  style={styles.ImageBackground_I1225_6177_1223_6279_280_6315}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I1225_6177_568_4149}>
            <View style={styles.View_I1225_6177_568_4150}>
              <View style={styles.View_I1225_6177_568_4151}>
                <Text style={styles.Text_I1225_6177_568_4151}>
                  Subscription
                </Text>
              </View>
              <View style={styles.View_I1225_6177_568_4152}>
                <Text style={styles.Text_I1225_6177_568_4152}>
                  Disney+ Annual..
                </Text>
              </View>
            </View>
            <View style={styles.View_I1225_6177_568_4153}>
              <View style={styles.View_I1225_6177_568_4154}>
                <Text style={styles.Text_I1225_6177_568_4154}>- $80</Text>
              </View>
              <View style={styles.View_I1225_6177_568_4155}>
                <Text style={styles.Text_I1225_6177_568_4155}>03:30 PM</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1225_6178}>
        <View style={styles.View_I1225_6178_568_4142} />
        <View style={styles.View_I1225_6178_568_4143}>
          <View style={styles.View_I1225_6178_568_4144}>
            <View style={styles.View_I1225_6178_1223_6279}>
              <View style={styles.View_I1225_6178_1223_6279_280_7557}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/963f/c856/3ff87e89e5a2fa3327b6bc92fac54f84"
                  }}
                  style={styles.ImageBackground_I1225_6178_1223_6279_280_7558}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I1225_6178_568_4149}>
            <View style={styles.View_I1225_6178_568_4150}>
              <View style={styles.View_I1225_6178_568_4151}>
                <Text style={styles.Text_I1225_6178_568_4151}>Food</Text>
              </View>
              <View style={styles.View_I1225_6178_568_4152}>
                <Text style={styles.Text_I1225_6178_568_4152}>Buy a ramen</Text>
              </View>
            </View>
            <View style={styles.View_I1225_6178_568_4153}>
              <View style={styles.View_I1225_6178_568_4154}>
                <Text style={styles.Text_I1225_6178_568_4154}>- $32</Text>
              </View>
              <View style={styles.View_I1225_6178_568_4155}>
                <Text style={styles.Text_I1225_6178_568_4155}>07:30 PM</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_826_2} />
      <View style={styles.View_826_16}>
        <Text style={styles.Text_826_16}>Account Balance</Text>
      </View>
      <View style={styles.View_826_17}>
        <Text style={styles.Text_826_17}>$9400</Text>
      </View>
      <View style={styles.View_826_384}>
        <View style={styles.View_826_7}>
          <View style={styles.View_826_8} />
        </View>
        <View style={styles.View_826_13}>
          <Text style={styles.Text_826_13}>Expenses</Text>
        </View>
        <View style={styles.View_826_15}>
          <Text style={styles.Text_826_15}>$1200</Text>
        </View>
        <View style={styles.View_826_383}>
          <View style={styles.View_826_9} />
          <View style={styles.View_826_22}>
            <View style={styles.View_1271_5512}>
              <View style={styles.View_I1271_5512_280_6224}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ede8/4dd2/cd045dae44e5a5f94e11f37934ae6211"
                  }}
                  style={styles.ImageBackground_I1271_5512_280_6225}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_826_385}>
        <View style={styles.View_826_4}>
          <View style={styles.View_826_5} />
        </View>
        <View style={styles.View_826_12}>
          <Text style={styles.Text_826_12}>Income</Text>
        </View>
        <View style={styles.View_826_14}>
          <Text style={styles.Text_826_14}>$5000</Text>
        </View>
        <View style={styles.View_826_382}>
          <View style={styles.View_826_6} />
          <View style={styles.View_826_28}>
            <View style={styles.View_1271_5518}>
              <View style={styles.View_I1271_5518_280_6230}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1830/9497/fd2bb85d69a0ec9f30f207ce5df99295"
                  }}
                  style={styles.ImageBackground_I1271_5518_280_6231}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_826_197}>
        <View style={styles.View_I826_197_654_82}>
          <View style={styles.View_I826_197_654_628}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1365/287a/4cfba30473faff8301d8eafdb2a5279e"
              }}
              style={styles.ImageBackground_I826_197_654_628_654_592}
            />
          </View>
          <View style={styles.View_I826_197_804_5593}>
            <View style={styles.View_I826_197_804_5593_804_5087}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/346a/8895/7026d6b2bfef0f7e490b61956f506ffb"
                }}
                style={
                  styles.ImageBackground_I826_197_804_5593_804_5087_280_5102
                }
              />
            </View>
            <View style={styles.View_I826_197_804_5593_804_5088}>
              <Text style={styles.Text_I826_197_804_5593_804_5088}>
                October
              </Text>
            </View>
          </View>
          <View style={styles.View_I826_197_654_78}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51e9/afcf/afcab324fd3830db459aec504233a1e2"
              }}
              style={styles.ImageBackground_I826_197_654_78_280_5844}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_826_259}>
        <View style={styles.View_I826_259_660_53}>
          <View style={styles.View_I826_259_660_54}>
            <Text style={styles.Text_I826_259_660_54}>Recent Transaction</Text>
          </View>
          <View style={styles.View_I826_259_804_5549}>
            <View style={styles.View_I826_259_804_5549_802_4396}>
              <Text style={styles.Text_I826_259_804_5549_802_4396}>
                See All
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_826_278}>
        <View style={styles.View_I826_278_654_687}>
          <View style={styles.View_I826_278_654_686}>
            <Text style={styles.Text_I826_278_654_686}>Spend Frequency</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_826_295}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38f6/3187/f9ff402c75c848df6a0daee73ba38e45"
          }}
          style={styles.ImageBackground_I826_295_670_24}
        />
      </View>
      <View style={styles.View_826_299}>
        <View style={styles.View_I826_299_655_3042}>
          <View style={styles.View_I826_299_655_3043}>
            <Text style={styles.Text_I826_299_655_3043}>Today</Text>
          </View>
        </View>
        <View style={styles.View_I826_299_655_3044}>
          <View style={styles.View_I826_299_655_3045}>
            <Text style={styles.Text_I826_299_655_3045}>Week</Text>
          </View>
        </View>
        <View style={styles.View_I826_299_655_3046}>
          <View style={styles.View_I826_299_655_3047}>
            <Text style={styles.Text_I826_299_655_3047}>Month</Text>
          </View>
        </View>
        <View style={styles.View_I826_299_655_3048}>
          <View style={styles.View_I826_299_655_3049}>
            <Text style={styles.Text_I826_299_655_3049}>Year</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_826_208}>
        <View style={styles.View_I826_208_816_137}>
          <View style={styles.View_I826_208_816_138}>
            <Text style={styles.Text_I826_208_816_138}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_I826_208_816_139}>
          <View style={styles.View_I826_208_816_140}>
            <View style={styles.View_I826_208_816_141}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42fe/75df/eee86effef9007e53d20453d65f0d730"
                }}
                style={styles.ImageBackground_I826_208_816_142}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/323b/7a56/3bd8d761d4d553ed17394f5c34643bfe"
                }}
                style={styles.ImageBackground_I826_208_816_145}
              />
            </View>
            <View style={styles.View_I826_208_816_146} />
          </View>
          <View style={styles.View_I826_208_816_147}>
            <View style={styles.View_I826_208_816_148} />
            <View style={styles.View_I826_208_816_149} />
            <View style={styles.View_I826_208_816_150} />
            <View style={styles.View_I826_208_816_151} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a2b/c9ca/21b52f3f9fca9a68ca91e9ed4afad110"
            }}
            style={styles.ImageBackground_I826_208_816_152}
          />
        </View>
      </View>
      <View style={styles.View_826_401}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cadd/9346/032c6ba778522c15cdc2c9ea9b70f742"
          }}
          style={styles.ImageBackground_I826_401_568_3855}
        />
        <View style={styles.View_I826_401_568_3859}>
          <View style={styles.View_I826_401_568_3860}>
            <Text style={styles.Text_I826_401_568_3860}>Home</Text>
          </View>
          <View style={styles.View_I826_401_568_3861}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2458/2f15/582052e5a95287f2495f4e2cf1e2f814"
              }}
              style={styles.ImageBackground_I826_401_568_3861_280_7756}
            />
          </View>
        </View>
        <View style={styles.View_I826_401_568_3862}>
          <View style={styles.View_I826_401_568_3863}>
            <Text style={styles.Text_I826_401_568_3863}>Transaction</Text>
          </View>
          <View style={styles.View_I826_401_568_3864}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03e9/c4b7/2f8eab8111b737e86c022c8fa260e6a0"
              }}
              style={styles.ImageBackground_I826_401_568_3864_280_6351}
            />
          </View>
        </View>
        <View style={styles.View_I826_401_568_3865}>
          <View style={styles.View_I826_401_568_3866}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cf0/1789/f1518d7b557d985cb58bc81e2d7f1810"
              }}
              style={styles.ImageBackground_I826_401_568_3866_280_5924}
            />
          </View>
          <View style={styles.View_I826_401_568_3867}>
            <Text style={styles.Text_I826_401_568_3867}>Profile</Text>
          </View>
        </View>
        <View style={styles.View_I826_401_568_3868}>
          <View style={styles.View_I826_401_568_3869}>
            <View style={styles.View_I826_401_568_3869_280_6276}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/694b/75aa/412ab94c8bc610721ef176f4d2e63e31"
                }}
                style={styles.ImageBackground_I826_401_568_3869_280_6277}
              />
            </View>
          </View>
          <View style={styles.View_I826_401_568_3870}>
            <Text style={styles.Text_I826_401_568_3870}>Budget</Text>
          </View>
        </View>
        <View style={styles.View_I826_401_568_3871}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/621a/cc08/8a1cb4a698f5ed34f3a523f179db9aae"
            }}
            style={styles.ImageBackground_I826_401_568_3872}
          />
          <View style={styles.View_I826_401_568_3873}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58dd/df95/ed75761b58c1669ab6076d11bea6e883"
              }}
              style={styles.ImageBackground_I826_401_568_3873_280_7677}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_826_308}>
        <View style={styles.View_I826_308_217_6977} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("144%") },
  View_1225_6176: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("89%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1225_6176_568_4142: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  View_I1225_6176_568_4143: {
    flexGrow: 1,
    width: wp("81%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1225_6176_568_4144: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 238, 212, 1)"
  },
  View_I1225_6176_1223_6279: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1225_6176_1223_6279_280_5910: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I1225_6176_568_4149: {
    width: wp("62%"),
    minWidth: wp("62%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1225_6176_568_4150: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1225_6176_568_4151: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1225_6176_568_4151: {
    color: "rgba(41, 43, 45, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1225_6176_568_4152: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I1225_6176_568_4152: {
    color: "rgba(145, 145, 159, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1225_6176_568_4153: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1225_6176_568_4154: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1225_6176_568_4154: {
    color: "rgba(253, 60, 74, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1225_6176_568_4155: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I1225_6176_568_4155: {
    color: "rgba(145, 145, 159, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1225_6177: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("102%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1225_6177_568_4142: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  View_I1225_6177_568_4143: {
    flexGrow: 1,
    width: wp("81%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1225_6177_568_4144: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 229, 255, 1)"
  },
  View_I1225_6177_1223_6279: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1225_6177_1223_6279_280_6314: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_I1225_6177_1223_6279_280_6315: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1225_6177_568_4149: {
    width: wp("62%"),
    minWidth: wp("62%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1225_6177_568_4150: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1225_6177_568_4151: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1225_6177_568_4151: {
    color: "rgba(41, 43, 45, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1225_6177_568_4152: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I1225_6177_568_4152: {
    color: "rgba(145, 145, 159, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1225_6177_568_4153: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1225_6177_568_4154: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1225_6177_568_4154: {
    color: "rgba(253, 60, 74, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1225_6177_568_4155: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I1225_6177_568_4155: {
    color: "rgba(145, 145, 159, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1225_6178: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("116%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1225_6178_568_4142: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  View_I1225_6178_568_4143: {
    flexGrow: 1,
    width: wp("81%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1225_6178_568_4144: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(253, 213, 215, 1)"
  },
  View_I1225_6178_1223_6279: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1225_6178_1223_6279_280_7557: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_I1225_6178_1223_6279_280_7558: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1225_6178_568_4149: {
    width: wp("62%"),
    minWidth: wp("62%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1225_6178_568_4150: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1225_6178_568_4151: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1225_6178_568_4151: {
    color: "rgba(41, 43, 45, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1225_6178_568_4152: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I1225_6178_568_4152: {
    color: "rgba(145, 145, 159, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1225_6178_568_4153: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1225_6178_568_4154: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1225_6178_568_4154: {
    color: "rgba(253, 60, 74, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1225_6178_568_4155: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I1225_6178_568_4155: {
    color: "rgba(145, 145, 159, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_826_2: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  View_826_16: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_826_16: {
    color: "rgba(145, 145, 159, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_826_17: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_826_17: {
    color: "rgba(22, 23, 25, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_826_384: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("29%")
  },
  View_826_7: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_826_8: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(253, 60, 74, 1)"
  },
  View_826_13: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_826_13: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_826_15: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_826_15: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_826_383: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_826_9: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  View_826_22: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1271_5512: {
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
  View_I1271_5512_280_6224: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I1271_5512_280_6225: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_826_385: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("29%")
  },
  View_826_4: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_826_5: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 168, 107, 1)"
  },
  View_826_12: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_826_12: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_826_14: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_826_14: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_826_382: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_826_6: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  View_826_28: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1271_5518: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1271_5518_280_6230: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I1271_5518_280_6231: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_826_197: {
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
  View_I826_197_654_82: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I826_197_654_628: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I826_197_654_628_654_592: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I826_197_804_5593: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I826_197_804_5593_804_5087: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I826_197_804_5593_804_5087_280_5102: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I826_197_804_5593_804_5088: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I826_197_804_5593_804_5088: {
    color: "rgba(33, 35, 37, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I826_197_654_78: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I826_197_654_78_280_5844: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_826_259: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("81%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I826_259_660_53: {
    flexGrow: 1,
    width: wp("96%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I826_259_660_54: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I826_259_660_54: {
    color: "rgba(41, 43, 45, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I826_259_804_5549: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("1%"),
    backgroundColor: "rgba(238, 229, 255, 1)"
  },
  View_I826_259_804_5549_802_4396: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I826_259_804_5549_802_4396: {
    color: "rgba(127, 61, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_826_278: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I826_278_654_687: {
    flexGrow: 1,
    width: wp("96%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I826_278_654_686: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I826_278_654_686: {
    color: "rgba(13, 14, 15, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_826_295: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I826_295_670_24: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_826_299: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("76%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I826_299_655_3042: {
    flexGrow: 1,
    width: wp("24%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 238, 212, 1)"
  },
  View_I826_299_655_3043: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I826_299_655_3043: {
    color: "rgba(252, 172, 18, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I826_299_655_3044: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I826_299_655_3045: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I826_299_655_3045: {
    color: "rgba(145, 145, 159, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I826_299_655_3046: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I826_299_655_3047: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I826_299_655_3047: {
    color: "rgba(145, 145, 159, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I826_299_655_3048: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I826_299_655_3049: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I826_299_655_3049: {
    color: "rgba(145, 145, 159, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_826_208: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I826_208_816_137: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  View_I826_208_816_138: {
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
  Text_I826_208_816_138: {
    color: "rgba(22, 23, 25, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_I826_208_816_139: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I826_208_816_140: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  View_I826_208_816_141: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I826_208_816_142: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I826_208_816_145: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_I826_208_816_146: {
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
  View_I826_208_816_147: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I826_208_816_148: {
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
  View_I826_208_816_149: {
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
  View_I826_208_816_150: {
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
  View_I826_208_816_151: {
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
  ImageBackground_I826_208_816_152: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  View_826_401: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("129%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I826_401_568_3855: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_I826_401_568_3859: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%")
  },
  View_I826_401_568_3860: {
    width: wp("8%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_I826_401_568_3860: {
    color: "rgba(127, 61, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I826_401_568_3861: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I826_401_568_3861_280_7756: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I826_401_568_3862: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("3%")
  },
  View_I826_401_568_3863: {
    width: wp("15%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I826_401_568_3863: {
    color: "rgba(198, 198, 198, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I826_401_568_3864: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I826_401_568_3864_280_6351: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I826_401_568_3865: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  View_I826_401_568_3866: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I826_401_568_3866_280_5924: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_I826_401_568_3867: {
    width: wp("8%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I826_401_568_3867: {
    color: "rgba(198, 198, 198, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I826_401_568_3868: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("3%")
  },
  View_I826_401_568_3869: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I826_401_568_3869_280_6276: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I826_401_568_3869_280_6277: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I826_401_568_3870: {
    width: wp("9%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I826_401_568_3870: {
    color: "rgba(198, 198, 198, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I826_401_568_3871: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("0%")
  },
  ImageBackground_I826_401_568_3872: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I826_401_568_3873: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I826_401_568_3873_280_7677: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_826_308: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("139%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  View_I826_308_217_6977: {
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
