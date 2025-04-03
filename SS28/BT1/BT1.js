const person = {
 name : 'Nguyễn Quang Anh',
 age: 5000,
 job: 'Developer',
 greet: function () {
    console.log('Hello, my name is ' + this.name + "\n"+ 'age: '+ this.age +"\n"+ 'job: '+ this.job);
 },
};
person.greet();