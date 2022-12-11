import { images } from '../constants/images'
export const Regions = [
    {
        id: "",
        name: "",
        saccos: [
            {
                saccoId: "",
                saccoName: "",
                routes: [
                    {
                        routeID: "",
                        routeName: "",
                        scheduleCost: [
                            {
                                scID: "",
                                startTime: "",
                                endTime: "",
                                amount: 0
                            },

                        ],
                        vehicles: [
                            {
                                vehicleRegistration: ""
                            }
                        ]

                    }

                ]
            }
        ]
    }
]

export const transactions = [
    {

        transactionCode: "",
        phoneNumber: "",
        amount: 0,
        saccoName: "",
        routeName: "",
        date: "",
        vehicleRegistration: ""
    }

]


export const profileData = [
    {
        id: 1,
        name: "Passenger Profile",
        description: "Passengers get to sellect the vehicle they have boarded and pay their fare conviniently",
        _image: require("../assets/images/passenger.png"),
        _navigate: "Passenger"
    },
    {
        id: 2,
        name: "Conductor",
        description: "Verify and confirm payment transactions by passengers",
        _image: require("../assets/images/conductor.png"),
        _navigate: "Login"
    },
    {
        id: 3,
        name: "Vehicle Owner",
        description: "As a vehicle owner, view daily performance of your vehicle.",
        _image: require("../assets/images/owner.png"),
        _navigate: "Owner"
    }

]