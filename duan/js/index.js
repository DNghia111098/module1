class Job {
    constructor(id) {
        this.id = id;
    }
}

let job = [
    new Job ("Item5")
]
function displayProducts(job) {
    let productList = document.getElementById("address");
    productList.innerHTML = '';
    productList.innerHTML = '<tr>';
    for (let i = 0; i < job.length; i++) {
        let product = job[i];
        productList.innerHTML += `
        <i class="fa fa-list-ul" aria-hidden="true"></i>
        <td> ${product.id}</td>
        <button class="btnOpen">open</button>
        `
    }
    productList.innerHTML += '</tr>'
}
displayProducts(job);

// function addProduct() {
//     // lấy dữ liệu từ ô input
//     let name = document.getElementById('name').value;
//     let price = parseFloat(document.getElementById('price').value);
//     let id = products.length + 1;

//     // Kiểm tra thông tin name và price có bị để trống không?
//     if (name && price) {
//         // Tạo 1 sản phẩm mới
//         let newProduct = [id;
//         // thêm sản phẩm mới vào mảng products
//         products.push(newProduct);
//         // Hiển thị lại danh sách products
//         displayProducts();
//     } else {
//         alert('Vui lòng điền đầy đủ thông tin sản phẩm');
//     }
// }


let lists = document.getElementsByClassName("list");
let today = document.getElementById("today");
let tocheck = document.getElementById("tocheck");
let fixback = document.getElementById("fixback");
let done = document.getElementById("done");

for(list of lists){
    list.addEventListener("dragstart",function(e){
        let selected = e.target;
        today.addEventListener("dragover",function(e){
            e.preventDefault();
        });
        today.addEventListener("drop",function(e){
            today.appendChild(selected);
            selected=null;
        });

        tocheck.addEventListener("dragover",function(e){
            e.preventDefault();
        });
        tocheck.addEventListener("drop",function(e){
            tocheck.appendChild(selected);
            selected=null;
        });

        fixback.addEventListener("dragover",function(e){
            e.preventDefault();
        });
        fixback.addEventListener("drop",function(e){
            fixback.appendChild(selected);
            selected=null;
        });

        done.addEventListener("dragover",function(e){
            e.preventDefault();
        });
        done.addEventListener("drop",function(e){
            done.appendChild(selected);
            selected=null;
        });
    });
}

let btnOpen = document.querySelector('.btnOpen')
let modal = document.querySelector('.modal')
let iconClose = document.querySelector('.modal__header i')
let btnClose = document.querySelector('.modal__footer button')

function toggleModal(e) {
    console.log(e.target);
    modal.classList.toggle('hide')
}
btnOpen.addEventListener('click', toggleModal);
btnClose.addEventListener('click', toggleModal);
iconClose.addEventListener('click', toggleModal);
modal.addEventListener('click', function(e) {
    if(e.target == e.currentTarget) {
        toggleModal()
    }
})


