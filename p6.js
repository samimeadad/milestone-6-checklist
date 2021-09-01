/* ৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।
*/
const sami = {
    id: 101,
    fullName: {
        firstName: 'Sami',
        middleName: 'Meadad',
        lastName: 'Choudhury'
    },
    dob: '09.11.1980',
    isMarried: true,
    friends: [ 'Farmee', 'Arishamma', 'Ammapakhi' ],
    getFirstName: function () {
        return this.fullName.firstName;
    },
    address: {
        location: 'Uttara',
        division: 'Dhaka',
        country: 'Bangladesh',
        zip: 1230
    }
};

const {id, fullName, dob, isMarried, friends, address} = sami;
// console.log( id, fullName, dob, isMarried, friends, address );
// console.log( address.zip );


/* 
array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।
*/
const num = [ 23, 75, 64, 15, 78, 87, 54 ];
const [ , balance ] = num;
console.log( balance );