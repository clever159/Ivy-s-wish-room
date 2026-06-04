Page({
  data: {
    activeCategoryIndex: 0,
    scrollToId: 'c1',
    totalCount: 0,
    categories: [
      {
        id: 'c1', name: '注意！', emoji: '📢',
        dishes: [
          { name: '注意！不可贪心！', img: '⚠️', tag: '店规', tagType: 'rare', desc: '大厨会尽力完成，但保留因懒取消的权利 🫡', isRule: true, count: 0 }
        ]
      },
      {
        id: 'c2', name: '喝的', emoji: '🧋',
        dishes: [
          { name: '奶茶', img: '🧋', tag: '热门', tagType: 'hot', desc: '瑞幸/霸王茶姬/茶百道/喜茶/雪王随你选，备注口味甜度', count: 0, price: 0, unit: '元' },
          { name: '西瓜冰', img: '🍉', tag: '热门', tagType: 'hot', count: 0, price: 0, unit: '元' },
          { name: '尖叫', img: '/images/drink/jjblue.png', tag: '挤着喝', tagType: 'new', desc: '备注颜色', count: 0, price: 0, unit: '元' },
          { name: '冰沙', img: '🧋', tag: '热门', tagType: 'hot', desc: '听说黄瓜味的很好吃哦，', count: 0, price: 0, unit: '元' }
          { name: '营养快线', img: '/images/drink/yykx.png', tag: '酸奶饮料', tagType: 'free', desc: '备注口味', count: 0, price: 0, unit: '元' }
        ]
      },
      {
        id: 'c3', name: '吃的', emoji: '🍢🍔🎂',
        dishes: [
          { name: '淀粉肠 / 花刀肠', img: '🌭', tag: '招牌', tagType: 'hot', desc: '烤得焦焦的，撒孜然辣椒，一起蹲着吃', count: 0, price: 0, unit: '元' },
          { name: '麻辣烫基础套餐', img: '🍲', tag: '必点', tagType: 'hot', desc: '有别的想加的备注上', count: 0, price: 0, unit: '元' },
          { name: '香辣烤面筋', img: '🍢', tag: '深夜灵魂', tagType: 'hot', desc: '大王叫我来巡山，抓个面筋做晚餐！多撒孜然多放辣 🌶️', count: 0, price: 0, unit: '元' },
          { name: '糖醋铁板烧', img: '🍱', tag: '独家', tagType: 'love', desc: '酸酸甜甜就像你，一起去学校门口那家',  count: 0, price: 0, unit: '元' },
          { name: "McDonald's", img: '🍟', tag: '神圣', tagType: 'hot', desc: '你点单我去取，疯狂星期四或周末专属福利', count: 0, price: 0, unit: '元' },
          { name: 'Taco / 塔克星', img: '🌮', tag: '新品', tagType: 'new', desc: '一起去吃，拍照必须给你拍好看', count: 0, price: 0, unit: '元' },
          { name: 'KFC', img: '🍗', tag: '疯四限定', tagType: 'hot', desc: '周四限定，不用V我50', count: 0, price: 0, unit: '元' },
          { name: '蛋糕', img: '🎂', tag: '随时可点', tagType: 'love', desc: '生日/想吃/无理由均可，附手写小卡', count: 0, price: 0, unit: '元' },
          { name: '零食大礼包', img: '🍩', tag: '上新', tagType: 'new', desc: '超市自选，大厨推着购物车跟你走', count: 0, price: 0, unit: '元' }
        ]
      },
      {
        id: 'c6', name: '仓鼠局', emoji: '🐹',
        dishes: [
          { name: '溜鸡蛋出门遛弯', img: '🐹', tag: '专属', tagType: 'love', desc: '带鸡蛋出来晒太阳，大厨负责拍好看的照片存档', count: 0, price: 0, unit: '元' },
          { name: '给鸡蛋加餐', img: '🥗', tag: '营养套餐', tagType: 'new', desc: '帮你去买仓鼠零食/粮食，配送到你手', count: 0, price: 0, unit: '元' },
          { name: '鸡蛋专属写真', img: '📸', tag: '限定', tagType: 'rare', desc: '布置场景，给鸡蛋拍一套写真，交付高清原图', count: 0, price: 0, unit: '元' }
        ]
      },
      {
        id: 'c7', name: '游戏局', emoji: '🎮',
        dishes: [
          { name: '打王者', img: '👑', tag: '开黑', tagType: 'hot', desc: '全程配合，你carry我辅助，输了不甩锅，我保证！', count: 0, price: 0, unit: '元' },
          { name: '打蛋仔派对', img: '🥚', tag: '最爱', tagType: 'love', desc: '小红保驾护航，输了算我炸单', count: 0, price: 0, unit: '元' },
          { name: '瓦', img: '🥚', tag: '随缘打', tagType: 'love', desc: 'fps界的低山臭水来了', count: 0, price: 0, unit: '元' },
          { name: '双人成行', img: '🥚', tag: '随缘打', tagType: 'love', desc: '打不好怪美甲的来了', count: 0, price: 0, unit: '元' },
          { name: '随便玩你选', img: '🎲', tag: '自由点', tagType: 'free', desc: '你说玩什么就玩什么，大厨永远奉陪', count: 0, price: 0, unit: '元' }
        ]
      },
      {
        id: 'c8', name: '约会局', emoji: '🌅',
        dishes: [
          { name: '湖边坐着发呆', img: '🌊', tag: '情侣套餐', tagType: 'love', desc: '带上零食，湖边坐到天黑，不说话也不尴尬', count: 0, price: 0, unit: '元' },
          { name: '逛街（背包服务）', img: '🛍️', tag: '体力活', tagType: 'hot', desc: '大厨负责拿袋子、拍照、给意见，不催回家', count: 0, price: 0, unit: '元' },
          { name: '陪你看电影', img: '🎬', tag: '限时', tagType: 'new', desc: '你选片，不许剧透不许催快进', count: 0, price: 0, unit: '元' },
          { name: '夜晚散步', img: '🌙', tag: '浪漫', tagType: 'love', desc: '校园里随便走，边走边聊', count: 0, price: 0, unit: '元' },
          { name: '拼豆', img: '', tag: '创作', tagType: 'love', desc: '一个小屋一待就是一天', count: 0, price: 0, unit: '元' }
        ]
      },
      {
        id: 'c9', name: '充电局', emoji: '📚',
        dishes: [
          { name: '一起自习', img: '📖', tag: '高效', tagType: 'free', desc: '占好座位，带好零食，学不进去可以互相督促', count: 0, price: 0, unit: '元' },
          { name: '不开心', img: '🧠', tag: 'emo', tagType: 'rare', desc: '找我聊天吧', count: 0, price: 0, unit: '元' },
          { name: '生气了，需要哄', img: '💆', tag: '呵护', tagType: 'love', desc: '想咬人', count: 0, price: 0, unit: '元' },
          { name: '需要静一静', img: '🤦‍♀️', tag: '呵护', tagType: 'love', count: 0, price: 0, unit: '元' }
        ]
      }
    ]
  },

  // 左侧菜单点击跳转锚点
  onCategoryTap(e) {
    const { id, index } = e.currentTarget.dataset;
    this.setData({
      scrollToId: id,
      activeCategoryIndex: index
    });
  },

  // 数量增加
  inc(e) {
    const { catIndex, dishIndex } = e.currentTarget.dataset;
    const key = `categories[${catIndex}].dishes[${dishIndex}].count`;
    const currentCount = this.data.categories[catIndex].dishes[dishIndex].count;
    
    // 店规限制：最多3件
    if (this.data.totalCount >= 3) {
      wx.showToast({ title: '不可以太贪心哦，每次限点3件！', icon: 'none' });
      return;
    }

    this.setData({
      [key]: currentCount + 1
    }, () => {
      this.calculateTotal();
    });
  },

  // 数量减少
  dec(e) {
    const { catIndex, dishIndex } = e.currentTarget.dataset;
    const key = `categories[${catIndex}].dishes[${dishIndex}].count`;
    const currentCount = this.data.categories[catIndex].dishes[dishIndex].count;
    
    if (currentCount <= 0) return;

    this.setData({
      [key]: currentCount - 1
    }, () => {
      this.calculateTotal();
    });
  },

  // 计算总数
  calculateTotal() {
    let total = 0;
    this.data.categories.forEach(cat => {
      cat.dishes.forEach(dish => {
        total += dish.count;
      });
    });
    this.setData({ totalCount: total });
  },

  // 卡片点击动效
  onDishTap(e) {
    const { catIndex, dishIndex } = e.currentTarget.dataset;
    const bumpKey = `categories[${catIndex}].dishes[${dishIndex}].isBumping`;
    
    this.setData({ [bumpKey]: true });
    setTimeout(() => {
      this.setData({ [bumpKey]: false });
    }, 150);
  },

  // 随机选菜
  randPick() {
    // 找出所有可以点单的有效菜品下标（排除第一项店规）
    let validDishes = [];
    this.data.categories.forEach((cat, cIdx) => {
      cat.dishes.forEach((dish, dIdx) => {
        if (!dish.isRule) {
          validDishes.push({ cIdx, dIdx, catId: cat.id });
        }
      });
    });

    if (validDishes.length === 0) return;
    
    const pick = validDishes[Math.floor(Math.random() * validDishes.length)];
    
    // 定位并触发动效
    this.setData({
      scrollToId: pick.catId,
      activeCategoryIndex: this.data.categories.findIndex(c => c.id === pick.catId)
    });

    // 延迟自动增加一件
    setTimeout(() => {
      const bumpKey = `categories[${pick.cIdx}].dishes[${pick.dIdx}].isBumping`;
      this.setData({ [bumpKey]: true });
      
      const countKey = `categories[${pick.cIdx}].dishes[${pick.dIdx}].count`;
      const currentCount = this.data.categories[pick.cIdx].dishes[pick.dIdx].count;
      
      if (this.data.totalCount < 3) {
        this.setData({ [countKey]: currentCount + 1 }, () => {
          this.calculateTotal();
        });
      } else {
        wx.showToast({ title: '帮抽到了好吃的，但你已经点满3件啦！', icon: 'none' });
      }

      setTimeout(() => this.setData({ [bumpKey]: false }), 150);
    }, 300);
  },

  // 下单动作（完美适配飞书机器人版）
  submitOrder() {
    if (this.data.totalCount === 0) return;

    // 1. 提取被点选的菜品
    let orderList = [];
    this.data.categories.forEach(cat => {
      cat.dishes.forEach(dish => {
        if (dish.count > 0) {
          orderList.push({
            name: dish.name,
            count: dish.count,
            price: dish.price
          });
        }
      });
    });

    // 2. 拼接一个用于在手机小程序上预览的弹窗文本
    const alertContent = orderList.map(item => `• ${item.name} x${item.count}`).join('\n');

    wx.showModal({
      title: '💖 专属订单确认',
      content: `确定要向大厨发送以下投喂申请吗？\n\n${alertContent}`,
      confirmText: '呼叫大厨',
      cancelText: '再想想',
      success: (res) => {
        if (res.confirm) {
          wx.showLoading({ title: '正在呼叫...' });

          // ⚠️ 请在这里替换成你刚才在飞书里复制的真实 Webhook 地址！
          const feishuWebhookUrl = 'https://open.feishu.cn/open-apis/bot/v2/hook/4987f535-5fde-4987-933d-455830978aa9';

          // 3. 将菜品转换成飞书富文本所需的节点数组
          const feishuElements = orderList.map(item => {
            return [
              { tag: "text", text: " ◉  " },
              { tag: "text", text: `${item.name} `, style: ["bold"] },
              { tag: "text", text: `x${item.count} `, style: ["bold"] },
              { tag: "text", text: `(代缴: ${item.price})`, style: ["italic"] }
            ];
          });

          // 额外追加总计行
          feishuElements.push([
            { tag: "text", text: `-----------------------------------\n` },
            { tag: "text", text: `合计数量：`, style: ["bold"] },
            { tag: "text", text: `${this.data.totalCount} 件宝贝\n` },
            { tag: "text", text: `🏃‍♂️ 请大厨快快起锅烧油，提鞋赶来！` }
          ]);

          // 4. 联网把数据直接发射给飞书
          wx.request({
            url: feishuWebhookUrl,
            method: 'POST',
            header: {
              'content-type': 'application/json'
            },
            data: {
              msg_type: "post",
              content: {
                post: {
                  zh_cn: {
                    title: "🔔 专属小馆：您有一份新的喂食订单！",
                    content: feishuElements
                  }
                }
              }
            },
            success: (requestRes) => {
              wx.hideLoading();
              
              // 检查飞书返回的状态码是否正常
              if (requestRes.data && requestRes.data.code === 0) {
                wx.showToast({
                  title: '大厨手机已震动！🚀',
                  icon: 'success',
                  duration: 2500
                });
                // 下单成功，把前端购物车清空
                this.clearCart();
              } else {
                console.error('接口报错：', requestRes.data);
                wx.showToast({ title: '拒绝了请求，请检查配置', icon: 'none' });
              }
            },
            fail: (err) => {
              wx.hideLoading();
              console.error('网络请求失败：', err);
              wx.showToast({
                title: '呼叫失败，请检查开发者工具域名校验',
                icon: 'none'
              });
            }
          });
        }
      }
    });
  },

  // 微信转发/邀请分享配置
  onShareAppMessage() {
    return {
      title: '💜 专属小馆开张啦！快来向我点单吧~',
      path: '/pages/index/index',
      imageUrl: '' // 可选，不填默认截屏
    };
  },

  // 清空购物车
  clearCart() {
    const newCategories = this.data.categories.map(cat => {
      const newDishes = cat.dishes.map(dish => {
        return { ...dish, count: 0 };
      });
      return { ...cat, dishes: newDishes };
    });
    this.setData({
      categories: newCategories,
      totalCount: 0
    });
  }
});