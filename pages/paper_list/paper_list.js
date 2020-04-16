// pages/paper_list/paper_list.js

const app = getApp()
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
  
   
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  toPaperPage: function(e){
    let paperId = e.currentTarget.dataset['paperid'];
    wx.navigateTo({
      url: '../paper_all/paper_all?paperId='+paperId
    })
  },
  toJudgePaperPage: function(e){
    let paperId = e.currentTarget.dataset['paperid'];
    wx.navigateTo({
      url: '../paper_judge/paper_judge?paperId='+paperId+'&index='+e.currentTarget.dataset['index']
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
 
})