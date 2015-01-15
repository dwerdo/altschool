angular.module('myApp', [])
    .controller('TilesCtrl', function($scope, $attrs) {
        $scope.nArray = new Array($scope.nTiles);
        $scope.nTiles = $attrs.nTiles || 3;
        $scope.mTiles = $attrs.mTiles || 3;

        $scope.nList = populateNumbers($scope.nTiles);
        $scope.mList = populateNumbers($scope.mTiles);

        for (var i = 0; i < $scope.nTiles; i++) {
            $scope.nArray[i] = new Array($scope.mTiles);
        }
   
        for (var i = 0; i < $scope.nTiles; i++) {
            for (var j = 0; j < $scope.mTiles; j++) {
                $scope.nArray[i, j] = '#ffffff';
                console.log('i: ', i, $scope.nArray[i, j]);
            }
        }

        $scope.setBgColor = function(nRows, mColomns) {
            var row = nRows - 1;
            var col = mColomns - 1;
            console.log('colomns: ', row, col, $scope.nArray[row, col]);
            $scope.nArray[row, col] = $scope.nArray[row, col] !== '#ffffff' ? '#ffffff' : getRandomColor();
            return { background: $scope.nArray[row, col] };
        }

        $scope.$watch('nTiles', function(tiles) {
        	$scope.nList = populateNumbers(tiles);
        });

        $scope.$watch('mTiles', function(tiles) {
            $scope.mList = populateNumbers(tiles);
        });

        function populateNumbers(x) {
            var numbers = [];
            for(i=0; i < x; i++) {
                numbers[i] = i + 1;
            }
            return numbers;
        }

        function getRandomColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color = color === '#ffffff' ? '#000000' : color;
        }
});