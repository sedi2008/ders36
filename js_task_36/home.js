const form=document.querySelector('.add-data')
const masinTesvir=document.querySelector('#foto')
const masinMarkasi=document.querySelector('#marka')
const masinModeli=document.querySelector('#model')
const masinIli=document.querySelector('#il')
const masinQiymeti=document.querySelector('#qiymet')
const carSection=document.getElementsByClassName('car-section')


console.log(form[0])
form[0].addEventListener('submit',function(event){
    event.preventDefault();
    const mashin={
        foto:masinTesvir.value,
        marka:masinMarkasi.value,
        model:masinModeli.value,
        ili:masinIli.value,
        qiymeti:masinQiymeti.value
    }
    console.log(mashin)
    const text=`
    <div class="box">
    <img src="${mashin.foto}" alt="">
    <p>Markasi:${mashin.marka}</p>
    <p>Modeli:${mashin.model}</p>
    <p>Buraxilis ili:${mashin.ili}</p>
    <p>Qiymet:${mashin.qiymeti}</p>
</div>
</div>
`
carSection.innerText+=text;
})






