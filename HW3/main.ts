async function fetchData<SomeType>(url : string) : Promise<SomeType> {
    if (!url){
        throw new Error('url is not defined');
    }
    else{
        const res : Response = await fetch(url);
        const data : SomeType = await res.json();
        if (data){
            return data as SomeType;
        }
    }
    throw new Error('data is not defined');
}

interface User22 {
    id: number;
    name: string;
    email: string;
}

fetchData<User22>('https://jsonplaceholder.typicode.com/users/1');
