// Schema for per day itinerary info
const Day_itinerary = {
  /*
  Desc: Day of itinerary (Incremented when adding more fields)
  Data: Number
  Default 
  */
  day: 1,
  /*
  Desc: tilte for this day of itinerary
  Data: String
  Required: true
  */
  title: "",
  /*
  Desc:Little introduction for that day
  Data: String
  Required: true
  */
  description: "",

  /*
  Desc: Images captured that day
  Data: Array of images | null
  Required: false
  */
  images: [],

  /*
  Desc:How much money you spent that day of itinerary
  Data:  Number | null
  Required: false
  */
  expenses: "eg. Php 3,000.00",

  /*
  Desc: Transportation to be use
  Data: String
  Required: false
  */
  transportation: "",

  /*
  Desc: Location of the activties
  Data: String
  Required: false
  */
  place_destination: "",

  /*
  Desc: Things we can do this day of itinerary
  Data: Array String
  Required: false
  */
  activities: [
    {
      icon: "",
      content: ""
    }
  ]
};

const ImageFormat = {
  img_orig: "",
  img_w1280: "",
  img_w720: "",
  img_w320: "",
  //Image optimization to pre see this https://manu.ninja/dominant-colors-for-lazy-loading-images
  color_dominant: "",
  gif_blur: ""
};

const Review = {
  user: {},

  /*
  Desc: Rating for the post
  Data: Number 
  Default: 5 
  */
  rate: 5,

  /*
  Desc: Date posted this itinerary
  Data: Date 
  Default: true
  */
  date: Date.now(),

  /*
  Desc: Content of the review
  Data: String 
  Default: true
  */
  content: "",

  /*
  Desc: Title of the review
  Data: String 
  Required: false
  */
  title: ""
};

const ItineraryPost = {
  /*
  Desc: Title of the post
  Data: String
  Required: true
  */
  title: "e.g Winter Holiday Lights in New York City",

  /*
  Desc: Background photo 
  Data: ImageFormat
  Required: true
  */
  backdrop_path: ImageFormat,

  /*
  Desc: Images captured during the itinerary
  Data: Array of ImageFormat
  Required: true
  */
  images: [ImageFormat],

  /*
  Desc: When the itinerary started ?
  Data: Date
  Required: true
  */
  date_itinerary_started: Date,

  /*
  Desc: When the itinerary ended ?
  Data: Date
  Required: true
  */
  date_itinerary_end: Date,

  /*
  Desc: Day by day itinerary information (Timeline of itinerary experience)
  Data: Array of day_itinerary
  Required: true
  */
  days_itinerary: [Day_itinerary],

  /*
  Desc:introduction for the itinerary post let your readers know broadly your post
  Data: String
  Required: true
  */
  introduction: "",

  /*
    Desc: Like count for this post
    Data: Array of User (Who like the post)
    Default: 0
  */
  like_count: [User],

  /*
    Desc: Overall total expenses for this itinerary
    Data: Number
    Required: false
  */
  overall_expenses: 0,

  /*
  Desc: Related tags for this itinerary (See airbnb experiences may mga tags or category )
  Data: Array of strings 
  Required: true
  */
  tags: ["e.g Culture", "Water Activitiy", "Air Activity"],

  /*
  Desc: introduction for the itinerary post let your readers know broadly your post
  Data: User 
  Required: true
  */
  user: {},

  /*
  Desc: Important or things to keep in mind before trying this itinerary
  (see this dun sa may icon na pin https://www.facebook.com/groups/diytravelphilippines/permalink/1354898971376366/ )
  also this 
  (https://www.airbnb.com/experiences/472462?source=p2 yung section ng things to keep in mind)

  Data: Array of object
  Required: false
  */
  important_info: [
    {
      title: "e.g Passport Needed",
      content: "Lorem Ipsum "
    },
    {
      title: "Flight tickets",
      content: "Kailangan etc......"
    }
  ],

  /*
  Desc: Reviews
  Data: Array of review 
  */
  reviews: [Review],

  /*
  Desc: Date posted this itinerary
  Data: Date 
  Default: true
  */
  date_posted: Date.now()
};

const User = {
  /*
  Desc: Last name
  Data: String 
  Required: true
  */
  firtname: "",
  /*
  Desc: First name
  Data: String 
  Required: true
  */
  lastname: "",
  /*
  Desc: User name
  Data: String 
  Required: true
  */
  username: "",
  /*
  Desc: Email Address
  Data: String 
  Required: true
  */
  email_address: "",
  /*
  Desc: Email Address
  Data: Array of Reviews (Id of revies) 
  */
  reviews: [],

  /*
  Desc: List of Posted Itinerary
  Data: Array of it (Id of revies) 
  */
  posted_itinerary: [ItineraryPost],

  /*
  Desc: Introduction of self 
  Data: String
  Required: false 
  */
  introduction: "",

  /*
  Desc: Birthdate
  Data: String
  Required: false 
  */
  date_of_birth: "",

  /*
  Desc: Gender Male/Female/Others
  Data: String
  Required: false 
  */
  gender: "",

  /*
  Desc: Gender Male/Female/Others
  Data: ImageFormat
  Required: false 
  */
  profile_path: ImageFormat,

  /*
  Desc: User Password
  Data: String
  Required: true 
  */
  password: "",

  /*
  Desc: Date joined
  Data: Date
  */
  date_joined: Date.now()
};
