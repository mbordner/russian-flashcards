export default {

    minNumCorrect: 3,
    minPercentCorrect: 0,
    languageInput: "ru",

    cards: [
        {
            term:{
                "ru":"privet",
                "en":"hello"
            },
            attempted: 0,
            correct: 0
        },
        {
            term:{
                "ru":"kak dela?",
                "en":"how are you?"
            },
            attempted: 0,
            correct: 0
        },
        {
            term:{
                "ru":"poka",
                "en":"bye"
            },
            attempted: 0,
            correct: 0
        }
    ],

    indexes: [0,1,2],
    currentIndex: null,

    collections: {
        "id1": {
            name: "Russian Short Stories for Beginners",
            groups: [
                {
                    name: "Chapter 1",
                    terms: [
                        {
                            "ru":"привет",
                            "en":"hello"
                        },
                        {
                            "ru":"как дела?",
                            "en":"how are you?"
                        },
                        {
                            "ru":"пока",
                            "en":"bye"
                        }
                    ]
                }
            ]
        }
    },

    selectedCollection: "id1",
    selectedGroup: 0
}