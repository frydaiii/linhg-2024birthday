// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "Chúc babi của anh",     
        "Bước sang tuổi mới",  
        "Luôn xinh đẹp rạng ngời",
        "Chăm ngoan học giỏi",
        "Công việc như ý",
        "Ăn uống đầy đủ",
        "Ngủ nghỉ ngon giấc",
        "Khỏe mạnh và bình an",
        "Chúc babi mọi điều tốt đẹp trên thế giới nàyyyyy",
        "Anh thương em nhiềuuuuu... CHỤT~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "Luôn xinh đẹp rạng ngời": "./imgs/xinhdep.jpg",
        "Chăm ngoan học giỏi": "./imgs/hoctap.jpg",
        "Công việc như ý": "./imgs/lamviec.jpg",
        "Ăn uống đầy đủ": "./imgs/anuong.jpg",
        "Ngủ nghỉ ngon giấc": "./imgs/ngunghi.jpg",
        "Khỏe mạnh và bình an": "./imgs/khoemanh.jpg",
        "Chúc babi mọi điều tốt đẹp trên thế giới nàyyyyy": "./imgs/totdep.jpg",
        "Anh thương em nhiềuuuuu... CHỤT~~": "./imgs/yeuem.jpg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Bật đèn nè",
        play: "Bật nhạc nè",
        bannar_coming: "Trang trí nè",
        balloons_flying: "Bóng bay nè",
        cake_fadein: "Tặng babi cí bánh nè",
        light_candle: "Babi thắp nến i",
        wish_message: "Happy birthday babiii",
        story: "Lời chúc bí mật",
    }
};
