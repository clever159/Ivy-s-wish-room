// 数据模型
const state = {
    activeCategoryIndex: 0,
    totalCount: 0,
    categories: [
        {
            id: 'c1', name: '注意！', emoji: '📢',
            dishes: [
                { name: '注意！不可贪心！想一下能不能吃！', img: '⚠️', tag: '店规', tagType: 'rare', desc: '大厨会尽力完成，但保留因懒取消的权利 🫡', isRule: true, count: 0 },
                { name: '其他', img: '✨', tag: '自定义', tagType: 'free', desc: '想让大厨做点别的？在这里备注说明吧', count: 0 }
            ]
        },
        {
            id: 'c2', name: '喝的', emoji: '🧋',
            dishes: [
                { name: '奶茶', img: '🧋', tag: '热门', tagType: 'hot', desc: '瑞幸/霸王茶姬/茶百道/喜茶/雪王随你选，备注口味甜度', count: 0 },
                { name: '西瓜冰', img: '🍉', tag: '夏日必备', tagType: 'hot', count: 0 },
                { name: '尖叫', img: 'images/drink/jjblue.png', tag: '挤着喝', tagType: 'new', desc: '备注颜色', count: 0 },
                { name: '营养快线', img: 'images/drink/yykx.png', tag: '酸奶饮料', tagType: 'free', desc: '备注口味', count: 0 },
                { name: '其他', img: '✨', tag: '自定义', tagType: 'free', desc: '想喝点别的？备注说明', count: 0 }
            ]
        },
        {
            id: 'c3', name: '路边摊', emoji: '🍢',
            dishes: [
                { name: '淀粉肠 / 花刀肠', img: '🌭', tag: '香', tagType: 'hot', desc: '世界上最大的超市特有', count: 0 },
                { name: '麻辣烫基础套餐', img: '🍲', tag: '必点', tagType: 'hot', desc: '有别的想加的备注上', count: 0 },
                { name: '香辣烤面筋', img: '🍢', tag: '深夜灵魂', tagType: 'hot', desc: '可能没那么想吃吧', count: 0 },
                { name: '糖醋铁板烧', img: '🍱', tag: '独家', tagType: 'love', desc: '宝藏小店',  count: 0 },
                { name: '其他', img: '✨', tag: '自定义', tagType: 'free', desc: '想吃点别的？备注说明', count: 0 }
            ]
        },
        {
            id: 'c4', name: '快餐', emoji: '🍔',
            dishes: [
                { name: "McDonald's", img: '🍟', tag: '神圣', tagType: 'hot', desc: '我钟意食牡丹楼', count: 0 },
                { name: 'Taco / 塔克星', img: '🌮', tag: '新品', tagType: 'new', desc: 'Taco Tuesday!', count: 0 },
                { name: 'KFC', img: '🍗', tag: '疯四限定', tagType: 'hot', desc: '不用V我50', count: 0 },
                { name: '其他', img: '✨', tag: '自定义', tagType: 'free', desc: '想吃点别的？备注说明', count: 0 }
            ]
        },
        {
            id: 'c5', name: '甜点', emoji: '🎂',
            dishes: [
                { name: '蛋糕', img: '🎂', tag: '随时可点', tagType: 'love', desc: '想吃蛋糕需要什么理由呢', count: 0 },
                { name: '零食大礼包', img: '🍩', tag: '上新', tagType: 'new', desc: '超市自选，推着购物车跟你走', count: 0 },
                { name: '其他', img: '✨', tag: '自定义', tagType: 'free', desc: '想吃点别的？备注说明', count: 0 }
            ]
        },
        {
            id: 'c6', name: '仓鼠局', emoji: '🐹',
            dishes: [
                { name: '带鸡蛋出门遛弯', img: '🐹', tag: '专属', tagType: 'love', desc: '带鸡蛋出来晒太阳啃草皮', count: 0 },
                { name: '给鸡蛋加餐', img: '🥗', tag: '营养套餐', tagType: 'new', desc: '帮你去买仓鼠零食/粮食', count: 0 },
                { name: '鸡蛋专属写真', img: '📸', tag: '限定', tagType: 'rare', desc: '谁说我拍照不好看！', count: 0 },
                { name: '其他', img: '✨', tag: '自定义', tagType: 'free', desc: '其他关于鸡蛋的需求？', count: 0 }
            ]
        },
        {
            id: 'c7', name: '游戏局', emoji: '🎮',
            dishes: [
                { name: '打王者', img: '👑', tag: '开黑', tagType: 'hot', desc: '全程配合，你carry我辅助，输了不甩锅，我保证！', count: 0 },
                { name: '打蛋仔派对', img: '🥚', tag: '最爱', tagType: 'love', desc: '小红保驾护航，输了算我炸单', count: 0 },
                { name: '随便玩你选', img: '🎲', tag: '自由点', tagType: 'free', desc: '你说玩什么就玩什么，永远奉陪', count: 0 },
                { name: '其他', img: '✨', tag: '自定义', tagType: 'free', desc: '想玩别的游戏？', count: 0 }
            ]
        },
        {
            id: 'c8', name: '约会局', emoji: '🌅',
            dishes: [
                { name: '湖边坐着发呆', img: '🌊', tag: '情侣套餐', tagType: 'love', desc: '挑眉emoji', count: 0 },
                { name: '逛街（背包服务）', img: '🛍️', tag: '体力活', tagType: 'hot', desc: '在我手上试妆ba', count: 0 },
                { name: '陪你看电影', img: '🎬', tag: '限时', tagType: 'new', desc: '看电影有点暧昧了', count: 0 },
                { name: '夜晚散步', img: '🌙', tag: '浪漫', tagType: 'love', desc: '这项有点多余', count: 0 },
                { name: '其他', img: '✨', tag: '自定义', tagType: 'free', desc: '有别的约会计划？', count: 0 }
            ]
        },
        {
            id: 'c9', name: '充电局', emoji: '📚',
            dishes: [
                { name: '一起自习', img: '📖', tag: '高效', tagType: 'free', desc: '', count: 0 },
                { name: '不开心', img: '🧠', tag: 'emo', tagType: 'rare', desc: '找我聊天吧', count: 0 },
                { name: '生气了，需要哄', img: '💆', tag: '呵护', tagType: 'love', desc: '想咬人的来', count: 0 },
                { name: '需要静一静', img: '🤦‍♀️', tag: '呵护', tagType: 'love', count: 0 },
                { name: '其他', img: '✨', tag: '自定义', tagType: 'free', desc: '有别的充电方式？', count: 0 }
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

// 大厨推送 Key (已硬编码)
const chefPushKey = 'PDU41838T1UA7OqObxkpYSVZQ0ULhS9rA1Qz44qOl';

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
                        
                        <!-- 备注区域 -->
                        <div class="remark-area" onclick="event.stopPropagation()">
                            <textarea 
                                class="remark-input" 
                                placeholder="添加备注（口味、要求等）..." 
                                oninput="onRemarkInput(${cIdx}, ${dIdx}, this.value)"
                            >${dish.remark || ''}</textarea>
                            <div class="remark-photo-wrap">
                                <input type="file" id="file-${cIdx}-${dIdx}" hidden accept="image/*" onchange="onPhotoChange(${cIdx}, ${dIdx}, this)">
                                <div class="photo-preview ${dish.remarkPhoto ? 'has-img' : ''}" onclick="document.getElementById('file-${cIdx}-${dIdx}').click()">
                                    ${dish.remarkPhoto ? `<img src="${dish.remarkPhoto}">` : '<span>📸 上传图片</span>'}
                                    ${dish.remarkPhoto ? `<div class="del-photo" onclick="event.stopPropagation(); removePhoto(${cIdx}, ${dIdx})">×</div>` : ''}
                                </div>
                            </div>
                        </div>

                        <div class="dish-bottom">
                            <span class="price-tag"></span>
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

// 备注处理逻辑
window.onRemarkInput = (cIdx, dIdx, val) => {
    state.categories[cIdx].dishes[dIdx].remark = val;
};

window.onPhotoChange = (cIdx, dIdx, input) => {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            state.categories[cIdx].dishes[dIdx].remarkPhoto = e.target.result;
            renderMain();
        };
        reader.readAsDataURL(file);
    }
};

window.removePhoto = (cIdx, dIdx) => {
    state.categories[cIdx].dishes[dIdx].remarkPhoto = null;
    renderMain();
};

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
                orderList.push({ 
                    name: dish.name, 
                    count: dish.count,
                    remark: dish.remark || '无备注',
                    hasPhoto: !!dish.remarkPhoto
                });
            }
        });
    });

    const alertContent = orderList.map(item => `• ${item.name} x${item.count}${item.hasPhoto ? ' [带图]' : ''}\n  备注：${item.remark}`).join('\n');
    
    showModal('💖 专属订单确认', `确定要向大厨发送以下投喂申请吗？\n\n${alertContent}`, () => {
        if (chefPushKey) {
            sendToPushDeer(orderList);
        } else {
            sendToFeishu(orderList);
        }
    });
};

function sendToPushDeer(orderList) {
    const text = `🔔 新订单：\n${orderList.map(item => `• ${item.name} x${item.count}\n  备注：${item.remark}${item.hasPhoto ? ' [见网页附件]' : ''}`).join('\n')}\n合计：${state.totalCount}件`;
    const url = `https://api2.pushdeer.com/message/push?pushkey=${chefPushKey}&text=${encodeURIComponent(text)}`;

    fetch(url, { mode: 'no-cors' })
        .then(() => {
            showToast('呼叫请求已发出！🚀\n请等待大厨确认');
            clearCart();
        })
        .catch(err => {
            console.error('Fetch failed, trying image fallback:', err);
            const img = new Image();
            img.src = url;
            showToast('呼叫请求已发出(备选通道)！🚀');
            clearCart();
        });
}

function sendToFeishu(orderList) {
    const feishuWebhookUrl = 'https://open.feishu.cn/open-apis/bot/v2/hook/4987f535-5fde-4987-933d-455830978aa9';
    
    const feishuElements = orderList.map(item => {
        return [
            { tag: "text", text: " ◉  " },
            { tag: "text", text: `${item.name} `, style: ["bold"] },
            { tag: "text", text: `x${item.count} `, style: ["bold"] },
            { tag: "text", text: `\n    备注：${item.remark}${item.hasPhoto ? ' [带图]' : ''}` }
        ];
    });

    feishuElements.push([
        { tag: "text", text: `\n-----------------------------------\n` },
        { tag: "text", text: `合计数量：`, style: ["bold"] },
        { tag: "text", text: `${state.totalCount} 件宝贝\n` },
        { tag: "text", text: `🏃‍♂️ 请大厨快快起锅烧油，提鞋赶来！` }
    ]);

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
        showModal('⚠️ 自动呼叫失败', `由于浏览器安全限制，无法自动通知大厨。\n\n请点击下方按钮复制清单，手动发送给大厨：\n\n${orderList.map(item => `• ${item.name} x${item.count}`).join('\n')}`);
    });
}

function clearCart() {
    state.categories.forEach(cat => {
        cat.dishes.forEach(dish => {
            dish.count = 0;
            dish.remark = '';
            dish.remarkPhoto = null;
        });
    });
    calculateTotal();
    renderMain();
}

// UI 辅助
function showToast(msg) {
    alert(msg);
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
