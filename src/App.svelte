<script>
    import item from "./assets/data.json";

    let listItem = new Array(item.capybara);

    let counter = 0;

    class Animal {
        constructor(animal, animalPath, animalAmount) {
            this.animal = animal
            this.animalPath = animalPath
            this.animalAmount = animalAmount
        }
    }

    const objAnimal = new Animal("капибар", "capybara", item.capybara);

    let numOfPhoto = randomizeImg();
    let img = "/" + objAnimal.animalPath + "/" + numOfPhoto + ".webp";

    function handleClick() {
        numOfPhoto = randomizeImg();
        img = "/" + objAnimal.animalPath + "/" + numOfPhoto + ".webp";
    }

    function randomizeImg() {
        if (counter === listItem.length || counter === 0) {
            for (let index = 0; index < objAnimal.animalAmount; index++) {
                listItem[index] = index;
            }

            listItem = shuffle(listItem);
            counter = 0;
        }

        const output = listItem[counter];
        counter++;
        return output + 1;
    }

    function shuffle(array) {
        let currentIndex = array.length,
            randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }

        return array;
    }

    function clickAnimal() {
        if (objAnimal.animalPath === "capybara") {
            objAnimal.animal = "выдр"
            objAnimal.animalPath = "otter"
            objAnimal.animalAmount = item.otter
            listItem = new Array(item.otter)
            counter = 0
            handleClick()
        } else {
            objAnimal.animal = "капибар"
            objAnimal.animalPath = "capybara"
            objAnimal.animalAmount = item.capybara
            listItem = new Array(item.capybara)
            counter = 0
            handleClick()
        }
    }
</script>

<main>
    <div id="main-div">
        <h2>Просто прикоснись ко мне..</h2>
        <h3>Доступных {objAnimal.animal} - {objAnimal.animalAmount}</h3>
        <button on:click={clickAnimal}>Если хочешь, что-то другое..</button>
        <div id="img-div">
            <div>
                <img id="dog-img" on:click={handleClick} src={img} alt="Здесь живет капибара"/>
            </div>
        </div>
    </div>

</main>

<style>
    :root {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    main {
        margin: 0;
        height: 100vh;
    }

    #main-div {
        text-align: center;
        height: 100vh;
        padding: 20px;
        margin: 0 auto;
    }

    #img-div {
        height: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    #img-div div {
        max-height: 70%;
    }

    #dog-img {
        max-width: 50%;
        max-height: 70vh;
    }

    h2 {
        color: #000000;
        font-size: 4rem;
        font-weight: 100;
        line-height: 1.1;
        margin: 2rem auto;
    }

    h3 {
        color: #000000;
        font-size: 1.6rem;
        font-weight: 30;
        line-height: 1.1;
        margin: 2rem auto;
        max-width: 14rem;
    }
    button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
    }
    button:hover {
        border-color: #be98f5;
    }
    button:focus,
    button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }button {
         background-color: #f9f9f9;
     }

    @media (min-width: 480px) {
        h2 {
            max-width: none;
        }

        h3 {
            max-width: none;
        }
    }
</style>
