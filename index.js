new Vue({
    el: '.container',
    data: {
        Mayors: [{
                name: 'MR Pink',
                vote: 0
            },
            {
                name: 'MR Whit',
                vote: 0
            },
            {
                name: 'Tuhin',
                vote: 0
            },
            {
                name: 'Manik',
                vote: 0
            },
            {
                name: 'Rehan',
                vote: 0
            }
        ],
        selectedmayor: ""
    },
    watch: {
        getSelectedMayor: function () {
            var a = this.Mayors.slice().sort(function (a, b) {
                return b.vote - a.vote;
            });
            this.selectedmayor = a[0]
        }
    },
    computed: {
        sorTedmayor: function () {
            return this.Mayors.sort(function (a, b) {
                return b.vote - a.vote;
            })
        },
        getSelectedMayor: function () {
            var a = this.Mayors.slice().sort(function (a, b) {
                return b.vote - a.vote;
            });
            this.selectedmayor = a[0]
        }
    }
});