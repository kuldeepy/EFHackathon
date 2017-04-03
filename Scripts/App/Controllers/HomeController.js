'use strict';
angular.module('hackDayApp')
    .controller('HomeController', ['$scope', '$uibModal', '$document', '$log', function ($scope, $uibModal, $document, $log) {
        var $ctrl = this;
        $ctrl.ages = ['13-18 years', '18-25 years', '+25 years'];
        $ctrl.courses = ['Language Courses Abroad', 'Academic Year Abroad'];
        $ctrl.programs = ['International Language Centers', 'Language Travel', 'Academic Year Abroad', 'High School Exchange Year', 'Discovery Tours', 'EF Academy'];
        $ctrl.animationsEnabled = true;
        $ctrl.booking = { age: "", course: "", program: "", school: "" };

        $ctrl.booked = function () {
            alert(
                "Selected age : " + $ctrl.booking.age +
                "\n Selected course : " + $ctrl.booking.course +
                "\n Selected program : " + $ctrl.booking.program
                );
        };

        $ctrl.verify = function () {
            var modalInstance = $uibModal.open({
                animation: $ctrl.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'myModalVerify.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: '$ctrl',
                size: 'sm',
                //appendTo: parentElem,
                resolve: {
                    items: function () {
                        return {booking :$ctrl.booking};
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $ctrl.booked();
            }, function () {
                $ctrl.programOpen();
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        $ctrl.programOpen = function () {
            var modalInstance = $uibModal.open({
                animation: $ctrl.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'myModalProgram.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: '$ctrl',
                size: 'sm',
                //appendTo: parentElem,
                resolve: {
                    items: function () {
                        return $ctrl.programs;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $ctrl.selected = selectedItem;
                $ctrl.booking.program = selectedItem;
                $ctrl.verify();
            }, function () {
                $ctrl.courseOpen();
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        $ctrl.courseOpen = function () {
            var modalInstance = $uibModal.open({
                animation: $ctrl.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'myModalCourse.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: '$ctrl',
                size: 'sm',
                //appendTo: parentElem,
                resolve: {
                    items: function () {
                        return $ctrl.courses;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $ctrl.selected = selectedItem;
                $ctrl.booking.course = selectedItem;
                $ctrl.programOpen();
            }, function () {
                $ctrl.ageOpen();
                //$log.info('Modal dismissed at: ' + new Date());
            });
        };
       
        $ctrl.ageOpen = function () {
            var modalInstance = $uibModal.open({
                animation: $ctrl.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'myModalAge.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: '$ctrl',
                size: 'sm',
                //appendTo: parentElem,
                resolve: {
                    items: function () {
                        return $ctrl.ages;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $ctrl.selected = selectedItem;
                $ctrl.booking.age = selectedItem;
                $ctrl.courseOpen();
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

       
    }]);

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('hackDayApp').controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
    var $ctrl = this;
    $ctrl.items = items;
    $ctrl.selected = {
        item: ""
    };

    $ctrl.ok = function () {
        $uibModalInstance.close($ctrl.selected.item);
    };

    $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});

// Please note that the close and dismiss bindings are from $uibModalInstance.

//angular.module('hackDayApp').component('modalAgeComponent', {
//    templateUrl: 'myModalContent.html',
//    bindings: {
//        resolve: '<',
//        close: '&',
//        dismiss: '&'
//    },
//    controller: function () {
//        var $ctrl = this;

//        $ctrl.$onInit = function () {
//            $ctrl.items = $ctrl.resolve.items;
//            $ctrl.selected = {
//                item: $ctrl.items[0]
//            };
//        };

//        $ctrl.ok = function () {
//            $ctrl.close({ $value: $ctrl.selected.item });
//        };

//        $ctrl.cancel = function () {
//            $ctrl.dismiss({ $value: 'cancel' });
//        };
//    }
//});