const elmGetBooks = document.getElementById("getBooks")
        console.log(url)
        async function getBooks(){
            const api = await fetch(`${url}/book`)
            const {data} = await api.json()
            // console.log(data)
            
            data.forEach(data => {
                const newElement = document.createElement("div")
                newElement.innerHTML = `Id: ${data.id},
                                        Nama Buku: ${data.name},
                                        pulisher: ${data.publisher},
                                        Year: ${data.year},
                                        Page Count: ${data.page_count}`

             elmGetBooks.appendChild(newElement)
            })
        }
        getBooks()