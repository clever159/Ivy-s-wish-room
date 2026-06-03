// 数据模型
const state = {
    activeCategoryIndex: 0,
    totalCount: 0,
    categories: [
        {
            id: 'c1', name: '注意！', emoji: '📢',
            dishes: [
                { name: '注意！不可贪心！', img: '⚠️', tag: '店规', tagType: 'rare', desc: '大厨会尽力完成，但保留因懒取消的权利 🫡', isRule: true, count: 0, price: 0, unit: '次' }
            ]
        },
        {
            id: 'c2', name: '喝的', emoji: '🧋',
            dishes: [
                { name: '奶茶', img: '🧋', tag: '热门', tagType: 'hot', desc: '瑞幸/霸王茶姬/茶百道/喜茶/雪王随你选，备注口味甜度', count: 0, price: 0, unit: '元' },
                { name: '西瓜冰', img: '🍉', tag: '热门', tagType: 'hot', count: 0, price: 0, unit: '元' },
                { name: '尖叫', img: 'images/drink/jjblue.png', tag: '挤着喝', tagType: 'new', desc: '备注颜色', count: 0, price: 0, unit: '元' },
                { name: '营养快线', img: 'images/drink/yykx.png', tag: '酸奶饮料', tagType: 'free', desc: '备注口味', count: 0, price: 0, unit: '元' }
            ]
        },
        {
            id: 'c3', name: '路边摊', emoji: '🍢',
            dishes: [
                { name: '淀粉肠 / 花刀肠', img: '🌭', tag: '招牌', tagType: 'hot', desc: '烤得焦焦的，撒孜然辣椒，一起蹲着吃', count: 0, price: 0, unit: '元' },
                { name: '麻辣烫基础套餐', img: '🍲', tag: '必点', tagType: 'hot', desc: '有别的想加的备注上', count: 0, price: 0, unit: '元' },
                { name: '香辣烤面筋', img: '🍢', tag: '深夜灵魂', tagType: 'hot', desc: '大王叫我来巡山，抓个面筋做晚餐！多撒孜然多放辣 🌶️', count: 0, price: 0, unit: '元' },
                { name: '糖醋铁板烧', img: '🍱', tag: '独家', tagType: 'love', desc: '酸酸甜甜就像你，一起去学校门口那家',  count: 0, price: 0, unit: '元' }
            ]
        },
        {
            id: 'c4', name: '快餐', emoji: '🍔',
            dishes: [
                { name: "McDonald's", img: '🍟', tag: '神圣', tagType: 'hot', desc: '你点单我去取，疯狂星期四或周末专属福利', count: 0, price: 0, unit: '元' },
                { name: 'Taco / 塔克星', img: '🌮', tag: '新品', tagType: 'new', desc: '一起去吃，拍照必须给你拍好看', count: 0, price: 0, unit: '元' },
                { name: 'KFC', img: '🍗', tag: '疯四限定', tagType: 'hot', desc: '周四限定，不用V我50', count: 0, price: 0, unit: '元' }
            ]
        },
        {
            id: 'c5', name: '甜点', emoji: '🎂',
            dishes: [
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
                { name: '随便玩你选', img: '🎲', tag: '自由点', tagType: 'free', desc: '你说玩什么就玩什么，大厨永远奉陪', count: 0, price: 0, unit: '元' }
            ]
        },
        {
            id: 'c8', name: '约会局', emoji: '🌅',
            dishes: [
                { name: '湖边坐着发呆', img: '🌊', tag: '情侣套餐', tagType: 'love', desc: '带上零食，湖边坐到天黑，不说话也不尴尬', count: 0, price: 0, unit: '元' },
                { name: '逛街（背包服务）', img: '🛍️', tag: '体力活', tagType: 'hot', desc: '大厨负责拿袋子、拍照、给意见，不催回家', count: 0, price: 0, unit: '元' },
                { name: '陪你看电影', img: '🎬', tag: '限时', tagType: 'new', desc: '你选片，不许剧透不许催快进', count: 0, price: 0, unit: '元' },
                { name: '夜晚散步', img: '🌙', tag: '浪漫', tagType: 'love', desc: '校园里随便走，边走边聊', count: 0, price: 0, unit: '元' }
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
};

// 初始化 DOM 引用
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');
const totalBadge = document.getElementById('total-badge');
const submitBtn = document.getElementById('submit-btn');
const modalOverlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const modalCancel = document.getElementById('modal-cancel');
const modalConfirm = document.getElementById('modal-confirm');

// 大厨推送设置
const chefSettingsBtn = document.getElementById('chef-settings-btn');
const chefModalOverlay = document.getElementById('chef-modal-overlay');
const pushKeyInput = document.getElementById('push-key-input');
const saveChefSettings = document.getElementById('save-chef-settings');

// 初始化推送 Key
let chefPushKey = localStorage.getItem('chefPushKey') || '';
pushKeyInput.value = chefPushKey;

chefSettingsBtn.onclick = () => chefModalOverlay.classList.add('show');
saveChefSettings.onclick = () => {
    chefPushKey = pushKeyInput.value.trim();
    localStorage.setItem('chefPushKey', chefPushKey);
    chefModalOverlay.classList.remove('show');
    showToast('设置已保存！');
};

// 渲染侧边栏
function renderSidebar() {
    sidebar.innerHTML = state.categories.map((cat, index) => `
        <div class="cat-item ${state.activeCategoryIndex === index ? 'active' : ''}" 
             onclick="onCategoryTap('${cat.id}', ${index})">
            <span class="cat-emoji">${cat.emoji}</span>${cat.name}
        </div>
    `).join('');
}

// 渲染菜品列表
function renderMain() {
    mainContent.innerHTML = state.categories.map((cat, cIdx) => `
        <div id="${cat.id}">
            <div class="cat-header">${cat.emoji} ${cat.name}<span class="cat-count">(${cat.dishes.length})</span></div>
            ${cat.dishes.map((dish, dIdx) => `
                <div class="dish" id="dish-${cIdx}-${dIdx}" onclick="onDishTap(${cIdx}, ${dIdx})">
                    <div class="dish-img">
                        ${dish.img.length > 4 ? `<img src="${dish.img}" alt="${dish.name}">` : `<span>${dish.img}</span>`}
                        ${dish.isSoldOut ? `<div class="sold-mask">补货中</div>` : ''}
                    </div>
                    <div class="dish-body">
                        <div class="dish-name">
                            ${dish.name}
                            <span class="pill p-${dish.tagType}">${dish.tag}</span>
                        </div>
                        <div class="stars-row">
                            <span class="star-i">★★★★★</span>
                            <span style="font-size:10px;color:var(--text2);margin-left:3px;">5.0</span>
                        </div>
                        <div class="dish-desc">${dish.desc || ''}</div>
                        <div class="dish-bottom">
                            <span class="price-tag">${dish.price}<span class="price-unit">${dish.unit}</span></span>
                            ${dish.isRule ? `<span style="font-size:10px;color:var(--text3);">已知晓 ✓</span>` : `
                                <div class="stepper">
                                    <button class="s-btn ${dish.count === 0 ? 'hide' : ''}" 
                                            onclick="event.stopPropagation(); dec(${cIdx}, ${dIdx})">−</button>
                                    ${dish.count > 0 ? `<span class="s-num">${dish.count}</span>` : ''}
                                    <button class="add-circle" 
                                            onclick="event.stopPropagation(); inc(${cIdx}, ${dIdx})">+</button>
                                </div>
                            `}
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `).join('');
}

// 事件处理
window.onCategoryTap = (id, index) => {
    state.activeCategoryIndex = index;
    renderSidebar();
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};

window.inc = (cIdx, dIdx) => {
    if (state.totalCount >= 3) {
        showToast('不可以太贪心哦，每次限点3件！');
        return;
    }
    state.categories[cIdx].dishes[dIdx].count++;
    calculateTotal();
    renderMain();
};

window.dec = (cIdx, dIdx) => {
    if (state.categories[cIdx].dishes[dIdx].count <= 0) return;
    state.categories[cIdx].dishes[dIdx].count--;
    calculateTotal();
    renderMain();
};

window.onDishTap = (cIdx, dIdx) => {
    const el = document.getElementById(`dish-${cIdx}-${dIdx}`);
    el.classList.add('bump');
    setTimeout(() => el.classList.remove('bump'), 150);
};

function calculateTotal() {
    let total = 0;
    state.categories.forEach(cat => {
        cat.dishes.forEach(dish => {
            total += dish.count;
        });
    });
    state.totalCount = total;
    
    totalBadge.innerText = total;
    totalBadge.classList.toggle('show', total > 0);
    submitBtn.classList.toggle('on', total > 0);
}

// 随机选菜
document.getElementById('rand-btn').onclick = () => {
    let validDishes = [];
    state.categories.forEach((cat, cIdx) => {
        cat.dishes.forEach((dish, dIdx) => {
            if (!dish.isRule) {
                validDishes.push({ cIdx, dIdx, catId: cat.id });
            }
        });
    });

    if (validDishes.length === 0) return;
    
    const pick = validDishes[Math.floor(Math.random() * validDishes.length)];
    onCategoryTap(pick.catId, state.categories.findIndex(c => c.id === pick.catId));

    setTimeout(() => {
        const el = document.getElementById(`dish-${pick.cIdx}-${pick.dIdx}`);
        el.classList.add('bump');
        
        if (state.totalCount < 3) {
            inc(pick.cIdx, pick.dIdx);
        } else {
            showToast('帮抽到了好吃的，但你已经点满3件啦！');
        }
        setTimeout(() => el.classList.remove('bump'), 150);
    }, 300);
};

// 下单逻辑
document.getElementById('submit-btn').onclick = () => {
    if (state.totalCount === 0) return;

    let orderList = [];
    state.categories.forEach(cat => {
        cat.dishes.forEach(dish => {
            if (dish.count > 0) {
                orderList.push({ name: dish.name, count: dish.count });
            }
        });
    });

    const alertContent = orderList.map(item => `• ${item.name} x${item.count}`).join('\n');
    
    showModal('💖 专属订单确认', `确定要向大厨发送以下投喂申请吗？\n\n${alertContent}`, () => {
        if (chefPushKey) {
            sendToPushDeer(orderList);
        } else {
            sendToFeishu(orderList);
        }
    });
};

function sendToPushDeer(orderList) {
    const text = `🔔 新订单：\n${orderList.map(item => `• ${item.name} x${item.count}`).join('\n')}\n合计：${state.totalCount}件`;
    const url = `https://api2.pushdeer.com/message/push?pushkey=${chefPushKey}&text=${encodeURIComponent(text)}`;

    // PushDeer API 通常允许跨域，或者可以通过 mode: 'no-cors' 发起“火后即忘”请求
    fetch(url, { mode: 'no-cors' })
        .then(() => {
            showToast('已通过 PushDeer 呼叫大厨！🚀');
            clearCart();
        })
        .catch(err => {
            console.error(err);
            showToast('PushDeer 发送失败，尝试飞书...');
            sendToFeishu(orderList);
        });
}

function sendToFeishu(orderList) {
    const feishuWebhookUrl = 'https://open.feishu.cn/open-apis/bot/v2/hook/4987f535-5fde-4987-933d-455830978aa9';
    
    const feishuElements = orderList.map(item => {
        return [
            { tag: "text", text: " ◉  " },
            { tag: "text", text: `${item.name} `, style: ["bold"] },
            { tag: "text", text: `x${item.count} `, style: ["bold"] }
        ];
    });

    feishuElements.push([
        { tag: "text", text: `-----------------------------------\n` },
        { tag: "text", text: `合计数量：`, style: ["bold"] },
        { tag: "text", text: `${state.totalCount} 件宝贝\n` },
        { tag: "text", text: `🏃‍♂️ 请大厨快快起锅烧油，提鞋赶来！` }
    ]);

    // 注意：Web 端直接调用 Webhook 可能会遇到跨域 (CORS) 问题
    // 建议通过云函数中转，或者在飞书后台配置允许的域名
    fetch(feishuWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            msg_type: "post",
            content: {
                post: {
                    zh_cn: {
                        title: "🔔 专属小馆：您有一份新的喂食订单！",
                        content: feishuElements
                    }
                }
            }
        })
    }).then(res => res.json())
    .then(data => {
        if (data.code === 0) {
            showToast('大厨手机已震动！🚀');
            clearCart();
        } else {
            showToast('飞书接口报错：' + data.msg);
        }
    }).catch(err => {
        console.error(err);
        showModal('🚫 发送失败', `原因：浏览器跨域安全限制 (CORS)。\n\n网页版无法直接请求飞书接口。建议：\n1. 使用微信小程序版（已配置合法域名）\n2. 或者联系大厨手动截图发送`);
    });
}

function clearCart() {
    state.categories.forEach(cat => {
        cat.dishes.forEach(dish => dish.count = 0);
    });
    calculateTotal();
    renderMain();
}

// UI 辅助
function showToast(msg) {
    alert(msg); // 简单起见使用 alert，后续可美化
}

function showModal(title, content, onConfirm) {
    modalTitle.innerText = title;
    modalContent.innerText = content;
    modalOverlay.classList.add('show');
    
    modalConfirm.onclick = () => {
        modalOverlay.classList.remove('show');
        onConfirm();
    };
    modalCancel.onclick = () => {
        modalOverlay.classList.remove('show');
    };
}

// 分享
document.getElementById('share-btn').onclick = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        showToast('链接已复制，快去分享吧！');
    });
};

// 初始化渲染
renderSidebar();
renderMain();
