

 
const constrImage = [
    {
        id: 201, 
        imgTop: 'z-vektor.png',
        imgBottom: 'z-vektor.png',
        imgLeft: 'z-vektor.png',
        imgRight: 'z-vektor.png',
    },
    {
        id: 101, 
        title: 'Перегородки',
    },
    {
        id: 401, 
        title: 'Облицовки',
    },
    {
        id: 501, 
        title: 'Потолки',
    },
    {
        id: 601, 
        title: 'Полы',
    }
];

function pastPicture (orent,path){

    switch(orent){
        case 'top':
            return `<img style = "height: 405px;margin-left: -220px;margin-top: 775px;transform: rotate(0deg);" src="${path}" alt=""></img>`;
            break;
    
        case 'bottom':
            return `<img style = "height: 405px;margin-left: -220px;margin-top: 775px;transform: rotate(90deg);" src="${path}" alt=""></img>`;
            break;

        case 'left':
            return `<img style = "height: 405px;margin-left: -220px;margin-top: 775px;transform: rotate(180deg);" src="${path}" alt=""></img>`;
            break;

        case 'right':
            return `<img style = "height: 405px;margin-left: -220px;margin-top: 775px;transform: rotate(270deg);" src="${path}" alt=""></img>`;
            break;
    }
};

quest = document.querySelector('.quest');

function changeOption1(){

    switch(this.name){
        case 'frame1':
            quest.innerHTML = pastPicture(left,path);
            break;
        case 'frame2':
            quest.innerHTML = pastPicture(top,path);
            break;
        case 'frame3':
            quest.innerHTML = pastPicture(right,path);
            break;
        case 'frame4':
            quest.innerHTML = pastPicture(bottom,path);
            break;
    }
}
function takePicture(select,data){

    let index = select.selectedIndex;
    let opnions = select.options;
    let selectedOption = options[index].value;
    return 
}
//---------------------------------------------------------------26.04

 

 function changeOption(picturedata){
    
    switch(this.name){
        case 'frame1':
            let picture = picturedata.find((el)=>el.id == this.value)
            quest.innerHTML = pastPicture(left,path);
            break;
        case 'frame2':
            quest.innerHTML = pastPicture(top,path);
            break;
        case 'frame3':
            quest.innerHTML = pastPicture(right,path);
            break;
        case 'frame4':
            quest.innerHTML = pastPicture(bottom,path);
            break;
    }

 }   
         