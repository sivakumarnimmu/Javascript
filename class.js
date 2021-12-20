class Student{
    setDetails()
    {
        //initialize the variables
        this.sid=101;
        this.sname="Sivakumar";
        this.sgrade="A";
    }
    display()
    {
        //display data
        console.log(this.sid,this.sname,this.sgrade);

    }
}
let stu=new Student()
stu.setDetails()
stu.display()