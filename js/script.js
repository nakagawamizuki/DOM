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
    
    const button = document.getElementById('btn'); // idの値によって生み出す btnというidをもった命を生み出す
    // ボタンが押された時の処理　　　↓何かをもらったとしたら、こんなことをするでしょう
    button.addEventListener('click', () => { //ボタンにイベントの聞く耳を与える
        // alert('押された');　↑引数が２つ第1はイベントの種類、第2はイベントがされたときの処理
        // console.log(h1);
        const h2 = document.getElementsByTagName('h2')[0]; // 複数得なさい
        // console.log(h2);
        h2.textContent = `現在のユーザーの人数: ${users.length}人`;
        h2.classList.add('green');
        
        const div = document.createElement('div');
        // console.log(div);
        h2.after(div);
        
        // ユーザー一覧表示　　　　　↓こういうものをもらったとしたら、こう書けるでしょう(アロー式)
        users.forEach((user, index) => { // 一人抜き出したものを仮にuserと名づける、index=配列番号が勝手に飛んでくる
            // <ul></ul>を作ったと一緒
            const ul = document.createElement('ul');　//.createElement()はHTML要素を新しく作成
            // <li></li>を作ったと一緒
            const li_num = document.createElement('li');　// numは適当、なんでもいい
            // <li>#1</li> textContent→挟まれた文字　index→０からふられる　#1という文字をつっこんだ
            li_num.textContent = `#${index + 1}` ;
            const li_name = document.createElement('li');
            li_name.textContent = user.name;
            const li_age = document.createElement('li');
            li_age.textContent = `${user.age}歳`;
            const li_drink = document.createElement('li');
            li_drink.textContent = user.drink(); // タグに挟まれた文字を、今注目しているユーザーの持っている
            ul.appendChild(li_num);              // drink()メソッドを呼び出した結果をつっこめ
            ul.appendChild(li_name); // 上記で作ったul()には何も挟まれていないので、できたli()たちをつっこんでいかないといけない
            ul.appendChild(li_age);　// appendChild()→子供として追加しろという意味
            ul.appendChild(li_drink); // 今回はul()に対して子供として追加しろ
            div.appendChild(ul);
            // console.log(ul);
        });
    });
    
};