
import ajaxService from "./ajaxService";

const searchCode = () =>{

    document.querySelector('form').addEventListener('submit', (e)=>{
        e.preventDefault();
        const searchTerm = document.querySelector('.term').value;
        const city = document.querySelector('.city').value;
        const place = document.querySelector('.result');
        let searchResponse;
        ajaxService(searchTerm, city, place)
        .then(result=>searchResponse=result)
        .then(()=>{
            if(searchResponse.data.length == 0){
                document.querySelector('.alert').classList.remove("d-none");
            }else{
                place.value = searchResponse.data[0].post_code

            }
        }) 
    })

}

export default searchCode