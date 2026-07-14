{
  const addBtn = document.getElementById('add-button');
  const todoInput = document.getElementById('todo-input');
  const incompleteList = document.getElementById('incomplete-list');
  const completeList = document.getElementById('complete-list');

  // アイコンボタンを作る記述
  function createIconButton(iconClasses) {
    const button = document.createElement('button');
    button.classList.add('button-style');

    const icon = document.createElement('i');
    icon.classList.add(...iconClasses);
    // スプレッド構文を使って配列の引数で受け取る

    button.appendChild(icon);
    return button;
  }

  // 戻るボタンの生成
  function createBackButton(div, li, completeBtn, deleteBtn) {
    const backBtn = createIconButton(['fa-solid', 'fa-rotate-left']); //　配列の引数を渡す

    backBtn.addEventListener('click', () => {
      backToIncomplete(div, li, backBtn, completeBtn, deleteBtn);
    });

    return backBtn;
  }

  // 完了ボタンが押されたときの処理
  function completeTodo(div, li, completeBtn, deleteBtn) {
    deleteBtn.remove(); // 削除ボタンの削除
    completeBtn.remove(); // 完了ボタンの削除

    const backBtn = createBackButton(div, li, completeBtn, deleteBtn);
    div.appendChild(backBtn);

    completeList.appendChild(li);
  }

  // 未完了リストに戻す処理
  function backToIncomplete(div, li, backBtn, completeBtn, deleteBtn) {
    // 戻すボタンの削除
    // 完了ボタンの生成
    // 削除ボタンの生成
    backBtn.remove();
    div.appendChild(completeBtn);
    div.appendChild(deleteBtn);
    // 未完了リストへの追加
    incompleteList.appendChild(li);
  }

  // 削除ボタンが押されたときの処理
  // 削除するときは、liタグ丸ごと削除する
  function deleteTodo(li) {
    if (!confirm('Sure?')) return;
    li.remove();
  }

  // 1件分のTodo要素を作る
  function createTodoItem(text) {
    // div li pの順
    const li = document.createElement('li');
    const div = document.createElement('div');
    div.classList.add('todo-list');
    const p = document.createElement('p');
    p.textContent = text;

    // アイコンの生成
    const completeBtn = createIconButton(['fa-solid', 'fa-clipboard-check']);
    const deleteBtn = createIconButton(['fa-solid', 'fa-trash']);

    completeBtn.addEventListener('click', () => {
      completeTodo(div, li, completeBtn, deleteBtn);
    });

    deleteBtn.addEventListener('click', () => {
      deleteTodo(li);
    });

    //li
      // div
        // p
        // completeBtn
        // deleteBtn
    div.appendChild(p);
    div.appendChild(completeBtn);
    div.appendChild(deleteBtn);
    li.appendChild(div);

    return li;
  }

  // Todo追加処理
  function addTodo() {
    if (todoInput.value === '') return;

    const li = createTodoItem(todoInput.value);
    incompleteList.appendChild(li);

    todoInput.value = '';
  }

  addBtn.addEventListener('click', addTodo);
}