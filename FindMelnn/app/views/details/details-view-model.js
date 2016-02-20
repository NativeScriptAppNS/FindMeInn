var viewModelBaseModule = require("../../common/view-model-base");
var navigationModule = require("../../common/navigation");
var viewsModule = require("../../common/views");
var timer = require("timer");

var DetailsViewModel = (function (_super) {
    __extends(DetailsViewModel, _super);
    function DetailsViewModel() {
        _super.call(this);
        this._hotel = {
	      "id": "air660078",
	      "latLng": [
	        41.832847363459,
	        23.493571007081
	      ],
	      "itemStatus": "published",
	      "attr": {
	        "roomType": {
	          "text": "Entire home/apt",
	          "id": 0
	        },
	        "propType": {
	          "text": "Apartment",
	          "id": 0
	        },
	        "bathrooms": 1,
	        "description": "One bed apartment in the Bojurland complex sleeping 4 in old town Bansko, Bulgaria.  The Bojurland complex offers the following facilites free of charge to all our renting guests:\r\n\n\r\n* Indoor heated swimming pool \r\n* Gymnasium\r\n* Steam room\r\n* Sauna\r\n* Hotbed room\r\n* Games room \r\n* Outdoor childrens play area\r\n* Traditional BBQ area for guests to use \r\n\n* Free on site parking\r\n* Free shuttle bus in the winter to and from the gondola morning and afternoon\r\n\n* 24 hour security\r\n\r\nThe following are also available onsite payable locally:\r\n\n\r\n* Hotel lobby bar\r\n* Hotel restaurant\r\n* Wireless internet access is available throughout the complex including the apartments.  This is payable locally.\r\n\n \r\nThe complex consists of the Hotel Bojur with 8 additional apartment blocks.  The hotel has a cosy bar with open log fires, great in the winter after a day on the slopes as well as a large resturant serving both traditional Bulgarian and international foods.  There is also a traditional BBQ area with tables & a bar which guests are free to use at anytime.  We've had many evenings with friends cooking our food on the BBQ whilst the hotel staff man the bar and its a really fun place to be in both the summer and winter.\r\n\n\r\nThe ground floor apartment itself comprises of the following\r\n\n\r\n* Fully equiped kitchen with microwave, oven, toaster, kettle etc\r\n\n* Dining area with table and 4 chairs\r\n* Lounge with large corner sofa that converts into a large double bed\r\n\n* Cable TV \r\n* Free interenet connection (not wireless but a cable is provided  \r\n\n* Bedroom with double bed, warbrode, dressing table with mirror & bedside tables\r\n\n* Hairdryer \r\n* Bathroom with self enclosed shower ( very unusual for Bulgaria as most are wet rooms which isn't great for adults let alone children!!)\r\n\n* Small balacony \r\n\r\nThe apartment itself is located in the old town of Bansko just a 10 minute walk into the old town where you will find traditional mehana's and modern bars alike.  The 'new town' by the gondola is about 20 minutes walk (in the winter the complex provides a free shuttle service morning and afternoon) and there are numerous bars, shops and resturants on the way.  \r\n\n\r\nBansko is not only great for the winter season but the summer too.  It hosts an annual Mountain Bike challenge every July over 2 days, there is a famous Jazz Festival that takes place at the start of August for approx 5 days and attracts visitors from all over Europe who come to watch Internationally succesfull artists from all over the world.  The gondola is open in the summer months so trips up the mountain are a must, take a picnic and explore the lakes or go on walking expeditions and stop on the one of the many 'huts' for the night on your route.  Other activities in the area include horse riding, paint balling, fishing, quad biking, bike hire, visiting local monastries as well as trips to the famous bear rescue centre in one of the near by villages.  Greece is only a 2 hour drive away so you can also go to the beach and stop over the night if you want a change of scenery.\r\n\n\r\nAll in all, a great resort with lots to do in the summer and winter.\r\n\n\r\nTransfers from Sofia take approx 2 and half to 3 hours depending on whether you opt for a private transfer, shared one, car hire or to use the local bus.  We tend to opt for the bus when travelling without the children as not only is it considerablly cheaper its also nice to experience some of their culture.  Transfers can be arranged directly with the hotel staff at the complex or there are numerous transfer companies I can recommend.\n\nHouseRules:\nThere are just 2 things we ask of anybody staying in our apartment.  Firstly that you don't smoke in the apartment.  We like to use the apartment regularly and as non smokers we hope our guests will respect this wish.  There is a small terrace/balcony which you are more than welcome to use and ash trays are provided in the apartment.  Secondly, please do not cover the heaters with clothing/towels etc. There is a cloths airer provided so please use this instead.  We hope these 2 rules wont hinder the enjoyment of your stay.",
	        "instantBookable": false,
	        "extraGuests": {
	          "fee": -1,
	          "after": -1
	        },
	        "bedrooms": 1,
	        "occupancy": 4,
	        "cancellation": {
	          "text": "Strict",
	          "link": "https://www.airbnb.com/home/cancellation_policies#strict"
	        },
	        "beds": 2,
	        "isCalAvailable": true,
	        "responseTime": "within a day",
	        "fees": [
	          {
	            "fee": 24,
	            "description": "Cleaning"
	          }
	        ],
	        "lastUpdatedAt": 1422523927,
	        "heading": "1 bed apart in Bojurland, Bansko",
	        "securityDeposit": 238,
	        "checkOut": "",
	        "checkIn": "",
	        "size": -1
	      },
	      "price": {
	        "monthly": 1316,
	        "nightly": 47,
	        "maxNight": 60,
	        "weekend": 47,
	        "minNight": 3,
	        "weekly": 318
	      },
	      "photos": [
	        {
	          "large": "https://a1.muscache.com/pictures/8630147/large.jpg",
	          "caption": "Bojurland complex",
	          "small": "https://a1.muscache.com/pictures/8630147/small.jpg",
	          "medium": "https://a1.muscache.com/pictures/8630147/medium.jpg",
	          "xlarge": "https://a1.muscache.com/pictures/8630147/x_large.jpg"
	        },
	        {
	          "large": "https://a1.muscache.com/pictures/8630315/large.jpg",
	          "caption": "Kitchen  / dining area",
	          "small": "https://a1.muscache.com/pictures/8630315/small.jpg",
	          "medium": "https://a1.muscache.com/pictures/8630315/medium.jpg",
	          "xlarge": "https://a1.muscache.com/pictures/8630315/x_large.jpg"
	        },
	        {
	          "large": "https://a2.muscache.com/pictures/8628285/large.jpg",
	          "caption": "Living area - corner sofa converts into a large double rofa bed",
	          "small": "https://a2.muscache.com/pictures/8628285/small.jpg",
	          "medium": "https://a2.muscache.com/pictures/8628285/medium.jpg",
	          "xlarge": "https://a2.muscache.com/pictures/8628285/x_large.jpg"
	        },
	        {
	          "large": "https://a1.muscache.com/pictures/17783556/large.jpg",
	          "caption": "Double bedroom with wardrobe, dresser, bedside cabinets and heater.",
	          "small": "https://a1.muscache.com/pictures/17783556/small.jpg",
	          "medium": "https://a1.muscache.com/pictures/17783556/medium.jpg",
	          "xlarge": "https://a1.muscache.com/pictures/17783556/x_large.jpg"
	        },
	        {
	          "large": "https://a0.muscache.com/pictures/17783800/large.jpg",
	          "caption": "Bathroom with fitted shower cubicle (no wetroom)",
	          "small": "https://a0.muscache.com/pictures/17783800/small.jpg",
	          "medium": "https://a0.muscache.com/pictures/17783800/medium.jpg",
	          "xlarge": "https://a0.muscache.com/pictures/17783800/x_large.jpg"
	        },
	        {
	          "large": "https://a2.muscache.com/pictures/8631877/large.jpg",
	          "caption": "Swimming pool area from the outside",
	          "small": "https://a2.muscache.com/pictures/8631877/small.jpg",
	          "medium": "https://a2.muscache.com/pictures/8631877/medium.jpg",
	          "xlarge": "https://a2.muscache.com/pictures/8631877/x_large.jpg"
	        },
	        {
	          "large": "https://a1.muscache.com/pictures/8631254/large.jpg",
	          "caption": "Gymnasium available to use free of charge",
	          "small": "https://a1.muscache.com/pictures/8631254/small.jpg",
	          "medium": "https://a1.muscache.com/pictures/8631254/medium.jpg",
	          "xlarge": "https://a1.muscache.com/pictures/8631254/x_large.jpg"
	        },
	        {
	          "large": "https://a2.muscache.com/pictures/8631234/large.jpg",
	          "caption": "Hot bed room available to use free of charge",
	          "small": "https://a2.muscache.com/pictures/8631234/small.jpg",
	          "medium": "https://a2.muscache.com/pictures/8631234/medium.jpg",
	          "xlarge": "https://a2.muscache.com/pictures/8631234/x_large.jpg"
	        },
	        {
	          "large": "https://a1.muscache.com/pictures/8631828/large.jpg",
	          "caption": "Childrens outdoor play area on the complex",
	          "small": "https://a1.muscache.com/pictures/8631828/small.jpg",
	          "medium": "https://a1.muscache.com/pictures/8631828/medium.jpg",
	          "xlarge": "https://a1.muscache.com/pictures/8631828/x_large.jpg"
	        },
	        {
	          "large": "https://a0.muscache.com/pictures/8630424/large.jpg",
	          "caption": "Games room available to use free of charge",
	          "small": "https://a0.muscache.com/pictures/8630424/small.jpg",
	          "medium": "https://a0.muscache.com/pictures/8630424/medium.jpg",
	          "xlarge": "https://a0.muscache.com/pictures/8630424/x_large.jpg"
	        },
	        {
	          "large": "https://a1.muscache.com/pictures/8630194/large.jpg",
	          "caption": "Swimming pool with built in jacuzzi (not shown in photo) available to use free of charge.  Doors on the right open out to garden areas, ideal in summer months.",
	          "small": "https://a1.muscache.com/pictures/8630194/small.jpg",
	          "medium": "https://a1.muscache.com/pictures/8630194/medium.jpg",
	          "xlarge": "https://a1.muscache.com/pictures/8630194/x_large.jpg"
	        },
	        {
	          "large": "https://a2.muscache.com/pictures/8630209/large.jpg",
	          "caption": "Sauna available free of charge ",
	          "small": "https://a2.muscache.com/pictures/8630209/small.jpg",
	          "medium": "https://a2.muscache.com/pictures/8630209/medium.jpg",
	          "xlarge": "https://a2.muscache.com/pictures/8630209/x_large.jpg"
	        },
	        {
	          "large": "https://a2.muscache.com/pictures/8630239/large.jpg",
	          "caption": "Bojur Hotel reception / lobby bar area with open fires",
	          "small": "https://a2.muscache.com/pictures/8630239/small.jpg",
	          "medium": "https://a2.muscache.com/pictures/8630239/medium.jpg",
	          "xlarge": "https://a2.muscache.com/pictures/8630239/x_large.jpg"
	        },
	        {
	          "large": "https://a2.muscache.com/pictures/8630444/large.jpg",
	          "caption": "Bojur Hotel restaurant for apartment guests to use",
	          "small": "https://a2.muscache.com/pictures/8630444/small.jpg",
	          "medium": "https://a2.muscache.com/pictures/8630444/medium.jpg",
	          "xlarge": "https://a2.muscache.com/pictures/8630444/x_large.jpg"
	        },
	        {
	          "large": "https://a0.muscache.com/pictures/8631796/large.jpg",
	          "caption": "BBQ area for guests to use free of charge",
	          "small": "https://a0.muscache.com/pictures/8631796/small.jpg",
	          "medium": "https://a0.muscache.com/pictures/8631796/medium.jpg",
	          "xlarge": "https://a0.muscache.com/pictures/8631796/x_large.jpg"
	        },
	        {
	          "large": "https://a0.muscache.com/pictures/8631355/large.jpg",
	          "caption": "One of the slopes",
	          "small": "https://a0.muscache.com/pictures/8631355/small.jpg",
	          "medium": "https://a0.muscache.com/pictures/8631355/medium.jpg",
	          "xlarge": "https://a0.muscache.com/pictures/8631355/x_large.jpg"
	        },
	        {
	          "large": "https://a1.muscache.com/pictures/8631396/large.jpg",
	          "caption": "Gondola from Bankso",
	          "small": "https://a1.muscache.com/pictures/8631396/small.jpg",
	          "medium": "https://a1.muscache.com/pictures/8631396/medium.jpg",
	          "xlarge": "https://a1.muscache.com/pictures/8631396/x_large.jpg"
	        },
	        {
	          "large": "https://a2.muscache.com/pictures/8631432/large.jpg",
	          "caption": "One of the many bars on the slopes",
	          "small": "https://a2.muscache.com/pictures/8631432/small.jpg",
	          "medium": "https://a2.muscache.com/pictures/8631432/medium.jpg",
	          "xlarge": "https://a2.muscache.com/pictures/8631432/x_large.jpg"
	        },
	        {
	          "large": "https://a1.muscache.com/pictures/8631450/large.jpg",
	          "caption": "",
	          "small": "https://a1.muscache.com/pictures/8631450/small.jpg",
	          "medium": "https://a1.muscache.com/pictures/8631450/medium.jpg",
	          "xlarge": "https://a1.muscache.com/pictures/8631450/x_large.jpg"
	        },
	        {
	          "large": "https://a1.muscache.com/pictures/8631502/large.jpg",
	          "caption": "The old town",
	          "small": "https://a1.muscache.com/pictures/8631502/small.jpg",
	          "medium": "https://a1.muscache.com/pictures/8631502/medium.jpg",
	          "xlarge": "https://a1.muscache.com/pictures/8631502/x_large.jpg"
	        },
	        {
	          "large": "https://a0.muscache.com/pictures/8631559/large.jpg",
	          "caption": "Main road up to the Gondola station",
	          "small": "https://a0.muscache.com/pictures/8631559/small.jpg",
	          "medium": "https://a0.muscache.com/pictures/8631559/medium.jpg",
	          "xlarge": "https://a0.muscache.com/pictures/8631559/x_large.jpg"
	        },
	        {
	          "large": "https://a0.muscache.com/pictures/8631681/large.jpg",
	          "caption": "Bansko park in summer time with outdoor cafe",
	          "small": "https://a0.muscache.com/pictures/8631681/small.jpg",
	          "medium": "https://a0.muscache.com/pictures/8631681/medium.jpg",
	          "xlarge": "https://a0.muscache.com/pictures/8631681/x_large.jpg"
	        },
	        {
	          "large": "https://a1.muscache.com/pictures/8631739/large.jpg",
	          "caption": "The old clock tower",
	          "small": "https://a1.muscache.com/pictures/8631739/small.jpg",
	          "medium": "https://a1.muscache.com/pictures/8631739/medium.jpg",
	          "xlarge": "https://a1.muscache.com/pictures/8631739/x_large.jpg"
	        },
	        {
	          "large": "https://a2.muscache.com/pictures/8631776/large.jpg",
	          "caption": "Bansko old town",
	          "small": "https://a2.muscache.com/pictures/8631776/small.jpg",
	          "medium": "https://a2.muscache.com/pictures/8631776/medium.jpg",
	          "xlarge": "https://a2.muscache.com/pictures/8631776/x_large.jpg"
	        },
	        {
	          "large": "https://a2.muscache.com/pictures/8631912/large.jpg",
	          "caption": "",
	          "small": "https://a2.muscache.com/pictures/8631912/small.jpg",
	          "medium": "https://a2.muscache.com/pictures/8631912/medium.jpg",
	          "xlarge": "https://a2.muscache.com/pictures/8631912/x_large.jpg"
	        },
	        {
	          "large": "https://a2.muscache.com/pictures/8631946/large.jpg",
	          "caption": "Trout fishing in the mountains",
	          "small": "https://a2.muscache.com/pictures/8631946/small.jpg",
	          "medium": "https://a2.muscache.com/pictures/8631946/medium.jpg",
	          "xlarge": "https://a2.muscache.com/pictures/8631946/x_large.jpg"
	        },
	        {
	          "large": "https://a2.muscache.com/pictures/8632027/large.jpg",
	          "caption": "Alpha spa & pool in the neighbouring village of Dobrinishte - thermal heated pool with childrens pool",
	          "small": "https://a2.muscache.com/pictures/8632027/small.jpg",
	          "medium": "https://a2.muscache.com/pictures/8632027/medium.jpg",
	          "xlarge": "https://a2.muscache.com/pictures/8632027/x_large.jpg"
	        }
	      ],
	      "location": {
	        "city": "Blagoevgrad",
	        "all": "Неофит Рилски, Blagoevgrad, Blagoevgrad Province, Bulgaria",
	        "country": "Bulgaria",
	        "state": "Blagoevgrad Province",
	        "streetName": "Неофит Рилски",
	        "postalCode": "",
	        "neighbourhood": ""
	      },
	      "provider": {
	        "domain": "airbnb.com",
	        "full": "Airbnb",
	        "cid": "airbnb",
	        "url": "http://airbnb.com/rooms/660078",
	        "nid": "660078",
	        "micro": "air"
	      },
	      "amenities": [
	        {
	          "text": "Cable Tv, TV",
	          "id": 21
	        },
	        {
	          "text": "Elevator In Building",
	          "id": 11
	        },
	        {
	          "text": "Family/Kid Friendly",
	          "id": 8
	        },
	        {
	          "text": "Free Parking On Premises",
	          "id": 16
	        },
	        {
	          "text": "GYM",
	          "id": 10
	        },
	        {
	          "text": "Heating",
	          "id": 0
	        },
	        {
	          "text": "Internet, Wireless Internet",
	          "id": 22
	        },
	        {
	          "text": "Kitchen",
	          "id": 15
	        },
	        {
	          "text": "Pool",
	          "id": 18
	        },
	        {
	          "text": "Suitable For Events",
	          "id": 20
	        }
	      ],
	      "reviews": {
	        "count": 2,
	        "rating": 5,
	        "entries": [
	          {
	            "date": 1420675200,
	            "text": "Хотим выразить огромную благодарность за предоставленные апартаменты. Все очень чисто, хорошая бытовая техника, много разной посуды, обстановка уютная и все сделано со вкусом. Комнаты теплые, хорошая  кровать.  В комплексе есть бассейн,финская сауна и турецкая парная,тренажерный зал (предоставляется бесплатно). Приветливый персонал.Рядом магазины, близко центр. И трансфер до подъемника. С удовольствием отдохнули.",
	            "picture": "https://a2.muscache.com/defaults/user_pic-225x225.png?v=2",
	            "name": "Янко",
	            "rating": -1
	          },
	          {
	            "date": 1357689600,
	            "text": "Nice apartment. The room has everything, except the washing machine. Cozy and clean. Парковка.Ресторан.Бассейн.Сауна.Тренажерный hall. Outdoor playground for children in the swings and roundabouts.\r\nAll as stated in the ad.\r\nwe liked.\r\nRecommended.\r\nRachel, thank you very much!",
	            "picture": "https://a0.muscache.com/ic/users/2846833/profile_pic/1342610852/original.jpg?interpolation=lanczos-none&crop=w:w;*,*&crop=h:h;*,*&resize=225:*&output-format=jpg&output-quality=70",
	            "name": "Наталья",
	            "rating": -1
	          }
	        ]
	      },
	      "priceRange": [
	        {
	          "nightly": 47,
	          "start": 1426723200,
	          "end": 1489795200,
	          "maxNight": 60,
	          "weekend": 47,
	          "monthly": 1316,
	          "minNight": 3,
	          "weekly": 318
	        }
	      ],
	      "availability": [
	        {
	          "start": 1426723200,
	          "end": 1439510400
	        },
	        {
	          "start": 1440201600,
	          "end": 1489795200
	        }
	      ]
	    };
    }

    Object.defineProperty(DetailsViewModel.prototype, "hotel", {
        get: function () {
            return this._hotel;
        },
        set: function (value) {
            if (this._hotel !== value) {
                this._hotel = value;
                this.notifyPropertyChange("hotel", value);
            }
        },
        enumerable: true,
        configurable: true
    });

    DetailsViewModel.prototype.goToReviews = function() {
    	
	navigationModule.navigateTo({
		moduleName: viewsModule.views.reviews,
		backstackVisible: true,
		context: this.hotel.reviews.entries
	});
   };

   DetailsViewModel.prototype.goToAmenities = function() {
    	
	navigationModule.navigateTo({
		moduleName: viewsModule.views.amenities,
		backstackVisible: true,
		context: this.hotel.amenities
	});
   };

return DetailsViewModel;

})(viewModelBaseModule.ViewModelBase);

exports.DetailsViewModel = DetailsViewModel;
