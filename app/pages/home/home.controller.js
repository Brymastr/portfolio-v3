/**
 * Created by Brycen on 2015-02-19.
 */

app.controller('HomeController', function($scope, $location) {
    $scope.items = homeItems;
    $scope.pageClass = 'page-home';
    $scope.goTo = function(path) {
        $location.path(path);
    }
});

var homeItems = [
    {
        title: 'About',
        description: 'All about me',
        url: 'about',
        color: materialColors[5]
    }, {
        title: 'Experience',
        description: 'Jobs and technologies',
        url: 'exp',
        color: materialColors[6]
    }, {
        title: 'Web Projects',
        description: 'Sites and apps built for the web',
        url: 'projects/web',
        color: materialColors[7]
    }, {
        title: 'Mobile Projects',
        description: 'Android and iOS application projects',
        url: 'projects/mobile',
        color: materialColors[8]
    }, {
        title: 'Other Projects',
        description: 'Because trying new things is fun',
        url: 'projects/other',
        color: materialColors[9]
    }
];