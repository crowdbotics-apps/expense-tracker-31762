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
      <View style={styles.View_1194_6456}>
        <View style={styles.View_I1194_6456_654_682}>
          <View style={styles.View_I1194_6456_804_5567}>
            <View style={styles.View_I1194_6456_804_5567_804_5087}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/346a/8895/7026d6b2bfef0f7e490b61956f506ffb"
                }}
                style={
                  styles.ImageBackground_I1194_6456_804_5567_804_5087_280_5102
                }
              />
            </View>
            <View style={styles.View_I1194_6456_804_5567_804_5088}>
              <Text style={styles.Text_I1194_6456_804_5567_804_5088}>
                Month
              </Text>
            </View>
          </View>
          <View style={styles.View_I1194_6456_654_681}>
            <View style={styles.View_I1194_6456_804_5582}>
              <View style={styles.View_I1194_6456_804_5582_668_3134}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91ed/e7a5/aa925b1302ed28ed9d88ba13b4150ca9"
                  }}
                  style={
                    styles.ImageBackground_I1194_6456_804_5582_668_3134_280_7864
                  }
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1194_6465}>
        <View style={styles.View_I1194_6465_660_45}>
          <View style={styles.View_I1194_6465_660_46}>
            <Text style={styles.Text_I1194_6465_660_46}>
              See your financial report
            </Text>
          </View>
          <View style={styles.View_I1194_6465_660_47}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5854/30b2/3d980b8bc044cbc3be4d51e10e5ee73c"
              }}
              style={styles.ImageBackground_I1194_6465_660_47_280_5138}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1223_7435}>
        <View style={styles.View_I1223_7435_568_4142} />
        <View style={styles.View_I1223_7435_568_4143}>
          <View style={styles.View_I1223_7435_568_4144}>
            <View style={styles.View_I1223_7435_1223_6279}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a636/473e/3a5f8dc8f3daeb624edca11722474ecd"
                }}
                style={styles.ImageBackground_I1223_7435_1223_6279_280_5910}
              />
            </View>
          </View>
          <View style={styles.View_I1223_7435_568_4149}>
            <View style={styles.View_I1223_7435_568_4150}>
              <View style={styles.View_I1223_7435_568_4151}>
                <Text style={styles.Text_I1223_7435_568_4151}>Shopping</Text>
              </View>
              <View style={styles.View_I1223_7435_568_4152}>
                <Text style={styles.Text_I1223_7435_568_4152}>
                  Buy some grocery
                </Text>
              </View>
            </View>
            <View style={styles.View_I1223_7435_568_4153}>
              <View style={styles.View_I1223_7435_568_4154}>
                <Text style={styles.Text_I1223_7435_568_4154}>- $120</Text>
              </View>
              <View style={styles.View_I1223_7435_568_4155}>
                <Text style={styles.Text_I1223_7435_568_4155}>10:00 AM</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1223_7437}>
        <View style={styles.View_I1223_7437_568_4142} />
        <View style={styles.View_I1223_7437_568_4143}>
          <View style={styles.View_I1223_7437_568_4144}>
            <View style={styles.View_I1223_7437_1223_6279}>
              <View style={styles.View_I1223_7437_1223_6279_280_7557}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/963f/c856/3ff87e89e5a2fa3327b6bc92fac54f84"
                  }}
                  style={styles.ImageBackground_I1223_7437_1223_6279_280_7558}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I1223_7437_568_4149}>
            <View style={styles.View_I1223_7437_568_4150}>
              <View style={styles.View_I1223_7437_568_4151}>
                <Text style={styles.Text_I1223_7437_568_4151}>Food</Text>
              </View>
              <View style={styles.View_I1223_7437_568_4152}>
                <Text style={styles.Text_I1223_7437_568_4152}>Buy a ramen</Text>
              </View>
            </View>
            <View style={styles.View_I1223_7437_568_4153}>
              <View style={styles.View_I1223_7437_568_4154}>
                <Text style={styles.Text_I1223_7437_568_4154}>- $32</Text>
              </View>
              <View style={styles.View_I1223_7437_568_4155}>
                <Text style={styles.Text_I1223_7437_568_4155}>07:30 PM</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1223_7438}>
        <View style={styles.View_I1223_7438_654_687}>
          <View style={styles.View_I1223_7438_654_686}>
            <Text style={styles.Text_I1223_7438_654_686}>Today</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1223_7439}>
        <View style={styles.View_I1223_7439_654_687}>
          <View style={styles.View_I1223_7439_654_686}>
            <Text style={styles.Text_I1223_7439_654_686}>Yesterday</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1223_7440}>
        <View style={styles.View_I1223_7440_568_4157} />
        <View style={styles.View_I1223_7440_568_4158}>
          <View style={styles.View_I1223_7440_568_4159}>
            <View style={styles.View_I1223_7440_1223_6155}>
              <View style={styles.View_I1223_7440_1223_6155_280_6325}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e54d/c930/76b655144ef7b3b56aad4fb8bac1028c"
                  }}
                  style={styles.ImageBackground_I1223_7440_1223_6155_280_6326}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I1223_7440_568_4164}>
            <View style={styles.View_I1223_7440_568_4165}>
              <View style={styles.View_I1223_7440_568_4166}>
                <Text style={styles.Text_I1223_7440_568_4166}>Salary</Text>
              </View>
              <View style={styles.View_I1223_7440_568_4167}>
                <Text style={styles.Text_I1223_7440_568_4167}>
                  Salary for July
                </Text>
              </View>
            </View>
            <View style={styles.View_I1223_7440_568_4168}>
              <View style={styles.View_I1223_7440_568_4169}>
                <Text style={styles.Text_I1223_7440_568_4169}>+ 5000</Text>
              </View>
              <View style={styles.View_I1223_7440_568_4170}>
                <Text style={styles.Text_I1223_7440_568_4170}>04:30 PM</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1223_7441}>
        <View style={styles.View_I1223_7441_568_4142} />
        <View style={styles.View_I1223_7441_568_4143}>
          <View style={styles.View_I1223_7441_568_4144}>
            <View style={styles.View_I1223_7441_1223_6279}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0512/acde/3cbc6e7ea88cb1920f2ed115ea91febc"
                }}
                style={styles.ImageBackground_I1223_7441_1223_6279_280_7495}
              />
            </View>
          </View>
          <View style={styles.View_I1223_7441_568_4149}>
            <View style={styles.View_I1223_7441_568_4150}>
              <View style={styles.View_I1223_7441_568_4151}>
                <Text style={styles.Text_I1223_7441_568_4151}>
                  Transportation
                </Text>
              </View>
              <View style={styles.View_I1223_7441_568_4152}>
                <Text style={styles.Text_I1223_7441_568_4152}>
                  Charging Tesla
                </Text>
              </View>
            </View>
            <View style={styles.View_I1223_7441_568_4153}>
              <View style={styles.View_I1223_7441_568_4154}>
                <Text style={styles.Text_I1223_7441_568_4154}>- $18</Text>
              </View>
              <View style={styles.View_I1223_7441_568_4155}>
                <Text style={styles.Text_I1223_7441_568_4155}>08:30 PM</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1223_7588}>
        <View style={styles.View_I1223_7588_568_4142} />
        <View style={styles.View_I1223_7588_568_4143}>
          <View style={styles.View_I1223_7588_568_4144}>
            <View style={styles.View_I1223_7588_1223_6279}>
              <View style={styles.View_I1223_7588_1223_6279_280_6314}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c38/1624/bb2f26ed49ab625512dc7f1393145eb0"
                  }}
                  style={styles.ImageBackground_I1223_7588_1223_6279_280_6315}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I1223_7588_568_4149}>
            <View style={styles.View_I1223_7588_568_4150}>
              <View style={styles.View_I1223_7588_568_4151}>
                <Text style={styles.Text_I1223_7588_568_4151}>
                  Subscription
                </Text>
              </View>
              <View style={styles.View_I1223_7588_568_4152}>
                <Text style={styles.Text_I1223_7588_568_4152}>
                  Disney+ Annual..
                </Text>
              </View>
            </View>
            <View style={styles.View_I1223_7588_568_4153}>
              <View style={styles.View_I1223_7588_568_4154}>
                <Text style={styles.Text_I1223_7588_568_4154}>- $80</Text>
              </View>
              <View style={styles.View_I1223_7588_568_4155}>
                <Text style={styles.Text_I1223_7588_568_4155}>03:30 PM</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1223_7604}>
        <View style={styles.View_I1223_7604_568_4142} />
        <View style={styles.View_I1223_7604_568_4143}>
          <View style={styles.View_I1223_7604_568_4144}>
            <View style={styles.View_I1223_7604_1223_6279}>
              <View style={styles.View_I1223_7604_1223_6279_280_6314}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c38/1624/bb2f26ed49ab625512dc7f1393145eb0"
                  }}
                  style={styles.ImageBackground_I1223_7604_1223_6279_280_6315}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I1223_7604_568_4149}>
            <View style={styles.View_I1223_7604_568_4150}>
              <View style={styles.View_I1223_7604_568_4151}>
                <Text style={styles.Text_I1223_7604_568_4151}>
                  Subscription
                </Text>
              </View>
              <View style={styles.View_I1223_7604_568_4152}>
                <Text style={styles.Text_I1223_7604_568_4152}>
                  Disney+ Annual..
                </Text>
              </View>
            </View>
            <View style={styles.View_I1223_7604_568_4153}>
              <View style={styles.View_I1223_7604_568_4154}>
                <Text style={styles.Text_I1223_7604_568_4154}>- $80</Text>
              </View>
              <View style={styles.View_I1223_7604_568_4155}>
                <Text style={styles.Text_I1223_7604_568_4155}>03:30 PM</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1194_6466}>
        <View style={styles.View_I1194_6466_816_137}>
          <View style={styles.View_I1194_6466_816_138}>
            <Text style={styles.Text_I1194_6466_816_138}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_I1194_6466_816_139}>
          <View style={styles.View_I1194_6466_816_140}>
            <View style={styles.View_I1194_6466_816_141}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42fe/75df/eee86effef9007e53d20453d65f0d730"
                }}
                style={styles.ImageBackground_I1194_6466_816_142}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/323b/7a56/3bd8d761d4d553ed17394f5c34643bfe"
                }}
                style={styles.ImageBackground_I1194_6466_816_145}
              />
            </View>
            <View style={styles.View_I1194_6466_816_146} />
          </View>
          <View style={styles.View_I1194_6466_816_147}>
            <View style={styles.View_I1194_6466_816_148} />
            <View style={styles.View_I1194_6466_816_149} />
            <View style={styles.View_I1194_6466_816_150} />
            <View style={styles.View_I1194_6466_816_151} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a2b/c9ca/21b52f3f9fca9a68ca91e9ed4afad110"
            }}
            style={styles.ImageBackground_I1194_6466_816_152}
          />
        </View>
      </View>
      <View style={styles.View_1194_6467}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cadd/9346/032c6ba778522c15cdc2c9ea9b70f742"
          }}
          style={styles.ImageBackground_I1194_6467_568_3875}
        />
        <View style={styles.View_I1194_6467_568_3879}>
          <View style={styles.View_I1194_6467_568_3880}>
            <Text style={styles.Text_I1194_6467_568_3880}>Home</Text>
          </View>
          <View style={styles.View_I1194_6467_568_3881}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7393/5016/7a3ac699bf2a7f80a0c11a166950902d"
              }}
              style={styles.ImageBackground_I1194_6467_568_3881_280_7756}
            />
          </View>
        </View>
        <View style={styles.View_I1194_6467_568_3882}>
          <View style={styles.View_I1194_6467_568_3883}>
            <Text style={styles.Text_I1194_6467_568_3883}>Transaction</Text>
          </View>
          <View style={styles.View_I1194_6467_568_3884}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5fe8/9c47/1cd602c420782697759e48e1de4410cd"
              }}
              style={styles.ImageBackground_I1194_6467_568_3884_280_6351}
            />
          </View>
        </View>
        <View style={styles.View_I1194_6467_568_3885}>
          <View style={styles.View_I1194_6467_568_3886}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cf0/1789/f1518d7b557d985cb58bc81e2d7f1810"
              }}
              style={styles.ImageBackground_I1194_6467_568_3886_280_5924}
            />
          </View>
          <View style={styles.View_I1194_6467_568_3887}>
            <Text style={styles.Text_I1194_6467_568_3887}>Profile</Text>
          </View>
        </View>
        <View style={styles.View_I1194_6467_568_3888}>
          <View style={styles.View_I1194_6467_568_3889}>
            <View style={styles.View_I1194_6467_568_3889_280_6276}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/694b/75aa/412ab94c8bc610721ef176f4d2e63e31"
                }}
                style={styles.ImageBackground_I1194_6467_568_3889_280_6277}
              />
            </View>
          </View>
          <View style={styles.View_I1194_6467_568_3890}>
            <Text style={styles.Text_I1194_6467_568_3890}>Budget</Text>
          </View>
        </View>
        <View style={styles.View_I1194_6467_568_3891}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/621a/cc08/8a1cb4a698f5ed34f3a523f179db9aae"
            }}
            style={styles.ImageBackground_I1194_6467_568_3892}
          />
          <View style={styles.View_I1194_6467_568_3893}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58dd/df95/ed75761b58c1669ab6076d11bea6e883"
              }}
              style={styles.ImageBackground_I1194_6467_568_3893_280_7677}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1240_6552}>
        <View style={styles.View_I1240_6552_769_3805} />
      </View>
      <View style={styles.View_1194_6468}>
        <View style={styles.View_I1194_6468_217_6977} />
      </View>
      <View style={styles.View_1277_5290}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2cb0/c19d/d7aeff4da82d6ea56dfa3a1189fe8f57"
          }}
          style={styles.ImageBackground_I1277_5290_1252_6088}
        />
        <View style={styles.View_I1277_5290_1252_6089}>
          <View style={styles.View_I1277_5290_1252_6090}>
            <Text style={styles.Text_I1277_5290_1252_6090}>
              Filter Transaction
            </Text>
          </View>
          <View style={styles.View_I1277_5290_1252_6091}>
            <View style={styles.View_I1277_5290_1252_6091_802_4396}>
              <Text style={styles.Text_I1277_5290_1252_6091_802_4396}>
                Reset
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I1277_5290_1252_6092}>
          <View style={styles.View_I1277_5290_1252_6093}>
            <View style={styles.View_I1277_5290_1252_6094}>
              <Text style={styles.Text_I1277_5290_1252_6094}>Filter By</Text>
            </View>
          </View>
          <View style={styles.View_I1277_5290_1252_6095}>
            <View style={styles.View_I1277_5290_1252_6096}>
              <View style={styles.View_I1277_5290_1252_6097}>
                <Text style={styles.Text_I1277_5290_1252_6097}>Income</Text>
              </View>
            </View>
            <View style={styles.View_I1277_5290_1252_6098}>
              <View style={styles.View_I1277_5290_1252_6099}>
                <Text style={styles.Text_I1277_5290_1252_6099}>Expense</Text>
              </View>
            </View>
            <View style={styles.View_I1277_5290_1252_6100}>
              <View style={styles.View_I1277_5290_1252_6101}>
                <Text style={styles.Text_I1277_5290_1252_6101}>Transfer</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I1277_5290_1252_6102}>
          <View style={styles.View_I1277_5290_1252_6103}>
            <Text style={styles.Text_I1277_5290_1252_6103}>Sort By</Text>
          </View>
          <View style={styles.View_I1277_5290_1252_6104}>
            <View style={styles.View_I1277_5290_1252_6105}>
              <View style={styles.View_I1277_5290_1252_6106}>
                <View style={styles.View_I1277_5290_1252_6107}>
                  <Text style={styles.Text_I1277_5290_1252_6107}>Highest</Text>
                </View>
              </View>
              <View style={styles.View_I1277_5290_1252_6108}>
                <View style={styles.View_I1277_5290_1252_6109}>
                  <Text style={styles.Text_I1277_5290_1252_6109}>Lowest</Text>
                </View>
              </View>
              <View style={styles.View_I1277_5290_1252_6110}>
                <View style={styles.View_I1277_5290_1252_6111}>
                  <Text style={styles.Text_I1277_5290_1252_6111}>Newest</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I1277_5290_1252_6112}>
              <View style={styles.View_I1277_5290_1252_6113}>
                <View style={styles.View_I1277_5290_1252_6114}>
                  <Text style={styles.Text_I1277_5290_1252_6114}>Oldest</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I1277_5290_1252_6115}>
          <View style={styles.View_I1277_5290_1252_6116}>
            <Text style={styles.Text_I1277_5290_1252_6116}>Category</Text>
          </View>
        </View>
        <View style={styles.View_I1277_5290_1252_6117}>
          <View style={styles.View_I1277_5290_1252_6117_791_1}>
            <View style={styles.View_I1277_5290_1252_6117_791_2}>
              <Text style={styles.Text_I1277_5290_1252_6117_791_2}>
                Choose Category
              </Text>
            </View>
            <View style={styles.View_I1277_5290_1252_6117_791_3}>
              <View style={styles.View_I1277_5290_1252_6117_791_4}>
                <Text style={styles.Text_I1277_5290_1252_6117_791_4}>
                  0 Selected
                </Text>
              </View>
              <View style={styles.View_I1277_5290_1252_6117_791_5}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3d1/ef5e/78bb781cf4510ec915cfc26dfe1f5329"
                  }}
                  style={
                    styles.ImageBackground_I1277_5290_1252_6117_791_5_280_5138
                  }
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I1277_5290_1252_6118}>
          <View style={styles.View_I1277_5290_1252_6118_568_4137}>
            <Text style={styles.Text_I1277_5290_1252_6118_568_4137}>Apply</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("117%") },
  View_1194_6456: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1194_6456_654_682: {
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
  View_I1194_6456_804_5567: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1194_6456_804_5567_804_5087: {
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
  ImageBackground_I1194_6456_804_5567_804_5087_280_5102: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I1194_6456_804_5567_804_5088: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1194_6456_804_5567_804_5088: {
    color: "rgba(33, 35, 37, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1194_6456_654_681: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1194_6456_804_5582: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1194_6456_804_5582_668_3134: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1194_6456_804_5582_668_3134_280_7864: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_1194_6465: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1194_6465_660_45: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    backgroundColor: "rgba(238, 229, 255, 1)"
  },
  View_I1194_6465_660_46: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I1194_6465_660_46: {
    color: "rgba(127, 61, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1194_6465_660_47: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1194_6465_660_47_280_5138: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_1223_7435: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("30%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1223_7435_568_4142: {
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
  View_I1223_7435_568_4143: {
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
  View_I1223_7435_568_4144: {
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
  View_I1223_7435_1223_6279: {
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
  ImageBackground_I1223_7435_1223_6279_280_5910: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I1223_7435_568_4149: {
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
  View_I1223_7435_568_4150: {
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
  View_I1223_7435_568_4151: {
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
  Text_I1223_7435_568_4151: {
    color: "rgba(41, 43, 45, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1223_7435_568_4152: {
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
  Text_I1223_7435_568_4152: {
    color: "rgba(145, 145, 159, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1223_7435_568_4153: {
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
  View_I1223_7435_568_4154: {
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
  Text_I1223_7435_568_4154: {
    color: "rgba(253, 60, 74, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1223_7435_568_4155: {
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
  Text_I1223_7435_568_4155: {
    color: "rgba(145, 145, 159, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1223_7437: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("57%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1223_7437_568_4142: {
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
  View_I1223_7437_568_4143: {
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
  View_I1223_7437_568_4144: {
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
  View_I1223_7437_1223_6279: {
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
  View_I1223_7437_1223_6279_280_7557: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_I1223_7437_1223_6279_280_7558: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1223_7437_568_4149: {
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
  View_I1223_7437_568_4150: {
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
  View_I1223_7437_568_4151: {
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
  Text_I1223_7437_568_4151: {
    color: "rgba(41, 43, 45, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1223_7437_568_4152: {
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
  Text_I1223_7437_568_4152: {
    color: "rgba(145, 145, 159, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1223_7437_568_4153: {
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
  View_I1223_7437_568_4154: {
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
  Text_I1223_7437_568_4154: {
    color: "rgba(253, 60, 74, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1223_7437_568_4155: {
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
  Text_I1223_7437_568_4155: {
    color: "rgba(145, 145, 159, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1223_7438: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1223_7438_654_687: {
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
  View_I1223_7438_654_686: {
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
  Text_I1223_7438_654_686: {
    color: "rgba(13, 14, 15, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1223_7439: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("69%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1223_7439_654_687: {
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
  View_I1223_7439_654_686: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1223_7439_654_686: {
    color: "rgba(13, 14, 15, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1223_7440: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1223_7440_568_4157: {
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
  View_I1223_7440_568_4158: {
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
  View_I1223_7440_568_4159: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(207, 250, 234, 1)"
  },
  View_I1223_7440_1223_6155: {
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
  View_I1223_7440_1223_6155_280_6325: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_I1223_7440_1223_6155_280_6326: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1223_7440_568_4164: {
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
  View_I1223_7440_568_4165: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1223_7440_568_4166: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1223_7440_568_4166: {
    color: "rgba(41, 43, 45, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1223_7440_568_4167: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I1223_7440_568_4167: {
    color: "rgba(145, 145, 159, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1223_7440_568_4168: {
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
  View_I1223_7440_568_4169: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1223_7440_568_4169: {
    color: "rgba(0, 168, 107, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1223_7440_568_4170: {
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
  Text_I1223_7440_568_4170: {
    color: "rgba(145, 145, 159, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1223_7441: {
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
  View_I1223_7441_568_4142: {
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
  View_I1223_7441_568_4143: {
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
  View_I1223_7441_568_4144: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(189, 220, 255, 1)"
  },
  View_I1223_7441_1223_6279: {
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
  ImageBackground_I1223_7441_1223_6279_280_7495: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I1223_7441_568_4149: {
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
  View_I1223_7441_568_4150: {
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
  View_I1223_7441_568_4151: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1223_7441_568_4151: {
    color: "rgba(41, 43, 45, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1223_7441_568_4152: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I1223_7441_568_4152: {
    color: "rgba(145, 145, 159, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1223_7441_568_4153: {
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
  View_I1223_7441_568_4154: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1223_7441_568_4154: {
    color: "rgba(253, 60, 74, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1223_7441_568_4155: {
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
  Text_I1223_7441_568_4155: {
    color: "rgba(145, 145, 159, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1223_7588: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("43%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1223_7588_568_4142: {
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
  View_I1223_7588_568_4143: {
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
  View_I1223_7588_568_4144: {
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
  View_I1223_7588_1223_6279: {
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
  View_I1223_7588_1223_6279_280_6314: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_I1223_7588_1223_6279_280_6315: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1223_7588_568_4149: {
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
  View_I1223_7588_568_4150: {
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
  View_I1223_7588_568_4151: {
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
  Text_I1223_7588_568_4151: {
    color: "rgba(41, 43, 45, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1223_7588_568_4152: {
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
  Text_I1223_7588_568_4152: {
    color: "rgba(145, 145, 159, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1223_7588_568_4153: {
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
  View_I1223_7588_568_4154: {
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
  Text_I1223_7588_568_4154: {
    color: "rgba(253, 60, 74, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1223_7588_568_4155: {
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
  Text_I1223_7588_568_4155: {
    color: "rgba(145, 145, 159, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1223_7604: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("43%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1223_7604_568_4142: {
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
  View_I1223_7604_568_4143: {
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
  View_I1223_7604_568_4144: {
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
  View_I1223_7604_1223_6279: {
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
  View_I1223_7604_1223_6279_280_6314: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_I1223_7604_1223_6279_280_6315: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1223_7604_568_4149: {
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
  View_I1223_7604_568_4150: {
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
  View_I1223_7604_568_4151: {
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
  Text_I1223_7604_568_4151: {
    color: "rgba(41, 43, 45, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1223_7604_568_4152: {
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
  Text_I1223_7604_568_4152: {
    color: "rgba(145, 145, 159, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1223_7604_568_4153: {
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
  View_I1223_7604_568_4154: {
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
  Text_I1223_7604_568_4154: {
    color: "rgba(253, 60, 74, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1223_7604_568_4155: {
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
  Text_I1223_7604_568_4155: {
    color: "rgba(145, 145, 159, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1194_6466: {
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
  View_I1194_6466_816_137: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  View_I1194_6466_816_138: {
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
  Text_I1194_6466_816_138: {
    color: "rgba(22, 23, 25, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_I1194_6466_816_139: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I1194_6466_816_140: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  View_I1194_6466_816_141: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1194_6466_816_142: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1194_6466_816_145: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_I1194_6466_816_146: {
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
  View_I1194_6466_816_147: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1194_6466_816_148: {
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
  View_I1194_6466_816_149: {
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
  View_I1194_6466_816_150: {
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
  View_I1194_6466_816_151: {
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
  ImageBackground_I1194_6466_816_152: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  View_1194_6467: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("101%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1194_6467_568_3875: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_I1194_6467_568_3879: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%")
  },
  View_I1194_6467_568_3880: {
    width: wp("8%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1194_6467_568_3880: {
    color: "rgba(198, 198, 198, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1194_6467_568_3881: {
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
  ImageBackground_I1194_6467_568_3881_280_7756: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I1194_6467_568_3882: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("3%")
  },
  View_I1194_6467_568_3883: {
    width: wp("15%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1194_6467_568_3883: {
    color: "rgba(127, 61, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1194_6467_568_3884: {
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
  ImageBackground_I1194_6467_568_3884_280_6351: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I1194_6467_568_3885: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  View_I1194_6467_568_3886: {
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
  ImageBackground_I1194_6467_568_3886_280_5924: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_I1194_6467_568_3887: {
    width: wp("8%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1194_6467_568_3887: {
    color: "rgba(198, 198, 198, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1194_6467_568_3888: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("3%")
  },
  View_I1194_6467_568_3889: {
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
  View_I1194_6467_568_3889_280_6276: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I1194_6467_568_3889_280_6277: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1194_6467_568_3890: {
    width: wp("9%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1194_6467_568_3890: {
    color: "rgba(198, 198, 198, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1194_6467_568_3891: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("0%")
  },
  ImageBackground_I1194_6467_568_3892: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1194_6467_568_3893: {
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
  ImageBackground_I1194_6467_568_3893_280_7677: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_1240_6552: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("117%"),
    minHeight: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1240_6552_769_3805: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(13, 14, 15, 1)"
  },
  View_1194_6468: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("112%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1194_6468_217_6977: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_1277_5290: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("68%"),
    minHeight: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1277_5290_1252_6088: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("2%")
  },
  View_I1277_5290_1252_6089: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1277_5290_1252_6090: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1277_5290_1252_6090: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1277_5290_1252_6091: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 229, 255, 1)"
  },
  View_I1277_5290_1252_6091_802_4396: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I1277_5290_1252_6091_802_4396: {
    color: "rgba(127, 61, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1277_5290_1252_6092: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1277_5290_1252_6093: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1277_5290_1252_6094: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1277_5290_1252_6094: {
    color: "rgba(13, 14, 15, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1277_5290_1252_6095: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1277_5290_1252_6096: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1277_5290_1252_6097: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I1277_5290_1252_6097: {
    color: "rgba(13, 14, 15, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1277_5290_1252_6098: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 229, 255, 1)"
  },
  View_I1277_5290_1252_6099: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I1277_5290_1252_6099: {
    color: "rgba(127, 61, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1277_5290_1252_6100: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1277_5290_1252_6101: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I1277_5290_1252_6101: {
    color: "rgba(13, 14, 15, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1277_5290_1252_6102: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1277_5290_1252_6103: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1277_5290_1252_6103: {
    color: "rgba(13, 14, 15, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1277_5290_1252_6104: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1277_5290_1252_6105: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1277_5290_1252_6106: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1277_5290_1252_6107: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I1277_5290_1252_6107: {
    color: "rgba(13, 14, 15, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1277_5290_1252_6108: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1277_5290_1252_6109: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I1277_5290_1252_6109: {
    color: "rgba(13, 14, 15, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1277_5290_1252_6110: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1277_5290_1252_6111: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I1277_5290_1252_6111: {
    color: "rgba(13, 14, 15, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1277_5290_1252_6112: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1277_5290_1252_6113: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1277_5290_1252_6114: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I1277_5290_1252_6114: {
    color: "rgba(13, 14, 15, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1277_5290_1252_6115: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("43%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1277_5290_1252_6116: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1277_5290_1252_6116: {
    color: "rgba(13, 14, 15, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1277_5290_1252_6117: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1277_5290_1252_6117_791_1: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1277_5290_1252_6117_791_2: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1277_5290_1252_6117_791_2: {
    color: "rgba(41, 43, 45, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1277_5290_1252_6117_791_3: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1277_5290_1252_6117_791_4: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1277_5290_1252_6117_791_4: {
    color: "rgba(145, 145, 159, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1277_5290_1252_6117_791_5: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1277_5290_1252_6117_791_5_280_5138: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_I1277_5290_1252_6118: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("58%"),
    backgroundColor: "rgba(127, 61, 255, 1)"
  },
  View_I1277_5290_1252_6118_568_4137: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1277_5290_1252_6118_568_4137: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
