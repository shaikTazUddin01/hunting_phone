const loadphone = async (searchValue) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchValue}`)
    const data = await res.json()
    const phone = data.data

    displayPhones(phone)
}

const displayPhones = (phones) => {

    const phoneContain = document.getElementById('phone-contain')
    phoneContain.textContent = ""
    phones.forEach(phone => {
        console.log(phone)
        const phoneCard = document.createElement('div');
        phoneCard.classList = "card bg-gray-200 shadow-xl p-5"

        phoneCard.innerHTML = `
        <figure className="px-10 pt-10">
                <img src=${phone?.image} alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">${phone?.phone_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        `
        phoneContain.appendChild(phoneCard)
    });

}

const handleseach = () => {
    const searchField = document.getElementById('searchField')
    const searchValue = searchField.value
    console.log("search")
    loadphone(searchValue)
}
