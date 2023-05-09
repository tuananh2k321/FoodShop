import * as React from 'react';
import { StyleSheet, Text, ScrollView, KeyboardAvoidingView, NativeModules, NativeEventEmitter } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';
import CryptoJS from 'crypto-js';

const { PayZaloBridge } = NativeModules;

const payZaloBridgeEmitter = new NativeEventEmitter(PayZaloBridge);

const subscription = payZaloBridgeEmitter.addListener(
  'EventPayZalo',
  (data) => {
    if (data.returnCode == 1) {
      alert('Pay success!');
    } else {
      alert('Pay errror! ' + data.returnCode);
    }
  }
);


export default function App() {
  const [money, setMoney] = React.useState('10000')
  const [token, setToken] = React.useState('')
  const [returncode, setReturnCode] = React.useState('')


  function getCurrentDateYYMMDD() {
    var todayDate = new Date().toISOString().slice(2, 10);
    return todayDate.split('-').join('');
  }

  async function createOrder(money) {
    let apptransid = getCurrentDateYYMMDD() + '_' + new Date().getTime()

    let appid = 2553
    let amount = parseInt(money)
    let appuser = "ZaloPayDemo"
    let apptime = (new Date).getTime()
    let embeddata = "{}"
    let item = "[]"
    let description = "Merchant description for order #" + apptransid
    let hmacInput = appid + "|" + apptransid + "|" + appuser + "|" + amount + "|" + apptime + "|" + embeddata + "|" + item
    let mac = CryptoJS.HmacSHA256(hmacInput, "PcY4iZIKFCIdgZvA6ueMcMHHUbRLYjPL")
    console.log('====================================');
    console.log("hmacInput: " + hmacInput);
    console.log("mac: " + mac)
    console.log('====================================');
    var order = {
      'app_id': appid,
      'app_user': appuser,
      'app_time': apptime,
      'amount': amount,
      'app_trans_id': apptransid,
      'embed_data': embeddata,
      'item': item,
      'description': description,
      'mac': mac
    }

    console.log(order)

    let formBody = []
    for (let i in order) {
      var encodedKey = encodeURIComponent(i);
      var encodedValue = encodeURIComponent(order[i]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    await fetch('https://sb-openapi.zalopay.vn/v2/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: formBody
    }).then(response => response.json())
      .then(resJson => {
        setToken(resJson.zp_trans_token)
        setReturnCode(resJson.return_code)
      })
      .catch((error) => {
        console.log("error ", error)
      })
  }

  function payOrder() {
    var payZP = NativeModules.PayZaloBridge;
    payZP.payOrder(token);
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.welcomeHead} >
          ZaloPay App To App Demo
        </Text>
        <Text style={styles.welcome} >
          Amount:
        </Text>
        <TextInput
          onChangeText={(value) => setMoney(value)}
          value={money}
          keyboardType="numeric"
          placeholder="Input amount"
          style={styles.inputText}
        />
        <Button
          title="Create order"
          type="outline"
          onPress={() => { createOrder(money) }}
        />
        <Text style={styles.welcome}>ZpTranstoken: {token}</Text>
        <Text style={styles.welcome}>returncode: {returncode}</Text>
        {returncode == 1 ?
          <Button
            title="Pay order"
            type="outline"
            onPress={() => { payOrder() }}
          /> : null
        }
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  welcomeHead: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inputText: {
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center'
  },
});
