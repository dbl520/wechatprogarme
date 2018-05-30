const city = require('../../utils/city.js');
const cityObjs = require('../../utils/city.js');
const config = require('../../utils/config.js');
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
const appInstance = getApp();
Page({
  data: {
    searchLetter: [],
    showLetter: "",
    winHeight: 0,
    cityList: [],
    isShowLetter: false,
    scrollTop: 0,//置顶高度
    scrollTopId: '',//置顶id
    city: "定位中",
    currentCityCode: '',
    hotcityList: [{ cityCode: 110000, city: '北京市' }, { cityCode: 310000, city: '上海市' }, { cityCode: 440100, city: '广州市' }, { cityCode: 440300, city: '深圳市' }, { cityCode: 330100, city: '杭州市' }, { cityCode: 320100, city: '南京市' }, { cityCode: 420100, city: '武汉市' },  { cityCode: 120000, city: '天津市' }, { cityCode: 610100, city: '西安市' }, ],
    commonCityList: [{ cityCode: 110000, city: '北京市' }, { cityCode: 310000, city: '上海市' }],
    countyList: [{ cityCode: 110000, county: 'A区' }, { cityCode: 310000, county: 'B区' }, { cityCode: 440100, county: 'C区' }, { cityCode: 440300, county: 'D区' }, { cityCode: 330100, county: 'E县' }, { cityCode: 320100, county: 'F县' }, { cityCode: 420100, county: 'G县' }],
    inputName: '',
    completeList: [],
    county: '',
    condition: false,
  },
  onLoad: function () {
   
    // 生命周期函数--监听页面加载
    const searchLetter = city.searchLetter;
    const cityList = city.cityList();
    const sysInfo = wx.getSystemInfoSync();
    console.log(sysInfo);
    const winHeight = sysInfo.windowHeight;
    const itemH = winHeight / searchLetter.length;
    let tempArr = [];

    searchLetter.map(
      (item,index) => {
        // console.log(item);
        // console.log(index);
        let temp = {};
        temp.name = item;
        temp.tHeight = index * itemH;
        temp.bHeight = (index + 1) * itemH;
        tempArr.push(temp)
      }
    );
    // console.log(tempArr);
    this.setData({
      winHeight: winHeight,
      itemH: itemH,
      searchLetter: tempArr,
      cityList: cityList
    });

    this.getLocation();

  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成
 
  },
  onShow: function () {
    // 生命周期函数--监听页面显示
    // 实例化API核心类
    var demo = new QQMapWX({
      key: '5KOBZ-P3R3G-Z64QG-IPKWW-LHKBH-AQFES' // 必填
    });

    // 调用接口
    demo.getCityList({
      success: function (res) {
        console.log(res);
        if(res.status == 0){
          var res = res.result;
          var newPinyin = [];
          var allCity = [];
          for (let i = 0; i < res.length; i++) {
            for (let j = 0; j < res[i].length; j++) {
              if (res[i][j].pinyin){
                newPinyin.push(res[i][j].pinyin[0])
                allCity.push({ id: res[i][j].id, name: res[i][j].name, pinyin: ((res[i][j].pinyin[0]).slice(0, 1)).toLocaleUpperCase()})
              }
              // console.log('---', res[i][j].pinyin[0])
            }
          }
        }
        var newPinyin= newPinyin.map(function (currentValue, index){
          return (currentValue.toLocaleUpperCase()).slice(0, 1)
        });
        newPinyin.sort();
        console.log('dddd', newPinyin, new Set(newPinyin));
        newPinyin= [...new Set(newPinyin)] //去重
        var arr = [];
        var brr =  [];
        console.log('city', newPinyin, allCity)
          for (var j = 0; j < allCity.length;j++){
            var index = arr.indexOf(allCity[j].pinyin)
            if(index == -1){
              arr.push(allCity[j].pinyin)
              brr.push({ code: allCity[j].pinyin, data: [{ id: allCity[j].id, name: allCity[j].name }] })
            }else{
              console.log('d', brr[index])
              brr[index].data.push({ id: allCity[j].id, name: allCity[j].name })
            }
            
          }
          // var arr = [{ E: 'Edison' }, { B: '白百合' }, { A: 'Angelbaby' }, { C: '陈冠希' }, { D: 'Duncan' }];
          for (var i = 0; i < brr.length; i++) {
            var m = arr.map(function (item, index, brr) {

              var mark = true;
              if (arr[index + 1]) {
                var curkey = Object.keys(brr[index]);
                var nextkey = Object.keys(brr[index + 1]);
              }
              if (curkey && nextkey) {
                if (curkey[0].charCodeAt(0) > nextkey[0].charCodeAt(0)) {
                  arr[index] = [arr[index + 1], arr[index + 1] = arr[index]][0];
                  mark = false;
                }
              }
              return mark;
            })
            if (m[i]) {

              break;
            }
          }
          console.log(arr);
          console.log("", arr,brr)
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res);
      }
    });
  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏

  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载

  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作

  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数

  },

  clickLetter: function (e) {
    // console.log(e);
    console.log(e.currentTarget.dataset.letter)
    const showLetter = e.currentTarget.dataset.letter;
    this.setData({
      toastShowLetter: showLetter,
      isShowLetter: true,
      scrollTopId: showLetter,
    })
    // const that = this;
    // wx.showToast({
    //   title: showLetter,
    //   disabled: true,
    //   duration: 500,
    //   complete: function() {
    //     that.setData({
    //       scrollTopId: showLetter,
    //     })
    //   }
    // })
    const that = this;
    setTimeout(function () {
      that.setData({
        isShowLetter: false
      })
    }, 500)
  },
  reGetLocation: function() {
    appInstance.globalData.defaultCity = this.data.city
    appInstance.globalData.defaultCounty = this.data.county
    console.log(appInstance.globalData.defaultCity);
    //返回首页
    wx.switchTab({
      url: '../index/index'
    })
  },
  //选择城市
  bindCity: function (e) {
    // console.log("bindCity");
    // console.log(e);
    this.setData({
      condition:true,
      city: e.currentTarget.dataset.city,
      currentCityCode: e.currentTarget.dataset.code,
      scrollTop: 0,
      completeList: [],
    })
    this.selectCounty()

    appInstance.globalData.defaultCity = this.data.city
    appInstance.globalData.defaultCounty = ''
    console.log(appInstance.globalData.defaultCity)
  },

  bindCounty: function(e) {
    console.log(e);
    this.setData({ county: e.currentTarget.dataset.city })
    appInstance.globalData.defaultCounty = this.data.county
    console.log(appInstance.globalData.defaultCounty);

    wx.switchTab({
      url: '../index/index'
    })
  },

  //点击热门城市回到顶部
  hotCity: function () {
    console.log("hotCity");
    this.setData({
      scrollTop: 0,
    })
  },
  bindScroll: function (e) {
  //  console.log(e.detail)
  },
  selectCounty: function() {
    console.log("正在定位区县");
    let code = this.data.currentCityCode
    // console.log(code);
    const that = this;
    wx.request({
      url: `https://apis.map.qq.com/ws/district/v1/getchildren?&id=${code}&key=${config.key}`,
      success: function(res) {
        // console.log(res.data)
        // console.log(res.data.result[0]);
        that.setData({
          countyList: res.data.result[0],
        })
        // console.log(that.data.countyList);
        console.log("请求区县成功"+`https://apis.map.qq.com/ws/district/v1/getchildren?&id=${code}&key=${config.key}`);
        // console.log(res)
      },
      fail: function() {
        console.log("请求区县失败，请重试");
      }
    })
  },
  getLocation: function() {
    console.log("正在定位城市");
    this.setData({
      county: ''
    })
    const that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        let latitude = res.latitude
        let longitude = res.longitude
        wx.request({
            url: `https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude},${longitude}&key=${config.key}`,
            success: res => {
              console.log(res)
              // console.log(res.data.result.ad_info.city+res.data.result.ad_info.adcode);
              that.setData({
                city: res.data.result.ad_info.city,
                currentCityCode: res.data.result.ad_info.adcode,
                county: res.data.result.ad_info.district
              })
              that.selectCounty();
            }
        })
      }
    })
  },
  bindBlur: function(e) {
    this.setData({
      inputName: ''
    })
  },
  bindKeyInput: function(e) {
    // console.log("input: " + e.detail.value);
    this.setData({
      inputName: e.detail.value
    })
    this.auto()
  },
  auto: function () {
    let inputSd = this.data.inputName.trim()
    let sd = inputSd.toLowerCase()
    let num = sd.length
    const cityList = cityObjs.cityObjs
    // console.log(cityList.length)
    let finalCityList = []

    let temp = cityList.filter(
      item => {
        let text = item.short.slice(0, num).toLowerCase()
        return (text && text == sd)
      }
    )
    //在城市数据中，添加简拼到“shorter”属性，就可以实现简拼搜索
    let tempShorter = cityList.filter(
      itemShorter => {
        if (itemShorter.shorter) {
          let textShorter = itemShorter.shorter.slice(0, num).toLowerCase()
        return (textShorter && textShorter == sd)
        }
        return
      }
    )

    let tempChinese = cityList.filter(
      itemChinese => {
        let textChinese = itemChinese.city.slice(0, num)
        return (textChinese && textChinese == sd)
      }
    )

    if (temp[0]) {
      temp.map(
        item => {
          let testObj = {};
          testObj.city = item.city
          testObj.code = item.code
          finalCityList.push(testObj)
        }
      )
      this.setData({
        completeList: finalCityList,
      })
    } else if (tempShorter[0]) {
      tempShorter.map(
        item => {
          let testObj = {};
          testObj.city = item.city
          testObj.code = item.code
          finalCityList.push(testObj)
        }
      );
      this.setData({
        completeList: finalCityList,
      })
    } else if (tempChinese[0]) {
      tempChinese.map(
        item => {
          let testObj = {};
          testObj.city = item.city
          testObj.code = item.code
          finalCityList.push(testObj)
        })
      this.setData({
        completeList: finalCityList,
      })
    } else {
      return
    }
  },
})
