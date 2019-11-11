const huaweiMax20X = {};
huaweiMax20X.wendor = 'Huawei';
huaweiMax20X.model = 'Mate 20X';
huaweiMax20X.price = 300;
console.log(huaweiMax20X.wendor + ' ' + huaweiMax20X.model );

function ring(){
    console.log(this.wendor + ' ' +this.model + ' ding ding!!');
}

huaweiMax20X.ring = ring;
huaweiMax20X.ring();

appleIphone11 = {
    wendor: 'Apple',
    model: 'Iphone 11',
    camera: ['auto', '30mp', '40mp'],
    price:11500,
    ring:ring
};
appleIphone11.ring();

function SmartPhone(wendor, model, price){
    this.wendor = wendor;
    this.model = model;
    this.price = price;
}
SmartPhone.prototype.ring = ring;


const xiaomi = new SmartPhone('Xiaomi', '10 pro', 100 );
xiaomi.ring();

console.dir(xiaomi);
console.dir(appleIphone11);

const samsungNote10 = new SmartPhone('samsung', 'note 10', 400 );
samsungNote10.ring();
console.log(samsungNote10);

class Phone{
    constructor(wendor, model, price){
    this.wendor = wendor;
    this.model = model;
    this.price = price;
    }
    ring(){
         console.log(this.wendor + ' ' +this.model + ' ding ding!!');
    } 
}

const nokia3110 = new Phone('Nokia', '3110', 99);
nokia3110.ring();
console.dir(nokia3110);

const nokia3210 = Object.create(nokia3110);
nokia3210.model = '3210';
console.dir(nokia3210);
nokia3210.ring();

const Iphone = JSON.stringify(appleIphone11);
console.log(Iphone);

const serverJSON = '{"wendor":"Apple","model":"Iphone 11","camera":["auto","30mp","40mp"],"price":11500}';

const tel = JSON.parse(serverJSON);
console.log(tel); 