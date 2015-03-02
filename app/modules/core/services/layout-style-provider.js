'use strict';

/**
 * @ngdoc service
 * @name core.Providers.LayoutStyleProvider
 * @description LayoutStyleProvider Provider
 */
console.log('Layout Provider loaded');
angular
    .module('core')
    .provider('$layoutStyle',
        function() {

            console.log('Layout Provider created');

            /**
             * @ngdoc property
             * @name core.Providers.LayoutStyleProvider#name
             * @propertyOf core.Providers.LayoutStyleProvider
             * @type {String}
             */
            this.name = 'Default';

            /**
             * @ngdoc function
             * @name core.Providers.LayoutStyleProvider#$get
             * @methodOf core.Providers.LayoutStyleProvider
             * @return {boolean} Returns an intialized string
             */
            this.$get = function() {
                console.log('Layout Provider get()');
                var self = this;
                return {
                    isBrowserLayout: function() {
                        return true;
                    },
                    isTabletLayout: function() {
                        return false;
                    },
                    isMobileLayout: function() {
                        return false;
                    }
                }
            };

            /**
             * @ngdoc function
             * @name core.Providers.LayoutStyleProvider#setName
             * @methodOf core.Providers.LayoutStyleProvider
             * @return {string} Returns the name property
             */
            this.setName = function(name) {
                console.log('Layout Provider name: ' + name);
                this.name = name;
            };

            this.isBrowserLayout = function() {
                return true;
            };

            this.isTabletLayout = function() {
                return false;
            };

            this.isMobileLayout = function() {
                return false;
            };
        }
    );
