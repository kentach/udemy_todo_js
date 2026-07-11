{


  const addBtn = document.getElementById('add-button');
  const todoInput = document.getElementById('todo-input');
  const ul = document.querySelector('.incomplete-area ul');
  const completeList = document.getElementById('complete-list');
  const incompleteList = document.getElementById('incomplete-list');

  addBtn.addEventListener('click', () => {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const p = document.createElement('p');

    // Todoの生成
    if (todoInput.value === "") return;
    p.textContent = todoInput.value;
    div.classList.add("todo-list");

    // 完了ボタン
    const completeBtn = document.createElement("button");
    completeBtn.classList.add("button-style");

    // 完了ボタンアイコン
    const completeIcon = document.createElement("i");
    completeIcon.classList.add("fa-solid", "fa-clipboard-check");

    completeBtn.addEventListener('click', () => {
      deleteBtn.remove(); //　削除ボタンの削除
      completeBtn.remove(); //　完了ボタンの削除

      //　戻るボタンの生成
      const backBtn = document.createElement("button");
      backBtn.classList.add('button-style');

      //　戻るボタンアイコンの生成
      const backIcon = document.createElement("i");
      backIcon.classList.add("fa-solid", "fa-rotate-left");

      div.appendChild(backBtn);
      backBtn.appendChild(backIcon);

      completeList.appendChild(li);
      
      backBtn.addEventListener("click", () => {
        // 戻るボタンを削除
        backBtn.remove();
    
        // 元のボタンを戻す
        div.appendChild(completeBtn);
        div.appendChild(deleteBtn);
    
        // 未完了リストへ戻す
        incompleteList.appendChild(li);
      });
    })

    // 削除ボタン
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("button-style");

    deleteBtn.addEventListener('click', () => {
      if(!confirm('Sure?')) return;
      li.remove();
    })

    // 削除ボタンアイコン
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash");

    ul.appendChild(li);
    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(completeBtn);
    div.appendChild(deleteBtn);
    completeBtn.appendChild(completeIcon);
    deleteBtn.appendChild(deleteIcon);

    todoInput.value = "";
  })

}