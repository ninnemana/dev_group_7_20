'use strict';

// product-image directive
//
// This directive will take a product from ngModel
// and parse the digitalAssets array looking for
// the first image whose height is less than the
// defined maxHeight.
//
// Output: <img src="${image.path} alt="${ngModel.brand.name} ${ngModel.partId} ${ngModel.shortDesc}">

class ProductImage{

    constructor ($compile){

        return {
            require: 'ngModel',
            replace: true,
            restrict: 'AE',
            scope: {
                ngModel: '='
            },
            link: function (scope, elem, attrs) {
                let compare = (a, b) => {
                    if (a.sort < b.sort){
                        return -1;
                    } else if (a.sort > b.sort){
                        return 1;
                    }
                    return 0;
                };

                scope.$watch(scope.ngModel, function (){
                    let prod = scope.ngModel;
                    if (!angular.isDefined(prod)) {
                        return;
                    }

                    let img;

                    if (prod.digitalAssets === undefined) {
                        return;
                    }

                    prod.digitalAssets = prod.digitalAssets.sort(compare);
                    for (let i = 0; i < prod.digitalAssets.length; i++) {
                        if (attrs.maxHeight === '' || prod.digitalAssets[i].dimensions === undefined) {
                            continue;
                        }
                        for (let j = 0; j < prod.digitalAssets[i].dimensions.length; j++){
                            if (prod.digitalAssets[i].dimensions[j].uom === 'PX' && prod.digitalAssets[i].dimensions[j].height <= attrs.maxHeight){
                                img = prod.digitalAssets[i];
                                break;
                            }
                        }
                        if (angular.isDefined(img) && img.path !== undefined) {
                            break;
                        }
                    }
                    if (angular.isDefined(img) && angular.isDefined(img.path)){
                        elem.html(`<img src= "${img.path}" alt="${prod.brand.name} ${prod.partId} ${prod.shortDesc}">`);
                        $compile(elem)(scope);
                    }
            });
          }
        };
    }
}

ProductImage.$inject = ['$compile'];

export default ProductImage;
