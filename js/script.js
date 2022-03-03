window.onload = function(){ //<head>の中に<script>が書かれていたら左のように記述する
    // ユーザーの設計図
    // ES6の文法
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
    }
    // 物語開始　(オブジェクト指向プログラミング OOP)
    // 中川さん誕生　→ オブジェクト
    const nakagawa = new User('中川', 25);
    // 島さん誕生
    const shima = new User('島', 49);
    // プロパティ値の参照
    console.log(nakagawa.name);
    console.log(nakagawa.age);
    // 中川さんがお酒を飲む
    nakagawa.drink();
    // 島さんがお酒を飲む
    shima.drink();
    // 中川さんが島さんに話しかける
    nakagawa.talk(shima);
    //　島さんが中川さんに話しかける
    shima.talk(nakagawa);
    
    // ユーザー一覧を作成
    let  users = Array();
    // let users = []; 上と一緒
    console.log(users);
    // ユーザー一覧に中川さん追加
    users.push(nakagawa);
    users.push(shima);
    users.push(new User('山田', 100));
    console.log(users);
    // ユーザーを１人ずつ表示
    users.forEach((user, index) => {
        console.log(`#${index + 1}`);
        console.log(user.name);
        console.log(`${user.age}歳`);
        console.log(user.drink());
    });
    
    // DOM(Document Object Model) 最初からある
    // window.alert('OK');
    // window.prompt('OK');
    // window.print();
    // document.write('OK');
    // console.log('OK');
    document.title = 'ユーザー一覧';
    const h1 = document.getElementById('h1'); // Id(h1)によって要素を得なさい
    // console.log(h1);
    h1.textContent = 'ユーザー一覧';
    // h1.style.color = 'red';
    // h1.style.backgroundColor = 'pink';
    h1.classList.add('red');
    
    const button = document.getElementById('btn');
    // ボタンが押された時の処理
    button.addEventListener('click', () => { //ボタンに聞く耳を与える
        // alert('押された');
        // console.log(h1);
        const h2 = document.getElementsByTagName('h2')[0]; // 複数得なさい
        // console.log(h2);
        h2.textContent = `現在のユーザーの人数: ${users.length}人`;
        h2.classList.add('green');
        
        const div = document.createElement('div');
        // console.log(div);
        h2.after(div);
        
        // ユーザー一覧表示
        users.forEach((user, index) => {
            // <ul></ul>を作ったと一緒
            const ul = document.createElement('ul');
            // <li></li>を作ったと一緒
            const li_num = document.createElement('li');
            // <li>#1</li>
            li_num.textContent = `#${index + 1}` ;
            const li_name = document.createElement('li');
            li_name.textContent = user.name;
            const li_age = document.createElement('li');
            li_age.textContent = `${user.age}歳`;
            const li_drink = document.createElement('li');
            li_drink.textContent = user.drink();
            ul.appendChild(li_num);
            ul.appendChild(li_name);
            ul.appendChild(li_age);
            ul.appendChild(li_drink);
            div.appendChild(ul);
            // console.log(ul);
        });
    });
    
};