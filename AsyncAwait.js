// Async/Await example 
const fetchData = async () => { 
    console.log('Fetching data...'); 
    const data = await new Promise(resolve => { 
    setTimeout(() => resolve('Data fetched!'), 2000); 
    }); 
    console.log(data); 
    }; 
    fetchData(); 