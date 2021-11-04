class Billete
{
    constructor(m_name, m_value, m_amount)
    {
        this.image = new Image();
        this.name = m_name;
        this.value = m_value;
        this.amount = m_amount;
        this.image.src = imagenes[this.name];
    }
    /*Show()
    {
        document.body.appendChild(this.image);
    }*/
}