class Bank
{
    roi()
    {
        return 0;
    }
}

class Axis extends Bank
{
    roi()
    {
        return 10.5;
    }
}
class SBI extends Bank
{
    roi()
    {
        return 12.5;
    }
}
ax=new Axis();
console.log(ax.roi());
sbi=new SBI();
console.log(sbi.roi());