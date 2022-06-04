

var customers;
setInterval(function(){
    customers = JSON.parse(localStorage.getItem('customers')) || [];
    var table = '<tr><th><i>Xin Chào Bạn </i></th></tr>';
    for (var c of customers) {
        table += `<tr><td><i>${c.name}!</i></td></tr>`
        document.getElementById('chao').innerHTML = table;

    }
},1000);
function addCustomer(){
    var nameCus = document.getElementById('nameCustomer').value;
    var ageCus = document.getElementById('ageCustomer').value;

    customers.push({
        name: nameCus,
        age: ageCus
    });
    localStorage.setItem('customers', JSON.stringify(customers));
}
document.getElementById('addCustomer').addEventListener('click', addCustomer);
document.getElementById('clearStorage').addEventListener('click', function(){
    localStorage.removeItem('customers');

})