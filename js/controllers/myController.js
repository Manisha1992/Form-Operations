myapp.controller("myController", function ($scope,$state,$http,customService) {
	$scope.history=[];
	/*Access data from data.json*/
	$http.get('data.json').success(function (response) {
                $scope.categories = response;
                console.log('data',$scope.categories);
            });
	/*Define jsona data*/
	$scope.companies = [
	                {   
	                	'name':'Infosys Technologies',
	                    'employees': 125000,
	                    'headoffice': 'Bangalore'
	              	},
	                { 
	                	'name':'Cognizant Technologies',
	                    'employees': 100000,
	                    'headoffice': 'Bangalore'},
	                { 
	                	'name':'Wipro',
		                'employees': 115000,
		                'headoffice': 'Bangalore'
		            },
		            { 
		            	'name':'Tata Consultancy Services (TCS)',
	                    'employees': 150000,
	                	'headoffice': 'Bangalore'},
			        { 
			        	'name':'HCL Technologies',
	                	'employees': 90000,
	                	'headoffice': 'Noida'
	                },
	];

	/*Push data into table*/
	$scope.addRow = function(){		
		$scope.companies.push({ 'name':$scope.name, 'employees': $scope.employees, 'headoffice':$scope.headoffice });
		$scope.name='';
		$scope.employees='';
		$scope.headoffice='';
	};

	/*Remove data from table*/
    $scope.remove = function(){
            var newDataList=[];
            $scope.selectedAll = false;
            angular.forEach($scope.companies, function(selected){
                if(!selected.selected){
                    newDataList.push(selected);
                }
            }); 
            $scope.companies = newDataList;
            console.log('remove function');
        };
    
    $scope.checkAll = function () {
    	console.log('check function');
    	console.log('value',$scope.selectedAll);
            if (!$scope.selectedAll) {
                $scope.selectedAll = true;
                consloe.log('true');
            } else {
                $scope.selectedAll = false;
                console.log('false');
            }
            angular.forEach($scope.companies, function (companies) {
                companies.selected = $scope.selectedAll;
            });
    }; 

    /*Delete record from table when click on delete button*/
    $scope.Delete = function (index) {
        // Remove first / oldest element from history if it reaches maximum capacity of 10 records
        if ($scope.history.length === 10)
            $scope.history.shift();
        // Add deleted record to historical records
        $scope.history.push($scope.companies[index]);
        // Remove from main records (using index)
        $scope.companies.splice(index, 1);
    };  

  // Undo action (delete)
    $scope.Undo = function () {
    	console.log('undo delete');
        // Add last / most recent historical record to the main records
        $scope.companies.push($scope.history[ $scope.history.length - 1 ]);
        // Remove last / most recent historical record
        $scope.companies.pop();
    };

/*Logic for country popup page*/
$scope.customer ={
    Name:'', 
    Country:'', 
    State: '', 
    City: ''
  };
  
  $scope.countries = customService.getCountry();
    
  $scope.getCountryStates = function(){
    $scope.sates = customService.getCountryState($scope.customer.Country);
    //$scope.cities =[];
  }
  
  $scope.getStateCities = function(){
     $scope.cities = customService.getStateCity($scope.customer.State);
  }


/*Search*/
   $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchFish   = '';     // set the default search/filter term
  
  // create the list of sushi rolls 
  $scope.sushi = [
    { name: 'Cali Roll', fish: 'Crab', tastiness: 2 },
    { name: 'Philly', fish: 'Tuna', tastiness: 4 },
    { name: 'Tiger', fish: 'Eel', tastiness: 7 },
    { name: 'Rainbow', fish: 'Variety', tastiness: 6 }
  ];
  


  /*edit*/

  $scope.model = {
        contacts: [{
            id: 1,
            name: "Ben",
            age: 28
        }, {
            id: 2,
            name: "Sally",
            age: 24
        }, {
            id: 3,
            name: "John",
            age: 32
        }, {
            id: 4,
            name: "Jane",
            age: 40
        }],
        selected: {}
    };

    // gets the template to ng-include for a table row / item
    $scope.getTemplate = function (contact) {
        if (contact.id === $scope.model.selected.id) return 'edit';
        else return 'display';
    };

    $scope.editContact = function (contact) {
        $scope.model.selected = angular.copy(contact);
    };

    $scope.saveContact = function (idx) {
        console.log("Saving contact");
        $scope.model.contacts[idx] = angular.copy($scope.model.selected);
        $scope.reset();
    };

    $scope.reset = function () {
        $scope.model.selected = {};
    };
});
