enchant();

//円の色指定
var CIRCLE_COLOR = "rgb(100,100,100)";
//円の半径指定
var CIRCLE_RADIUS = 30;
//円の個数指定
var CIRCLE_NUM = 10;

// htmlを読み込み終わったらロードされる
window.onload = function() {
    //ゲームオブジェクトの生成
    var game = new Game(320, 320);
    game.fps = 16;
    game.score = 0;
    var label;
    var bear;

    //画像読み込み
    game.preload('http://enchantjs.com/assets/images/chara1.gif',
                 'http://enchantjs.com/assets/images/map0.gif',
                 'http://enchantjs.com/assets/images/icon0.gif');

    //サーフェイスに色指定メソッドの追加
    Surface.prototype.setColor = function(strokeColor, fillColor) {
        this.context.strokeStyle = strokeColor;
        this.context.fillStyle   = fillColor;
    };

    //サーフェイスに円塗りつぶしのメソッドの追加
    Surface.prototype.fillCircle = function(x, y, r) {
        this.context.beginPath();
        this.context.arc(x, y, r, 0, Math.PI * 2, true);
        this.context.fill();
    };

    //円の描画
    //これを呼び出すと、個数分の円の登録が完了する
    game.addCircle = function() {
        //サーフェイスオブジェクトの生成
        //サーフェイスの色を指定
        //for文の開始（円の個数分）
        //ランダムな座標を生成
        //ランダムな座標は配列に記憶しておき、重ならないように処理する
        //ランダムな座標が決定
        //Sprite[i]の生成
        //imageにsurfaceを指定
        //ランダム座標を元に、sprite[i]のx,yを決定する
        //ルートシーンにsprite[i]を追加する
        //タッチされたときのsprite[i]の処理を書く（エフェクト）
        //for文終わり
        //これで個数分のspriteの登録が終わった
    };

    //ロード完了時に呼ばれる
    //ここは画像の指定とか一番最初に処理するところ
    game.onload = function () {
        //背景の生成
        //背景スプライトの生成
        var bg = new Sprite(320, 320);
        //背景色の指定
        bg.backgroundColor = "rgb(0, 200, 250)";
        //ルートシーンに追加
        game.rootScene.addChild(bg);

        //円の追加
        game.addCircle();
    };

    //ルートシーンの定期処理
    game.tick = 16 * 10;
    game.rootScene.addEventListener(Event.ENTER_FRAME, function() {
    });

    //ゲームスタート
    game.start();
};


//乱数の生成
function rand(num) {
    return Math.floor(Math.random() * num);
}


