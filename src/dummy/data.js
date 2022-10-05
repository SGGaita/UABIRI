export const Regions = [
    {
        id:"ikZAfo3S0BDFDp1n70yn",
        name: "Nairobi",
        saccos:[
            {
                saccoId:"s1",
                saccoName:"Lopha",
                routes:[
                    {
                        routeID:"r1",
                        routeName:"Odeon - Aga Khan",
                        scheduleCost:[
                            {
                                scID: "sc1",
                                startTime: "6:00AM",
                                endTime: "11:00AM",
                                amount: 50
                            },
                            {
                                scID: "sc2",
                                startTime: "11:01AM",
                                endTime: "5:00PM",
                                amount: 60
                            },
                            {
                                scID: "sc3",
                                startTime: "5:00PM",
                                endTime: "10:00PM",
                                amount: 70
                            }
                        ],
                        vehicles:[
                            {
                                vehicleRegistration: "KCV 123S"
                            },
                            {
                                vehicleRegistration: "KDB 123N"
                            }
                        ]
                    },
                    {
                        routeID:"r2",
                        routeName:"Odeon - Ruaka",
                        scheduleCost:[
                            {
                                scID: "sc1",
                                startTime: "6:00AM",
                                endTime: "11:00AM",
                                amount: 60
                            },
                            {
                                scID: "sc2",
                                startTime: "11:01AM",
                                endTime: "5:00PM",
                                amount: 70
                            },
                            {
                                scID: "sc3",
                                startTime: "5:00PM",
                                endTime: "10:00PM",
                                amount: 80
                            }
                        ],
                        vehicles:[
                            {
                                vehicleRegistration: "KCV 123S"
                            },
                            {
                                vehicleRegistration: "KDB 123N"
                            }
                        ]
                    }
                ]
            },
            {
                saccoId:"s2",
                saccoName:"Latema",
                routes:[
                    {
                        routeID:"r1",
                        routeName:"Odeon -Loresho",
                        scheduleCost:[
                            {
                                scID: "sc1",
                                startTime: "6:00AM",
                                endTime: "11:00AM",
                                amount: 40
                            },
                            {
                                scID: "sc2",
                                startTime: "11:01AM",
                                endTime: "5:00PM",
                                amount: 50
                            },
                            {
                                scID: "sc3",
                                startTime: "5:00PM",
                                endTime: "10:00PM",
                                amount: 60
                            }
                        ],
                        vehicles:[
                            {
                                vehicleRegistration: "KBV 123D"
                            },
                            {
                                vehicleRegistration: "KDV 123M"
                            }
                        ]
                    }
                ]
            },
            {
                saccoId:"s3",
                saccoName:"Umoinner",
                routes:[
                    {
                        routeID:"r1",
                        routeName:"Central - BuruBuru",
                        scheduleCost:[
                            {
                                scID: "sc1",
                                startTime: "6:00AM",
                                endTime: "11:00AM",
                                amount: 30
                            },
                            {
                                scID: "sc2",
                                startTime: "11:01AM",
                                endTime: "5:00PM",
                                amount: 40
                            },
                            {
                                scID: "sc3",
                                startTime: "5:00PM",
                                endTime: "10:00PM",
                                amount: 60
                            }
                        ]
                    }
                ]
            },
           
        ]
    }
]

export const saccos = ()=>{
    
}

export const transactions = [
    {
        id:1,
        transactionCode: "QFF25KMAPC",
        phoneNumber:254723272915,
        amount: 50,
        sacco: "Lopha",
        route: "Odeon - Aga Khan",
        date: "10/09/2022"
    },
    {
        id:2,
        transactionCode: "W23YHVBD2",
        phoneNumber:254723100012,
        amount: 50,
        sacco: "Lopha",
        route: "Odeon - Ruaka",
        date: "Sep 20th 2022"
    },
    {
        id:3,
        transactionCode: "CVS5NASYT4",
        phoneNumber:254722122123,
        amount: 80,
        sacco: "Lopha",
        route: "Odeon - UNEP",
        date: "Sep 26th 2022"
    },
    {
        id:4,
        transactionCode: "SVSFRTT62",
        phoneNumber:254722121123,
        amount: 50,
        sacco: "Lopha",
        route: "Odeon - UNEP",
        date: "Sep 27th 2022"
    },

]