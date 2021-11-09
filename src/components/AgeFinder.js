import React,{useState} from 'react'


function AgeFinder() {
    const [eighteenP, seteighteenP] = useState(0)
    const [thirtyP, setthirtyP] = useState(0)
    const [fiftyP, setfiftyP] = useState(0)
    const userData = [
        {
            id: 1,
            name: "sankalp",
            age: 48
        },
        {
            id: 2,
            name: "mehul",
            age: 23
        },
        {
            id: 3,
            name: "radhika",
            age: 17
        },
        {
            id: 4,
            name: "karan",
            age: 55
        },
        {
            id: 5,
            name: "paka",
            age: 65
        },
        {
            id: 6,
            name: "parth",
            age: 15
        },
        {
            id: 7,
            name: "dinesh",
            age: 23
        },
        {
            id: 8,
            name: "ramesh",
            age: 13
        },
        {
            id: 9,
            name: "dapu",
            age: 12
        },
        {
            id: 10,
            name: "vikram",
            age: 19
        }
    ]

    const getEighteenPlus = () => {
        function getEighteenP(value) {
            return value.age>18
        }
        const eighteenPlus = userData.filter(getEighteenP)
        console.log(eighteenPlus);
        seteighteenP(eighteenPlus.length)
        console.log("18 Plus User >>>>>> ",eighteenPlus.length);
    }
    const getThirtyPlus = () => {
        function ThirtyP(value) {
            return value.age>30
        }
        const ThirtyPlus = userData.filter(ThirtyP)
        console.log(ThirtyPlus);
        setthirtyP(ThirtyPlus.length)
        console.log("30 Plus User >>>>>> ",ThirtyPlus.length);
    }
    const getFiftyPlus = () => {
        function getFiftyP(value) {
            return value.age>50
        }
        const FiftyPlus = userData.filter(getFiftyP)
        console.log(FiftyPlus);
        setfiftyP(FiftyPlus.length)
        console.log("50 Plus User >>>>>> ",FiftyPlus.length);
    }

    return (
        <div className="container text-center">
            <button className="mx-2 mt-4 btn btn-primary" onClick={getEighteenPlus}>
                Get 18+
            </button>
            <p>{`18 Plus :${eighteenP}`}</p>
            <button className="mx-2 mt-4 btn btn-primary" onClick={getThirtyPlus}>
                Get 30+
            </button>
            <p>{`30 Plus :${thirtyP}`}</p>
            <button className="mx-2 mt-4 btn btn-primary" onClick={getFiftyPlus}>
                Get 50+
            </button>
            <p>{`50 Plus :${fiftyP}`}</p>
        </div>
    )
}

export default AgeFinder
