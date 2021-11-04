var balance = document.getElementById("balance");
var solicitud = document.getElementById("extraer");
var result = document.getElementById("result");
solicitud.addEventListener("click", entregarDinero);

var balance;
var amount;
var papers;
var div;
var index;
var delivered = [];
var money = 0;

money = Saldo(money);
MostrarSaldo();

function entregarDinero()
{
    delivered = []; 
    var input = document.getElementById("dinero");
    amount = parseInt(input.value);
    for(var b of box)
    {
        if(amount > 0)
        {
            div = Math.floor(amount/b.value);
            if(div > b.amount)
            {
                papers = b.amount
            }
            else
            {
                papers = div;
            }
            delivered.push(new Billete(b.name, b.value, papers));
            amount -= b.value * papers;
        }
    }

    if(amount > 0)
    {
        alert("Error: Saldo insuficiente");
    }
    else if(amount < 0)
    {
        alert("Error: Valor inválido");
    }
    else
    {
        for (var d of delivered)
        {
            if(d.amount > 0)
            {
                for(var i = 0 ; i < d.amount ; i++)
                {
                    var img = new Image (126, 63);
                    img.src = d.image.src;
                    result.appendChild(img);
                }
                money -= d.amount * d.value;
                for(var b of box)
                {
                    if(d.value == b.value)
                    {
                        b.amount -= d.amount;
                    }
                }
            }
        }
    }
    MostrarSaldo();
    input.value = "";
}

function Saldo(m_money)
{
    for(var b of box)
    {
        m_money += b.value * b.amount;
    }
    return m_money;
}

function MostrarSaldo()
{
    balance.innerText = "Saldo: " + money;
}
