let employee=
{
    empname:"Sivakumar",
    empID: 48,
    basicsal: 50000,
    bonus: function()
    {
        return((this.basicsal * 10)/100)
    }


}
console.log(employee.bonus());