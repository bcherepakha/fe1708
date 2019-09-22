const createSequenceForm = document.querySelector('.create-sequence'),
    startSeqEl = createSequenceForm.querySelector('[name="startSeq"]'),
    stepSeqEl = createSequenceForm.querySelector('[name="stepSeq"]'),
    seqCountEl = createSequenceForm.querySelector('[name="seqCount"]'),
    resultEl = document.querySelector('.create-sequence__result');

createSequenceForm.addEventListener('submit', createSequenceFromFormData);

function createSequenceFromFormData(e) {
    e.preventDefault();
    const startSeq = parseInt(startSeqEl.value),
        stepSeq = parseInt(stepSeqEl.value),
        seqCount = parseInt(seqCountEl.value),
        seq = sequence(startSeq, stepSeq);

    resultEl.innerText = take(seq, seqCount).join(', ');
}

function sequence(start, step) {
    let nextSequenceEl = start;

    return function() {
        const currentSequenceEl = nextSequenceEl;

        nextSequenceEl += step;

        return currentSequenceEl;
    }
}

function take(gen, x) {
    const result = [];

    for (let i=0; i < x; i++) {
        result.push( gen() );
    }

    return result;
}

const data = [
    {
      "_id": "5d873beeb4ad6c2aaccf6e67",
      "index": 0,
      "guid": "2510d467-fd6d-474a-99bc-56fc6b945cb8",
      "isActive": false,
      "balance": "$1,219.12",
      "picture": "http://placehold.it/32x32",
      "age": 28,
      "eyeColor": "green",
      "name": {
        "first": "Sherman",
        "last": "Hunter"
      },
      "company": "LIQUIDOC",
      "email": "sherman.hunter@liquidoc.biz",
      "phone": "+1 (866) 526-3330",
      "address": "395 Mill Road, Mammoth, Arkansas, 947",
      "about": "Pariatur enim id in minim officia id laboris. Duis nostrud enim tempor nostrud cillum duis do eu consectetur consequat occaecat amet. Ut anim eu ex veniam tempor aliquip labore. Consequat deserunt irure deserunt et qui irure enim nulla reprehenderit. Et nostrud dolor exercitation quis. Ipsum duis dolor est do cillum excepteur do culpa elit Lorem. Et Lorem nostrud eiusmod proident mollit.",
      "registered": "Saturday, March 26, 2016 4:16 AM",
      "latitude": "78.825815",
      "longitude": "-19.643642",
      "tags": [
        "elit",
        "nulla",
        "voluptate",
        "enim",
        "quis"
      ],
      "range": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "friends": [
        {
          "id": 0,
          "name": "Toni Anderson"
        },
        {
          "id": 1,
          "name": "Hood Gaines"
        },
        {
          "id": 2,
          "name": "Muriel Wilkinson"
        }
      ],
      "greeting": "Hello, Sherman! You have 5 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "5d873befa82b1d1b05789d3b",
      "index": 1,
      "guid": "5a536aca-d841-4101-9226-04ecb95e835c",
      "isActive": true,
      "balance": "$1,922.36",
      "picture": "http://placehold.it/32x32",
      "age": 24,
      "eyeColor": "brown",
      "name": {
        "first": "Dickson",
        "last": "Curtis"
      },
      "company": "COSMOSIS",
      "email": "dickson.curtis@cosmosis.org",
      "phone": "+1 (835) 456-3368",
      "address": "234 Wythe Place, Chautauqua, Washington, 850",
      "about": "Est id qui excepteur ad consequat cupidatat labore id et magna do in. Nostrud eu id quis pariatur. Officia fugiat sint adipisicing commodo nisi minim Lorem consequat exercitation ipsum veniam et excepteur deserunt. Non qui magna id aliquip ullamco sit est eiusmod nisi magna eu aliqua consectetur minim. Nulla non sunt voluptate ex fugiat aute magna aliqua ut nostrud.",
      "registered": "Sunday, March 26, 2017 2:57 AM",
      "latitude": "-1.313926",
      "longitude": "135.720639",
      "tags": [
        "id",
        "id",
        "sint",
        "ullamco",
        "tempor"
      ],
      "range": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "friends": [
        {
          "id": 0,
          "name": "Griffith Baldwin"
        },
        {
          "id": 1,
          "name": "Salas Monroe"
        },
        {
          "id": 2,
          "name": "Suzanne Lawrence"
        }
      ],
      "greeting": "Hello, Dickson! You have 5 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5d873befb671d7236f57899e",
      "index": 2,
      "guid": "99499daf-7e2f-4a10-9910-a13b1e5f4394",
      "isActive": false,
      "balance": "$1,855.40",
      "picture": "http://placehold.it/32x32",
      "age": 32,
      "eyeColor": "blue",
      "name": {
        "first": "Claire",
        "last": "Salinas"
      },
      "company": "EVIDENDS",
      "email": "claire.salinas@evidends.ca",
      "phone": "+1 (801) 480-2220",
      "address": "120 Fleet Walk, Gilgo, New Mexico, 7367",
      "about": "Pariatur enim quis dolore occaecat. Duis Lorem magna dolore nostrud et sint reprehenderit consectetur. Velit culpa aliquip aliquip Lorem esse in adipisicing eiusmod do nostrud tempor quis reprehenderit aute. Eu velit fugiat occaecat aliquip qui ad quis Lorem.",
      "registered": "Wednesday, January 1, 2014 2:35 AM",
      "latitude": "-16.815907",
      "longitude": "-86.357224",
      "tags": [
        "magna",
        "sunt",
        "ad",
        "ut",
        "sunt"
      ],
      "range": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "friends": [
        {
          "id": 0,
          "name": "Addie Reyes"
        },
        {
          "id": 1,
          "name": "Helene Mccoy"
        },
        {
          "id": 2,
          "name": "Carly Cotton"
        }
      ],
      "greeting": "Hello, Claire! You have 6 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5d873bef03161996cdf6a7c5",
      "index": 3,
      "guid": "a0287748-7d6d-4351-a85a-a17b63b3f654",
      "isActive": false,
      "balance": "$3,314.14",
      "picture": "http://placehold.it/32x32",
      "age": 31,
      "eyeColor": "brown",
      "name": {
        "first": "Huffman",
        "last": "Bowers"
      },
      "company": "UTARIAN",
      "email": "huffman.bowers@utarian.net",
      "phone": "+1 (915) 488-3592",
      "address": "960 Morgan Avenue, Buxton, Massachusetts, 3054",
      "about": "Ad esse reprehenderit magna tempor do nostrud proident eiusmod. Excepteur enim occaecat ullamco ad. Laborum amet esse culpa sit eiusmod cillum est officia. Nisi ex ut nostrud id sunt esse quis.",
      "registered": "Thursday, June 13, 2019 6:39 PM",
      "latitude": "77.557341",
      "longitude": "74.215706",
      "tags": [
        "excepteur",
        "occaecat",
        "nisi",
        "est",
        "magna"
      ],
      "range": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "friends": [
        {
          "id": 0,
          "name": "Lara Bridges"
        },
        {
          "id": 1,
          "name": "Dianna Colon"
        },
        {
          "id": 2,
          "name": "Beverly Strong"
        }
      ],
      "greeting": "Hello, Huffman! You have 10 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "5d873bef6687c2145d58be3e",
      "index": 4,
      "guid": "ef27ae10-9403-44dc-9b90-239e990043e8",
      "isActive": true,
      "balance": "$1,865.72",
      "picture": "http://placehold.it/32x32",
      "age": 38,
      "eyeColor": "brown",
      "name": {
        "first": "Wilson",
        "last": "Knox"
      },
      "company": "INQUALA",
      "email": "wilson.knox@inquala.name",
      "phone": "+1 (998) 487-2198",
      "address": "569 Narrows Avenue, Vowinckel, California, 2908",
      "about": "Ea aliquip excepteur pariatur esse amet enim Lorem. Sit aliqua aliquip mollit pariatur ullamco sunt quis sunt nostrud. Proident est esse sint ut ut. Incididunt ullamco labore esse adipisicing adipisicing eiusmod mollit id aliqua fugiat amet deserunt cupidatat.",
      "registered": "Tuesday, January 31, 2017 5:02 AM",
      "latitude": "30.086525",
      "longitude": "-46.607369",
      "tags": [
        "fugiat",
        "sint",
        "sunt",
        "aliquip",
        "deserunt"
      ],
      "range": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "friends": [
        {
          "id": 0,
          "name": "Eileen Donovan"
        },
        {
          "id": 1,
          "name": "Clemons Hobbs"
        },
        {
          "id": 2,
          "name": "West West"
        }
      ],
      "greeting": "Hello, Wilson! You have 9 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "5d873befa7b108ec84c5c1b2",
      "index": 5,
      "guid": "552c0c2b-b26e-494c-9808-f8e33d302709",
      "isActive": false,
      "balance": "$2,545.62",
      "picture": "http://placehold.it/32x32",
      "age": 23,
      "eyeColor": "blue",
      "name": {
        "first": "Irwin",
        "last": "Terrell"
      },
      "company": "VALREDA",
      "email": "irwin.terrell@valreda.biz",
      "phone": "+1 (901) 461-2131",
      "address": "666 Vandam Street, Lynn, Montana, 7404",
      "about": "Cillum cillum adipisicing tempor duis consequat aute ex id cupidatat exercitation minim nulla deserunt. Qui ex qui velit esse qui. Ullamco fugiat minim ad irure voluptate proident dolore sint sint proident id pariatur ut. Ipsum ad velit eu duis. Consectetur laborum enim in enim cillum ea veniam ipsum proident pariatur ad.",
      "registered": "Tuesday, March 19, 2019 5:07 AM",
      "latitude": "2.446552",
      "longitude": "139.256806",
      "tags": [
        "reprehenderit",
        "aliqua",
        "ut",
        "aliqua",
        "adipisicing"
      ],
      "range": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "friends": [
        {
          "id": 0,
          "name": "Candace Gibbs"
        },
        {
          "id": 1,
          "name": "Trudy Perry"
        },
        {
          "id": 2,
          "name": "Cantrell Romero"
        }
      ],
      "greeting": "Hello, Irwin! You have 10 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "5d873bef00ff68d951fdeaf7",
      "index": 6,
      "guid": "c60375d3-659c-402c-a888-e924c6aa00a5",
      "isActive": true,
      "balance": "$2,456.31",
      "picture": "http://placehold.it/32x32",
      "age": 32,
      "eyeColor": "green",
      "name": {
        "first": "Angelique",
        "last": "Mercer"
      },
      "company": "ROTODYNE",
      "email": "angelique.mercer@rotodyne.me",
      "phone": "+1 (870) 496-2828",
      "address": "592 Coyle Street, Spelter, Federated States Of Micronesia, 9956",
      "about": "Cillum nisi aliqua deserunt ex ex voluptate in nulla enim veniam nisi sit pariatur culpa. Adipisicing reprehenderit Lorem ipsum cupidatat aliquip et. Do velit nulla anim Lorem aliquip proident labore elit elit et. Reprehenderit aute consectetur aliquip veniam deserunt ipsum magna ad dolor velit anim cillum. Ut cillum occaecat do in. Elit laborum veniam sunt laboris esse.",
      "registered": "Thursday, December 6, 2018 11:02 PM",
      "latitude": "-6.764944",
      "longitude": "-14.979864",
      "tags": [
        "proident",
        "dolor",
        "tempor",
        "commodo",
        "ea"
      ],
      "range": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "friends": [
        {
          "id": 0,
          "name": "Diane Sears"
        },
        {
          "id": 1,
          "name": "Jeannie Mccall"
        },
        {
          "id": 2,
          "name": "Byers Nixon"
        }
      ],
      "greeting": "Hello, Angelique! You have 5 unread messages.",
      "favoriteFruit": "banana"
    }
  ];

function getPropertyNum( obj ) {
    // let i = 0;

    // for(const keyName in obj) {
    //     i++
    // }

    // return i;
    return Object.keys( obj ).length;
}

function getRandomInt(maxNumber) {
    return Math.floor( maxNumber * Math.random() );
}

function getRandomPropertyName( obj ) {
    const keys = Object.keys( obj ),
        elementNum = getRandomInt(keys.length);

    return keys[elementNum];
}

function pluck( data, keyName ) {
    return data.map(
        function(obj) {
            return obj[keyName];
        }
    );
}

function getTextDay( d ) {
    const date = d.getDate(),
        month = d.getMonth() + 1,
        year = d.getFullYear();

    return `${date.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`;
}

function getShownDaysInMons(month, year) {
    const currentMonth = month - 1,
        firstDayInMonth = new Date(year, currentMonth, 1),
        dayNumber = firstDayInMonth.getDay(),
        shiftDay = (dayNumber + 6) % 7,
        firstShownDayInMonth = new Date(year, currentMonth, 1 - shiftDay),
        lastDayInMonth = new Date(year, currentMonth + 1, 0),
        lastDayNumber = lastDayInMonth.getDay(),
        lastShift = 7 - lastDayNumber,
        lastShownDayInMonth = new Date(year, currentMonth + 1, lastShift),
        result = [];

    for(
        let d = new Date(firstShownDayInMonth);
        d <= lastShownDayInMonth;
        d.setDate( d.getDate() + 1 ) ) {
        result.push({
         d: new Date(d),
         text: getTextDay(d),
         inCurrentMonth: d.getMonth() === currentMonth
        });
    }

    return result;
}

const BIG_SIZE = 'BIG',
    SMALL_SIZE = 'SMALL',
    CHEESE = 'CHEESE',
    SALAD = 'SALAD',
    POTATO = 'POTATO',
    SAUCE = 'SAUCE',
    DRESSING = 'DRESSING',
    CALORIES = {
        [BIG_SIZE]: 40,
        [SMALL_SIZE]: 20,
        [CHEESE]: 20,
        [SALAD]: 5,
        [POTATO]: 10,
        [DRESSING]: 0,
        [SAUCE]: 5
    },
    PRICES = {
        [BIG_SIZE]: 100,
        [SMALL_SIZE]: 50,
        [CHEESE]: 10,
        [SALAD]: 20,
        [POTATO]: 15,
        [DRESSING]: 15,
        [SAUCE]: 20
    };

function Gambutger( size = BIG_SIZE ) {
    this.size = size;
    this.filling = {};
}

Gambutger.sizes = [BIG_SIZE, SMALL_SIZE];
Gambutger.filling = [
    CHEESE,
    SALAD,
    POTATO,
    SAUCE,
    DRESSING
];

Gambutger.prototype.setSize = function( size ) {
    if ( !Gambutger.sizes.includes(size) ) {
        throw Error('Unknown size');
    }

    this.size = size;
};

Gambutger.prototype.addFilling = function( fillingName ) {
    if (!Gambutger.filling.includes(fillingName)) {
        throw Error('Unknown filling');
    }

    if (!this.filling[fillingName]) {
        this.filling[fillingName] = 0;
    }

    this.filling[fillingName] += 1;
};

Gambutger.prototype.removeFilling = function( fillingName ) {
    if (!Gambutger.filling.includes(size)) {
        throw Error('Unknown filling');
    }

    if (this.filling[fillingName] < 1) {
        this.filling[fillingName] = 0;
    }

    this.filling[fillingName] -= 1;
};

Gambutger.prototype.getCalories = function() {
    const {size, filling} = this;
    let sumCalories = CALORIES[size];

    Object.keys(filling).forEach(function(fillingName) {
        if (CALORIES[fillingName]) {
            sumCalories += CALORIES[fillingName] * filling[fillingName];
        }
    });

    return sumCalories;
};

Gambutger.prototype.getPrice = function() {
    // ...
}

const g = new Gambutger();
g.setSize( SMALL_SIZE );
g.addFilling( CHEESE );
g.addFilling( POTATO );
g.addFilling( CHEESE );

console.log( g.getCalories() ); // 70
console.log( g.getPrice() ); // 85
