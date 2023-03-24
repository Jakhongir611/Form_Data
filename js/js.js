const doc = document;
const form = doc.querySelector('form');
const input = doc.querySelectorAll('input');
const all = doc.querySelector('.all');
const need = doc.querySelector('.need');
const success = doc.querySelector('.success');
const error = doc.querySelector('.error');
const importman = doc.querySelectorAll('.importman');
const btn = doc.querySelector('.btn_save_blue');
const cls_blue = doc.querySelectorAll('.outline_blue');
const cls_red = doc.querySelectorAll('.outline_red');
const photo = doc.querySelectorAll('.pos_none');
const img = doc.querySelectorAll('img');
all.textContent = 'All: ' + input.length;
need.textContent = 'Need: ' + importman.length;
const po_kayfu = () => {
    for (let item of cls_blue) {
        if (!item.value) {
            item.classList.remove('outline_blue');
            item.classList.add('outline_red');
        }
    }
};
let filled_counter = () => {
    let successCount = 0;
    let errorCount = 0;
    let span = need;
    for (let item of importman) {
      if (item.value) {
        successCount++;
      } else {
        errorCount++;
      }
    }
    mandatory_inputs(errorCount);
    success.textContent = 'Success: ' + successCount;
    error.textContent = 'Error: ' + errorCount;
  };
  form.addEventListener('submit', (event) => {
      event.preventDefault();
      po_kayfu(form);
    });
    
    
    
    // let mandatory_inputs = (errorCount) => {
    //     if (errorCount == 0) {
    //         for (let item of input) {
    //             item.value = '';
    //         }
    //     }
    // };
    


























// и класс outline_red.Кроме того, если пустой инпут находится в блоке с классом importman, то необходимо уменьшить значение переменной need на 1 и обновить соответствующий элемент страницы.Для этого можно добавить следующий код в функцию po_kayfu():
// for (let item of importman) {
//     if (!item.querySelector('input').value) {
//         item.classList.add('outline_red');
//         item.querySelector('img').classList.remove('pos_none');
//         item.querySelector('img').classList.add('pos_block');
//         need.textContent = 'Need: ' + (--importman.length);
//     }
// }
// Для очистки формы можно воспользоваться методом reset():
// const btn_clr = () => {
//     form.reset();
//     for (let item of cls_blue) {
//         item.classList.add('outline_blue');
//         item.classList.remove('outline_red');
//     }
//     for (let item of photo) {
//         item.classList.remove('pos_block');
//         item.classList.add('pos_none');
//     }
//     need.textContent = 'Need: ' + importman.length;
// }
// Полный код функций po_kayfu() и btn_clr():
// const po_kayfu = () => {
//     for (let item of cls_blue) {
//         if (!item.value) {
//             item.classList.remove('outline_blue');
//             item.classList.add('outline_red');
//             for (let i of img) {
//                 if (!item.value) {
//                     i.classList.remove('pos_none');
//                     i.classList.add('pos_block');
//                 }
//             }
//         }
//     }
//     for (let item of importman) {
//         if (!item.querySelector('input').value) {
//             item.classList.add('outline_red');
//             item.querySelector('img').classList.remove('pos_none');
//             item.querySelector('img').classList.add('pos_block');
//             need.textContent = 'Need: ' + (--importman.length);
//         }
//     }
// }
// const btn_clr = () => {
//     form.reset();
//     for (let item of cls_blue) {
//         item.classList.add('outline_blue');
//         item.classList.remove('outline_red');
//     }
//     for (let item of photo) {
//         item.classList.remove('pos_block');
//         item.classList.add('pos_none');
//     }
//     need.textContent = 'Need: ' + importman.length;
// }
// Наконец, необходимо вызвать функции po_kayfu() и btn_clr() в обработчике события submit:
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     po_kayfu();
//     btn_clr();
// });