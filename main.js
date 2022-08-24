const diobuGroup = [
    {
        districtName: 'achi',
        pastor: 'bright okongko',
        congregationSize: 300,
        workersSize: 19
    },
    {
        districtName: 'obi',
        pastor: 'uzoma ubah',
        congregationSize: 250,
        workersSize: 13
    },
    {
        districtName: 'okija',
        pastor: 'emeka achi',
        congregationSize: 150,
        workersSize: 18
    },
    {
        districtName: 'okwelle',
        pastor: 'sambo anwanga',
        congregationSize: 60,
        workersSize: 8
    },
    {
        districtName: 'sangana',
        pastor: 'philip nwata',
        congregationSize: 110,
        workersSize: 11
    }   
    ]


const districtName = document.getElementById('district-name');
const pastor = document.getElementById('pastor');
const congregationSize = document.getElementById('cong-size');
const workersSize = document.getElementById('wrk-size');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('#surprise');
console.log(randomBtn);
const div = document.querySelector('.underline')

let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
    churrchInfo(currentItem);
});

const churrchInfo = (details) => {
    const item = diobuGroup[details];
    districtName.textContent = item.districtName;
    pastor.textContent = item.pastor;
    congregationSize.textContent = item.congregationSize;
    workersSize.textContent = item.workersSize;
};

nextBtn.addEventListener('click', () => {
    currentItem++;
    if (currentItem > diobuGroup.length - 1) {
        currentItem = 0;
    }
    churrchInfo(currentItem)
})

prevBtn.addEventListener('click', () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = diobuGroup.length - 1;
    }
    churrchInfo(currentItem);
})

randomBtn.addEventListener('click', () => {
    surprise()
});

const surprise = () => {
    currentItem = Math.floor(Math.random() * diobuGroup.length);
    churrchInfo(currentItem);
    console.log(currentItem)
};


const myDate = () => {
    let date = new Date();

    const day = date.getDate();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    
    if (div.classList.contains('underline')) {
        return div.textContent =  `${h} : ${m} : ${s}`;
    };

};
setInterval(myDate, 1000);