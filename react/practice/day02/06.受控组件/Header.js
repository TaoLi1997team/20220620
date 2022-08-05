import React, { Component } from 'react';
export default class Header extends Component {
    state = {
        text: '老酒馆大饭店',
        content: '本店自1908年首店开张营业至今，百年招牌，融合国内各大菜系，好评如潮，现已开第10086家新分店于2022年8月4号在广东省xxx开张...;招牌菜单：有蒸羊羔儿、蒸熊掌、蒸鹿尾儿、烧花鸭、烧雏鸡、烧子鹅、卤猪、卤鸭、酱鸡、腊肉、松花小肚儿、晾肉、香肠儿、什锦苏盘儿、熏鸡白肚儿、清蒸八宝猪、江米酿鸭子、罐儿野鸡、罐儿鹌鹑、卤什件儿、卤子鹅、山鸡、兔脯、菜蟒、银鱼、清蒸哈什蚂、烩鸭丝、烩鸭腰、烩鸭条、清拌鸭丝儿、黄心管儿 焖白鳝、焖黄鳝、豆豉鲇鱼、锅烧鲤鱼、烀烂甲鱼、抓炒鲤鱼、抓炒对虾、软炸里脊、软炸鸡、什锦套肠儿、卤煮寒鸦儿、麻酥油卷儿、熘鲜蘑、熘鱼脯、熘鱼肚、熘鱼片儿、醋熘肉片儿、烩三鲜儿、烩白蘑、烩鸽子蛋、炒银丝、烩鳗鱼、炒白虾、炝青蛤、炒面鱼、炒竹笋、芙蓉燕菜、炒虾仁儿、烩虾仁儿、烩腰花儿、烩海参、炒蹄筋儿、锅烧海参、锅烧白菜、炸木耳、炒肝尖儿...',
        selectChineseAlcoholicDrinks: '0',
        selectLiqueur: '0',
        selectChineseRiceWine: '0',
        selectBeer:'0',
        selectGrape:'0',
        selectFruitWine:'0',
        selectFruitWine:'0',
        selectMedicalWine:'0',
        selectShandongCuisine: '0',
        selectSichuanCuisine: '0',
        selectGuangdongCuisine: '0',
        selectFujianCuisine: '0',
        selectJiangsuCuisine: '0',
        selectZhejiangCuisine: '0',
        selectHunanCuisine: '0',
        selectAnhuiCuisine: '0',
        selectNortheasternCuisine: '0',
        selectHomeCooking: '0',
        selectCongee: '0',
        selectPowder: '0',
        selectNoodle: '0',
        selectRice: '0',
        checked: true,
        radio: ''
    };
    /* handleChange = e => {
        const value = e.target.value;
        this.setState({ text: value });
    };
    handleChangeArea = e => {
        const value = e.target.value;
        this.setState({ content: value });
    };
    handleChangeSelect = e => {
        const value = e.target.value;
        this.setState({ select: value });
    }; */
    handle = name => e => {
        // const value = name === 'checked' || name === 'radio' ? e.target.checked : e.target.value;
        const value = name === 'checked' ? e.target.checked : e.target.value;
        this.setState({ [name]: value });
    };
    render() {
        return (<div>
            <input type='text' value={this.state.text} onChange={this.handle('text')} />
            <br />
            <textarea rows="10" cols="100" value={this.state.content} onChange={this.handle('content')}></textarea>
            <br />
            {/* //#region */}
            <span>酒: </span>
            <select value={this.state.select} onChange={this.handle('selectChineseAlcoholicDrinks')}>
                <option value='0'>中国十大名酒</option>
                <option value='1'>贵州茅台</option>
                <option value='2'>四川五粮液</option>
                <option value='3'>安徽古井贡酒</option>
                <option value='4'>四川剑南春</option>
                <option value='5'>四川泸州老窖</option>
                <option value='6'>山西汾酒</option>
                <option value='7'>陕西西凤酒</option>
                <option value='8'>贵州董酒</option>
                <option value='9'>四川郎酒</option>
                <option value='10'>江苏洋河酒</option>
            </select>
            <select value={this.state.select} onChange={this.handle('selectLiqueur')}>
                <option value='0'>白酒(烧/高粱酒)</option>
                <option value='1'>茅台酒</option>
                <option value='2'>汾酒</option>
                <option value='3'>小曲酒</option>
                <option value='4'>三花酒</option>
                <option value='5'>湘山酒</option>
                <option value='6'>麸曲酒</option>
                <option value='7'>液态酒</option>
            </select>
            <select value={this.state.select} onChange={this.handle('selectChineseRiceWine')}>
                <option value='0'>黄酒(老/料/陈酒)</option>
                <option value='1'>绍兴加饭酒</option>
                <option value='2'>花雕酒</option>
                <option value='3'>善酿酒</option>
                <option value='4'>香雪酒</option>
                <option value='5'>福建老窖</option>
                <option value='6'>龙岗沉缸酒</option>
                <option value='7'>山东即墨黄酒</option>
                <option value='8'>兰陵黄酒</option>
                <option value='9'>山西黄酒</option>
                <option value='10'>大连黄酒</option>
            </select>
            <select value={this.state.select} onChange={this.handle('selectBeer')}>
                <option value='0'>啤酒</option>
                <option value='1'>青岛啤酒</option>
                <option value='2'>雪花啤酒</option>
                <option value='3'>百威啤酒</option>
                <option value='4'>燕京啤酒</option>
                <option value='5'>嘉士伯啤酒</option>
                <option value='6'>珠江啤酒</option>
                <option value='7'>哈尔滨啤酒</option>
                <option value='8'>喜力啤酒</option>
                <option value='9'>科罗娜啤酒</option>
                <option value='10'>乌苏啤酒</option>
            </select>
            <select value={this.state.select} onChange={this.handle('selectGrape')}>
                <option value='0'>葡萄酒</option>
                <option value='1'>张裕葡萄酒</option>
                <option value='2'>长城葡萄酒</option>
                <option value='3'>王朝酒业</option>
                <option value='4'>莫高</option>
                <option value='5'>威龙葡萄酒</option>
                <option value='6'>通化</option>
                <option value='7'>贺兰山</option>
                <option value='8'>尼雅</option>
                <option value='9'>香格里拉</option>
                <option value='10'>龙徽葡萄酒</option>
            </select>
            <select value={this.state.select} onChange={this.handle('selectFruitWine')}>
                <option value='0'>果酒</option>
                <option value='1'>俏雅</option>
                <option value='2'>真露</option>
                <option value='3'>瑞可德林</option>
                <option value='4'>梅见</option>
                <option value='5'>宁夏红</option>
                <option value='6'>梅乃宿</option>
                <option value='7'>悠蜜</option>
                <option value='8'>五粮液仙林</option>
                <option value='9'>桃花醉</option>
                <option value='10'>贝瑞甜心</option>
            </select>
            <select value={this.state.select} onChange={this.handle('selectMedicalWine')}>
                <option value='0'>药酒</option>
                <option value='1'>参茸酒</option>
                <option value='2'>八味黄芪酒</option>
                <option value='3'>清宫换春酒</option>
                <option value='4'>五加三酒</option>
                <option value='5'>琼江药酒</option>
                <option value='6'>羌活酒</option>
                <option value='7'>五倍子白矾酒</option>
                <option value='8'>仓贡酒</option>
                <option value='9'>八珍酒</option>
                <option value='10'>十全大补酒</option>
            </select>
            <br />
            <span>菜系: </span>
            <select value={this.state.select} onChange={this.handle('selectShandongCuisine')}>
                <option value='0'>鲁菜</option>
                <option value='1'>纸包鸡</option>
                <option value='2'>焖大虾</option>
                <option value='3'>锅烧鸡</option>
                <option value='4'>玉带虾仁</option>
                <option value='5'>油发豆莛</option>
                <option value='6'>红扒鱼翅</option>
                <option value='7'>花揽桂鱼</option>
                <option value='8'>山东菜丸</option>
                <option value='9'>白扒通天翅</option>
                <option value='10'>孔府一品锅</option>
            </select>
            <select value={this.state.select} onChange={this.handle('selectSichuanCuisine')}>
                <option value='0'>川菜</option>
                <option value='1'>叫花鸡</option>
                <option value='2'>酸菜鱼</option>
                <option value='3'>辣子鸡丁</option>
                <option value='4'>东坡肘子</option>
                <option value='5'>豆瓣鲫鱼</option>
                <option value='6'>口袋豆腐</option>
                <option value='7'>麻婆豆腐</option>
                <option value='8'>夫妻肺片</option>
                <option value='9'>蚂蚁上树</option>
                <option value='10'>鱼香肉丝</option>
            </select>
            <select value={this.state.select} onChange={this.handle('selectGuangdongCuisine')}>
                <option value='0'>粤菜</option>
                <option value='1'>烧鹅</option>
                <option value='2'>酿茄子</option>
                <option value='3'>酸豆腐</option>
                <option value='4'>梅菜扣肉</option>
                <option value='5'>红糟排骨</option>
                <option value='6'>煎酿三宝</option>
                <option value='7'>咸菜焖猪肉</option>
                <option value='8'>客家盐焗鸡</option>
                <option value='9'>广式烧填鸭</option>
                <option value='10'>豆豉蒸排骨</option>
            </select>
            <select value={this.state.select} onChange={this.handle('selectFujianCuisine')}>
                <option value='0'>闽菜</option>
                <option value='1'>佛跳墙</option>
                <option value='2'>醉排骨</option>
                <option value='3'>荔枝肉</option>
                <option value='4'>扳指干贝</option>
                <option value='5'>尤溪卜鸭</option>
                <option value='6'>油爆双脆</option>
                <option value='7'>清蒸全鸡</option>
                <option value='8'>七星鱼丸汤</option>
                <option value='9'>软溜珠廉鱼</option>
                <option value='10'>龙身凤尾虾</option>
            </select>
            <select value={this.state.select} onChange={this.handle('selectJiangsuCuisine')}>
                <option value='0'>苏菜</option>
                <option value='1'>烤方</option>
                <option value='2'>凤尾虾</option>
                <option value='3'>三套鸭</option>
                <option value='4'>金陵丸子</option>
                <option value='5'>白汁圆菜</option>
                <option value='6'>水晶肴蹄</option>
                <option value='7'>鸡汤煮干丝</option>
                <option value='8'>无锡肉骨头</option>
                <option value='9'>清炖蟹粉狮子头</option>
                <option value='10'>陆稿荐酱猪头肉</option>
            </select>
            <select value={this.state.select} onChange={this.handle('selectZhejiangCuisine')}>
                <option value='0'>浙菜</option>
                <option value='1'>东坡肉</option>
                <option value='2'>西湖醋鱼</option>
                <option value='3'>龙井虾仁</option>
                <option value='4'>香酥闷肉</option>
                <option value='5'>虾爆鳝背</option>
                <option value='6'>油焖春笋</option>
                <option value='7'>荷叶粉蒸肉</option>
                <option value='8'>西湖莼菜汤</option>
                <option value='9'>虎跑素火腿</option>
            </select>
            <select value={this.state.select} onChange={this.handle('selectHunanCuisine')}>
                <option value='0'>湘菜</option>
                <option value='1'>臭豆腐</option>
                <option value='2'>炒血鸭</option>
                <option value='3'>海参盆蒸</option>
                <option value='4'>腊味合蒸</option>
                <option value='5'>麻辣子鸡</option>
                <option value='6'>冰糖湘莲</option>
                <option value='7'>红烧寒菌</option>
                <option value='8'>湘西酸肉</option>
                <option value='9'>蝴蝶飘海</option>
                <option value='10'>走油豆豉扣肉</option>
            </select>
            <select value={this.state.select} onChange={this.handle('selectAnhuiCuisine')}>
                <option value='0'>徽菜</option>
                <option value='1'>鱼咬羊</option>
                <option value='2'>八大锤</option>
                <option value='3'>香菇盒</option>
                <option value='4'>火烘鱼</option>
                <option value='5'>黄山炖鱼</option>
                <option value='6'>蟹黄虾盅</option>
                <option value='7'>清炖马蹄鳖</option>
                <option value='8'>徽州毛豆腐</option>
                <option value='9'>香辣琵琶虾</option>
                <option value='10'>毛峰熏鲥鱼</option>
            </select>
            <select value={this.state.select} onChange={this.handle('selectNortheasternCuisine')}>
                <option value='0'>东北菜</option>
                <option value='1'>锅包肉</option>
                <option value='2'>溜肥肠</option>
                <option value='3'>韭菜干丝</option>
                <option value='4'>东北乱炖</option>
                <option value='5'>酸菜排骨</option>
                <option value='6'>芹菜鱼丝</option>
                <option value='7'>小鸡炖蘑菇</option>
                <option value='8'>酸菜白菜猪肉炖粉条</option>
            </select>
            <br />
            <span>美食: </span>
            <select value={this.state.select} onChange={this.handle('selectHomeCooking')}>
                <option value='0'>家常菜</option>
                <option value='1'>红烧肉</option>
                <option value='2'>麻辣豆腐</option>
                <option value='3'>鱼香肉丝</option>
                <option value='4'>西红柿炒蛋</option>
                <option value='5'>酸辣土豆丝</option>
            </select>
            <select value={this.state.select} onChange={this.handle('selectCongee')}>
                <option value='0'>粥</option>
                <option value='1'>小米粥</option>
                <option value='2'>大米粥</option>
                <option value='3'>黑米粥</option>
                <option value='4'>八宝粥</option>
                <option value='5'>绿豆粥</option>
                <option value='6'>红豆粥</option>
                <option value='7'>薏米粥</option>
                <option value='8'>栗子粥</option>
                <option value='9'>杏仁莲子粥</option>
                <option value='10'>皮蛋瘦肉粥</option>
            </select>
            <select value={this.state.select} onChange={this.handle('selectPowder')}>
                <option value='0'>粉</option>
                <option value='1'>肠粉</option>
                <option value='2'>米粉</option>
                <option value='3'>河粉</option>
                <option value='4'>螺蛳粉</option>
                <option value='5'>酸辣粉</option>
                <option value='6'>桂林米粉</option>
                <option value='7'>南昌拌粉</option>
                <option value='8'>津市米粉</option>
                <option value='9'>广东炒河粉</option>
                <option value='10'>云南过桥米线</option>
            </select>
            <select value={this.state.select} onChange={this.handle('selectNoodle')}>
                <option value='0'>面</option>
                <option value='1'>兰州牛肉面</option>
                <option value='2'>武汉热干面</option>
                <option value='3'>北京炸酱面</option>
                <option value='4'>山西刀削面</option>
                <option value='5'>四川担担面</option>
                <option value='6'>延吉冷面</option>
                <option value='7'>河南烩面</option>
                <option value='8'>杭州片儿川</option>
                <option value='9'>昆山奥灶面</option>
                <option value='10'>镇江锅盖面</option>
            </select>
            <select value={this.state.select} onChange={this.handle('selectRice')}>
                <option value='0'>饭</option>
                <option value='1'>蛋包饭</option>
                <option value='2'>扬州炒饭</option>
                <option value='3'>彩虹炒饭</option>
                <option value='4'>黄焖鸡饭</option>
                <option value='5'>什锦炒饭</option>
                <option value='6'>什锦盖浇饭</option>
                <option value='7'>牛肉盖浇饭</option>
                <option value='8'>蒜香蛋炒饭</option>
                <option value='9'>香肠蛋炒饭</option>
                <option value='10'>电饭煲腊肉饭</option>
            </select>
            <br />
            {/* //#endregion */}
            <input type="checkbox" checked={this.state.checked} onChange={this.handle('checked')} />
            <input type="radio" name='gender' value={'男'} onChange={this.handle('radio')} />
            <input type="radio" name='gender' value={'女'} onChange={this.handle('radio')} />
            <span>{this.state.radio}</span>
        </div>);
    }
}