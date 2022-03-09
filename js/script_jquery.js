/* global $ */
$(function(){
    class User {
        // プロパティ(変数)　書かなくてもいいが書いた方がいい
        name; //　名前
        age; // 年齢
        // メソッド(関数)　何かの動きを表す
        // コンストラクタ
        constructor(name, age){
            this.name = name;
            this.age = age;
            console.log(`${this.name}さんが生まれた`);
        }
        // お酒を飲む関数を定義
        drink(){
            // 20歳以上ならば
            if(this.age >= 20){
                return `${this.name}さんはお酒大好き`;   
            }else{
                return `${this.name}さんは${this.age}歳なので、あと${20 - this.age}年お酒は飲めません`;
            }
        }
        // 誰かに話しかける関数を定義
        talk(friend){
            console.log(`${this.name}さんが${friend.name}さんに話しかけた`);
            console.log(`お前さん、${friend.age}歳かよ！`);
        }
        //入力値を検証する関数を定義
        validate(){
            $('span').remove();
            // 入力が全て正しいか？
            let flag = true;
            // 名前が入力されていないならば
            if(this.name === ''){
                $('input[name="name"]').after($('<span>', {text: '名前を入力してください'}));
                flag = false;
            }
            // 年齢が入力されていないならば
            if(this.age === ''){
                $('input[name="age"]').after($('<span>', {text: '年齢を入力してください'}));
                flag = false;
            }else if(!/^[0-9]+$/.test(this.age)){
                $('input[name="age"]').after($('<span>', {text: '年齢は正の整数を入力してください'}));
                flag = false;
                $('input[name="age"]').val('');
            }
            $('span').addClass('error');
            return flag;
        }
    }
    // ユーザー一覧
    const users = Array();
    // const users = [];
    // 初期化関数
    const init = () => {
        $('#h1').text('ユーザー一覧').addClass('red');
        users.push(new User('中川', 23));
        users.push(new User('島', 49));
        users.push(new User('山田', 18));
    };
    init();
    // console.log(users);
    // alert('OK');
    // $('xxx').yyy('zzz'); 全てこの形
    // $('xxx') - - > どこの場所に対して : セレクタ
    // .yyy() - - > 何をする？ : メソッド
    // y(zzz) - - > どんな風に : 引数
    // $('#h1').text('ユーザー一覧');
    // $('#h1').addClass('red');
    // メソッドチェーン　一行につなげること
    $('#h1').text('ユーザー一覧').addClass('red'); // script.jsの71~76行目
    
    // $('#btn').on('click', () => {
    //     alert('OK');
    // });
    // h2は複数出てくる可能性があるためeq()で何番目のことか番号を記述
    $('h2').eq(0).text(`現在のユーザーの人数: ${users.length}人`).addClass('green').after($('<div>'));
    //ユーザー一覧を画面に表示する関数
    const disp = (all) => {
        
        $('div').empty();
        
        $.each(all, (index, user) => {
            const ul = $('<ul>').append($('<li>', {text: index + 1}))
            .append($('<li>', {text: user.name}))
            .append($('<li>', {text: `${user.age}歳`}))
            .append($('<li>', {text: user.drink()}));
            $('div').append(ul);
        });
        // all.forEach();
    };
    
    
    disp(users);
    // const div = $('<div>'); ←と↓は一緒なので下にはめ込んだ
    // $('h2').eq(0).after($('<div>')); // 88行目と同じこと
    // 登録ボタンを押した時のイベント処理
    $('button').click(() => {
        // alert('OK');
        // 入力された名前を取得
        const name = $('input[name="name"]').val();
        // console.log(name);
        const age = $('input[name="age"]').val();
        // console.log(age);
        // 入力された値によって新しいユーザー作成
        const user = new User(name, age);
        const flag = user.validate();
        // 全て正しく入力されていたならば
        if(flag === true){
            // ユーザー一覧に新しいユーザーを追加
        users.push(user);
        $('h2').eq(0).text(`現在のユーザーの人数: ${users.length}人`).addClass('green');
        $('input').val('');
        }
        // 入力された値が正常かチェック
        // console.log(user);
        
        // 最新のユーザー一覧を表示
        disp(users);
        
    });
});