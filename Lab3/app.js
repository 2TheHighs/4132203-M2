
        let x = 10;
        var y = "Hello";
        const z = 20.2;

        const arr = [1, "test", 3, 4, 5];
        const car = [];
        car[0] = "BMW";
        car[1] = "Audi";
        const fruit = new Array("Apple", "Banana", "Orange");
        const profile = [[1, 2, 3], "name", "age"];
        console.log(profile[0][1]);
        console.log(fruit);

        //array 
        fruit.push("Mango");
        fruit.shift();
        console.log(fruit);

        arr.map((item) => {
            console.log(item);
        });





        //object
        const person = {
            firstName: "john",
            lastName: "Doe",
            age: 50,
            eyeColor: ["blue", "black"],
            fullName: function(){
                return this.firstName + " " + this.lastName;
            }
        };

        person.address = {
            street: "5th Avenue",
            city: "New York"
        };

        console.log(person.fullName());
        console.log(car);

        function sum(a,b) {
            return a + b;
        }

        function Sub(a,b) {
            console.log(a - b);
        };

        const mul = (a,b) => {
            return a * b;
        }

        const div = (a,b) => a/b;
        const result = sum(20,20);
        console.log(result);


        document.getElementById("message1").innerHTML = "Hello World"



