myapp.service("customService",['$filter', function($filter){
	/*create empty object*/
  var service = {};
  /*Define json object for country*/
  var countrylist = [
            { "id": 1, "country": "USA" },
            { "id": 2, "country": "Canada" },
            { "id": 3, "country": "India" },
    ];
  
  /*Define json object for state*/
  var statelist = [
    {"Id":1, "state":"Alaska", "countryId": 1},
    {"Id":2, "state":"California", "countryId": 1},
    {"Id":3, "state":"New York", "countryId": 1},
    {"Id":4, "state":"New Brunswick", "countryId": 2},
    {"Id":5, "state":"Manitoba", "countryId": 2},
    {"Id":6, "state":"Delhi", "countryId": 3},
    {"Id":7, "state":"Bombay", "countryId": 3},
    {"Id":8, "state":"Calcutta", "countryId": 3}
  ];

  /*Define json object for city*/

  var citylist = [
    {"Id":1, "city":"Anchorage", "stateId": 1},
    {"Id":2, "city":"Fairbanks", "stateId": 1},
    {"Id":3, "city":"Lakes", "stateId": 1},
    {"Id":4, "city":"Palmer", "stateId": 1},
    {"Id":5, "city":"Adelanto", "stateId": 2},
    {"Id":6, "city":"Artesia", "stateId": 2},
    {"Id":7, "city":"Benicia", "stateId": 2},
    {"Id":8, "city":"Clovis", "stateId": 2},
    {"Id":9, "city":"Dublin", "stateId": 2},
    {"Id":10, "city":"Manhattan", "stateId": 3},
    {"Id":11, "city":"Bronx", "stateId": 3},
    {"Id":12, "city":"Brooklyn", "stateId": 3},
    {"Id":13, "city":"Queens", "stateId": 3},
    {"Id":14, "city":"Staten Island", "stateId": 3},
    {"Id":15, "city":"Bathurst", "stateId": 4},
    {"Id":16, "city":"Campbellton", "stateId": 4},
    {"Id":17, "city":"Dieppe", "stateId": 4},
    {"Id":18, "city":"Edmundston", "stateId": 4},
    {"Id":19, "city":"Fredericton", "stateId": 4},
    {"Id":20, "city":"Miramichi", "stateId": 4},
    {"Id":21, "city":"Moncton", "stateId": 4},
    {"Id":22, "city":"Brandon", "stateId": 5},
    {"Id":23, "city":"Dauphin", "stateId": 5},
    {"Id":24, "city":"Flin Flon", "stateId": 5},
    {"Id":25, "city":"Morden", "stateId": 5},
    {"Id":26, "city":"Portage la Prairie", "stateId": 5},
    {"Id":27, "city":"Selkirk", "stateId": 5},
    {"Id":28, "city":"Steinbach", "stateId": 5},
    {"Id":29, "city":"Thompson", "stateId": 5},
    {"Id":30, "city":"Winkler", "stateId": 5},
    {"Id":31, "city":"South Delhi", "stateId": 6},
    {"Id":32, "city":"North Delhi", "stateId": 6},
    {"Id":33, "city":"East Delhi", "stateId": 6},
    {"Id":34, "city":"West Delhi", "stateId": 6},
    {"Id":35, "city":"Old Delhi", "stateId": 6},
    {"Id":36, "city":"New Delhi", "stateId": 6},
    {"Id":37, "city":"Yamuna Paar", "stateId": 6},
    {"Id":38, "city":"Chembur", "stateId": 7},
    {"Id":39, "city":"Borivali West", "stateId": 7},
    {"Id":40, "city":"Ghatkopar West", "stateId": 7},
    {"Id":41, "city":"Juhu", "stateId": 7},
    {"Id":42, "city":"Mira Road", "stateId": 7},
    {"Id":43, "city":"Powai", "stateId": 7},
    {"Id":44, "city":"Virar West", "stateId": 7},
    {"Id":45, "city":"Rajarhat", "stateId": 8},
    {"Id":46, "city":"Park Street", "stateId": 8},
    {"Id":47, "city":"Golpark", "stateId": 8},
    {"Id":48, "city":"Chandan Nagar", "stateId": 8}
];
  
  service.getCountry = function(){    
    return countrylist;
  };
  
  service.getCountryState = function(countryId){
    var states = ($filter('filter')(statelist, {countryId: countryId}));
    return states;
  };
  
  
  service.getStateCity = function(stateId){    
   
    var items = ($filter('filter')(citylist, {stateId: stateId}));      
    return items;
  };
  
  return service;
}]);