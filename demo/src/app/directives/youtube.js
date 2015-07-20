class YouTube{
    constructor ($sce){
        return {
            restrict: 'EA',
            scope: { code: '=' },
            replace: true,
            template: '<iframe src="{{url}}" frameborder="0" allowfullscreen></iframe>',
            link: function (scope) {
                scope.$watch('code', function (n) {
                   if (n) {
                       scope.url = $sce.trustAsResourceUrl('http://www.youtube.com/embed/' + n);
                   }
                });
            }
          };
    }
}
export default YouTube;
