const getCardData = () => Promise.resolve([
    {
        card: {
            pic: "",
            name: "Tigers",
            sport: "Hockey",
            city: "Orlando",
            state: "Fl"
        }
    },

    {
        card: {
            pic: "",
            name: "Panthers",
            sport: "Baseball",
            city: "Tampa",
            state: "Fl"
        }
    },

    {
        card: {
            pic: "",
            name: "Lions",
            sport: "Soccer",
            city: "Miami",
            state: "Fl"
        }
    },

    {
        card: {
            pic: "",
            name: "Badgers",
            sport: "Tennis",
            city: "Fort Lauderdale",
            state: "Fl"
        }
    },

    {
        card: {
            pic: "",
            name: "Dragons",
            sport: "Football",
            city: "Ocala",
            state: "Fl"
        }
    },
]);

const cardMiddleware = async (req, res, next) => {
    if (!res.locals.partials) res.locals.partials = {}
    res.locals.partials.cardContext = await getCardData()
    next()
};

module.exports = cardMiddleware;