import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
function deleteTarget(target) {
  document.getElementById("incomplete-list").removeChild(target);
}

// 未完了リストに追加する関数
function createIncompleteList(text1) {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  li.innerText = text1;

  // button(完了)
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(div)を未完了リストから削除
    deleteTarget(completeButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    // li生成
    const li = document.createElement("li");
    li.innerText = text;

    // 戻すbutton生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ(div)を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキストを取得
      const text = deleteTarget.firstElementChild.innerText;
      // deleteTarget.textContent = null;
      createIncompleteList(text);
    });

    // divタグの中に子要素を入れる
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    // console.log(addTarget);

    // 完了したリストにdiv要素と中の要素を入れる
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(削除)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteTarget(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  console.log(div);

  // 未完了のリストに追加
  if (text1) {
    document.getElementById("incomplete-list").appendChild(div);
  }
}

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
