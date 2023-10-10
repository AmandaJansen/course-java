function formatMoney(value){
    value = Math.ceil(value * 100) / 100;
    value = value.toFixed(2)
    return 'R$ ' + value;
}

function formatSplit(value){
    if(value == 1)
    return value + ' person';

   else 
   return value + ' people';
}


function update(){
    let bill = Number(document.getElementById('yourBill').value);
    let tipPercent = document.getElementById('tipInput').value;
    let split = document.getElementById('splitInput').value
    console.log(bill,tipPercent,split)

    let tipValue = bill * (tipPercent / 100);
    let billTotal = bill + tipValue; //total da conta
    let billEach = billTotal / split; //valor pago por pessoa
 
    document.getElementById('tipPercent'). innerHTML = tipPercent + '%';
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue);
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal);
    document.getElementById('splitValue').innerHTML = formatSplit (split);
    document.getElementById('billEach').innerHTML = formatMoney(billTotal / split);
    //console.log('OK'); //confirma a conexão e verifica se todos os itens estão funcionando corretamente
}

