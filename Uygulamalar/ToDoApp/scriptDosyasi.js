var items = ["item 1", "item 2", "item 3", "item 4"];

var list = document.querySelector('ul');


items.forEach(function (item) {

    itemOlustur(item);
});


document.querySelector('#add').onclick = function () {

    var itemText = document.querySelector('#text').value;
    
    if (itemText === "") {
        alert("Lütfen bir kayıt giriniz...");
        return;
    }
    
    itemOlustur(itemText);
    document.querySelector('#text').value = '';
}


list.addEventListener('click', function (item) {

    if (item.target.tagName == 'LI') {

        item.target.classList.toggle('checked');
    }

    var lis = document.querySelectorAll('li');

    var i = 0;

    lis.forEach(function (eleman) {
        if (eleman.classList.contains('checked')) {
            i++;
        }
    })

    if (i > 0) {
        document.querySelector('#deleteAll').classList.remove('d-none');
    } else {
        document.querySelector('#deleteAll').classList.add('d-none');
    }
})


document.querySelector('#deleteAll').onclick = function(){
    
    var silinecekler = document.querySelectorAll('.checked');
    
    silinecekler.forEach(function(sileah){
        sileah.classList.add('d-none');
    })
    
}


function itemOlustur(item) {
    var li = document.createElement('li');
    var t = document.createTextNode(item);
    li.classList.add('list-group-item');
    li.appendChild(t);

    var span = document.createElement('span');
    var text = document.createTextNode('x');
    span.classList.add('close');
    span.appendChild(text);

    span.onclick = function () {

        var spanParent = this.parentElement;
        spanParent.style.display = 'none';
        li.classList.remove('checked');
    };

    li.appendChild(span);

    list.appendChild(li);
};
