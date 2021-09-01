/* ১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট, আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন( মেথড ) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো। */

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

const fullName = sami.getFirstName();
// console.log( fullName );
// console.log( sami.fullName.middleName );
for ( const friend of sami.friends ) {
    // console.log( friend );
}


/* ২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো।  */

const myTemplateString = `My name is ${ sami.fullName.firstName }. My full name is ${ sami.fullName.firstName } ${ sami.fullName.middleName } ${ sami.fullName.lastName }. I was born in ${ sami.dob }. I love my ${ sami.friends[ 1 ] }.`;
console.log( myTemplateString );