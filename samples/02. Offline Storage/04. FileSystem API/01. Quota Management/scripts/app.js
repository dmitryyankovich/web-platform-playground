(function (window) {
    'use strict';

    var storagesInfo = [{
        storage: navigator.webkitTemporaryStorage,
        quotaCell: document.querySelector('.quota-column[data-filesystem-type="0"]'),
        usedCell: document.querySelector('.used-column[data-filesystem-type="0"]'),
        space: {
            quota: 0,
            used: 0
        }
    }, {
        storage: navigator.webkitPersistentStorage,
        quotaCell: document.querySelector('.quota-column[data-filesystem-type="1"]'),
        usedCell: document.querySelector('.used-column[data-filesystem-type="1"]'),
        space: {
            quota: 0,
            used: 0
        },
        requestQuotaButton: document.querySelector('.request-quota-column[data-filesystem-type="1"] button')
    }];


    function fillUsageAndQuota() {
        storagesInfo.forEach(function (storageInfo) {
            storageInfo.storage.queryUsageAndQuota(
                function (used, quota) {
                    storageInfo.space.quota = quota;
                    storageInfo.space.used = used;

                    storageInfo.quotaCell.textContent = storageInfo.space.quota / (1024 * 1024);
                    storageInfo.usedCell.textContent = storageInfo.space.used / (1024 * 1024);
                }, 
                function (e) {
                  console.error(e); 
                }
            );
        });
    }

    function requestMoreSpace() {
        var quota = storagesInfo[PERSISTENT].space.quota;
        var desiredQuota = quota + (1024 * 1024);

        storagesInfo[PERSISTENT].storage.requestQuota(desiredQuota, 
            function () {
                fillUsageAndQuota();
            },
            function (e) {
                console.error(e); 
            }
        );
    }


    window.addEventListener('load', function () {
        storagesInfo[PERSISTENT].requestQuotaButton.addEventListener('click', requestMoreSpace);

        fillUsageAndQuota();
    });

})(window);