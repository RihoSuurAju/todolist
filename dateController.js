exports.getCurrentDate = () =>{
    let today = new Date();
    // getting the good good ( date + day of da week )
    let options = {
       weekday: 'long',
       day: 'numeric',
       month: 'long'
    }
    return today.toLocaleDateString("en-US", options);
    //console.log(day);
}