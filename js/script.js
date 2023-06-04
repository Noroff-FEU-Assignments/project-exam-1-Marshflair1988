const API = "https://good-food-mood.marshwoolgar.no/wp-json/wp/v2/posts"; 


fetch(API)
   .then((res) => res.json())
   .then((data) => {
       /*Here you write what to do with the data fetched from the api*/
        })
   .catch((error) => console.error(error));

   console.log();